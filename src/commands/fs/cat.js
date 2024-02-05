import { createReadStream } from 'fs';
import { resolve as resolvePath } from 'path';
import { cwd } from 'process';

export const cat = async (path) => {
   await new Promise((resolve, reject) => {
      const filePath = resolvePath(cwd(), path);
      const fileContent = createReadStream(filePath, { encoding: 'utf8' });
  
      fileContent.on('data', (chunk) => {
        console.log(chunk);
      });
      fileContent.on('error', reject);
      fileContent.on('end', resolve);
    });
};