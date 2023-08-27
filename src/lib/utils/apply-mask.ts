import { MaskerProps } from '../types';

export function applyMask({ value, mask, tokens }: MaskerProps) {
  let maskIndex = 0;
  let valueIndex = 0;
  let output = '';

  while (maskIndex < mask.length && valueIndex < value.length) {
    let maskSymbol = mask[maskIndex];
    const rules = tokens[maskSymbol];
    const valueSymbol = value[valueIndex];

    if (rules) {
      if (rules.pattern?.test(valueSymbol)) {
        output += rules.transform ? rules.transform(valueSymbol) : valueSymbol;
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
