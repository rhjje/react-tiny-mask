# react-tiny-mask

Lightweight (>2KB gzipped) and dependency free mask input, created specifically for React (inspired by [vue-the-mask](https://github.com/vuejs-tips/vue-the-mask))

## Installation

```
yarn add react-tiny-mask
```

or

```
npm i react-tiny-mask
```

## Usage

```javascript
import { InputMask } from 'react-tiny-mask';

export const App = () => {
  return <InputMask mask="+7 ### ###-##-##" />;
};
```

## Properties

|             Name              | Required |          Type           |           Default            | Description                                     |
| :---------------------------: | :------: | :---------------------: | :--------------------------: | :---------------------------------------------- |
|      **[`mask`](#mask)**      |  `true`  | `string, Array<string>` |                              | Mask pattern                                    |
|    **[`tokens`](#tokens)**    | `false`  |        `Object`         | `{ '#': { pattern: /\d/ } }` | Custom tokens for mask mask                     |
| **[`component`](#component)** | `false`  |      `ElementType`      |                              | Custom component instead of regular `<input />` |

### mask

Mask pattern. Can be a string or an array of strings (**[`dynamic mask`](#dynamic-mask)**).

```javascript
<InputMask mask="+7 ### ###-##-##" />
```

or

```javascript
<InputMask mask={['###-#', '####-#', '#####-#', '######-#']} />
```

### tokens

By default, one token is defined:

```javascript
{ '#': { pattern: /\d/ } } // digits
```

For more complex masks, you can define your own tokens.

For example, Colors HEX:

```javascript
import { InputMask } from 'react-tiny-mask';

const tokens = {
  '#': {
    pattern: /[0-9a-fA-F]/,
  },
};

export const App = () => {
  return <InputMask mask="######" tokens={tokens} />;
};
```

For custom tokens you can define `transform` function, applied to a character before masking. For example, transforming letters to uppercase on input:

```javascript
import { InputMask } from 'react-tiny-mask';

const tokens = {
  '#': {
    pattern: /[0-9a-fA-F]/,
  },
};

export const App = () => {
  return <InputMask mask="######" tokens={tokens} />;
};
```

### component

Property for integration with other input components:

```javascript
import { InputMask } from 'react-tiny-mask';

const CustomInput = (props) => <input {...props} style={{ color: 'red' }} />;

export const App = () => {
  return <InputMask mask="+7 ### ###-##-##" component={CustomInput} />;
};
```

## Dynamic mask

Pass `mask` as array of strings to make it dynamic. The suitable mask will be chosen by length (smallest first):

```javascript
import { InputMask } from 'react-tiny-mask';

const mask = ['###-#', '####-#', '#####-#', '######-#'];

export const App = () => {
  return <InputMask mask={mask} />;
};
```
