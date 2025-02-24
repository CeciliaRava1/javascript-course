/*
Class 36 - Exercises: Destructuring and Spread
Video: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Use destructuring to extract the first two elements of an array
let numbers = [1,2]
let [numberOne, numberTwo] = numbers
// console.log(numberOne, numberTwo)

// 2. Use destructuring in an array and assign a default value to a variable
let [numberThree = 0, numberFour = 0, numberFive = 0] = numbers
console.log(numberThree, numberFour, numberFive)

// 3. Use destructuring to extract two properties from an object
let person = {
    name: 'Rosa',
    age: 9
}

let {name, age} = person
// console.log(name, age)

// 4. Use destructuring to extract two properties from an object and assign them
//    to new variables with different names
let {name: name1, age: age1} = person
console.log(name1, age1)

// 5. Use spread to combine two arrays into a new one
let letters = ['a', 'b']

let newArray = [...numbers, ...letters]
console.log(newArray)

// 6. Use spread to create a copy of an array
let copyOfNumbers = [numbers]
console.log(copyOfNumbers)

// 7. Use spread to combine two objects into a new one
let cat = {
    color: 'gray',
    city: 'New york'
}

let newObject = {...person, ...cat}
console.log(newObject)

// 8. Use spread to create a copy of an object
let copyObject = {...person}
console.log(copyObject)

// 9. Combine destructuring and spread
let {name: name2, age: age2} = person
console.log(name1, age1)

let copyOfPerson = person
console.log(copyOfPerson)




