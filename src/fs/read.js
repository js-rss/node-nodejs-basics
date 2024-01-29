import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';

const read = async () => {

const Valid__Path = fileURLToPath(import.meta.url);
const __dirname = dirname(Valid__Path);
const File__Path = path.join(__dirname, '/files/fileToRead.txt');
const Read__Data = fs.createReadStream( File__Path, 'utf-8');
let out = '';

Read__Data.on('data', (data) => { out += data; });
Read__Data.on('end', () => process.stdout.write(out));
Read__Data.on('error', (error) => console.error('FS operation failed'));
};

await read();