import { dirOutput, fileOutput } from '../../types.ts';
import { ConfigModule } from '../../mvdots.ts';

export const config = new ConfigModule().withBasePath('$HOME/.config/nvim')
  .withSelfPath(import.meta.dirname!).withOutputs({
    ['init.lua']: fileOutput('./init.lua'),
    ['lua']: dirOutput('./lua'),
  });
