import { baseConfig } from '../default.ts';
import { theme } from '../themes/catppuccin_latte.ts';

export const ctx = {
  ...baseConfig,
  colors: theme,
  font: {
    family: 'BlexMono Nerd Font Mono',
    style: 'Light',
    size: 18,
  },
  includedOutput: {
    height: 1600,
    width: 2560,
    scale: 1,
  },
  useGuix: false,
  useAsdf: true,
};
