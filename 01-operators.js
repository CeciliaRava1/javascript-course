let a = 10
let b = 2

// Arithmetic operators
console.log(' ********* Arithmetic operators *********')
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

console.log(a % b)
console.log(a ** b)

a++
console.log(a)

b--
console.log(b)

// Assignment operators
let number = 1
number += 1
number -= 1
number %= 1
number /= 1
number **= 1

// Comparison operators
console.log(' ********* Comparison operators *********')
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a == a) //  Equality for value
console.log(a === 11) // Equality for datatype and value
console.log(a != b)

// Truthy values: All the numbers less zero, all strings less emptyes, boolean true
// Falsy values:  Boolean false, 0, 0n (bigint), null, undefined, Nan)

// Logic operators
console.log(' ********* Logic operators *********')
console.log(5 > 10 && 15 > 20) // False
console.log(5 < 10 && 15 < 20) // True
console.log(5 < 10 && 15 > 20) // False

console.log(5 > 10 || 15 > 20) // False
console.log(5 < 10 || 15 < 20) // True
console.log(5 < 10 || 15 > 20) // True

console.log(!(5 > 10 && 15 > 20)) // True
console.log(!(5 > 10 || 15 > 20)) // True

// Ternary operators
console.log(' ********* Ternary operators *********')
const isRaining = false
isRaining ? console.log("It's raining") : console.log("It's a sunny day")