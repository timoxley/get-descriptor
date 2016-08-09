# get-descriptor

### Taking the 'own' out of `Object.getOwnPropertyDescriptor`.

[![Build Status](https://travis-ci.org/timoxley/get-descriptor.png?branch=master)](https://travis-ci.org/timoxley/get-descriptor)

Same as `Object.getOwnPropertyDescriptor` except it searches the prototype chain to find the descriptor.

### Installation

```
npm install get-descriptor
```

### Example

```js
var getDescriptor = require('get-descriptor')

var proto = {}

Object.defineProperty(proto, 'value', {
  value: 'hello',
  configurable: false,
  enumerable: false,
  writable: false
})

var obj = Object.create(proto)

// finds 'value' descriptor on prototype chain :D
getDescriptor(obj, 'value'), descriptor) // => { configurable: false, enumerable: false, value: 'hello', writable: false }

// without getDescriptor
Object.getOwnPropertyDescriptor(obj, 'value') // => null
```

## License

MIT
