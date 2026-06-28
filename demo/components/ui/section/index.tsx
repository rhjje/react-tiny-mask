import { ReactNode } from 'react';

import styles from './styles.module.css';

interface SectionProps {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export const Section = ({ id, title, description, children }: SectionProps) => (
  <section id={id} className={styles.section}>
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
    {children}
  </section>
);
