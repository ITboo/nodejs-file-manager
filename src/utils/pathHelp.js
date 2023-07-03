import {join, isAbsolute} from 'path'

export const getAbsPath = async (path) => {
    const currentDir = process.cwd;
    const isPathAbsolute = isAbsolute(path);
    const absPath = isPathAbsolute ? path : join(currentDir, path);

    return absPath;
};