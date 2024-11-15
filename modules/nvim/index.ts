import {
  Context,
  dirOutput,
  transformOutput,
} from '../../types.ts';
import { ConfigModule } from '../../mvdots.ts';

const content = (ctx: Context) => `
local pm = require('pm')
local packages = require('plugins')

pm.bootstrap(packages)

require('plugin_conf').setup()
require('opts').setup()
require('keybinds').setup()

vim.opt.bg = '${ctx.neovimColorscheme.includes('dark') ? 'dark' : 'light'}'
vim.cmd('colorscheme ${ctx.neovimColorscheme}')
`;

export const config = new ConfigModule().withBasePath('$HOME/.config/nvim')
  .withSelfPath(import.meta.dirname!).withOutputs({
    ['init.lua']: transformOutput(content),
    ['lua']: dirOutput('./lua'),
  });
