var test = require('tape')
var getDescriptor = require('../')

test('can get own property descriptor', function(t) {
  var descriptor = {
    value: 'hello',
    configurable: false,
    enumerable: false,
    writable: false
  }
  var a = {}
  Object.defineProperty(a, 'value', descriptor)
  t.deepEqual(getDescriptor(a, 'value'), descriptor)
  t.end()
})

test('can get proto property descriptor', function(t) {
  var descriptor = {
    value: 'hello',
    configurable: false,
    enumerable: false,
    writable: false
  }
  var a = {}
  Object.defineProperty(a, 'value', descriptor)
  t.deepEqual(getDescriptor(Object.create(a), 'value'), descriptor)
  t.end()
})

test('can get proto property descriptor with setter/getter', function(t) {
  function get() {}
  function set() {}
  var descriptor = {
    get: get,
    set: set
  }
  var a = {}
  Object.defineProperty(a, 'value', descriptor)
  var actual = getDescriptor(Object.create(a), 'value')
  t.equal(actual.set, descriptor.set)
  t.equal(actual.get, descriptor.get)
  t.equal(actual.set, set)
  t.equal(actual.get, get)
  t.end()
})
