System.config({
  "paths": {
    "*": "*.js",
    "TangentJS/*": "src/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "jquery": "github:components/jquery@2.1.3",
    "live-server": "npm:live-server@0.6.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.0.1"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.10"
    },
    "github:jspm/nodelibs-events@0.1.0": {
      "events-browserify": "npm:events-browserify@0.0.1"
    },
    "github:jspm/nodelibs-fs@0.1.0": {
      "assert": "npm:assert@1.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0"
    },
    "github:jspm/nodelibs-http@1.7.0": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:accepts@1.2.2": {
      "mime-types": "npm:mime-types@2.0.7",
      "negotiator": "npm:negotiator@0.5.0"
    },
    "npm:ambi@2.0.0": {
      "typechecker": "npm:typechecker@2.0.8"
    },
    "npm:asn1.js-rfc3280@1.0.0": {
      "asn1.js": "npm:asn1.js@1.0.3"
    },
    "npm:asn1.js@1.0.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@1.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:bal-util@1.18.0": {
      "ambi": "npm:ambi@2.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "eachr": "npm:eachr@2.0.2",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "extendr": "npm:extendr@2.0.1",
      "getsetdeep": "npm:getsetdeep@2.0.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "safecallback": "npm:safecallback@1.0.1",
      "safefs": "npm:safefs@2.0.3",
      "taskgroup": "npm:taskgroup@2.0.0",
      "typechecker": "npm:typechecker@2.0.8",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:base64-url@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:basic-auth-connect@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0"
    },
    "npm:basic-auth@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:batch@0.5.2": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:body-parser@1.10.2": {
      "bytes": "npm:bytes@1.0.0",
      "depd": "npm:depd@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.6",
      "media-typer": "npm:media-typer@0.3.0",
      "on-finished": "npm:on-finished@2.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "qs": "npm:qs@2.3.3",
      "raw-body": "npm:raw-body@1.3.2",
      "type-is": "npm:type-is@1.5.5",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:browserify-aes@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@1.1.1": {
      "bn.js": "npm:bn.js@1.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:browserify-sign@2.8.0": {
      "bn.js": "npm:bn.js@1.1.0",
      "browserify-rsa": "npm:browserify-rsa@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@1.0.1",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@2.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.5",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer@3.0.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.4",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:colors@1.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:compressible@2.0.1": {
      "mime-db": "npm:mime-db@1.5.0"
    },
    "npm:compression@1.3.0": {
      "accepts": "npm:accepts@1.2.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bytes": "npm:bytes@1.0.0",
      "compressible": "npm:compressible@2.0.1",
      "debug": "npm:debug@2.1.1",
      "on-headers": "npm:on-headers@1.0.0",
      "vary": "npm:vary@1.0.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:connect-timeout@1.5.0": {
      "debug": "npm:debug@2.1.1",
      "http-errors": "npm:http-errors@1.2.8",
      "ms": "npm:ms@0.7.0",
      "on-headers": "npm:on-headers@1.0.0"
    },
    "npm:connect@2.28.2": {
      "basic-auth-connect": "npm:basic-auth-connect@1.0.0",
      "body-parser": "npm:body-parser@1.10.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bytes": "npm:bytes@1.0.0",
      "compression": "npm:compression@1.3.0",
      "connect-timeout": "npm:connect-timeout@1.5.0",
      "cookie": "npm:cookie@0.1.2",
      "cookie-parser": "npm:cookie-parser@1.3.3",
      "cookie-signature": "npm:cookie-signature@1.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "csurf": "npm:csurf@1.6.5",
      "debug": "npm:debug@2.1.1",
      "depd": "npm:depd@1.0.0",
      "errorhandler": "npm:errorhandler@1.3.2",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "express-session": "npm:express-session@1.10.1",
      "finalhandler": "npm:finalhandler@0.3.3",
      "fresh": "npm:fresh@0.2.4",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "http-errors": "npm:http-errors@1.2.8",
      "media-typer": "npm:media-typer@0.3.0",
      "method-override": "npm:method-override@2.3.1",
      "morgan": "npm:morgan@1.5.1",
      "multiparty": "npm:multiparty@3.3.2",
      "on-headers": "npm:on-headers@1.0.0",
      "parseurl": "npm:parseurl@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pause": "npm:pause@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "qs": "npm:qs@2.3.3",
      "response-time": "npm:response-time@2.2.0",
      "serve-favicon": "npm:serve-favicon@2.2.0",
      "serve-index": "npm:serve-index@1.6.0",
      "serve-static": "npm:serve-static@1.8.1",
      "type-is": "npm:type-is@1.5.5",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "utils-merge": "npm:utils-merge@1.0.0",
      "vhost": "npm:vhost@3.0.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:cookie-parser@1.3.3": {
      "cookie": "npm:cookie@0.1.2",
      "cookie-signature": "npm:cookie-signature@1.0.5"
    },
    "npm:cookie-signature@1.0.5": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:crc@3.2.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@1.0.3": {
      "bn.js": "npm:bn.js@1.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@1.0.1"
    },
    "npm:create-hash@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.0",
      "sha.js": "npm:sha.js@2.3.6",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.9.10": {
      "browserify-aes": "npm:browserify-aes@1.0.0",
      "browserify-sign": "npm:browserify-sign@2.8.0",
      "create-ecdh": "npm:create-ecdh@1.0.3",
      "create-hash": "npm:create-hash@1.1.0",
      "create-hmac": "npm:create-hmac@1.1.1",
      "diffie-hellman": "npm:diffie-hellman@2.2.3",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2-compat": "npm:pbkdf2-compat@2.0.1",
      "public-encrypt": "npm:public-encrypt@1.1.2",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:csrf@2.0.4": {
      "base64-url": "npm:base64-url@1.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "rndm": "npm:rndm@1.1.0",
      "scmp": "npm:scmp@1.0.0",
      "uid-safe": "npm:uid-safe@1.0.2"
    },
    "npm:csurf@1.6.5": {
      "cookie": "npm:cookie@0.1.2",
      "cookie-signature": "npm:cookie-signature@1.0.5",
      "csrf": "npm:csrf@2.0.4",
      "http-errors": "npm:http-errors@1.2.8"
    },
    "npm:debug@2.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "ms": "npm:ms@0.6.2",
      "net": "github:jspm/nodelibs-net@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:depd@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:destroy@1.0.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:diffie-hellman@2.2.3": {
      "bn.js": "npm:bn.js@1.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@1.1.5",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:eachr@2.0.2": {
      "typechecker": "npm:typechecker@2.0.8"
    },
    "npm:elliptic@1.0.1": {
      "bn.js": "npm:bn.js@1.1.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:errorhandler@1.3.2": {
      "accepts": "npm:accepts@1.2.2",
      "escape-html": "npm:escape-html@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:etag@1.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crc": "npm:crc@3.2.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0"
    },
    "npm:events-browserify@0.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:express-session@1.10.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cookie": "npm:cookie@0.1.2",
      "cookie-signature": "npm:cookie-signature@1.0.5",
      "crc": "npm:crc@3.2.1",
      "debug": "npm:debug@2.1.1",
      "depd": "npm:depd@1.0.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "on-headers": "npm:on-headers@1.0.0",
      "parseurl": "npm:parseurl@1.3.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "uid-safe": "npm:uid-safe@1.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "utils-merge": "npm:utils-merge@1.0.0"
    },
    "npm:extendr@2.0.1": {
      "typechecker": "npm:typechecker@2.0.8"
    },
    "npm:faye-websocket@0.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:finalhandler@0.3.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.1.1",
      "escape-html": "npm:escape-html@1.0.1",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "on-finished": "npm:on-finished@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:getsetdeep@2.0.0": {
      "typechecker": "npm:typechecker@2.0.8"
    },
    "npm:hash.js@1.0.2": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:http-errors@1.2.8": {
      "inherits": "npm:inherits@2.0.1",
      "statuses": "npm:statuses@1.2.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.0"
    },
    "npm:iconv-lite@0.4.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:live-server@0.6.3": {
      "colors": "npm:colors@1.0.3",
      "connect": "npm:connect@2.28.2",
      "faye-websocket": "npm:faye-websocket@0.4.4",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "open": "npm:open@0.0.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "send": "npm:send@0.11.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "watchr": "npm:watchr@2.3.10"
    },
    "npm:method-override@2.3.1": {
      "debug": "npm:debug@2.1.1",
      "methods": "npm:methods@1.1.1",
      "parseurl": "npm:parseurl@1.3.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "vary": "npm:vary@1.0.0"
    },
    "npm:methods@1.1.1": {
      "http": "github:jspm/nodelibs-http@1.7.0"
    },
    "npm:miller-rabin@1.1.5": {
      "bn.js": "npm:bn.js@1.1.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.5.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime-types@2.0.7": {
      "mime-db": "npm:mime-db@1.5.0"
    },
    "npm:mime@1.2.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:morgan@1.5.1": {
      "basic-auth": "npm:basic-auth@1.0.0",
      "debug": "npm:debug@2.1.1",
      "depd": "npm:depd@1.0.0",
      "on-finished": "npm:on-finished@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:multiparty@3.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "readable-stream": "npm:readable-stream@1.1.13",
      "stream-counter": "npm:stream-counter@0.2.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:native-or-bluebird@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:on-finished@2.2.0": {
      "ee-first": "npm:ee-first@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:open@0.0.5": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:parse-asn1@2.0.0": {
      "asn1.js": "npm:asn1.js@1.0.3",
      "asn1.js-rfc3280": "npm:asn1.js-rfc3280@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pemstrip": "npm:pemstrip@0.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parseurl@1.3.0": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:pbkdf2-compat@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:public-encrypt@1.1.2": {
      "bn.js": "npm:bn.js@1.1.0",
      "browserify-rsa": "npm:browserify-rsa@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@2.0.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:raw-body@1.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bytes": "npm:bytes@1.0.0",
      "iconv-lite": "npm:iconv-lite@0.4.6",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:response-time@2.2.0": {
      "depd": "npm:depd@1.0.0",
      "on-headers": "npm:on-headers@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:ripemd160@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:rndm@1.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:safefs@2.0.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:send@0.11.1": {
      "debug": "npm:debug@2.1.1",
      "depd": "npm:depd@1.0.0",
      "destroy": "npm:destroy@1.0.3",
      "escape-html": "npm:escape-html@1.0.1",
      "etag": "npm:etag@1.5.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fresh": "npm:fresh@0.2.4",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "mime": "npm:mime@1.2.11",
      "ms": "npm:ms@0.7.0",
      "on-finished": "npm:on-finished@2.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "range-parser": "npm:range-parser@1.0.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:serve-favicon@2.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "etag": "npm:etag@1.5.1",
      "fresh": "npm:fresh@0.2.4",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "ms": "npm:ms@0.7.0",
      "parseurl": "npm:parseurl@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:serve-index@1.6.0": {
      "accepts": "npm:accepts@1.2.2",
      "batch": "npm:batch@0.5.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "http-errors": "npm:http-errors@1.2.8",
      "mime-types": "npm:mime-types@2.0.7",
      "parseurl": "npm:parseurl@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:serve-static@1.8.1": {
      "escape-html": "npm:escape-html@1.0.1",
      "parseurl": "npm:parseurl@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "send": "npm:send@0.11.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "utils-merge": "npm:utils-merge@1.0.0"
    },
    "npm:sha.js@2.3.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:statuses@1.2.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:stream-counter@0.2.0": {
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:taskgroup@2.0.0": {
      "ambi": "npm:ambi@2.0.0",
      "typechecker": "npm:typechecker@2.0.8"
    },
    "npm:type-is@1.5.5": {
      "media-typer": "npm:media-typer@0.3.0",
      "mime-types": "npm:mime-types@2.0.7"
    },
    "npm:typechecker@2.0.8": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:uid-safe@1.0.2": {
      "base64-url": "npm:base64-url@1.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "native-or-bluebird": "npm:native-or-bluebird@1.1.2"
    },
    "npm:url@0.10.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:watchr@2.3.10": {
      "bal-util": "npm:bal-util@1.18.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    }
  }
});

