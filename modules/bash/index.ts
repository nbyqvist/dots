import { ConfigModule, OutputType, type Context } from '../../mvdots';JSON

const guixContent = `
if [ -n "$GUIX_ENVIRONMENT" ]; then
    if [[ $PS1 =~ (.*)"\\$" ]]; then
        PS1="$\{BASH_REMATCH[1]} [env]\\\$ "
    fi
fi

GUIX_PROFILE="$HOME/.config/guix/current"
. "$GUIX_PROFILE/etc/profile"
`;

const content = (c: Context) => `
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias hx=helix
alias grep='grep --color=auto'
PS1='[\\u@\h \W]\$ '
eval "$(starship init bash)"
export PATH="$PATH:$HOME/.local/bin"
export PATH="$PATH:$HOME/.cargo/bin"

${c.useGuix ? guixContent : ''}

export DOTNET_CLI_TELEMETRY_OPTOUT=1
alias typescript-language-server='bunx --bun typescript-language-server --stdio'
`;

export const config = new ConfigModule().withBasePath("$HOME").withOutputs({
  ['.bashrc']: { type: OutputType.Function, transform: content },
});
