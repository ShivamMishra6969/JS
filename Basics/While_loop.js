const prompt=require("prompt-sync")();

let a=prompt("Enter the value = ");

a=Number.parseInt(a);

while(a>0){
    console.log(a);
    a--;
}