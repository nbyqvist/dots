import { OutputType, type Context } from '../../types';
import { ConfigModule } from '../../mvdots';

const configContent =
  `
allow_images=true
allow_markup=false
gtk_dark=true
height=600
insensitive=true
lines=8
no_actions=true
parse_action=false
show=drun
width=800
`;

const styleContent = (c: Context): string =>
  `
#window {
  border-radius: 10px;
  border: 1px solid ${c.colors.base.black};
  background-color: ${c.colors.bg};
  color: ${c.colors.base.black};
}

#inner-box {
  border-radius: 10px;
}

#input {
  margin-bottom: 10px;
  border: 1px solid ${c.colors.base.black};
  color: ${c.colors.base.black};
  background-color:${c.colors.bg};
}

#img {
  border-radius: 10px;
  padding: 3px;
  margin: 3px;
  background-color:${c.colors.bg};
}

#entry:selected {
  color:${c.colors.bg};
  background-color: ${c.colors.base.blue};
  border-left: 1px solid ${c.colors.base.black};
  border-right: 1px solid ${c.colors.base.black};
}

#text {
  color: ${c.colors.base.black};
}

#text:selected {
  color:${c.colors.bg};
}
`;

export const config = new ConfigModule().withBasePath("$HOME/.config/wofi").withOutputs({
  ['config']: { type: OutputType.String, literal: configContent },
  ['style.css']: { type: OutputType.Function, transform: styleContent },
});
