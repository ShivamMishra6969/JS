console.log("Loops in javascript");

const prompt=require("prompt-sync")();
let num=prompt("enter a number = ");

num=Number.parseInt(num);

for(let i=1;i<=10;i++){
    console.log(num,"x",i,"=",num*i);
}

console.log("\n");

//* For-in loop

let obj={
    "chaman":44,
    "baman":88,
    "daman":99
}
 for (let key in obj){
    console.log(key,"=",obj[key]);
 }

 //* For of loop

 for(let b of "chaman"){
    console.log(b);
 }
