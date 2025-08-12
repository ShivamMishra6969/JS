console.log("functions in javascript");

const prompt=require("prompt-sync")();

//* Function to find the table of a number
// function table(num){
//     for(let i=1;i<=10;i++){
//         console.log(num,"x",i,"=",num*i);
//     }
// }

// let num=prompt("Enter a number to find its table = ");
// num=Number.parseInt(num);

// table(num);

//* Arrow functions

const greet=(name)=>{
    console.log(`Greetings from ${name}`);
}
let name=prompt("Enter agent name=");

greet(name);
