deploy:
  bun run mvdots.ts

format:
  bunx prettier -c **/*.ts --write
