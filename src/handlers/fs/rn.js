import { rename as renameFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import {errorMsg} from '../../helpers/error.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rn = async () => {
    const wrongName = __dirname + '/files/wrongFilename.txt'
    const properName = __dirname + '/files/properFilename.md';
    
    try{
        await renameFile (wrongName, properName);
        console.log (`${properName} has been renamed successfully`);
    } catch (err) {
        errorMsg();
    }
};