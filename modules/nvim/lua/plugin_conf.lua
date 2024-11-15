local P = {}

local nmap = require('utils').nmap

P.setup = function()
  require('plugins/navigator').setup()
  require('plugins/hardline').setup()
  require('plugins/toggleterm').setup()
  require('plugins/telescope').setup()
  require('mason').setup()
  require('mason-lspconfig').setup({
    ensure_installed = { 'lua_ls', 'rust_analyzer', 'sorbet' },
  })
end

return P

