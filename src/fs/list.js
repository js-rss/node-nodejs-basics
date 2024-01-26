import fs from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const Valid__Path = fileURLToPath(import.meta.url);
const __dirname = dirname(Valid__Path);
const Src__Path = path.join(__dirname, 'files');

const list = async () => {
    try {
        const arr = await fs.readdir(Src__Path);
        console.log(arr)
    }
    catch{
        console.error('FS operation failed');
    }
};

await list();