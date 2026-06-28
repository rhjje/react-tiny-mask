import { InputMask } from 'react-tiny-mask';

import { Input, InputPreview, Section } from '../ui';

import styles from './styles.module.css';

const hexTokens = {
  '#': {
    pattern: /[0-9a-fA-F]/,
    transform: (v: string) => v.toUpperCase(),
  },
};

const macTokens = {
  F: {
    pattern: /[0-9a-fA-F]/,
    transform: (v: string) => v.toUpperCase(),
  },
};

const HEX_CODE = `const tokens = {
  '#': {
    pattern: /[0-9a-fA-F]/,
    transform: (value: string) => value.toUpperCase(),
  },
};

<InputMask mask="######" tokens={tokens} placeholder="HEX color" />`;

const MAC_CODE = `const tokens = {
  F: {
    pattern: /[0-9a-fA-F]/,
    transform: (value: string) => value.toUpperCase(),
  },
};

<InputMask mask="FF:FF:FF:FF:FF:FF" tokens={tokens} placeholder="MAC address" />`;

export const CustomTokensExample = () => (
  <Section
    id="custom-tokens"
    title="Custom tokens"
    description="Define your own tokens with a pattern regex and an optional transform function applied to each character before masking."
  >
    <div className={styles.examples}>
      <InputPreview title="HEX color" code={HEX_CODE}>
        <div className={styles.inputRow}>
          <InputMask
            component={Input}
            className={styles.input}
            mask="######"
            tokens={hexTokens}
            placeholder="e.g. 1A2B3C"
            maxLength={6}
          />
        </div>
      </InputPreview>

      <InputPreview title="MAC address" code={MAC_CODE}>
        <InputMask
          component={Input}
          className={styles.input}
          mask="FF:FF:FF:FF:FF:FF"
          tokens={macTokens}
          placeholder="AA:BB:CC:DD:EE:FF"
        />
      </InputPreview>
    </div>
  </Section>
);
