import { TokensType } from 'react-tiny-mask';

type TransformName = 'uppercase' | 'lowercase';

const TRANSFORMS: Record<TransformName, (v: string) => string> = {
  uppercase: (v) => v.toLocaleUpperCase(),
  lowercase: (v) => v.toLocaleLowerCase(),
};

export const parseTokens = (raw: string): TokensType | null => {
  try {
    const lines = raw
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);

    const tokens: TokensType = {};

    for (const line of lines) {
      // Format: KEY: /pattern/flags? (uppercase|lowercase)?
      const match = line.match(/^(.+?):\s*\/(.+)\/([gimsuy]*)\s*(\w*)$/);
      if (!match) return null;

      const [, key, pattern, flags, transformName] = match;
      const trimmedKey = key.trim();
      if (!trimmedKey) return null;

      tokens[trimmedKey] = {
        pattern: new RegExp(pattern, flags),
        ...(transformName in TRANSFORMS && {
          transform: TRANSFORMS[transformName as TransformName],
        }),
      };
    }

    return Object.keys(tokens).length > 0 ? tokens : null;
  } catch {
    return null;
  }
};

export const parseMask = (raw: string): string | string[] => {
  const trimmed = raw.trim();
  if (trimmed.startsWith('[')) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed) && parsed.every((s) => typeof s === 'string')) {
        return parsed;
      }
    } catch {
      // fall through
    }
  }
  return trimmed;
};
