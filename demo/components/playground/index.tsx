import { useState } from 'react';
import { InputMask } from 'react-tiny-mask';

import { Input, Section } from '../ui';

import { parseMask, parseTokens } from './lib';
import styles from './styles.module.css';

const DEFAULT_MASK = '+7 (###) ### ## ##';
const DEFAULT_TOKENS = '#: /\\d/';
const DEFAULT_PLACEHOLDER = '+7 (___) ___ __ __';

export const Playground = () => {
  const [maskRaw, setMaskRaw] = useState(DEFAULT_MASK);
  const [tokensRaw, setTokensRaw] = useState(DEFAULT_TOKENS);
  const [placeholder, setPlaceholder] = useState(DEFAULT_PLACEHOLDER);

  const parsedTokens = parseTokens(tokensRaw);
  const parsedMask = parseMask(maskRaw);
  const isValid = parsedTokens !== null && maskRaw.trim().length > 0;

  return (
    <Section
      id="playground"
      title="Playground"
      description="Edit props below and see the result in real time."
    >
      <div className={styles.playground}>
        <div className={styles.controls}>
          <div className={styles.field}>
            <label className={styles.label}>
              mask
              <span className={styles.hint}>
                String or JSON array, e.g. <code>["##", "####"]</code>
              </span>
            </label>
            <input
              className={styles.control}
              value={maskRaw}
              onChange={(e) => setMaskRaw(e.target.value)}
              placeholder="+7 (###) ### ## ##"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              tokens
              <span className={styles.hint}>
                One token per line: <br /> KEY: /pattern/ or KEY: /pattern/
                uppercase|lowercase
              </span>
            </label>
            <textarea
              className={styles.control}
              rows={3}
              value={tokensRaw}
              onChange={(e) => setTokensRaw(e.target.value)}
              placeholder="#: /\d/"
            />
            {!parsedTokens && tokensRaw.trim().length > 0 && (
              <span className={styles.error}>Invalid token format</span>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>placeholder</label>
            <input
              className={styles.control}
              value={placeholder}
              onChange={(e) => setPlaceholder(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.result}>
          <span className={styles.resultLabel}>Result</span>
          <div className={styles.previewBox}>
            {isValid ? (
              <InputMask
                key={`${maskRaw}-${tokensRaw}`}
                component={Input}
                mask={parsedMask}
                tokens={parsedTokens}
                placeholder={placeholder}
              />
            ) : (
              <span className={styles.invalid}>
                Fix the props above to see the preview
              </span>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};
