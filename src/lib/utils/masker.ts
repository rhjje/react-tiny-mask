import { MaskerProps, ApplyMaskFunction } from '../types';

import { dynamicMask } from './dynamic-mask';

export function masker(
  { value, mask, tokens }: MaskerProps,
  applyMask: ApplyMaskFunction,
) {
  return Array.isArray(mask)
    ? dynamicMask({ value, mask, tokens }, applyMask)
    : applyMask({ value, mask, tokens });
}
