import { fileExistsSync } from './sync-fs'

/**
 * Whether the current platform has case-sensitive paths.
 */
export const isCaseSensitive = !fileExistsSync(__filename.toUpperCase()) // assumes this file name is lower-cased
