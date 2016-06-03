# IP to Array

Parse an IP address into a Typed Array.

## Installation

```sh
npm install --save ip-to-array
```

## Usage

```js
const ipToArray = require('ip-to-array')

ipToArray('127.0.0.1')
// => [127, 0, 0, 1]

ipToArray('2001:0db8:85a3:0000:0000:8a2e:0370:7334')
// => [0x2001, 0x0db8, 0x85a3, 0x0000, 0x0000, 0x8a2e, 0x0370, 0x7334]

ipToArray('2001:db8::1')
// => [0x2001, 0x0db8, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001]
```

## API

### `ipToArray(ip: string) => TypedArray`

Parse an IP address into a Typed Array. Will return an `Uint8Array` for IPv4
addresses, and an `Uint16Array` for IPv6 addresses.

Will throw an error if the input string is not a valid IP address.
