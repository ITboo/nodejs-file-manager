import { promisify } from 'util';
import { pipeline } from 'stream';
import { createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { decompress_success } from '../../common/messages.js';

export const decompress = async (command) => {
    console.log(decompress_success);
}

const brotliAlg = async (input, output) => {
    const brotli = createBrotliDecompress();
    const promisified = promisify(pipeline);
    const src = createReadStream(input);
    const dest = createWriteStream(output);

    await promisified(src, brotli, dest);
};