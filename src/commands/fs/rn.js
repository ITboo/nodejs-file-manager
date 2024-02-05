import { rename } from 'fs/promises';
import { resolve } from 'path';
import { cwd } from 'process';

import { rn_success } from '../../common/messages.js';

export const rn = async (currentName, newName) => {
    const filePath = resolve(cwd(), currentName);
    const newFile = resolve(cwd(), newName);
    await rename(filePath, newFile);
    if (rename){
        console.log(rn_success);
    }
};