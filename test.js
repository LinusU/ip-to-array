'use strict'

var assert = require('assert')
var ipToArray = require('./')

assert.throws(function () {
  ipToArray('garbage')
})

assert.deepEqual(
  ipToArray('127.0.0.1'),
  new Uint8Array([127, 0, 0, 1])
)

assert.deepEqual(
  ipToArray('2001:0db8:85a3:0000:0000:8a2e:0370:7334'),
  new Uint16Array([0x2001, 0x0db8, 0x85a3, 0x0000, 0x0000, 0x8a2e, 0x0370, 0x7334])
)

assert.deepEqual(
  ipToArray('2001:db8::1'),
  new Uint16Array([0x2001, 0x0db8, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001])
)

assert.deepEqual(
  ipToArray('ffff::127.0.0.1'),
  new Uint16Array([0xffff, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x7f00, 0x0001])
)

assert.deepEqual(
  ipToArray('::ffff:127.0.0.1'),
  new Uint16Array([0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xffff, 0x7f00, 0x0001])
)
