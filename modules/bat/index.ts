import { type Context, hasBin, transformOutput } from '../../types.ts';
import { ConfigModule } from '../../mvdots.ts';

const content = (ctx: Context) => `
--theme="${ctx.batColorscheme}"
`;

export const config = new ConfigModule()
  .withBasePath('$HOME/.config/bat')
  .withInstallCondition(hasBin('bat'))
  .withSelfPath(
    import.meta.dirname!,
  ).withOutputs({
    ['config']: transformOutput(content),
  });
