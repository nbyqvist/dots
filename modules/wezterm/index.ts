import { ConfigModule, OutputType, type Context } from '../../mvdots';

const content = (c: Context) => {
  const { base, bg, bright, fg } = c.colors;
  return `
local wez = require('wezterm')

return {
  colors = {
    cursor_bg = '${fg}',
    cursor_border = '${bg}',
    background = '${bg}',
    foreground = '${fg}',
    ansi = {
      '${base.black}',
      '${base.red}',
      '${base.green}',
      '${base.yellow}',
      '${base.blue}',
      '${base.magenta}',
      '${base.cyan}',
      '${base.white}',
    },
    brights = {
      '${bright.black}',
      '${bright.red}',
      '${bright.green}',
      '${bright.yellow}',
      '${bright.blue}',
      '${bright.magenta}',
      '${bright.cyan}',
      '${bright.white}',
    },
    split = '${base.cyan}'
  },
  font = wez.font({
    family = '${c.font.family}',
    weight = '${c.font.style}',
  }),
  harfbuzz_features = { "calt=0", "clig=0", "liga=0" },
  font_size = ${c.font.size - 1},
  hide_tab_bar_if_only_one_tab = true,
  hide_mouse_cursor_when_typing = false,
  allow_square_glyphs_to_overflow_width = "Never",
  default_prog = { '/usr/bin/bash' },
}
`
};

export const config = new ConfigModule().withBasePath("$HOME/.config/wezterm").withOutputs({
  ['wezterm.lua']: { type: OutputType.Function, transform: content },
});
