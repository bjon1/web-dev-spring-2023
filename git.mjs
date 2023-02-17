/*

Script present in package.json
This script will run:

git add .
git commit -m "Some arguments"

*/

//import exec from child_process. exec() is a function that allows running an external command 
import { exec } from 'child_process';
let args = process.argv; //process.argv is an array
//convert process.argv into a string, but first remove clutter:
//args.splice(0,2); //get rid of node git.js from the array; and store the arguments
let str = args.slice(2).join(' ');

console.log("\nCommit message: " + str + "\n");

exec('git add .', cbadd);

function cbadd(err, strout, sdtin){
    if(err){ //if there is an error, let the user know
        console.log(err);
        return;
    }
    exec(`git commit -m "${str}"`, cbcommit);
}
  

function cbcommit(err, strout, sdtin){
    if(err){ //if there is an error, let the user know
        console.log(err);
        return;
    }
    console.log("Successful");
}






