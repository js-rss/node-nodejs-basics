import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import path from 'node:path';
import { stdout } from 'node:process';

const Valid__Path = fileURLToPath(import.meta.url);
const __dirname = dirname(Valid__Path);
const Src__Path = path.join(__dirname, 'files/script.js');
const Url = new URL('./files/script.js', import.meta.url)
// console.log(Url)
// console.log(Valid__Path, 'path')
const spawnChildProcess = async (args) => {
    const Child = fork(Url, args, {silent: true});
    process.stdin.pipe(Child.stdin).pipe(Child.stdout.pipe(stdout));
};

spawnChildProcess( ['someArgument1', 'someArgument2', 'someArgument3'] );
