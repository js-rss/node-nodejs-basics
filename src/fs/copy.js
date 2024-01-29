import { cp }from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path, { dirname, resolve } from 'node:path';
//import { stat } from 'node:fs';

const Valid__Path = fileURLToPath(import.meta.url);
const __dirname = dirname(Valid__Path);
const Folder_Src__Path = resolve(__dirname, 'files')
const Folder_Target__Path = resolve(__dirname, 'files_copy')

/*const isExists = async (path) => {
  try {
    await stat(path);
    return true;
}
  catch {
    return false;
  }

}*/

const copy = async () => {
   
/*const Folder_Src__Path = path.join(__dirname, '/files');
const Folder_Target__Path = path.join(__dirname, '/files_copy');
*/
try {
     /* if (await isExists(Folder_Target__Path) || !(await isExists(Folder_Src__Path))) {
      throw new Error('FS operation failed');
    }*/
      await cp(Folder_Src__Path, Folder_Target__Path, {
      recursive: true,force:false,errorOnExist:true
    })
  } catch (error) {
    console.error('FS operation failed');
  }
}
await copy();





/*const isTargetPath = exists(Folder_Target__Path, (el) => {
    if (el) {
        console.error('FS operation failed targ');
      } else {
        
        
      }
  });

const isSrcPath = exists(Folder_Src__Path, (el) => {
    if (el) {
        
      } else {
        console.error('FS operation failed src');
      }
});*/
 



  /*fs.mkdir(Folder_Target__Path, { recursive: true }, (err) => {
    if (err) throw err;
  })

*/

/*
fs.stat(Folder_Src__Path, (err, stats) => {
    if (err) {
        console.error('FS operation failed');
        return;
    }
    
        fs.mkdir(copyFolder, {recursive: true}, (err) =>{
            if (err) throw err;
    
   });*/
/*fs.stat(Folder_Src__Path, (err, stats) => {
    if (!err) {
        console.error('FS operation failed');
        return;
    }
});*/






