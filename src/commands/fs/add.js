import { writeFile } from 'fs/promises';
import { getAbsPath } from '../../utils/pathHelp.js';

export const add = async (command) => {
    const filePath = command.arguments[0];
    const absFilePath = await getAbsPath(filePath);

    await writeFile(absFilePath, '', {
        flag: 'ax'
    });
};

