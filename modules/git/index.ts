import { fileOutput, stringOutput, transformOutput } from "../../types.ts";
import { ConfigModule } from "../../mvdots.ts";

const content = `
[alias]
  pusho = !git push -u origin $(git branch --show-current)

[init]
  defaultBranch = main

[diff]
  tool = vimdiff

[difftool]
  prompt = false
`;

export const config = new ConfigModule()
  .withBasePath("$HOME")
  .withSelfPath(import.meta.dirname!)
  .withOutputs({
    [".gitconfig"]: stringOutput(content),
  });
