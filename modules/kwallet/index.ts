import { OutputType } from '../../types';
import { ConfigModule } from '../../mvdots';

const content = `
[Wallet]
Enabled=false`;

export const config = new ConfigModule().withBasePath("$HOME/.config").withOutputs({
  ['kwalletrc']: { type: OutputType.String, literal: content },
});
