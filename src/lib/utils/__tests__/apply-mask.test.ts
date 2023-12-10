import { expect, test } from 'vitest';

import { applyMask } from '../apply-mask';

test('applyMask should return the correct mask', () => {
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

test('applyMask should apply tokens', () => {
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

test('applyMask should apply transform function', () => {
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
