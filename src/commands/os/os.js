import { EOL, cpus, homedir, userInfo, arch } from "os";

export const osEOL = async () => {
   console.log(JSON.stringify(EOL));
};

export const cpuInfo = async () => {
   console.table(cpus(), ["model", "speed"]);
};

export const homeDirectory = async () => {
   console.log(JSON.stringify(homedir()));
};

export const userName = async () => {
   console.log(userInfo().username);
};

export const architecture = async () => {
   console.log(arch());
};