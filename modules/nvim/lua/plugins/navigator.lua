local N = {}
local navigator = require('Navigator')
local nmap = require('utils').nmap

N.setup = function()
  navigator.setup()
  local nav_up = function()
    navigator.up()
  end

  local nav_down = function()
    navigator.down()
  end

  local nav_left = function()
    navigator.left()
  end

  local nav_right = function()
    navigator.right()
  end

  nmap('<C-h>', nav_left)
  nmap('<C-j>', nav_down)
  nmap('<C-k>', nav_up)
  nmap('<C-l>', nav_right)
end

return N

