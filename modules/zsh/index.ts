import { type Context, transformOutput } from '../../types.ts';
import { ConfigModule } from '../../mvdots.ts';

const content = (ctx: Context) => `
export DOTNET_CLI_TELEMETRY_OPTOUT=1
alias ls="ls --color=auto"
alias grep="grep --color=auto"
alias typescript-language-server='bunx --bun typescript-language-server --stdio'
${ctx.helixBin != 'hx' ? `alias hx=${ctx.helixBin}` : ''}

autoload -U up-line-or-beginning-search
autoload -U down-line-or-beginning-search
zle -N up-line-or-beginning-search
zle -N down-line-or-beginning-search
bindkey '^[[A' up-line-or-beginning-search
bindkey '^[[B' down-line-or-beginning-search

if [ -d "$HOME/.local/bin" ]; then
  export PATH="$PATH:$HOME/.local/bin"
fi

if [ -e "$HOME/.deno/env" ]; then
  . "$HOME/.deno/env"
fi

if [ -e "$HOME/.cargo/env" ]; then
  . "$HOME/.cargo/env"
fi

if [ -d "$HOME/.dotnet/tools" ]; then
  export PATH="$PATH:$HOME/.dotnet/tools"
fi

if [ -e "$HOME/.asdf/asdf.sh" ]; then
  . "$HOME/.asdf/asdf.sh"
  fpath=($\{ASDF_DIR\}/completions $fpath)
fi

eval "$(starship init zsh)"
eval "$(direnv hook zsh)"

autoload -Uz compinit && compinit
`;

export const config = new ConfigModule().withBasePath('$HOME').withOutputs({
  ['.zshrc']: transformOutput(content),
});
