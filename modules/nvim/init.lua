local pm = require('pm')
local packages = require('plugins')

pm.bootstrap(packages)

require('plugin_conf').setup()
require('opts').setup()
require('keybinds').setup()

