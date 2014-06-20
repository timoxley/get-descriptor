# get-descriptor

Taking the 'own' out of `Object.getOwnPropertyDescriptor`.

i.e. Same as `Object.getOwnPropertyDescriptor` except it searches the prototype chain.

```js
var proto = {}
Object.defineProperty(proto, 'value', {
  value: 'hello',
  configurable: false,
  enumerable: false,
  writable: false
})
var obj = Object.create(proto)
Object.getOwnPropertyDescriptor(obj, 'value') // => null
getDescriptor(obj, 'value'), descriptor) // => { configurable: false, enumerable: false, value: 'hello', writable: false }
```

## License

MIT
