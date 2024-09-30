import type { Context } from "./mvdots";

export const baseConfig: Context = {
    // Github light color scheme
    colors: {
        fg: "#24292f",
        bg: "#ffffff",
        base: {
            black: "#24292e",
            red: "#d73a49",
            green: "#28a745",
            yellow: "#dbab09",
            blue: "#005cc5",
            magenta: "#5a32a3",
            cyan: "#0598bc",
            white: "#6a737d",
        },
        bright: {
            black: "#959da5",
            red: "#cb2431",
            green: "#22863a",
            yellow: "#b08800",
            blue: "#005cc5",
            magenta: "#5a32a3",
            cyan: "#3192aa",
            white: "#d1d5da",
        },
    },
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
        scale: 1.25,
    },
    vscodeTheme: "Quiet Light",
    rightClickScroll: false,
};