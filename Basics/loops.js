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



 let obj2={
    "name":"chaman",
    "age": 22,
    "city":"delhi"
 }

//  for(let keyIndex=0; keyIndex<Object.keys(obj2).length; keyIndex++){
//     console.log("Details of object are: ", Object.keys(obj2)[keyIndex], "=", obj2[Object.keys(obj2)[keyIndex]]);
    

//  }

console.table(obj2);


 //* Guessing Game

 let correctNumber=3;
 let i;
 while(i!=correctNumber){
    i=prompt("Enter the number = ");
 }
console.log("yay you guessed it!");
