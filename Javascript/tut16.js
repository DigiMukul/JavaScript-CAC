// Objects in JavaScript

// 2 way to declare object 
// 1 is through constructor method jisme singleton bnta h
// Object.create

// 2 is object literals isme singleton ni bnta 
const user={
    name: "Mukul",  //system isko as process krega "name"
    age: 25,
    location: "Delhi",
    email: "mukul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Moday", "Wednesday", "Friday", "Sunday"]
}

//how to access object

//one way
console.log(user.lastLoginDays);

// another way
console.log(user["lastLoginDays"]);


//agar object ase declare ho
const jsuser={
    "full name" : "Mukul Gupta",
    age: 25
}

// to is case m second tarika ni use hoga, one way use krengy to error aayega
//console.log(jsuser.full name);

console.log(jsuser["full name"]);


//how to use symbol as a object key and print  (interview question)
const mySym= Symbol("Key")

const sym={
    name: "Mukul",
    mySym: "myKey"
}

console.log(sym.mySym);

console.log(typeof sym.mySym); // asa krengy to string aayega


// correct way 
const mySym1= Symbol("Key")

const sym1={
    name: "Mukul",
    [mySym1]: "myKey"
}

console.log(sym1[mySym1]);

console.log(typeof mySym1); // asa krengy to symbol aayega


//how to change object value
user.email="mukul@adobe.com"
console.log(user.email);

//freeze the value that will not change in future
Object.freeze(user)

user.email="mukul@jpmorgan.com"
console.log(user.email);


