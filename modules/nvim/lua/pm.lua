local P = {}

local data_path = vim.fn.stdpath('data')
local paq_path = data_path .. '/site/pack/paqs/start/paq-nvim'

local is_installed = vim.fn.empty(vim.fn.glob(paq_path)) == 0
if not is_installed then
  vim.fn.system({
    'git',
    'clone',
    '--depth=1',
    'https://github.com/savq/paq-nvim.git',
    paq_path,
  })
end

P.bootstrap = function(packages)
  vim.cmd.packadd('paq-nvim')
  local paq = require('paq')
  if first_install then
    vim.notify('Install plugins... Press enter')
  end

  paq(packages)
  paq.install()
end

return P

