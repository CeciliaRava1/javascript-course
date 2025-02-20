let array = []
let arrayTwo = new Array() // Do not use

array = [2, 'hello', true]
// console.log(array)

// Methods
let myArray = [] // Clear array

myArray.push(1, 2, 3, 4, 5)
console.log(myArray)
myArray.pop() // Delete the last element
myArray.shift() // Delete the first element
myArray.unshift('Hello') // Add element to the init
// console.log(myArray.length)
console.log(myArray.slice(0,1)) 

// to insert "Feb" at index 1 in an array of months:
let months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(months); // ["Jan", "Feb", "March", "April", "June"]

// To replace an element at index 4 with "May":
months.splice(4, 1, "May");
console.log(months); // ["Jan", "Feb", "March", "April", "May"]

