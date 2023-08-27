import { MaskerProps, ApplyMaskFunction } from '../types';

export function dynamicMask(
  { value, mask, tokens }: MaskerProps,
  applyMask: ApplyMaskFunction,
) {
  mask = (mask as Array<string>).sort((a, b) => a.length - b.length);

  let index = 0;
  while (index < mask.length) {
    const currentMask = mask[index];
    index++;
    const nextMask = mask[index];
    if (
      !(
        nextMask &&
        applyMask({ value, mask: nextMask, tokens }).length > currentMask.length
      )
    ) {
      return applyMask({ value, mask: currentMask, tokens });
    }
  }

  return '';
}
