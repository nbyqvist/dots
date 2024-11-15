import { baseConfig } from '../default.ts';
import { theme } from '../themes/github_ultradark.ts';

export const ctx = {
  ...baseConfig,
  colors: theme,
  font: {
    family: 'BlexMono Nerd Font Mono',
    style: 'Light',
    size: 15,
  },
  includedOutput: {
    height: 1440,
    width: 5120,
    scale: 1,
  },
  rightClickScroll: true,
  vscodeZoom: 0,
  useAsdf: true,
  useDirenv: true,
  neovimColorscheme: 'github_dark_high_contrast',
  batColorscheme: 'gruvbox-dark',
};
