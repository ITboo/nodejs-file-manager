import { EOL, cpus, homedir, userInfo, arch } from "os";

const osEOL = '--EOL';
const CPUS = '--cpus';
const HOMEDIR = '--homedir';
const USERNAME = '--username';
const ARCHITECTURE = '--architecture';

export const os = async (command) => {
   switch (command.arguments[0]) {
      case osEOL:
         console.log(JSON.stringify(EOL));

         break;
      case CPUS:
         console.table(cpus(), ["model", "speed"]);

         break;
      case HOMEDIR:
         console.log(JSON.stringify(homedir()));

         break;
      case USERNAME:
         console.log(userInfo().username);

         break;
      case ARCHITECTURE:
         console.log(arch());

         break;
      default:
         console.log('Operation failed. Make sure you put proper command')
   }

};




/*
export const osEOL = async (command) => {
   console.log(JSON.stringify(EOL));
};

export const cpuInfo = async (command) => {
   console.table(cpus(), ["model", "speed"]);
};

export const homeDirectory = async (command) => {
   console.log(JSON.stringify(homedir()));
};

export const userName = async (command) => {
   console.log(userInfo().username);
};

export const architecture = async (command) => {
   console.log(arch());
};*/