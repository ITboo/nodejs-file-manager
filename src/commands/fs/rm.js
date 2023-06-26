import { rm } from 'fs/promises';
import { getAbsPath } from '../../utils/pathHelp.js';

export const remove = async (command) => {
    const filePath = command.arguments[0];
    const absPath = await getAbsPath(filePath);

    await rm(absPath);
};
