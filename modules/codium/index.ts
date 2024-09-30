import { ConfigModule, OutputType, type Context } from "../../mvdots"

const settings = (c: Context) => ({
  "workbench.startupEditor": "none",
  "workbench.colorTheme": "Quiet Light",
  "workbench.iconTheme": "material-icon-theme",
  "editor.bracketPairColorization.enabled": true,
  "editor.fontFamily": `'${c.font.family} ${c.font.style}'`,
  "editor.fontSize": c.font.size,
  "editor.fontLigatures": true,
  "terminal.integrated.shellIntegration.decorationsEnabled": "never",
  "terminal.integrated.shellIntegration.enabled": false,
  "terminal.integrated.shellIntegration.history": 100,
  "terminal.integrated.shellIntegration.showCommandGuide": false,
  "terminal.integrated.fontSize": c.font.size,
  "terminal.integrated.fontFamily": `'${c.font.family} ${c.font.style}'`,
  "editor.renderWhitespace": "trailing",
  "files.associations": {
    "*.eta": "html"
  },
  "terminal.integrated.enablePersistentSessions": false,
  "colorize.languages": [
    "typescript",
  ],
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        // No italic comments
        "scope": "comment",
        "settings": {
          "fontStyle": ""
        }
      },
      {
        // No bold type names
        "scope": "entity.name.type",
        "settings": {
          "fontStyle": ""
        }
      },
      {
        "scope": "entity.name.method",
        "settings": {
          "fontStyle": ""
        }
      }
    ]
  },
  // Chromium uses some special pixels that are smaller than regular pixels I guess
  "window.zoomLevel": 1,
});

export const config = new ConfigModule().withBasePath("$HOME/.config/VSCodium/User").withOutputs({
  ['settings.json']: { type: OutputType.Function, transform: (c: Context) => JSON.stringify(settings(c)) },
});
