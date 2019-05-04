// Async, Promise-returning, fs methods
export * from './promised-fs';

// Sync fs methods
export * from './sync-fs';

export {
    constants,

    PathLike,
    Stats,

    // Watch API
    watch,
    FSWatcher,

    // Stream API
    createReadStream,
    createWriteStream,
    ReadStream,
    WriteStream
} from 'fs';

export { isCaseSensitive } from './is-case-sensitive';
