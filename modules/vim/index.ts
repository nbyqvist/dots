import { OutputType } from '../../types.ts';
import { ConfigModule } from '../../mvdots.ts';

export const config = new ConfigModule().withBasePath("$HOME").withSelfPath(import.meta.dirname).withOutputs({
  ['.vimrc']: { type: OutputType.String, literal: 'source ~/.config/vim/init.vim' },
  ['.config/vim/init.vim']: { type: OutputType.File, filePath: "./init.vim" },
});
