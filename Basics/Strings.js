console.log("Strings in javascript");


const prompt=require("prompt-sync")();

let name="chaman";
console.log("size of length = ",name.length);

for (let i=0;i<name.length;i++){
    console.log(i," = ",name[i]);
    
}

//* Template literals

let lad1="chaman";
let lad2="daman";

let sentence=`${lad1} is a Friend of ${lad2}`;

console.log(sentence);

//* Escape sequence

let str="I\'m awesome" 
console.log(str);


