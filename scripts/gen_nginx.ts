import { readFile } from 'fs/promises';

const pacmanMirrorlist = (await readFile('/etc/pacman.d/mirrorlist')).toString('utf8');
const servers = pacmanMirrorlist.split('\n').filter(line => line.includes('Server')).map(line => line.replace('Server = ', ''));
if (servers.length <= 1) {
  console.log('Not enough mirrors');
  process.exit(1);
}
const startPort = 8001;
const serversAndPorts = servers.map((url, index) => {
  return {
    port: startPort + index,
    url,
  };
});

const upstream = (upstreamPort: number, url: string) => {
  const u = new URL(url);
  return `
  server {
    listen      127.0.0.1:${upstreamPort};

    location / {
      ${url.includes('https') ? 'proxy_ssl_server_name on;' : ''}
      proxy_set_header Host ${u.hostname};
      proxy_pass       ${url};
    }
  }
`
};

const content = `
user www-data;
worker_processes 1;
pid /run/nginx.pid;
error_log /var/log/nginx/error.log;
include /etc/nginx/modules-enabled/*.conf;

events {
  worker_connections 1024;
}

http {
  sendfile on;
  types_hash_max_size 4096;
  server_names_hash_bucket_size 128;
  include /etc/nginx/mime.types;
  default_type application/octet-stream;
  resolver 8.8.8.8 8.8.4.4 ipv6=off;


  # Pacman Cache
  server {
    listen      80 default_server;
    server_name _;
    root        /srv/http/pacman-cache;
    autoindex   on;

    # Requests for package db, signature files and files db should redirect upstream
    # without caching
    location ~ \.(db|sig|files)$ {
      proxy_pass http://mirrors$request_uri;
    }

    # Requests for actual packages should be served directly from cache if available.
    #   If not available, retrieve and save the package from an upstream mirror.
    location ~ \.tar\.(xz|zst)$ {
      try_files $uri @pkg_mirror;
    }

    # Retrieve package from upstream mirrors and cache for future requests
    location @pkg_mirror {
      proxy_store    on;
      proxy_redirect off;
      proxy_store_access  user:rw group:rw all:r;
      proxy_next_upstream error timeout http_404;
      proxy_pass          http://mirrors$request_uri;
    }
  }

  # Upstream Arch Linux Mirrors
  # - Servers are used in a round-robin fashion by nginx
  # - Add "backup" if you want to only use the mirror upon failure of the other mirrors
  upstream mirrors {
    ${serversAndPorts.map(s => `server 127.0.0.1:${s.port}`).join('\n    ')}
  }

  ${serversAndPorts.map(s => upstream(s.port, s.url)).join('\n')}
}
`;

console.log(content);