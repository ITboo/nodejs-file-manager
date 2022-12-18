import {EOL,cpus,homedir,userInfo, arch} from "os";
import { currDir } from "../../helpers/currentDir.js";

export const osEOL = () => {
   console.log(JSON.stringify(EOL));
   currDir();
}

export const cpuInfo = () => {
   console.table(cpus(), ["model", "speed"]);
   currDir();
}

export const homeDirectory = () => {
   console.log(JSON.stringify(homedir()));
   currDir();
}

export const userName = () => {
   console.log(userInfo().username);
   currDir();
}

export const architecture = () => {
   console.log(arch());
   currDir();
}