// Not allow duplicates
let mySet = new Set(['Hello', true, 7])
console.log(mySet)

// Methods
mySet.add('Hellooo', 'Bye')
console.log(mySet)

mySet.delete(7)
console.log(mySet)

console.log(mySet.has('Hello'))
console.log(mySet.size)

let myArray = Array.from(mySet)
console.log(myArray)

mySet = new Set(myArray)
console.log(mySet)
