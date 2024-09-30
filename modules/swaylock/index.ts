import { ConfigModule, OutputType, type Context } from '../../mvdots';

const content = (c: Context) => `
color=${c.colors.base.black}
font-size=24
indicator-radius=100
line-color=${c.colors.base.white}
show-failed-attempts
`;

export const config = new ConfigModule().withBasePath("$HOME/.config/swaylock").withOutputs({
    ['config']: { type: OutputType.Function, transform: content },
});
