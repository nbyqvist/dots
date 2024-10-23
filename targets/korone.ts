import { baseConfig } from '../default';

export const ctx = {
  ...baseConfig,
  font: {
    family: 'FiraCode Nerd Font Mono',
    style: 'Light',
    size: 16,
  },
  includedOutput: {
    height: 1600,
    width: 2560,
    scale: 1.125,
  },
  useGuix: false,
  useAsdf: true,
};
