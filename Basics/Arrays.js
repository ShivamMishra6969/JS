console.log("arrays in javascript");

let a=[2,3,4,5];

for (let i in a){
    console.log(a[i]);
}

console.log("Length of array = ",a.length);

a[4]=4 //* add a new value in the array
for(let i in a){
    console.log(a[i]);
}

console.log(typeof(a));

//* Array Methods

let num=[1,4,5,6,7];

let b=num.toString();

//* this convert the array into string
console.log(typeof(b));

let c=num.join("_");

console.log(c);

//* Removing the element in arrays

num.pop();
console.log(num);

console.log(num.push(56));

let r=num.shift();
console.log(num,r);


let r1=num.unshift(78);
console.log(num, r1);


let num1=[1,3,3,4,45,5]; //* 6

delete num1[0];

console.log(num1);
console.log(num1.length); //* 6


let num2=[1,3,3,4,45,5];

let newArr=num1.concat(num2);

console.log(newArr);

let orgArr=[1,4,6,2,3];
//* it sort According to String it changes original array

const compare=(a,b)=>{
    return a-b;
}

orgArr.sort(compare);
console.log(orgArr);


let orgArr1=[1,4,6,2,3];
orgArr1.splice(2,2,20,21)

//* [ 1, 4, 20, 21, 3 ]
console.log(orgArr1);


let ch=orgArr1.slice(3)
console.log(orgArr1);

let name="chaman";
let arr=Array.from(name);

console.table(arr);

for(let i of arr){
    console.log(i);
}


//! Map in javascript


