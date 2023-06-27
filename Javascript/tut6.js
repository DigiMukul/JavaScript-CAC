// Datatype conversion confusion

let score = 44

console.log(typeof score);

let valueInNumber= Number(score) 
console.log(typeof valueInNumber)
console.log(valueInNumber)


let score1 = "44abc"
console.log(typeof score1);

let valueInNumber1= Number(score1) 
console.log(typeof valueInNumber1)
console.log(valueInNumber1)



// "44" - 44
// "44abc" - NaN
// true - 1 
// false - 0

//let logIn = 1  //true print krega
//let logIn = ""   // false print krega
let logIn = "Mukul"  //true

let boolLogIn = Boolean(logIn) // convert it into boolean value
console.log(boolLogIn);



let str= 51 

let strnum = String(str) // convert it into String value
console.log(strnum);
console.log(typeof strnum);
