import { forwardRef, InputHTMLAttributes, ChangeEvent } from 'react';

import { TokenType, TokensType, MaskType } from '../types';
import { masker, applyMask, defaultToken } from '../utils';

export interface InputMaskProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: MaskType;
  tokens?: TokensType;
}

export const InputMask = forwardRef<HTMLInputElement, InputMaskProps>(
  ({ mask, tokens = {}, onChange, ...props }, ref) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const el = event.target as HTMLInputElement;

      let position = el.selectionEnd || 0;
      const digit = el.value[position - 1];

      el.value = masker(
        {
          value: el.value,
          mask,
          tokens: { ...tokens, ...defaultToken },
        },
        applyMask,
      );

      while (
        position &&
        position < el.value.length &&
        el.value.charAt(position - 1).toLocaleLowerCase() !==
          digit.toLocaleLowerCase()
      ) {
        position++;
      }

      if (el === document.activeElement) {
        el.setSelectionRange(position, position);
      }

      onChange && onChange(event);
    };

    return <input {...props} ref={ref} type="text" onChange={handleChange} />;
  },
);

InputMask.displayName = 'InputMask';

export type { TokenType, TokensType, MaskType };
