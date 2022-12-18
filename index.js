import {createInterface} from 'node:readline/promises';
import { args } from "./src/helpers/argsHelp.js";
import { currDir } from "./src/helpers/currentDir.js";
import { 
  cd,
  up,
  ls,
  add,
  cat,
  cp,
  mv,
  rm,
  rn,
  calculateHash,
  compress,
  decompress,
  os
 } from './src/handlers/commands.js';

//Greeting
const username = args['--username'] ? args['--username'] : 'Guest';
console.log(`Welcome to the File Manager, ${username}!`);
currDir();

//Interface
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.on('line',  async (input) => {
  switch (input.trim()) { //trim() удаляет пробельные символы с начала и конца строки.
    case 'ls':
      ls();
      break;
    case 'up':
      up();
      break;
    case 'cd':
      cd();
      break;

      case 'add':
        add();
        break;
      case 'cat':
        cat();
        break;
      case 'cp':
        cp();
        break;
        case 'mv':
          mv();
          break;
        case 'rm':
          rm();
          break;
        case 'rn':
          rn();
          break;
          case 'hash':
            calculateHash();
            break;
          case 'compress':
            compress();
            break;
          case 'decomress':
            decompress();
            break;
        /*default:
            console.log('Invalid input');*/
  }
})
rl.prompt();
//обработка ctrl+c
 rl.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
});
 
 /* rl.on('.exit', () =>{
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);});*/