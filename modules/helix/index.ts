import { ConfigModule, OutputType } from '../../mvdots';

export const config = new ConfigModule().withBasePath("$HOME/.config/helix").withSelfPath(import.meta.dir).withOutputs({
  ['config.toml']: { type: OutputType.File, filePath: './config.toml' },
  ['languages.toml']: { type: OutputType.File, filePath: './languages.toml' },
});
