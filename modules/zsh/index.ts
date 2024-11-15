import { stringOutput } from '../../types.ts';
import { ConfigModule } from '../../mvdots.ts';

const content = `
export PATH="$PATH:$HOME/.local/bin"
eval "$(starship init zsh)"
`;

export const config = new ConfigModule().withBasePath('$HOME').withOutputs({
  ['.zshrc']: stringOutput(content),
});
