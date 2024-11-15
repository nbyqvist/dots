import { theme } from './themes/github_light.ts';
import type { Context } from './types.ts';

export const baseConfig: Context = {
  // Github light color scheme
  colors: theme,
  font: {
    size: 16,
    family: 'FiraCode Nerd Font Mono',
    style: 'Light',
  },
  boldFont: {
    size: 16,
    family: 'FiraCode Nerd Font Mono',
    style: 'Regular',
  },
  includedOutput: {
    width: 2256,
    height: 1504,
    scale: 1.15,
  },
  rightClickScroll: false,
  vscodeZoom: 1,
  useGuix: false,
  useAsdf: false,
  useDirenv: false,
  helixBin: 'helix',
  neovimColorscheme: 'github_light',
};
