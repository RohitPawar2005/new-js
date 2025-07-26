// Array of objects

//map filter ek hayer oder hota hai 
// call beck  esha function jisme pra miter ke ander pas hota hai ushe pera miter kate hai//
// map function ek array ke har element par function ko apply karta hai aur naya array return karta hai
// filter function ek array ke har element par condition check karta hai aur un elements ko return karta hai jo condition ko satisfy karte hain
// reduce function ek array ke elements ko ek single value mein reduce karta hai


// let arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,28,26]
// let b= arr.map((e) =>{
//     return e * 2;
// })
// console.log(b); 
// // filter function

//filter function ek array ke har element par condition check karta hai aur un elements ko return karta hai jo condition ko satisfy karte hain

// let c = arr.filter((e) => {
//     return e>10
// // // })
// // console.log(c);

// //forEach function hai ye array ke har element par function ko apply karta hai lekin naya array return nahi karta
// let d = arr.forEach((e) => {
//     console.log(e*2);
// })






// array of objects

let arr = [{
    name: "rohit",
    age: 19,
    city: "delhi"
}, {
    name: "ram",
    age: 22,
    city: "mumbai"
}, {
    name: "shyam",
    age: 24,
    city: "kolkata"


},{    name: "sita",
    age: 20,
    city: "chennai"}]
console.log(arr)

arr.map((e) => {
    console.log(e.name)
    console.log(e.age)
    console.log(e.city)
})
document.write("<h1>Array of Objects</h1>")
arr.forEach((e) => {
    document.write(`<h2>Name: ${e.name}</h2>`)
    document.write(`<h3>Age: ${e.age}</h3>`)
    document.write(`<h4>City: ${e.city}</h4>`)
})

// let show = document.getElementById("show");
// arr.map((e) => {
//     show.innerHTML += 
//     `<h2>Name: ${e.name}</h2>`;
//     <P>${e.age}</h1/h2>
//     <P>${e.city}</P>
// })