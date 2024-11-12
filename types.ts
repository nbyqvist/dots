export enum OutputType {
  String = 'String',
  File = 'File',
  Function = 'Function',
}

export interface StringContentSpec {
  type: OutputType.String,
  literal: string;
}

export interface FileContentSpec {
  type: OutputType.File,
  filePath: string;
}

export interface FunctionContentSpec {
  type: OutputType.Function,
  transform: (c: Context) => string;
}

export type OutputSpec = StringContentSpec | FileContentSpec | FunctionContentSpec;

interface Palette {
  black: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  magenta: string;
  cyan: string;
  white: string;
}

export interface ColorPalette {
  fg: string;
  bg: string;
  base: Palette;
  bright: Palette;
  helixTheme: string;
  vscodeIconTheme: string;
  vscodeTheme: string;
}

export interface FontConfig {
  family: string;
  style: string;
  size: number;
}

export interface OutputConfig {
  width: number;
  height: number;
  scale: number;
}

export interface Context {
  colors: ColorPalette;
  font: FontConfig;
  boldFont: FontConfig;
  includedOutput: OutputConfig;
  rightClickScroll: boolean;
  vscodeZoom: 0 | 1;
  useGuix: boolean;
  useAsdf: boolean;
  useDirenv: boolean;
  helixBin: string;
}
