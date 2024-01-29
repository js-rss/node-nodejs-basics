import { fork, spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import path from 'node:path';
import { stdout } from 'node:process';
//import child_process  from 'node:child_process';
//import fs from 'node:fs';

const Valid__Path = fileURLToPath(import.meta.url);
const __dirname = dirname(Valid__Path);
const Src__Path = path.join(__dirname, 'files', 'script.js');
const Url = new URL('./files/script.js', import.meta.url)
// console.log(Url)
// console.log(Valid__Path, 'path')
const spawnChildProcess = async (args) => {
     // const Child = child_process.execFile(Src__Path, ['someArgument1', 'someArgument2', 'someArgument3'])
    //Child.stdout.on('data', function(data) {
      //  console.log(data.toString()); 
    //});
    const Child = spawn('node',[Src__Path, ...args]);
    process.stdin.pipe(Child.stdin).pipe(Child.stdout.pipe(stdout));
    ///const Child = spawn('convert', args);
    //streamIn.pipe(Child.stdin);
    //Child.stdout.pipe(resp);
   
    // console.log(args);
};

spawnChildProcess( ['someArgument1', 'someArgument2', 'someArgument3'] );