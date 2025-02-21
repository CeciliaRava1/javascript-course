/*
Class 28 - Exercises: Data Structures
Video: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Create an array that stores five animals
let myArray = ['cat', 'dog', 'bird', 'bear', 'wolf']

// 2. Add two more. One at the beginning and one at the end
myArray.unshift('rabbit')
myArray.push('elephant')
// console.log(myArray)

// 3. Remove the one in the third position
myArray.splice(3,1)
// console.log(myArray)

// 4. Create a set that stores five books
let mySet = new Set(['Book1', 'Book2', 'Book3', 'Book4', 'Book5'])
// console.log(mySet)

// 5. Add two more. One of them should be a duplicate
mySet.add('Book0', 'Book1')
// console.log(mySet)

// 6. Remove a specific one of your choice
mySet.delete('Book1')
// console.log(mySet)

// 7. Create a map that associates the month number with its name
let myMap = new Map( [
    [1, 'January'],
    [2, 'February'],
    [3, 'March'],
])
console.log(myMap)

// 8. Check if month number 5 exists in the map and print its value
console.log(myMap.has(5))

// 9. Add a key to the map with an array that stores the summer months
myMap.set('summerMonths', ['December', 'January', 'February', 'March'])
console.log(myMap)

// 10. Create an Array, transform it into a Set, and store it in a Map
console.log(myArray)
myArray = new Set(myArray)
console.log(myArray)

let newMap = new Map()
newMap.set('mySet', mySet)
console.log(newMap)