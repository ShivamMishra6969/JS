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


//* Strings methods


let str2= "Cloud";
console.log(str2.length);

console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

console.log(str2.slice(0,2));
console.log(str2.slice(0));

console.log(str2.replace("lou","row"));


let str3="Naman";
console.log(str3.concat(" is a boy"));


let char="      HAPPY               "
console.log(char.trim());



//* questions

console.log("har\'".length); //* 4

let str4="chamamn";
console.log(str4.toLowerCase());

let sentence2="Please give Rs 100";

console.log(sentence2.slice(15,18)); //*100




