// Numbers and Maths

const score = 100
console.log(score);

const balance = new Number(100) // it is number confirm because of Number keyword
console.log(balance);

console.log(balance.toString())  //now it convert into string

console.log(balance.toFixed(1))

const newnum=256.6245
console.log(newnum.toPrecision(3)) // it depend on the number like in this case my no is 256.6245 and precision is 3 to y round off kr dega

console.log(newnum.toPrecision(2)) // it depend on the number like in this case my no is 256.6245 and precision is 2 to y expnancial m value dega


const hundreds = 1000000
console.log(hundreds.toLocaleString()) //By default y american standars h hisaab se dega

console.log(hundreds.toLocaleString('en-IN')) //ab y indian standards kk hisaab se dega



// ++++++++++++++++++++++++++++++++  Math  +++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-5)); // convert negative value to positive
 
console.log(Math.round(12.8));

console.log(Math.ceil(4.6)); //upar vali value lega 4.6 h to 5 kr dega

console.log(Math.floor(4.6)); // neeche vali value lega

console.log(Math.sqrt(50));

console.log(Math.min(5,18,2,56,1,89));

console.log(Math.max(5,18,2,56,1,89));


console.log(Math.random()); // always give value between 0 and 1

console.log(Math.random()*10);// *10 krne se kabhi kabar 0 bhi value aa skti h 

console.log((Math.random()*10)+1); // isliye +1 kr dia

console.log(Math.floor((Math.random()*10)+1));


//kabhi kabara we want start kaha se ho or end kaha pe ho
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min)