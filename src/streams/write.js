import fs from 'node:fs';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { stdin, stdout } from 'node:process';
import readline from 'node:readline';

const Valid__Path = fileURLToPath(import.meta.url);
const __dirname = dirname(Valid__Path);
const Src__Path = path.join(__dirname, 'files','fileToWrite.txt');

const write = async () => {
    
    stdout.write('To exit, press "CTRL + C" ' + '\n'+'\n' + 'Enter any text' +'\n');

    const Write__Stream = fs.createWriteStream(Src__Path, { flags: 'a' });
    const Read = readline.createInterface(stdin);

    Read.on('line', (data) => {
        Write__Stream.write(data + '\n');
      });
      
};

await write();