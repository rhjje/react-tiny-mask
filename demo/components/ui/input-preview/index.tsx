import { ReactNode } from 'react';

import { CodeBlock } from '../code-block';

import styles from './styles.module.css';

interface InputPreviewProps {
  title: string;
  hint?: ReactNode;
  description?: ReactNode;
  code: string;
  children: ReactNode;
}

export const InputPreview = ({
  title,
  hint,
  description,
  code,
  children,
}: InputPreviewProps) => (
  <div className={styles.example}>
    <h3 className={styles.exampleTitle}>{title}</h3>
    {hint && <p className={styles.hint}>{hint}</p>}
    {description && <p className={styles.description}>{description}</p>}
    <div className={styles.preview}>{children}</div>
    <CodeBlock code={code} />
  </div>
);
