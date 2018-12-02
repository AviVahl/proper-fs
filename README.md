# proper-fs
[![npm version](https://badge.fury.io/js/proper-fs.svg)](https://www.npmjs.com/package/proper-fs)

Node fs API tweaked for modern usage.

## What?

Same as Node.js's native `fs` module, but with the following changes:
- Promise-based async methods. Uses Node's native `util.promisify` for lowest possible overhead.
- Sync methods included as-is.
- Deprecated methods are not included.
- `watchFile/unwatchFile` are not included, due to `watch` being the recommended method.
- Exports `isCaseSensitive` boolean after checking the current platform.
- Additional helper methods:
  - `fileExists` and `fileExistsSync`
  - `directoryExists` and `directoryExistsSync`
  - `ensureDirectory` and `ensureDirectorySync`

## Why?

Node 8 is currently (July 2018) LTS. Async/await is natively supported, but native async `fs` methods are callback-based. I find myself promisifying Node's methods over and over. Node 10 already exposes Promise-based API, but I needed a low-overhead solution that works on both Current and LTS versions.

## License

MIT
