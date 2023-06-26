import { rename } from 'fs/promises';
import { getAbsPath } from '../../utils/pathHelp.js';
import { rn_success } from '../../common/messages.js';

export const rn = async (command) => {
    const fileName = command.arguments[0];
    const newName = command.arguments[1];
    const filePath = await getAbsPath(fileName);
    const newFilePath = await getAbsPath(newName);

    await rename(filePath, newFilePath);
    console.log(rn_success);
};