//Print in console list of all files and folders in current directory.
import { readdir } from 'fs/promises';
import { resolve } from 'path';
import { currDir } from "../../utils/currentDir.js";

export const ls = async() => {
  try {
    const currentDir = resolve(process.cwd());
    const filesList = await readdir(currentDir);
    console.table(filesList);
  } catch (error) {
    console.error('Operation failed');
  };
};