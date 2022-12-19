//Go upper from current directory
import { currDir } from "../../helpers/currentDir.js";

export const up = async () =>{
    process.chdir('..');
    currDir();
    };