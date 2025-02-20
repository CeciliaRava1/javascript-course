/*
Class 24 - Exercises: Conditionals
Video: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternary

// 1. Print your name to the console if a variable holds its value
let variable = 'Lia'
if (variable == 'Lia') {
    console.log(variable)
} else {
    console.log('The name is not equal')
}

// 2. Print a message to the console if the username and password match predefined values
let message = 'Login succesfully!'
let username = 'lia'
let password = '12345678'
if (username == 'lia' && password == 12345678) {
    console.log(message)
} else {
    console.log('Try again')
}

// 3. Check if a number is positive, negative, or zero and print a message
let number = 10
if (number > 0) {
    console.log('The number is positive')
} else if (number < 0) {
    console.log('The number is negative')
} else {
    console.log('The number is zero')
}

// 4. Check if a person can vote or not (18 or older) and indicate how many years are left if they cannot
let age = 10
if (age >= 18) {
    console.log('You can vote')
} else {
    let yearsToWait = 18 - age
    console.log(`You can not to vote. You need to wait ${yearsToWait} years more`)
}

// 5. Use the ternary operator to assign the value "adult" or "minor" to a variable
//    depending on the age
let person = 20
const messageTwo = person >= 18 ? 'adult' : 'minor'
console.log(messageTwo)

// 6. Show which season of the year it is based on the value of a "month" variable
let monthValue = 5
let monthName = ''
if (monthValue == 1) {
    monthName = 'January'
} else if (monthValue == 2) {
    monthName = 'February'
} else if (monthValue == 3) {
    monthName = 'March'
} else if (monthValue == 4) {
    monthName = 'April'
} else if (monthValue == 5) {
    monthName = 'May'
} else if (monthValue == 6) {
    monthName = 'June'
} else if (monthValue == 7) {
    monthName = 'July'
} else if (monthValue == 8) {
    monthName = 'August'
} else if (monthValue == 9) {
    monthName = 'September'
} else if (monthValue == 10) {
    monthName = 'October'
} else if (monthValue == 11) {
    monthName = 'November'
} else if (monthValue == 12) {
    monthName = 'December'
} else {
    console.log('The value is not correct')
}
console.log(monthName)

// 7. Show the number of days in a month based on the variable from the previous exercise
if (monthValue == 1 || monthValue == 3 || monthValue == 5 || monthValue == 7 ||
    monthValue == 8 || monthValue == 10 || monthValue == 12) {
    console.log(`${monthName} have 31 days`)
} else if (monthValue == 4 || monthValue == 6 || monthValue == 9 || monthValue == 10) {
    console.log(`${monthName} have 30 days`)
} else if (monthValue == 2) {
    console.log(`${monthName} have 28 days`)
} else {
    console.log('The value is not correct')
}

// switch

// 8. Use a switch to print a different greeting message depending on the language
let greeting = 'spanish'
switch (greeting) {
    case 'spanish':
        message = 'Hola'
        break
    case 'english':
        message = 'Hello'
        break
    default:
        message = 'The language is not available yet'
}
console.log(message)

// 9. Use a switch to redo exercise 6
switch (monthValue) {
    case 1:
        monthName = 'January'
        break
    case 2:
        monthName = 'February'
        break
    case 3:
        monthName = 'March'
        break
    case 4:
        monthName = 'April'
        break
    case 5:
        monthName = 'May'
        break
    case 6:
        monthName = 'June'
        break
    case 7:
        monthName = 'July'
        break
    case 8:
        monthName = 'August'
        break
    case 9:
        monthName = 'September'
        break
    case 10:
        monthName = 'October'
        break
    case 11:
        monthName = 'November'
        break
    case 12:
        monthName = 'December'
        break
    default:
        console.log('The value is not correct')
}
console.log(`The month is ${monthName}`)