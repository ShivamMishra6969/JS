const prompt=require("prompt-sync")();

//* while loop
// let a=prompt("Enter the value = ");

// a=Number.parseInt(a);

// while(a>0){
//     console.log(a);
//     a--;
// }


//* do-while loop

let a=prompt("Enter the value=");

a=Number.parseInt(a);

let i=0;
do{
    console.log(i);
    i++;
}while(i>a);
