import { BasicExample } from './components/basic-example';
import { CustomTokensExample } from './components/custom-tokens-example';
import { Documentation } from './components/documentation';
import { DynamicMaskExample } from './components/dynamic-mask-example';
import { Header } from './components/header';
import { Installation } from './components/installation';
import { Nav } from './components/nav';
import { Playground } from './components/playground';
import { UiLibrariesExample } from './components/ui-libraries-example';
import styles from './App.module.css';

export const App = () => (
  <div className={styles.app}>
    <Nav />
    <Header />
    <main className={styles.main}>
      <Installation />
      <Documentation />
      <BasicExample />
      <CustomTokensExample />
      <DynamicMaskExample />
      <UiLibrariesExample />
      <Playground />
    </main>
    <footer className={styles.footer}>
      <span>react-tiny-mask · MIT License</span>
      <a
        href="https://github.com/rhjje/react-tiny-mask"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </footer>
  </div>
);
