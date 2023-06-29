// Date and Time

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString())

console.log(myDate.toISOString())

console.log(myDate.toJSON())

console.log(myDate.toLocaleDateString())

console.log(typeof myDate)

const newDate = new Date(2023, 0 , 28)// 0 se month start hote h
console.log(newDate);
console.log(newDate.toDateString());

console.log(newDate.getTime());// from 1 jan 1970 se leke ab tak k milisecond show honge

console.log(Math.floor(Date.now()/1000));

let myTimeStamp= Date.now()
console.log(myTimeStamp);


let onDate = new Date()
console.log(onDate);
console.log(onDate.getMonth());
console.log(onDate.getMonth()+1);


onDate.toLocaleDateString('default',{
    weekday: "long",
    dateStyle: "short", 
    hour: "2-digit",
})

console.log(onDate);