import path from 'path';
import { doesExist } from '../../utils/asserts.js';

export const cd = async (cwd, paths) => {
  try {
    const newCwd = path.join(cwd, paths.join(' '));
    const pathDoesExist = await doesExist(newCwd);
    if (pathDoesExist) {
      process.chdir(newCwd);
      return newCwd;
    } else {
      console.log(`No such directory ${newCwd} exists.`);
      return cwd;
    }
  } catch (error) {
  console.log(error)
  }

};