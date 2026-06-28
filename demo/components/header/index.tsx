import { Badge } from '../ui';

import styles from './styles.module.css';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <div className={styles.badges}>
        <Badge path="npm/v/react-tiny-mask" alt="npm version" />
        <Badge path="badge/gzipped-%3C2KB-3b82f6" alt="bundle size" />
        <Badge path="npm/l/react-tiny-mask" alt="license" />
      </div>
      <h1 className={styles.title}>react-tiny-mask</h1>
      <p className={styles.description}>
        Lightweight (&lt;2KB gzipped) and dependency-free mask input, created
        specifically for React.
      </p>
      <div className={styles.actions}>
        <a className={styles.primaryLink} href="#installation">
          Get started
        </a>
        <a
          className={styles.githubLink}
          href="https://github.com/rhjje/react-tiny-mask"
          target="_blank"
          rel="noreferrer"
        >
          GitHub →
        </a>
      </div>
    </div>
  </header>
);
