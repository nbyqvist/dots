import {
  type Context,
  fileOutput,
  hasBin,
  transformOutput,
} from '../../types.ts';
import { ConfigModule } from '../../mvdots.ts';

const configContent = (ctx: Context) => `
theme = "${ctx.colors.helixTheme}"
[editor]
auto-format = true
auto-pairs = true
bufferline = "multiple"
color-modes = true
completion-replace = true
cursorcolumn = false
cursorline = true
mouse = true
rulers = [120]
scroll-lines = 1
true-color = true

[editor.cursor-shape]
insert = "bar"
normal = "block"
select = "block"

[editor.file-picker]
git-ignore = true
hidden = true

[editor.indent-guides]
character = "|"
render = true
skip-levels = 0

[editor.lsp]
display-messages = true

[editor.statusline]
left = ["mode", "spacer", "version-control", "spacer", "file-name", "file-modification-indicator"]
right = ["spinner", "spacer", "workspace-diagnostics", "separator", "diagnostics", "position", "file-encoding", "file-line-ending", "file-type"]
separator = "|"

[editor.statusline.mode]
insert = "INS"
normal = "NORM"
select = "SEL"

[editor.whitespace]
[editor.whitespace.characters]
nbsp = "⍽"
newline = "⏎"
space = "·"
tab = "→"
tabpad = "·"

[editor.whitespace.render]
nbsp = "none"
newline = "none"
space = "all"
tab = "all"

[keys.normal]
A-j = ["extend_to_line_bounds", "delete_selection", "move_line_down", "paste_before"]
A-k = ["extend_to_line_bounds", "delete_selection", "move_line_up", "paste_before"]
C-b = "goto_previous_buffer"
C-h = "jump_view_left"
C-j = "jump_view_down"
C-k = "jump_view_up"
C-l = "jump_view_right"
C-n = "goto_next_buffer"
C-v = "vsplit"
`;

export const config = new ConfigModule()
  .withBasePath('$HOME/.config/helix')
  .withInstallCondition(hasBin(['hx', 'helix']))
  .withSelfPath(import.meta.dirname!).withOutputs({
    ['config.toml']: transformOutput(configContent),
    ['languages.toml']: fileOutput('./languages.toml'),
  });
