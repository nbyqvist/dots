import { ConfigModule, OutputType } from '../../mvdots';

export const config = new ConfigModule().withBasePath("$HOME").withSelfPath(import.meta.dir).withOutputs({
    ['.vimrc']: { type: OutputType.String, literal: 'source ~/.config/vim/init.vim' },
    ['.config/vim/init.vim']: { type: OutputType.File, filePath: "./init.vim" },
});
