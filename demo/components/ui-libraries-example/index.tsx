import { forwardRef } from 'react';
import { InputMask } from 'react-tiny-mask';

import { Input as MuiInput } from '@mui/material';
import { Input as AntInput, InputRef } from 'antd';

import { InputPreview, Section } from '../ui';

import styles from './styles.module.css';

const AntInputAdapter = forwardRef<
  InputRef,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ onChange, value, size, ...rest }, ref) => (
  <AntInput
    {...rest}
    ref={ref}
    value={value as string}
    onInput={(e) =>
      onChange?.(e as unknown as React.ChangeEvent<HTMLInputElement>)
    }
  />
));

AntInputAdapter.displayName = 'AntInputAdapter';

const MUI_CODE = `import { InputMask } from 'react-tiny-mask';
import { Input } from '@mui/material';

<InputMask
  mask="+7 (###) ### ## ##"
  component={Input}
  placeholder="+7 (___) ___ __ __"
/>`;

const ANTD_CODE = `import { forwardRef } from 'react';
import { InputMask } from 'react-tiny-mask';
import { Input, InputRef } from 'antd';

// Ant Design v6 wraps the native onChange event,
// so we use onInput to forward the native event instead.
const AntInputAdapter = forwardRef
  InputRef,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ onChange, value, size, ...rest }, ref) => (
  <Input
    {...rest}
    ref={ref}
    value={value}
    onInput={(e) => onChange?.(e)}
  />
));

<InputMask
  mask="+7 (###) ### ## ##"
  component={AntInputAdapter}
  placeholder="+7 (___) ___ __ __"
/>`;

export const UiLibrariesExample = () => (
  <Section
    id="ui-libraries"
    title="UI library integration"
    description="Use the component prop to plug InputMask into any third-party input. All native input props are forwarded automatically."
  >
    <div className={styles.examples}>
      <InputPreview
        title="MUI"
        description={
          <>
            MUI's <code>Input</code> forwards all standard input props and works
            out of the box.
          </>
        }
        code={MUI_CODE}
      >
        <InputMask
          mask="+7 (###) ### ## ##"
          placeholder="+7 (___) ___ __ __"
          component={MuiInput}
          className={styles.input}
        />
      </InputPreview>

      <InputPreview
        title="Ant Design"
        description={
          <>
            Ant Design v6 <code>Input</code> wraps the native{' '}
            <code>onChange</code> event, so a small adapter using{' '}
            <code>onInput</code> is needed to forward the native event
            correctly.
          </>
        }
        code={ANTD_CODE}
      >
        <InputMask
          mask="+7 (###) ### ## ##"
          placeholder="+7 (___) ___ __ __"
          component={AntInputAdapter}
          className={styles.input}
        />
      </InputPreview>
    </div>
  </Section>
);
