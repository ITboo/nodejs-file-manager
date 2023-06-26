import { errorMsg } from '../../utils/error.js';
import { getAbsPath } from '../../utils/pathHelp.js';

export const cd = async (command) => {
  const newPath = command.arguments[0];
  const absNewPath = await getAbsPath(newPath);
  if (absNewPath) {
    process.chdir(absNewPath);
    return absNewPath;
  } else {
    errorMsg();
  }
};