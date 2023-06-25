//Go upper from current directory
import { currDir } from "../../utils/currentDir.js";

export const up = async () =>{
    process.chdir('..');
    currDir();
    };