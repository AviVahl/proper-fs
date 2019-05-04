import fs from 'fs';
import { promisify } from 'util';
import { dirname } from 'path';

export const access = promisify(fs.access);
export const appendFile = promisify(fs.appendFile);
export const chmod = promisify(fs.chmod);
export const chown = promisify(fs.chown);
export const close = promisify(fs.close);
export const copyFile = promisify(fs.copyFile);
export const exists = promisify(fs.exists);
export const fchmod = promisify(fs.fchmod);
export const fchown = promisify(fs.fchown);
export const fdatasync = promisify(fs.fdatasync);
export const fstat = promisify(fs.fstat);
export const fsync = promisify(fs.fsync);
export const ftruncate = promisify(fs.ftruncate);
export const futimes = promisify(fs.futimes);
export const link = promisify(fs.link);
export const lstat = promisify(fs.lstat);
export const mkdir = promisify(fs.mkdir);
export const mkdtemp = promisify(fs.mkdtemp);
export const open = promisify(fs.open);
export const read = promisify(fs.read);
export const readdir = promisify(fs.readdir);
export const readFile = promisify(fs.readFile);
export const readlink = promisify(fs.readlink);
export const realpath = promisify(fs.realpath);
export const rename = promisify(fs.rename);
export const rmdir = promisify(fs.rmdir);
export const stat = promisify(fs.stat);
export const symlink = promisify(fs.symlink);
export const truncate = promisify(fs.truncate);
export const unlink = promisify(fs.unlink);
export const utimes = promisify(fs.utimes);
export const write = promisify(fs.write);
export const writeFile = promisify(fs.writeFile);

/**
 * Check if a path points to an existing file.
 *
 * @param path possible file path
 * @param statFn optional custom stat function (e.g. lstat to detect links)
 */
export async function fileExists(path: string, statFn = stat): Promise<boolean> {
    try {
        return (await statFn(path)).isFile();
    } catch {
        return false;
    }
}

/**
 * Check if a path points to an existing directory.
 *
 * @param path possible directory path
 * @param statFn optional custom stat function (e.g. lstat to detect links)
 */
export async function directoryExists(path: string, statFn = stat): Promise<boolean> {
    try {
        return (await statFn(path)).isDirectory();
    } catch {
        return false;
    }
}

/**
 * Ensure a directory and its parent directory chain exists.
 *
 * @param directoryPath directory to ensure
 */
export async function ensureDirectory(directoryPath: string): Promise<void> {
    if (await directoryExists(directoryPath)) {
        return;
    }
    try {
        await mkdir(directoryPath);
    } catch (e) {
        const parentPath = dirname(directoryPath);
        if (parentPath === directoryPath) {
            throw e;
        }
        await ensureDirectory(parentPath);
        await mkdir(directoryPath);
    }
}
