export interface TokenType {
  pattern: RegExp;
  transform?: (value: string) => string;
}

export interface TokensType {
  [key: string]: TokenType;
}

export type MaskType = string | Array<string>;

export interface MaskerProps {
  value: string;
  mask: MaskType;
  tokens: TokensType;
}

export type ApplyMaskFunction = (args: MaskerProps) => string;
