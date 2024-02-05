import { rm as rmFile} from 'fs/promises';
import { resolve } from 'path';
import { cwd } from 'process';

import { rm_success } from '../../common/messages.js';

export const remove = async (path) => {
    const filePath = resolve(cwd(), path);
    await rmFile(filePath);
    console.log(rm_success);
};
