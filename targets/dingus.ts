import { baseConfig } from '../default.ts';
import { theme } from '../themes/catppuccin_latte.ts';

export const ctx = {
  ...baseConfig,
  colors: theme,
  font: {
    ...baseConfig.font,
    size: 15,
  },
  includedOutput: {
    height: 1080,
    width: 1920,
    scale: 1,
  },
  rightClickScroll: true,
  vscodeZoom: 0,
  useAsdf: true,
};
