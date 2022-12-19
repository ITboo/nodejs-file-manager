import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import {errorMsg} from '../../helpers/error.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const cat = async () => {
    const filePath = path.join(__dirname, 'files','fileToRead.txt');
    
    try{
        const content = await readFile(filePath, 'utf-8');
        console.log(content);
    }catch (err){
        errorMsg();
    }
};