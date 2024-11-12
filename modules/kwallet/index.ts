import { OutputType } from '../../types.ts';
import { ConfigModule } from '../../mvdots.ts';

const content = `
[Wallet]
Enabled=false`;

export const config = new ConfigModule().withBasePath("$HOME/.config").withOutputs({
  ['kwalletrc']: { type: OutputType.String, literal: content },
});
