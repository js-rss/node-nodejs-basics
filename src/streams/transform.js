import { stdout } from 'node:process';
import readline from 'node:readline';

const transform = async () => {
    
    stdout.write('To exit, press "CTRL + C" ' + '\n'+'\n' + 'Enter any text' +'\n');
    
    const Read = readline.createInterface(process.stdin);

    Read.on('line', (data) => {
        process.stdout.write(data.split('').reverse().join('') + '\n')
      });
};

await transform();