import { promisify } from 'util';
import { pipeline } from 'stream';
import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { compress_success } from '../../common/messages.js';

export const compress = async (command) => {
    console.log (compress_success)
}

const brotliAlg = async (input, output) => {
    const brotli = createBrotliCompress();
    const promisified = promisify(pipeline);
    const src = createReadStream(input);
    const dest = createWriteStream(output);

    await promisified(src, brotli, dest);
};