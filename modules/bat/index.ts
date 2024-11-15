import { type Context, transformOutput } from '../../types.ts';
import { ConfigModule } from '../../mvdots.ts';

const content = (ctx: Context) => `
--theme="${ctx.batColorscheme}"
`;

export const config = new ConfigModule().withBasePath('$HOME/.config/bat')
  .withSelfPath(
    import.meta.dirname!,
  ).withOutputs({
    ['config']: transformOutput(content),
  });
