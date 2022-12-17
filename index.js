import {createInterface} from 'node:readline/promises';
import { args } from "./helpers/argsHelp.js";
import { currDir } from "./helpers/currentDir.js";

//Greeting
const username = args['--username'] ? args['--username'] : 'Guest';
console.log(`Welcome to the File Manager, ${username}!`);
currDir();

//Interface
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.prompt();
//обработка ctrl+c
 rl.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
});
 
  rl.on('.exit', () =>{
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
});