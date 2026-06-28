import { InputMask } from 'react-tiny-mask';

import { Input, InputPreview, Section } from '../ui';

import styles from './styles.module.css';

const PHONE_CODE = `import { InputMask } from 'react-tiny-mask';

<InputMask mask="+7 (###) ### ## ##" placeholder="+7 (___) ___ __ __" />`;

const DATE_CODE = `import { InputMask } from 'react-tiny-mask';

<InputMask mask="##/##/####" placeholder="DD/MM/YYYY" />`;

export const BasicExample = () => (
  <Section
    id="basic-example"
    title="Basic usage"
    description="The default token # matches any digit. Use it to build common masks like phone numbers and dates."
  >
    <div className={styles.examples}>
      <InputPreview title="Phone number" code={PHONE_CODE}>
        <InputMask
          component={Input}
          className={styles.input}
          mask="+7 (###) ### ## ##"
          placeholder="+7 (___) ___ __ __"
        />
      </InputPreview>

      <InputPreview title="Date" code={DATE_CODE}>
        <InputMask
          component={Input}
          className={styles.input}
          mask="##/##/####"
          placeholder="DD/MM/YYYY"
        />
      </InputPreview>
    </div>
  </Section>
);
