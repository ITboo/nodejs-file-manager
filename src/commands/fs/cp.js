import { createReadStream, createWriteStream } from 'fs';
import { resolve as pathResolve, basename } from 'path';

export const cp = async (path, newPath) => {
   const fileToCopyPath = pathResolve(process.cwd(), path);
   const fileName = basename(fileToCopyPath);
   const dirToWritePath = pathResolve(process.cwd(), newPath);
   const fileToWritePath = pathResolve(dirToWritePath, fileName);
   try {
      await new Promise(async (res, rej) => {
         const fileToCopy = createReadStream(fileToCopyPath, { encoding: 'utf8' });
         const fileToWrite = createWriteStream(fileToWritePath, {
            flags: 'wx',
         });

         fileToCopy.pipe(fileToWrite);
         fileToCopy.on('error', rej);
         fileToCopy.on('end', res);
      });
   } catch (error) {
      throw error;
   }
}
