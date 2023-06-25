import { rm } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { errorMsg } from '../../utils/error.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const remove = async () => {
    const fileToRm = path.join(__dirname, 'files', 'fileToRemove.txt');
    
    try{
        await rm(fileToRm);
        console.log (`${fileToRm} has been deleted successfully`);
    }catch (err){
        errorMsg();
    }
};
