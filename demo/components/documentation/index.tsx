import { CodeBlock, Section } from '../ui';

import styles from './styles.module.css';

const TOKENS_EXAMPLE = `// Default token
{ '#': { pattern: /\\d/ } }

// Custom tokens example — HEX color
const tokens = {
  '#': {
    pattern: /[0-9a-fA-F]/,
    transform: (value: string) => value.toUpperCase(),
  },
};`;

const COMPONENT_EXAMPLE = `const CustomInput = (props) => (
  <input {...props} style={{ color: 'red' }} />
);

<InputMask mask="+7 ### ###-##-##" component={CustomInput} />`;

export const Documentation = () => (
  <Section
    id="documentation"
    title="Documentation"
    description="All available props for the InputMask component."
  >
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Required</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>mask</code>
            </td>
            <td>
              <span className={styles.required}>yes</span>
            </td>
            <td>
              <code>string | string[]</code>
            </td>
            <td>—</td>
            <td>Mask pattern. Pass an array for dynamic masks.</td>
          </tr>
          <tr>
            <td>
              <code>tokens</code>
            </td>
            <td>
              <span className={styles.optional}>no</span>
            </td>
            <td>
              <code>Object</code>
            </td>
            <td>
              <code>{'{ "#": { pattern: /\\d/ } }'}</code>
            </td>
            <td>
              Token definitions. Each key maps to a pattern and optional
              transform.
            </td>
          </tr>
          <tr>
            <td>
              <code>component</code>
            </td>
            <td>
              <span className={styles.optional}>no</span>
            </td>
            <td>
              <code>ElementType</code>
            </td>
            <td>—</td>
            <td>
              Custom input component rendered instead of the native{' '}
              <code>&lt;input&gt;</code>.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className={styles.details}>
      <div>
        <h3 className={styles.subTitle}>tokens</h3>
        <p className={styles.subDescription}>
          Each token key is a character in the mask string. You can define a{' '}
          <code>transform</code> function that is applied to each character
          before it is placed into the output.
        </p>
        <CodeBlock code={TOKENS_EXAMPLE} language="tsx" />
      </div>
      <div>
        <h3 className={styles.subTitle}>component</h3>
        <p className={styles.subDescription}>
          Use this prop to integrate with third-party input components such as
          styled inputs or UI-kit fields. All mask-related props are forwarded
          automatically.
        </p>
        <CodeBlock code={COMPONENT_EXAMPLE} language="tsx" />
      </div>
    </div>
  </Section>
);
