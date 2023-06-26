import { readdir } from 'fs/promises';
import { resolve } from 'path';

export const ls = async() => {
  try {
    const currentDir = resolve(process.cwd());
    const filesList = await readdir(currentDir);
    console.table(filesList);
  } catch (error) {
    console.error('Operation failed');
  };
};