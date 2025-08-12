console.log("conditionals in js");

const prompt=require("prompt-sync")();
let age=prompt("Enter your age = ");

a=Number.parseInt(age); //! converting string to number

console.log("awesome");


if(age<0){
    console.log("invalid age");
    
}
else if(age>=18){
    console.log("you are eligible");
}

else console.log("you are not eligible");


console.log("you can",(age>18 ? "drive" : "not drive"),"\n"); //! ternary operator

