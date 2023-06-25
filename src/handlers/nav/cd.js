//Go to dedicated folder from current directory
import { currDir } from "../../utils/currentDir.js";

export const cd = async (dirPath) =>{
    try {
        process.chdir(dirPath);
        currDir();
      } catch (error) {
        console.error('Operation failed');
      };
    };