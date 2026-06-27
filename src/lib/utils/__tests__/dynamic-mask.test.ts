import { expect, test } from 'vitest';

import { dynamicMask } from '../dynamic-mask';
import { applyMask } from '../apply-mask';

test('should return result for a single mask', () => {
  expect(
    dynamicMask(
      {
        value: '1234',
        mask: ['####'],
        tokens: { '#': { pattern: /\d/ } },
      },
      applyMask,
    ),
  ).toBe('1234');
});

test('should pick longer mask when value fits it', () => {
  expect(
    dynamicMask(
      {
        value: '123456',
        mask: ['##', '####', '######'],
        tokens: { '#': { pattern: /\d/ } },
      },
      applyMask,
    ),
  ).toBe('123456');
});

test('should skip mask when value does not match its first token', () => {
  expect(
    dynamicMask(
      {
        value: '1',
        mask: ['F###', '###'],
        tokens: {
          '#': { pattern: /\d/ },
          F: { pattern: /[a-zA-Z]/ },
        },
      },
      applyMask,
    ),
  ).toBe('1');
});

test('should return empty string for empty mask array', () => {
  expect(
    dynamicMask(
      {
        value: '1234',
        mask: [],
        tokens: { '#': { pattern: /\d/ } },
      },
      applyMask,
    ),
  ).toBe('');
});

test('should return empty string when value does not match any mask', () => {
  expect(
    dynamicMask(
      {
        value: 'abc',
        mask: ['###', '##'],
        tokens: { '#': { pattern: /\d/ } },
      },
      applyMask,
    ),
  ).toBe('');
});

test('should apply transform function when selecting mask', () => {
  expect(
    dynamicMask(
      {
        value: 'ab12',
        mask: ['FFFF'],
        tokens: {
          F: {
            pattern: /[a-zA-Z0-9]/,
            transform: (v) => v.toUpperCase(),
          },
        },
      },
      applyMask,
    ),
  ).toBe('AB12');
});

test('should handle masks with non-token prefix characters', () => {
  expect(
    dynamicMask(
      {
        value: '1234567',
        mask: ['+7 (###) ###-##-##', '+# (###) ###-##-##'],
        tokens: { '#': { pattern: /\d/ } },
      },
      applyMask,
    ),
  ).toBe('+7 (123) 456-7');
});
