import { ConfigModule, OutputType, type Context } from '../../mvdots';

// I should just generate toml directly, but meh
const content = (c: Context) => {
  const { base, bg, bright, fg } = c.colors;
  return `
[colors]

[colors.primary]
background = "${bg}"
foreground = "${fg}"

[colors.normal]
black = "${base.black}"
blue = "${base.blue}"
cyan = "${base.cyan}"
green = "${base.green}"
magenta = "${base.magenta}"
red = "${base.red}"
white = "${base.white}"
yellow = "${base.yellow}"

[colors.bright]
black = "${bright.black}"
blue = "${bright.blue}"
cyan = "${bright.cyan}"
green = "${bright.green}"
magenta = "${bright.magenta}"
red = "${bright.red}"
white = "${bright.white}"
yellow = "${bright.yellow}"

[font]
size = ${c.font.size}

[font.normal]
family = "${c.font.family}"
style = "${c.font.style}"

[font.bold]
family = "${c.boldFont.family}"
style = "${c.boldFont.style}"

[window]
dynamic_title = true

[window.padding]
x = 4
y = 4
`;
};

export const config = new ConfigModule().withBasePath("$HOME/.config/alacritty").withOutputs({
  ['alacritty.toml']: { type: OutputType.Function, transform: content },
});
