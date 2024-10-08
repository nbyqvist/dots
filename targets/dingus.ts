import { baseConfig } from '../default';

export const ctx = {
  ...baseConfig,
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
};
