import { promisify } from 'util';
import { pipeline } from 'stream';
import { createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { getAbsPath } from '../../utils/pathHelp.js';
import { decompress_success } from '../../common/messages.js';

export const decompress = async (command) => {
    const fileToDecompress = command.arguments[0];
    const decompressedFile = command.arguments[1];
    const fileToDecompressPath = await getAbsPath(fileToDecompress);
    const decompressedFilePath = await getAbsPath(decompressedFile);

    await brotliAlg(fileToDecompressPath, decompressedFilePath);
    console.log(decompress_success);
}

const brotliAlg = async (input, output) => {
    const brotli = createBrotliDecompress();
    const promisified = promisify(pipeline);
    const src = createReadStream(input);
    const dest = createWriteStream(output);

    await promisified(src, brotli, dest);
};