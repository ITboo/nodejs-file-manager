import { promisify } from 'util';
import { pipeline } from 'stream';
import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { getAbsPath } from '../../utils/pathHelp.js';
import { compress_success } from '../../common/messages.js';

export const compress = async (command) => {
    const fileToCompress = command.arguments[0];
    const compressedFile = command.arguments[1];
    const fileToCompressPath = await getAbsPath(fileToCompress);
    const compressedFilePath = await getAbsPath(compressedFile);

    await brotliAlg(fileToCompressPath, compressedFilePath);
    console.log (compress_success)
}

const brotliAlg = async (input, output) => {
    const brotli = createBrotliCompress();
    const promisified = promisify(pipeline);
    const src = createReadStream(input);
    const dest = createWriteStream(output);

    await promisified(src, brotli, dest);
};