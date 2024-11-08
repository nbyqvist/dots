import { baseConfig } from '../default';
import { theme } from '../themes/github_ultradark';

export const ctx = {
  ...baseConfig,
  colors: theme,
  font: {
    ...baseConfig.font,
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
};
