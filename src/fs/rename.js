import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';

const Valid__Path = fileURLToPath(import.meta.url);
const __dirname = dirname(Valid__Path);
const File_Src__Path = path.resolve(__dirname, 'files', 'wrongFilename.txt');
const Renamed__File__Path = path.resolve(__dirname, 'files','properFilename.md');

const rename = async () => {
    try {
        await fs.rename(File_Src__Path,Renamed__File__Path)
    }
    catch {
        console.error('FS operation failed');
    }
};

await rename();