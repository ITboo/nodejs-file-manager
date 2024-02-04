import * as COMMAND from '../commands/commandList.js'
import { parseInput } from './parser.js';


export const handleCommands = async (line) => {
    const { command, params } = parseInput(line);
    // ! refactor switch-case
    switch (command) {
        case 'help':
            await COMMAND.printHelp();
            break;
        case 'ls':
            await COMMAND.ls();
            break;
        case 'os':
            COMMAND.os(...params);
            break;
        case 'up':
            COMMAND.up();
            break;
        case 'cd':
            COMMAND.cd(...params);
            break;
        case 'cat':
            await COMMAND.cat(...params);
            break;
        case 'add':
            await COMMAND.add(...params);
            break;
        case 'rn':
            await COMMAND.rn(...params);
            break;
        case 'cp':
            await COMMAND.cp(...params);
            break;
        case 'rm':
            await COMMAND.remove(...params);
            break;
        case 'mv':
            await COMMAND.mv(...params);
            break;
        case 'hash':
            await COMMAND.calculateHash(...params);
            break;
        case 'compress':
            await COMMAND.compress(...params);
            break;
        case 'decompress':
            await COMMAND.decompress(...params);
            break;
    }
}