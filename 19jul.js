// function for tyap ke hote hai 
// 1normal function 
// // 2anonymus function 
// let okk1 = function(){
//     alert("anonymus function ")
// }
// arrow function 

// let okk=(a,b)=>{
//     return a+b
// }

// alert (okk(3,6))




// const si = (principal, r, t) => (principal * r * t) / 100;
// const interest = si(principal, r, t);
// console.log("si" + interest);




















const calculateSimpleInterest = (principal, rate, time) => (principal * rate * time) / 100;


const principal = 1000; 
const rate = 5;         
const time = 2;         

const interest = calculateSimpleInterest(principal, rate, time);
console.log("Simple Interest: ₹" + interest);

