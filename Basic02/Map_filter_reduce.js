console.log("map,filter and reduce in javascript");

// let arr=[23,35,45,56];

// arr.map((value,index,arr)=>{
//     console.log(value,index,arr);
// });

//* it creates a new array or copy

// let arr=[23,35,45,56,3,6,8];

// let a1=arr.filter((val)=>{
//     return val>10;
// })

// console.log(a1);

//*  these all methods creates a new array or copy

let arr = [4, 6, 1, 3, 5, 9];

let a1 = arr.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(a1);

const prompt = require("prompt-sync")();

// let a=prompt("Enter the number = ");
// arr.push(a);
// console.log(a);

// let a2;
// while (a2 !== 0) {
//   a2 = prompt("Enter a number = ");
//   a2 = Number.parseInt(a2);
//   arr.push(a2);
// }
// console.log(a2);
