import { baseConfig } from '../default.ts';
import { theme } from '../themes/github_light.ts';

export const ctx = {
  ...baseConfig,
  colors: theme,
  font: {
    ...baseConfig.font,
    size: 15,
  },
  includedOutput: {
    height: 1200,
    width: 1920,
    scale: 1,
  },
  rightClickScroll: false,
  vscodeZoom: 0,
  useAsdf: true,
  useDirenv: true,
};
