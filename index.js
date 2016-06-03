'use strict'

var net = require('net')

function parseVersion4 (ip) {
  return new Uint8Array(ip.split('.'))
}

function parseVersion6 (ip) {
  var lastColon = ip.lastIndexOf(':')
  var head = ip.substring(0, lastColon)
  var tail = ip.substring(lastColon + 1)

  var parts
  if (net.isIPv4(tail)) {
    var v4 = parseVersion4(tail)

    parts = head.split(':').concat([
      ((v4[0] << 8) + v4[1]).toString(16),
      ((v4[2] << 8) + v4[3]).toString(16)
    ])
  } else {
    parts = ip.split(':')
  }

  var result = new Uint16Array(8)
  var idx = 0

  for (var i = 0; i < parts.length; i++) {
    if (parts[i] !== '') {
      result[idx++] = parseInt(parts[i], 16)
    } else {
      idx = (8 - parts.length + 1 + i)
    }
  }

  return result
}

module.exports = function (ip) {
  var version = net.isIP(ip)

  switch (version) {
    case 0: throw new Error('Not a valid IP address: ' + ip)
    case 4: return parseVersion4(ip)
    case 6: return parseVersion6(ip)
    default: throw new Error('Support for IPv' + version + ' address is not implemented')
  }
}
