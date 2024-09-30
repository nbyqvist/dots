import { ConfigModule, OutputType, type Context } from '../../mvdots';

const content = (c: Context) => `
profile undocked {
  output "eDP-1" mode ${c.includedOutput.width}x${c.includedOutput.height} position 0,0 scale ${c.includedOutput.scale}
}

profile home-dock {
  output "eDP-1" mode ${c.includedOutput.width}x${c.includedOutput.height} position 0,0 scale ${c.includedOutput.scale}
  output "LG Electronics LG HDR 4K 007NTNHM4103" mode 3840x2160@60 position ${c.includedOutput.width / c.includedOutput.scale},0 scale 1.000000
}
`;

export const config = new ConfigModule().withBasePath("$HOME/.config/kanshi").withOutputs({
  ['config']: { type: OutputType.Function, transform: content },
});
