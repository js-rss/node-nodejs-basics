import fs from 'node:fs';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';

const Valid__Path = fileURLToPath(import.meta.url);
const __dirname = dirname(Valid__Path);

const Input__Path = path.join(__dirname, 'files', 'archive.gz');
const Output__Path = path.join(__dirname, 'files', 'fileToCompress.txt');

const Read__Stream = fs.createReadStream(Input__Path);
const Write__Stream = fs.createWriteStream(Output__Path);
const De__Compress = zlib.createGunzip();

const decompress = async () => {
    
    Read__Stream.pipe(De__Compress).pipe(Write__Stream);

};

await decompress();