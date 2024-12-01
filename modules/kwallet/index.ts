import { hasBin, stringOutput } from '../../types.ts';
import { ConfigModule } from '../../mvdots.ts';

const content = `
[Wallet]
Enabled=false`;

export const config = new ConfigModule()
  .withBasePath('$HOME/.config')
  .withInstallCondition(hasBin('kwalletd6'))
  .withOutputs({
    ['kwalletrc']: stringOutput(content),
  });
