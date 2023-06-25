import * as COMMAND from './commandList.js';
import * as CASE from '../common/constants.js'

export const runCommand = async (command) => {
    const commandName = command.name;

    switch (commandName) {
        case CASE.HELP:
            await COMMAND.printHelp();
            break;

        case CASE.UP:
            await COMMAND.up();
            break;

        case CASE.LS:
            await COMMAND.ls();
            break;

        case CASE.CD:
            await COMMAND.cd();
            break;

        case CASE.HASH:
            await COMMAND.hash();
            break;

        case CASE.CAT:
            await COMMAND.cat();
            break;

        case CASE.ADD:
            await COMMAND.add();
            break;

        case CASE.RN:
            await COMMAND.rn();
            break;

        case CASE.RM:
            await COMMAND.rm();
            break;

        case CASE.CP:
            await COMMAND.cp();
            break;

        case CASE.MV:
            await COMMAND.mv();
            break;

        case CASE.COMPRESS:
            await COMMAND.compress();
            break;

        case CASE.DECOMPRESS:
            await COMMAND.decompress();
            break;

        //TODO OS commands
    }

};