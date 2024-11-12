deploy:
  deno run --allow-all mvdots.ts

format:
  bunx prettier -c **/*.ts --write
