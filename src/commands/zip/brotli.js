import { createReadStream, createWriteStream } from 'fs';
import { resolve, basename, parse } from 'path';
import { createBrotliDecompress, createBrotliCompress } from 'zlib';

export const brotli = async (option, path, newPath) => {
    const EXT = 'br';
  try {
    const needCompress = option === 'compress';

    const fileToConvertPath = resolve(process.cwd(), path);

    const baseName = basename(fileToConvertPath);
    const fileName = parse(baseName).name;

    const fileNameToWrite = needCompress ? `${baseName}.${EXT}` : fileName;
    const dirToWritePath = resolve(process.cwd(), newPath);
    const fileToWritePath = resolve(dirToWritePath, fileNameToWrite);

    await new Promise((res, rej) => {
      const fileToConvert = createReadStream(fileToConvertPath);
      const fileToWrite = createWriteStream(fileToWritePath, { flags: 'wx',});

      const brotliHandler = needCompress ? createBrotliCompress() : createBrotliDecompress();

      fileToConvert.pipe(brotliHandler).pipe(fileToWrite);
      fileToConvert.on('error', rej);
      fileToConvert.on('end', res);
    });
  } catch (err) {
    throw err;
  }
};

