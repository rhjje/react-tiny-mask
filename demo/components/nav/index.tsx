import styles from './styles.module.css';

const NAV_LINKS = [
  { href: '#installation', label: 'Installation' },
  { href: '#documentation', label: 'Documentation' },
  { href: '#basic-example', label: 'Basic usage' },
  { href: '#custom-tokens', label: 'Custom tokens' },
  { href: '#dynamic-mask', label: 'Dynamic mask' },
  { href: '#ui-libraries', label: 'UI libraries' },
  { href: '#playground', label: 'Playground' },
];

export const Nav = () => (
  <nav className={styles.nav}>
    <div className={styles.inner}>
      <span className={styles.logo}>react-tiny-mask</span>
      <ul className={styles.links}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a className={styles.link} href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a
        className={styles.github}
        href="https://github.com/rhjje/react-tiny-mask"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </div>
  </nav>
);
