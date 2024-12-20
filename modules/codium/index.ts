import { type Context, hasBin, transformOutput } from '../../types.ts';
import { ConfigModule } from '../../mvdots.ts';

const settings = (c: Context) => ({
  'catppuccin.boldKeywords': false,
  'catppuccin.italicKeywords': false,
  'catppuccin.italicComments': false,
  'workbench.startupEditor': 'none',
  'workbench.colorTheme': c.colors.vscodeTheme,
  'workbench.iconTheme': c.colors.vscodeIconTheme,
  'editor.bracketPairColorization.enabled': true,
  'editor.fontFamily': `'${c.font.family} ${c.font.style}'`,
  'editor.fontSize': c.font.size,
  'editor.fontLigatures': true,
  'terminal.integrated.shellIntegration.decorationsEnabled': 'never',
  'terminal.integrated.shellIntegration.enabled': false,
  'terminal.integrated.shellIntegration.history': 100,
  'terminal.integrated.shellIntegration.showCommandGuide': false,
  'terminal.integrated.fontSize': c.font.size,
  'terminal.integrated.fontFamily': `'${c.font.family} ${c.font.style}'`,
  'editor.renderWhitespace': 'trailing',
  'window.titleBarStyle': 'custom',
  'files.associations': {
    '*.eta': 'html',
  },
  'terminal.integrated.enablePersistentSessions': false,
  'colorize.languages': [
    'typescript',
  ],
  'editor.tokenColorCustomizations': {
    'textMateRules': [
      {
        // No italic comments
        'scope': 'comment',
        'settings': {
          'fontStyle': '',
        },
      },
      {
        // No bold type names
        'scope': 'entity.name.type',
        'settings': {
          'fontStyle': '',
        },
      },
      {
        'scope': 'entity.name.method',
        'settings': {
          'fontStyle': '',
        },
      },
    ],
  },
  // Chromium uses some special pixels that are smaller than regular pixels I guess
  'window.zoomLevel': c.vscodeZoom,
});

export const config = new ConfigModule()
  .withBasePath('$HOME/.config/VSCodium/User')
  .withInstallCondition(hasBin('codium'))
  .withOutputs({
    ['settings.json']: transformOutput((c: Context) =>
      JSON.stringify(settings(c), null, 2)
    ),
  });
