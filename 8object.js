// let person = {
//     name :"rohit",
//     cotect : 345,
//     city : "bhopal"
// }
// console.log(person)
// console.log(person.city)


// // let emp ={
// //     emp_name:prompt("enter emp name"),
// //     emp_desination:prompt("enter desination "),
// //     emp_addersss:prompt("enter addresss"),
// //     emp_contact:prompt("enter contact")
// // }
// // console.log(emp);

// person.email = "pawrrohit@gmail.com"
// person.passwed = "27664"
// console.log(person);

// //value overraite

// person.city="betul"

// //deletin the value 
// delete person.passwed
// console.log(person);

let emp = {
    emp_id:102,
    emp_nameP:["rohit","lakki"],
    emp_city:"bhopal",
    emp_contect:[27383,3637],
    emp_acount_deteals:{
        emp_balans:200000,
        emp_designation:"sdm"
    }

}
console.log(emp.emp_nameP[1]);
console.log(emp.emp_contect[0]);
console.log(emp.emp_acount_deteals);



let person={
    name:"rohit",
    contect:435678,
    city:"bhopal"
}

for(let k in person){
    console.log(person[k]);
}




/// Object .keys 

let key = Object.keys(person)
console.log(key[0]);



let v1 = Object.values(person)
console.log(v1);