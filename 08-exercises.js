/*
Class 32 - Exercises: Functions
Video: https://youtu.be/1glVfFxj8a4?t=14146
*/

// 1. Create a function that takes two numbers and returns their sum
function sum(num1 = 0, num2 = 0) {
    return num1 + num2
}
// console.log(sum(2,3))
let numbers = [12, 6, 3, 0]

function largestNumber(array = [0, 2]) {
    let largest = array[0]

    for (let value of array) {
        if (value > largest) {
            largest = value
        }
    }
    return largest;
}
// console.log(largestNumber(numbers))

// 3. Create a function that takes a string and returns the number of vowels it contains
let string = 'murcielago'
let vowels = ['a', 'e', 'i', 'o', 'u']
let amountVowels = 0

function amountOfVowels(string, vowels) {

    for (value of vowels) {
        if (string.includes(value)) {
            amountVowels += 1
        }
    }
    return amountVowels
}
// console.log(amountOfVowels(string, vowels))

// 4. Create a function that takes an array of strings and returns a new array with the strings in uppercase
const uppercase = (string) => console.log(string.toUpperCase())
// uppercase(string)

// 5. Create a function that takes a number and returns true if it is prime, and false otherwise
let number = 5

function primeNumbers(number = 0) {

    if (number % 2 == 0 && number != 2 || number % 3 == 0 && number != 3) {
        return false
    } else {
        return true
    }
}

// 6. Create a function that takes two arrays and returns a new array containing the common elements between them
let firstArray = [5, 10, 2]
let secondArray = [5, 2, 20]
let common = []

function commonElements(array1 = [0], array2 = [0]) {

    for (value of array1) {
        if (array2.includes(value)){
            common.push(value)
        }
    }
    return common
}

// 7. Create a function that takes an array of numbers and returns the sum of all even (2) numbers
let sumEven = 0

function sumEvenNumbers(array = [2, 3, 6, 7]) {

    for (value of array) {
        if (value % 2 == 0) {
            sumEven += value
        }
    }
    return sumEven
}

// 8. Create a function that takes an array of numbers and returns a new array with each number squared
let squaredArray = []

function squaredNumbers(array = [0]) {

    for (value of array) {
        squaredArray.push(value**2)
    }
    return squaredArray
}

// 9. Create a function that takes a string and returns the same string with the words in reverse order
let newString = ''

function reverseString(string = 'hello') {

    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i]
    }
    return newString
}
console.log(reverseString(string))

// 10. Create a function that calculates the factorial of a given number
function factorialNumber(number) {

    let factorial = 1;

    for (let i = number; i >= 1; i--) {
        factorial *= i; 
    }
    return factorial;
}
console.log(factorialNumber(3)); 