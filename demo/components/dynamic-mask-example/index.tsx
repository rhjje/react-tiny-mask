import { InputMask } from 'react-tiny-mask';

import { Input, InputPreview, Section } from '../ui';

import styles from './styles.module.css';

const cardMasks = ['#### ######  #####', '#### #### #### ####'];

const DYNAMIC_CODE = `import { InputMask } from 'react-tiny-mask';

// Mask is chosen automatically based on input length (smallest first)
const masks = ['#### ######  #####', '#### #### #### ####'];

<InputMask mask={masks} placeholder="Card number" />`;

export const DynamicMaskExample = () => (
  <Section
    id="dynamic-mask"
    title="Dynamic mask"
    description="Pass an array of mask strings. The most suitable mask is selected automatically based on input length — shortest mask first."
  >
    <InputPreview
      title="Credit card (Amex vs regular)"
      hint="Amex cards have 15 digits (4-6-5 format), regular cards have 16 (4-4-4-4). Try typing both."
      code={DYNAMIC_CODE}
    >
      <InputMask
        component={Input}
        className={styles.input}
        mask={cardMasks}
        placeholder="Card number"
      />
    </InputPreview>
  </Section>
);
