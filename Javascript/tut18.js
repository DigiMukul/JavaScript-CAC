// Object de-structure and JSON API

// destructure the object
const course = {
    course: "JavaScript",
    fees: 999,
    courseInstructor: "Hitesh"
}

console.log(course)

// const {courseInstructor} = course
// console.log(courseInstructor);

//rename the key 

const {courseInstructor : mentor} = course
console.log(mentor);


// JSON API

