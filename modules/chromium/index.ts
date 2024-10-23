import { OutputType } from '../../types';
import { ConfigModule } from '../../mvdots';

const content = `
--ozone-platform-hint=auto
--enable-features=VaapiVideoDecodeLinuxGL`;

export const config = new ConfigModule().withBasePath("$HOME/.config").withOutputs({
  ['chromium-flags.conf']: { type: OutputType.String, literal: content },
});
