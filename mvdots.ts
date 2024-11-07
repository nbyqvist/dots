import { env, Glob } from "bun";
import { join } from 'path';
import * as fs from 'fs/promises';
import { OutputType, type Context, type OutputSpec } from "./types";

export class ConfigModule {
  public basePath: string | null = null;
  public outputs: Record<string, OutputSpec> | null = null;
  public selfPath: string = import.meta.file;

  public withBasePath(p: string): ConfigModule {
    this.basePath = p;
    return this;
  }

  public withOutputs(o: Record<string, OutputSpec>): ConfigModule {
    this.outputs = o;
    return this;
  }

  public withSelfPath(p: string): ConfigModule {
    this.selfPath = p;
    return this;
  }
}

const g = new Glob('modules/*/*.ts');

const modules = [];
for await (const z of g.scan()) {
  const { config } = await import(`./${z.replace(".ts", "")}`);
  if (config instanceof ConfigModule) {
    modules.push(config);
  }
}

modules.sort((a, b) => (a.basePath ?? '').localeCompare(b.basePath ?? ''));

const hostname = await fs.readFile('/etc/hostname').then(r => r.toString("utf-8").trim());
console.log(hostname);
const { ctx } = await import(`./targets/${hostname}`);

const home = env['HOME'];
if (home == null || home == "") {
  throw new Error("ERR: Home not set");
}

const nestedWriteFile = async (path: string, content: string): Promise<void> => {
  if (!await fs.exists(path)) {
    const segments = path.split('/');
    const containingPath = segments.slice(0, segments.length - 1).join('/');
    const parentDirExists = await fs.exists(containingPath);
    if (!parentDirExists) {
      await fs.mkdir(containingPath, { recursive: true });
      console.log(`mkdir ${containingPath}`);
    }
  }
  await fs.writeFile(path, content);
  console.log(`write ${path}`);
};

const outputToString = async (ctx: Context, cm: ConfigModule, o: OutputSpec): Promise<string> => {
  if (o.type === OutputType.File) {
    const c = await fs.readFile(join(cm.selfPath, o.filePath));
    return c.toString('utf8');
  }

  if (o.type === OutputType.String) {
    return o.literal.trim();
  }

  if (o.type === OutputType.Function) {
    return o.transform(ctx).trim();
  }

  throw new Error("Invalid type");
}

for (const m of modules) {
  const b = (m.basePath ?? '')?.replace("$HOME", home);
  Object.keys(m.outputs ?? {}).forEach(async output => {
    const outputs = m.outputs ?? {}
    const selectedOutput = outputs[output];
    const p = join(b, output);
    console.log(`${selectedOutput.type} ${p}`);
    await nestedWriteFile(p, await outputToString(ctx, m, selectedOutput));
  });
}
