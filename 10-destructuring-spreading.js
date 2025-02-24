// Destructuring: way to extract multiple values from data stored in objects and arrays, 
// allowing you to set them into new, distinct variables


// Destructuring arrays
let numbers = [1, 2, 3, 4, 5, 6, 7]
let [value1, value2] = numbers
console.log(value1, value2)

// Ignore elements
let [, , value3, , , value6] = numbers
console.log(value3)
console.log(value6)

// Destructuring objects
let person = {
    name: 'Matias',
    age: 10
}

// let { name, age } = person
// console.log(name1)
// console.log(age1)

let { name: name1, age: age1 } = person
console.log(name1)
console.log(age1)