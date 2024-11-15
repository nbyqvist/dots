import { stringOutput } from '../../types.ts';
import { ConfigModule } from '../../mvdots.ts';

const content = `
[Wallet]
Enabled=false`;

export const config = new ConfigModule().withBasePath('$HOME/.config')
  .withOutputs({
    ['kwalletrc']: stringOutput(content),
  });
