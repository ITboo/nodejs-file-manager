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
            await COMMAND.cd(command);
            break;

        case CASE.EXIT:
            await COMMAND.exit();
            break;

        case CASE.HASH:
            await COMMAND.calculateHash(command);
            break;

        case CASE.CAT:
            await COMMAND.cat(command);
            break;

        case CASE.ADD:
            await COMMAND.add(command);
            break;

        case CASE.RN:
            await COMMAND.rn(command);
            break;

        case CASE.RM:
            await COMMAND.remove(command);
            break;

        case CASE.CP:
            await COMMAND.cp(command);
            break;

        case CASE.MV:
            await COMMAND.mv(command);
            break;

        case CASE.COMPRESS:
            await COMMAND.compress(command);
            break;

        case CASE.DECOMPRESS:
            await COMMAND.decompress(command);
            break;

        case CASE.OS:
            await COMMAND.os(command)
            break

        default: {
            console.log(
                `No such command "${commandName}". Type "help" to see all available commands.`
            );
            break;
        };
    };
};
