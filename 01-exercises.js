/*
Class 20 - Exercises: Operators
Video: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Create a variable for each arithmetic operation
let a = 10
let b = 5
let sum = a + b
let subtraction = a - b
let division = a / b
let multiplication = a * b

// 2. Create a variable for each type of assignment operation, using the variables created for the arithmetic operations
let assignmentEqual = a
assignmentEqual += b
assignmentEqual -= b
assignmentEqual /= b
assignmentEqual %= b
assignmentEqual **= b

// 3. Print 5 true comparisons using different comparison operators
console.log(3 > 1)
console.log(1 < 3)
console.log(1 == 1)
console.log(2 === 2)
console.log(2 != 1)

// 4. Print 5 false comparisons using different comparison operators
console.log(1 > 3)
console.log(3 < 1)
console.log(1 == 2)
console.log(2 === 1)
console.log(2 != 2)

// 5. Use the logical AND operator
console.log(1 > 2 && 3 > 5)

// 6. Use the logical OR operator
console.log(1 > 2 || 3 > 5)

// 7. Combine both logical operators
console.log(1 < 2 || 3 > 5 && 3 < 5 || 10 > 20)

// 8. Add some negations
console.log(!(1 > 2 && 3 > 5))

// 9. Use the ternary operator
let imHappy = true
imHappy ? console.log("I'm happy") : console.log("I'm sad")

// 10. Combine arithmetic, comparison, and logical operators
console.log(1 + 2 > 3 - 1 && 2 > 1)