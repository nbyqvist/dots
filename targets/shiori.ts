import { baseConfig } from '../default.ts';

export const ctx = {
  ...baseConfig,
  font: {
    family: 'BlexMono Nerd Font Mono',
    style: 'Light',
    size: 14,
  },
  includedOutput: {
    width: 3024,
    height: 1964,
    scale: 1.5,
  },
  helixBin: 'hx',
  useGuix: false,
  useAsdf: true,
  useDirenv: false,
  hasNotch: true,
};
