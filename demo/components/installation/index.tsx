import { CodeBlock, Section } from '../ui';

import styles from './styles.module.css';

export const Installation = () => (
  <Section id="installation" title="Installation">
    <div className={styles.options}>
      <div className={styles.option}>
        <span className={styles.label}>yarn</span>
        <CodeBlock code="yarn add react-tiny-mask" language="bash" />
      </div>
      <div className={styles.option}>
        <span className={styles.label}>npm</span>
        <CodeBlock code="npm i react-tiny-mask" language="bash" />
      </div>
    </div>
  </Section>
);
