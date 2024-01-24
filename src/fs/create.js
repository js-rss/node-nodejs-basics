import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';

const create = async () => {

const Valid__Path = fileURLToPath(import.meta.url);
const __dirname = dirname(Valid__Path); // __dirname like Common JS
const File__Path = path.join(__dirname, '/files/fresh.txt');
const Content = 'I am fresh and young';

fs.writeFile(File__Path, Content, { flag: 'ax' }, (err) => {
   if (err) {
     console.error("FS operation failed");
      return;
   }
  });
}

await create();