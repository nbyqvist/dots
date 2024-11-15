local O = {}

local opt = vim.opt

O.setup = function()
  opt.softtabstop = 0
  opt.smarttab = true
  opt.expandtab = true
  opt.hidden = true
  opt.ignorecase = true
  opt.number = true
  opt.scrolloff = 10
  opt.shiftwidth = 2
  opt.smartcase = true
  opt.splitbelow = true
  opt.splitright = true
  opt.tabstop = 2
  opt.wrap = false
  opt.secure = true
  opt.showmode = false
  opt.swapfile = false
  opt.backup = false
  opt.writebackup = false
  opt.completeopt = { 'menu', 'menuone', 'noselect' }
  opt.ttimeout = true
  opt.updatetime = 150
  vim.o.timeout = true
  vim.o.timeoutlen = 300
  opt.list = true
  opt.listchars = 'tab:> ,nbsp:␣,trail:•,extends:⟩,precedes:⟨'
  opt.lazyredraw = true
  opt.termguicolors = true
  opt.background = 'light'
  opt.signcolumn = 'yes'
  opt.showcmd = true
  opt.ruler = true
  opt.report = 0
  opt.linespace = 0
  opt.laststatus = 2
  opt.backspace = { 'indent', 'eol,start' }
  opt.whichwrap:append {
    ['<'] = true,
    ['>'] = true,
    ['['] = true,
    [']'] = true,
    h = true,
    l = true,
  }
  opt.mouse = 'a'
  opt.errorbells = false
  opt.visualbell = false
  opt.wrap = true
  opt.linebreak = true
  opt.showbreak = '↪'
  opt.autoindent = true
  opt.laststatus = 3
  opt.title = true
  opt.showmatch = true
  opt.updatetime = 300
  opt.shortmess = 'atToOFc'
  opt.foldlevel = 1
  opt.bg = 'light'
  vim.cmd('colorscheme github_light')
end

return O

