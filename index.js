"use strict"

module.exports = getPropertyDescriptor
function getPropertyDescriptor(obj, key) {
  return Object.getOwnPropertyDescriptor(obj, key) || getPropertyDescriptor(Object.getPrototypeOf(obj), key)
}
