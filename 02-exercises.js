/*
Class 22 - Exercises: Strings
Video: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatenate two strings
let colorOne = 'Red'
let colorTwo = 'Blue'
console.log(colorOne + colorTwo)

// 2. Display the length of a string
console.log(colorOne.length)

// 3. Display the first and last character of a string
console.log(colorOne[0], colorOne[colorOne.length-1])

// 4. Convert a string to uppercase and lowercase
console.log(colorOne.toUpperCase())
console.log(colorOne.toLowerCase())

// 5. Create a multi-line string
let message = `This is a
multi-line string`

// 6. Interpolate the value of a variable into a string
console.log(`My favorite color is ${colorOne}`)

// 7. Replace all spaces in a string with hyphens (-)
console.log(message.replaceAll(' ', '-'))

// 8. Check if a string contains a specific word
console.log(message.includes('Hello'))

// 9. Check if two strings are equal
console.log(message == colorOne)

// 10. Check if two strings have the same length
console.log(colorOne.length == colorTwo.length)