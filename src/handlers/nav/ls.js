//Print in console list of all files and folders in current directory.
import { readdir } from 'fs/promises';
import { resolve } from 'path';
import { currDir } from "../../helpers/currentDir.js";

export const ls = async() => {
  try {
    const currentDir = resolve(process.cwd());
    const filesList = await readdir(currentDir);
    console.table(filesList);
    currDir();
  } catch (error) {
    console.error('Operation failed');
  };
};