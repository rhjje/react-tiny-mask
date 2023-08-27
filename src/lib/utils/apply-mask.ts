import { MaskerProps } from '../types';

export function applyMask({ value, mask, tokens }: MaskerProps) {
  let maskIndex = 0;
  let valueIndex = 0;
  let output = '';

  while (maskIndex < mask.length && valueIndex < value.length) {
    const maskSymbol = mask[maskIndex];
    const token = tokens[maskSymbol];
    const valueSymbol = value[valueIndex];

    if (token) {
      if (token.pattern?.test(valueSymbol)) {
        output += token.transform ? token.transform(valueSymbol) : valueSymbol;
        maskIndex++;
      }

      valueIndex++;
    } else {
      output += maskSymbol;

      if (valueSymbol === maskSymbol) {
        valueIndex++;
      }

      maskIndex++;
    }
  }

  let restOutput = '';
  while (maskIndex < mask.length) {
    let maskSymbol = mask[maskIndex];
    if (tokens[maskSymbol]) {
      restOutput = '';
      break;
    }

    restOutput += maskSymbol;
    maskIndex++;
  }

  return output + restOutput;
}
