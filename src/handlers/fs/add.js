import {writeFile} from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import {errorMsg} from '../../helpers/error.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const add = async () => {
    const filePath = __dirname + '/new.txt'
    const content = ' ';

    try{
        await writeFile(filePath, content, {flag:'wx'});
        console.log (`${filePath} has been created successfully`);
    } catch (err) {
        errorMsg();
    }
};

