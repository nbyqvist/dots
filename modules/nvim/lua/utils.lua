local U = {}

U.default_opts = { noremap = true, silent = true }

U.nmap = function(binding, cmd)
  vim.keymap.set('n', binding, cmd, default_opts)
end

return U

