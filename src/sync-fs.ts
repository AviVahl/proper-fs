import { statSync } from 'fs'

export {
    accessSync,
    appendFileSync,
    chmodSync,
    chownSync,
    closeSync,
    copyFileSync,
    fchmodSync,
    fchownSync,
    fdatasyncSync,
    fstatSync,
    fsyncSync,
    ftruncateSync,
    futimesSync,
    linkSync,
    lstatSync,
    mkdirSync,
    mkdtempSync,
    openSync,
    readSync,
    readdirSync,
    readFileSync,
    readlinkSync,
    realpathSync,
    renameSync,
    rmdirSync,
    statSync,
    symlinkSync,
    truncateSync,
    unlinkSync,
    utimesSync,
    writeSync,
    writeFileSync,
} from 'fs'

/**
 * Check if a path points to an existing file.
 *
 * @param path possible file path
 * @param statFn optional custom stat function (e.g. lstat to detect links)
 */
export function fileExistsSync(path: string, statFn = statSync): boolean {
    try {
        return statFn(path).isFile()
    } catch {
        return false
    }
}

/**
 * Check if a path points to an existing directory.
 *
 * @param path possible directory path
 * @param statFn optional custom stat function (e.g. lstatSync to detect links)
 */
export function directoryExistsSync(path: string, statFn = statSync): boolean {
    try {
        return statFn(path).isDirectory()
    } catch {
        return false
    }
}
