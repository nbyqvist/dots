import { OutputType, type Context } from '../../types';
import { ConfigModule } from '../../mvdots';

const content = `
export PATH="$PATH:$HOME/.local/bin"
eval "$(starship init zsh)"
`;

export const config = new ConfigModule().withBasePath("$HOME").withOutputs({
  [".zshrc"]: { type: OutputType.String, literal: content },
});
