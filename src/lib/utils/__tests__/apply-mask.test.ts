import { expect, test } from 'vitest';

import { applyMask } from '../apply-mask';

test('applyMask should handle empty value', () => {
  expect(
    applyMask({
      value: '',
      mask: '+7 (###) ### ## ##',
      tokens: {
        '#': {
          pattern: /\d/,
        },
      },
    }),
  ).toBe('');
});

test('applyMask should handle value containing only static mask characters', () => {
  expect(
    applyMask({
      value: '+7',
      mask: '+7 (###) ### ## ##',
      tokens: {
        '#': {
          pattern: /\d/,
        },
      },
    }),
  ).toBe('+7');
});

test('applyMask should handle value longer than mask', () => {
  expect(
    applyMask({
      value: '1234567890',
      mask: '###',
      tokens: {
        '#': {
          pattern: /\d/,
        },
      },
    }),
  ).toBe('123');
});

test('applyMask should handle mask without tokens', () => {
  expect(
    applyMask({
      value: 'abc',
      mask: 'ABC',
      tokens: {},
    }),
  ).toBe('ABC');
});

test('applyMask should handle mask with special characters', () => {
  expect(
    applyMask({
      value: 'a1.b2',
      mask: 'F#.F#',
      tokens: {
        F: {
          pattern: /[a-zA-Z]/,
        },
        '#': {
          pattern: /\d/,
        },
      },
    }),
  ).toBe('a1.b2');
});

test('applyMask should return empty when no symbols match tokens', () => {
  expect(
    applyMask({
      value: 'xyz',
      mask: '###',
      tokens: {
        '#': {
          pattern: /\d/,
        },
      },
    }),
  ).toBe('');
});

test('applyMask should skip static prefix when value matches digit', () => {
  expect(
    applyMask({
      value: '7',
      mask: '+7 (###) ### ## ##',
      tokens: {
        '#': {
          pattern: /\d/,
        },
      },
    }),
  ).toBe('+7');
});

test('applyMask should add opening bracket after first digit', () => {
  expect(
    applyMask({
      value: '+78',
      mask: '+7 (###) ### ## ##',
      tokens: {
        '#': {
          pattern: /\d/,
        },
      },
    }),
  ).toBe('+7 (8');
});

test('applyMask should keep digits inside brackets', () => {
  expect(
    applyMask({
      value: '+7 (800',
      mask: '+7 (###) ### ## ##',
      tokens: {
        '#': {
          pattern: /\d/,
        },
      },
    }),
  ).toBe('+7 (800');
});

test('applyMask should add closing bracket after fourth digit', () => {
  expect(
    applyMask({
      value: '+7 (8005',
      mask: '+7 (###) ### ## ##',
      tokens: {
        '#': {
          pattern: /\d/,
        },
      },
    }),
  ).toBe('+7 (800) 5');
});

test('applyMask should produce full phone mask when all digits match', () => {
  expect(
    applyMask({
      value: '+7 (800) 555 35 35',
      mask: '+7 (###) ### ## ##',
      tokens: {
        '#': {
          pattern: /\d/,
        },
      },
    }),
  ).toBe('+7 (800) 555 35 35');
});

test('applyMask should match hex characters skipping non-matching', () => {
  expect(
    applyMask({
      value: 'abczxc123',
      mask: '######',
      tokens: {
        '#': {
          pattern: /[0-9a-fA-F]/,
        },
      },
    }),
  ).toBe('abcc12');
});

test('applyMask should filter non-hex characters', () => {
  expect(
    applyMask({
      value: 'zdazd3e8',
      mask: '######',
      tokens: {
        '#': {
          pattern: /[0-9a-fA-F]/,
        },
      },
    }),
  ).toBe('dad3e8');
});

test('applyMask should format MAC address with colon separators', () => {
  expect(
    applyMask({
      value: '12abzx34zzacfxc25',
      mask: 'FF:FF:FF:FF:FF:FF',
      tokens: {
        F: {
          pattern: /[0-9a-fA-F]/,
        },
      },
    }),
  ).toBe('12:ab:34:ac:fc:25');
});

test('applyMask should handle multiple token types in one mask', () => {
  expect(
    applyMask({
      value: '12az2vz31',
      mask: 'F ###',
      tokens: {
        F: {
          pattern: /[a-zA-Z]/,
        },
        '#': {
          pattern: /\d/,
        },
      },
    }),
  ).toBe('a 231');
});

test('applyMask should apply uppercase transform for hex MAC', () => {
  expect(
    applyMask({
      value: '12abzx34zzacfxc25',
      mask: 'FF:FF:FF:FF:FF:FF',
      tokens: {
        F: {
          pattern: /[0-9a-fA-F]/,
          transform: (value) => value.toLocaleUpperCase(),
        },
      },
    }),
  ).toBe('12:AB:34:AC:FC:25');
});

test('applyMask should apply lowercase transform', () => {
  expect(
    applyMask({
      value: '12AB34ACFC25',
      mask: 'FF:FF:FF:FF:FF:FF',
      tokens: {
        F: {
          pattern: /[0-9a-fA-F]/,
          transform: (value) => value.toLocaleLowerCase(),
        },
      },
    }),
  ).toBe('12:ab:34:ac:fc:25');
});

test('applyMask should apply uppercase transform with hash token', () => {
  expect(
    applyMask({
      value: 'zdazd3e8',
      mask: '######',
      tokens: {
        '#': {
          pattern: /[0-9a-fA-F]/,
          transform: (value) => value.toLocaleUpperCase(),
        },
      },
    }),
  ).toBe('DAD3E8');
});
