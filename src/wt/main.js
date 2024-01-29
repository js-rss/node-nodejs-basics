import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';

const Valid__Path = fileURLToPath(import.meta.url);
const __dirname = dirname(Valid__Path);
const url = path.join(__dirname, 'worker.js');
const val = {
    num:10,
    res:'resolved',
    err:'error'
   };
const calculateNthFibonacci = (workerData) => new Promise((resolve)=> {
const worker = new Worker(url, {workerData});
 worker.on('message', (data) => resolve({status: val.res, data}));
 worker.on('error', () => resolve({status: val.err, data: null}));
})
const performCalculations = async () => {
const Calc = new Array(cpus().length).fill(null).map((_value, ind) => 
calculateNthFibonacci(val.num + ind));
const res = await Promise.all(Calc); 
console.log(res);
};

await performCalculations();