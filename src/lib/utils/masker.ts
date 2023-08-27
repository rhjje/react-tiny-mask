import { MaskerProps } from '../types';

import { dynamicMask } from './dynamic-mask';
import { applyMask } from './apply-mask';

export function masker({ value, mask, tokens }: MaskerProps) {
  return Array.isArray(mask)
    ? dynamicMask({ value, mask, tokens })
    : applyMask({ value, mask, tokens });
}
