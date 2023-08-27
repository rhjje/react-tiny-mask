import { MaskerProps } from '../types';

import { applyMask } from './apply-mask';

export function dynamicMask({ value, mask, masked, tokens }: MaskerProps) {
  mask = (mask as Array<string>).sort((a, b) => a.length - b.length);

  let index = 0;
  while (index < mask.length) {
    const currentMask = mask[index];
    index++;
    const nextMask = mask[index];
    if (
      !(
        nextMask &&
        applyMask({ value, mask: nextMask, masked: true, tokens }).length >
          currentMask.length
      )
    ) {
      return applyMask({ value, mask: currentMask, masked, tokens });
    }
  }
  return ''; // empty masks
}
