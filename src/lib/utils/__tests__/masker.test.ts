import { expect, test } from 'vitest';

import { masker } from '../masker';
import { applyMask } from '../apply-mask';

test('masker should delegate to applyMask for string mask', () => {
  expect(
    masker(
      {
        value: '+78',
        mask: '+7 (###) ### ## ##',
        tokens: { '#': { pattern: /\d/ } },
      },
      applyMask,
    ),
  ).toBe('+7 (8');
});

test('masker should delegate to dynamicMask for array mask', () => {
  expect(
    masker(
      {
        value: '123456',
        mask: ['##', '####', '######'],
        tokens: { '#': { pattern: /\d/ } },
      },
      applyMask,
    ),
  ).toBe('123456');
});
