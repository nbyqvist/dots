import { baseConfig } from '../default.ts';
import { theme } from '../themes/catppuccin_latte.ts';

export const ctx = {
  ...baseConfig,
  colors: theme,
  font: {
    ...baseConfig.font,
    size: 13,
  },
  includedOutput: {
    height: 1080,
    width: 1920,
    scale: 1,
  },
  vscodeZoom: 0,
  helixBin: 'hx',
};
