// // Array

const myArray = [1,2,3,4,5,6,7,8,9]
// console.log(myArray);
// console.log(myArray[5]);

// // Array Methods

// myArray.push(10)
// console.log(myArray);

// myArray.pop()
// console.log(myArray);


// myArray.unshift(10) //add the element at the start (0 index pe)
// console.log(myArray);

// myArray.shift() //remove the element at the start (0 index pe)
// console.log(myArray);

// console.log(myArray.includes(8))

// console.log(myArray.indexOf(8))




// const arr=[7,5,6,3,1,5,9,72,15]
// const arr1= arr.join() //convert the array into string
// console.log(arr1)
// console.log(typeof arr1)


// slice or splice

const myar1 = myArray.slice(1,3) // slice se original array change ni hota qki h stack memory m h
console.log(myar1);

console.log(myArray);

const myar2 = myArray.splice(1,3) // splice se original array m change hota h qki y heap memory m h 
console.log(myar2);

console.log(myArray);

