// Strings

const name = "Mukul"
const surname = "Gupta"

console.log(name + surname + "Hello") // old syntax

console.log(`Hello My Name is ${name} and surname is ${surname}`) // modern syntax

const newname = new String('DigiMukul') // new way to declare the String

console.log(newname)

console.log(newname[2])

// String Functions

console.log(newname.__proto__)

console.log(newname.toUpperCase())

console.log(newname.charAt(2))

console.log(newname.indexOf('k'))

console.log(newname.substring(0,4))

console.log(newname.slice(0, -7))

const newstr = "      Mukul       "
console.log(newstr)
console.log(newstr.trim())

const url = "https://mukulgupta%projects.com"
console.log(url.replace('%', '-'))

console.log(url.includes('mukul'))

console.log(url.split('-'))


