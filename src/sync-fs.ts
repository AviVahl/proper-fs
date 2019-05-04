import { statSync, mkdirSync } from 'fs';
import { dirname } from 'path';

export {
    accessSync,
    appendFileSync,
    chmodSync,
    chownSync,
    closeSync,
    copyFileSync,
    existsSync,
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
} from 'fs';

/**
 * Check if a path points to an existing file.
 *
 * @param path possible file path
 * @param statFn optional custom stat function (e.g. lstat to detect links)
 */
export function fileExistsSync(path: string, statFn = statSync): boolean {
    try {
        return statFn(path).isFile();
    } catch {
        return false;
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
        return statFn(path).isDirectory();
    } catch {
        return false;
    }
}

/**
 * Ensure a directory and its parent directory chain exists.
 *
 * @param directoryPath directory to ensure
 */
export function ensureDirectorySync(directoryPath: string): void {
    if (directoryExistsSync(directoryPath)) {
        return;
    }
    try {
        mkdirSync(directoryPath);
    } catch (e) {
        const parentPath = dirname(directoryPath);
        if (parentPath === directoryPath) {
            throw e;
        }
        ensureDirectorySync(parentPath);
        mkdirSync(directoryPath);
    }
}
