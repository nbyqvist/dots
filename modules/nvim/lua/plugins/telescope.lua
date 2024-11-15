local T = {}

T.setup = function()
  local t = require('telescope')
  local builtin = require('telescope.builtin')

  vim.keymap.set('n', '<leader>f', builtin.find_files, { desc = 'find files' })
  vim.keymap.set('n', '<leader>g', builtin.live_grep, { desc = 'live grep' })

  t.setup({})
end

return T

