// Array in more details

const frontend = ["HTML", "CSS", "JavaScript", " React jS"]
const backend = ["NOde JS", "Mongo DB", "Java"]

frontend.push(backend) // it will take whole backend as a one element

 console.log(frontend);

 console.log(frontend[4]); 
 console.log(frontend[4][1]);

const newArr = frontend.concat(backend)// concat will add 2 array properly
console.log(newArr);

// one more way to add 2 array is spread

const codinglang= [...frontend, ...backend]
console.log(codinglang);


//
const anotherArray = [1,2,4,[8,9,45,45],99,58,[789,586,[45,85]],58,96]

const solveArray= anotherArray.flat(Infinity)// it will flat all the sub array

console.log(solveArray);


//
console.log(Array.isArray("Mukul")); // check array is present or not
console.log(Array.from("Mukul"));// it will take Mukul and convert into array

// read isArray, fromArray, ofArray