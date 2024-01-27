import crypto from 'node:crypto';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises';
import { stdout } from 'node:process';

const Valid__Path = fileURLToPath(import.meta.url);
const __dirname = dirname(Valid__Path);
const Src__Path = path.join(__dirname, 'files','fileToCalculateHashFor.txt');

const calculateHash = async () => {

    const Secret = await fs.readFile(Src__Path);
    const Hash__256 = crypto.createHash("sha256", Secret);
    stdout.write(Hash__256.update(Secret).digest("hex"));

};

await calculateHash();