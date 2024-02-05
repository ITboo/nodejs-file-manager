import { createReadStream, createWriteStream } from 'fs';
import { resolve, basename, parse } from 'path';
import { createBrotliDecompress, createBrotliCompress } from 'zlib';

export const brotli = async (option, path, newPath) => {
  const EXT = 'br';
  try {
    const needCompress = option === 'compress';

    const filePath = resolve(process.cwd(), path);

    const baseName = basename(filePath);
    const fileName = parse(baseName).name;

    const newFileName = needCompress ? `${baseName}.${EXT}` : fileName;
    const dirPath = resolve(process.cwd(), newPath);
    const brotliPath = resolve(dirPath, newFileName);

    await new Promise((res, rej) => {
      const file = createReadStream(filePath);
      const brotliFile = createWriteStream(brotliPath, { flags: 'wx', });

      const brotliHandler = needCompress ? createBrotliCompress() : createBrotliDecompress();

      file.pipe(brotliHandler).pipe(brotliFile);
      file.on('error', rej);
      file.on('end', res);
    });
  } catch (err) {
    throw err;
  }
};

