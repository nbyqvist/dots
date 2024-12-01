import { type Context, hasBin, transformOutput } from '../../types.ts';
import { ConfigModule } from '../../mvdots.ts';

const content = (c: Context) => {
  const { base, bg, bright, fg } = c.colors;
  return `
font_family ${c.font.family}
bold_font auto
italic_font auto
bold_italic_font auto
font_size ${c.font.size}
disable_ligatures never
enable_audio_bell no
confirm_os_window_close -1
foreground ${fg}
background ${bg}
color0 ${base.black}
color8 ${bright.black}
color1 ${base.red}
color9 ${bright.red}
color2 ${base.green}
color10 ${bright.green}
color3 ${base.yellow}
color11 ${bright.yellow}
color4 ${base.blue}
color12 ${bright.blue}
color5 ${base.magenta}
color13 ${bright.magenta}
color6 ${base.cyan}
color14 ${bright.cyan}
color7 ${base.white}
color15 ${bright.white}
`;
};

export const config = new ConfigModule()
  .withBasePath('$HOME/.config/kitty')
  .withInstallCondition(hasBin('kitty'))
  .withOutputs({
    ['kitty.conf']: transformOutput(content),
  });
