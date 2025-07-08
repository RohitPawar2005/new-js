//array
//colction fo maltipal deta taype  data [] denot 
//index value hota hai 
// array ki node 
// address of elements  0 she start hoti hai 


//  let ar =[ 'rohit',27,'m',4.3,true]
//  console.log(ar[1])

//  let ar1 = []
//  for(let a = 0 ; a<5 ; a++){
//     ar1[a] = prompt["enter you numder"]
//  }
//   console.log(ar1);



//  let arr1 = []
//  for(let a = 0 ; a<11 ; a++){
//     ar1[a] = parseInt(prompt["enter you numder"])
//  }
//   console.log(arr1);


let  ar = [1,2,3,4,5,6,7,8,9,10]
let sum = 0
for (let  a = 0; a<10; a++){
    if(ar[a]%2!=0){
        sum = sum +ar[a]
    }
}
console.log(sum);