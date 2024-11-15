import { fileOutput, stringOutput } from '../../types.ts';
import { ConfigModule } from '../../mvdots.ts';

export const config = new ConfigModule().withBasePath('$HOME').withSelfPath(
  import.meta.dirname!,
).withOutputs({
  ['.vimrc']: stringOutput('source ~/.config/vim/init.vim'),
  ['.config/vim/init.vim']: fileOutput('./init.vim'),
});
