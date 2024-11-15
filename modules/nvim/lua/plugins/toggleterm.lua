local T = {}

T.setup = function()
  local toggleterm = require('toggleterm')

  toggleterm.setup({
    open_mapping = '<C-\\>',
    auto_chdir = true,
  })
end

return T

