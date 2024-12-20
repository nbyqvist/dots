import { baseConfig } from '../default.ts';

export const ctx = {
  ...baseConfig,
  font: {
    family: 'FiraCode Nerd Font Mono',
    style: 'Light',
    size: 16,
  },
  useGuix: true,
  useAsdf: true,
  useDirenv: true,
};
