import { type Context, hasBin, transformOutput } from '../../types.ts';
import { ConfigModule } from '../../mvdots.ts';

const content = (c: Context) => `
color=${c.colors.base.black}
font-size=24
indicator-radius=100
line-color=${c.colors.base.white}
show-failed-attempts
`;

export const config = new ConfigModule()
  .withBasePath('$HOME/.config/swaylock')
  .withInstallCondition(hasBin('swaylock'))
  .withOutputs({
    ['config']: transformOutput(content),
  });
