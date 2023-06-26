import { createReadStream, createWriteStream } from 'fs';
import { basename, join } from 'path';
import { getAbsPath } from '../../utils/pathHelp.js';

export const cp = async (command) => {
    const fileToCopy = command.arguments[0];
    const copy = command.arguments[1];
    const fileToCopyPath = await getAbsPath(fileToCopy);
    const copyPath = await getAbsPath(copy);

    const baseName = basename(fileToCopy);
    const absoluteCopiedFilePath = join(copyPath, baseName);

    return new Promise((resolve, reject) => {
        const readStream = createReadStream(fileToCopyPath);
        const writeStream = createWriteStream(copyPath);

        readStream.on('data', (chunk) => {
            writeStream.write(chunk);
        });

        readStream.on('end', () => {
            resolve();
        });

        readStream.on('error', (error) => {
            reject(error);
        })
    });
};