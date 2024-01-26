const Start__Str = '--';
let change = "";
const parseArgs = () => {
    const Arr__Args = process.argv.forEach((val, index, arr) => {
        let Begin__Symbol  = val[0] + val[1];
       //console.log(val.slice(0, 2))
    if(val.slice(0, 2) === Start__Str) {
             //console.log(val,Begin__Symbol)
      change += (`${val.replace(Begin__Symbol,"")}` + " " + "is" + " " + `${arr[index + 1]}`).toString() + ", ";
    }
      //console.log(`${index}: ${val}`); 
});
console.log(change)
}
parseArgs();