import { stringOutput } from '../../types.ts';
import { ConfigModule } from '../../mvdots.ts';

const content = `
--ozone-platform-hint=auto
--enable-features=VaapiVideoDecodeLinuxGL`;

export const config = new ConfigModule().withBasePath('$HOME/.config')
  .withOutputs({
    ['chromium-flags.conf']: stringOutput(content),
  });
