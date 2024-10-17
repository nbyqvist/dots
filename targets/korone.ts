import { baseConfig } from '../default';

export const ctx = {
  ...baseConfig,
  font: {
    family: 'BlexMono Nerd Font Mono',
    style: 'Light',
    size: 16,
  },
  includedOutput: {
    height: 1600,
    width: 2560,
    scale: 1.25,
  },
  useGuix: false,
};
