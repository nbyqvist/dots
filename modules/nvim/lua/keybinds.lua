local K = {}
local utils = require('utils')
local nmap = utils.nmap

local leader = ' '

K.leader = leader

K.setup = function()
  vim.g.mapleader = leader
  nmap('<leader>rc', '<cmd>edit ~/.config/nvim/init.lua<cr>')
  nmap('<leader>bh', '<cmd>bprevious<cr>')
  nmap('<leader>bl', '<cmd>bnext<cr>')
  local builtin = require('telescope.builtin')
  nmap('<leader>ff', builtin.find_files)
  nmap('<leader>fg', builtin.live_grep)
  nmap('<leader>fb', builtin.buffers)
  nmap('<leader>fh', builtin.help_tags)
  nmap('<C-b>', '<cmd>bprevious<cr>')
  nmap('<C-n>', '<cmd>bnext<cr>')
end

K.nmap = nmap

return K

