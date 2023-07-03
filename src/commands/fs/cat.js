import { createReadStream } from 'fs';
import { stdout} from 'process';
import { getAbsPath } from '../../utils/pathHelp.js';

export const cat = async (command) => {
    const filePath = command.arguments[0];
    const absPath = await getAbsPath(filePath);

    return new Promise((resolve, reject) => {
        const readStream = createReadStream(absPath);

        readStream.on('data', (chunk) => {
            stdout.write(chunk);
        });

        readStream.on('end', () => {
            resolve();
        });

        readStream.on('error', (error) => {
            reject(error);
        });
    });
};