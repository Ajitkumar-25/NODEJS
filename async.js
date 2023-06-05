// console.log("hello ji");

// //this function will hold and execute later 
// setTimeout(() => {
//     console.log('ky haal chall')
// }, 3000);

// //this function will execute first
// console.log("sab badiya");


//drawbacks
//1. callback hell

let a=10;
let b=0;

//value gets updated at a later stage 
setTimeout(() => {
   b=10; 
   console.log(a+b);
}, 2000);

console.log(a+b);