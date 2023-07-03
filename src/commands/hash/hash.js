import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { getAbsPath } from '../../utils/pathHelp.js';
import { hash_success } from '../../common/messages.js';

export const calculateHash = async (command) => {
    const filePath = command.arguments[0];
    const absFilePath = await getAbsPath(filePath);

    const content = await readFile(absFilePath, { encoding: 'utf8' });

    const hash = createHash('sha256')
        .update(content)
        .digest('hex');
    console.log(hash_success);
    console.log(hash);
};