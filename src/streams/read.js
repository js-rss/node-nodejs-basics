import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const Valid__Path = fileURLToPath(import.meta.url);
const __dirname = dirname(Valid__Path);
const Src__Path = path.join(__dirname, 'files','fileToRead.txt');

const Stream = fs.createReadStream(Src__Path, 'utf8');

const read = async () => {
    Stream.on('data', (chunk) => process.stdout.write(chunk));
   }

await read();
