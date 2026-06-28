import { forwardRef, InputHTMLAttributes } from 'react';

import styles from './styles.module.css';

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={`${styles.input}${className ? ' ' + className : ''}`}
    {...props}
  />
));

Input.displayName = 'Input';
