import github_light from "./themes/github_light";
import type { Context } from "./types";

export const baseConfig: Context = {
  // Github light color scheme
  colors: github_light,
  font: {
    size: 16,
    family: "FiraCode Nerd Font Mono",
    style: "Light",
  },
  boldFont: {
    size: 16,
    family: "FiraCode Nerd Font Mono",
    style: "Regular",
  },
  includedOutput: {
    width: 2256,
    height: 1504,
    scale: 1.15,
  },
  vscodeTheme: "Quiet Light",
  rightClickScroll: false,
  vscodeZoom: 1,
  useGuix: false,
  useAsdf: false,
};
