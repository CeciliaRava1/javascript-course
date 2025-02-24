// anonymous function
const myFunction = function () {
    console.log('Hello')
}
// myFunction()

// arrow function (one line)
const myArrowFunction = (name) => console.log(`Hello ${name}`)
// myArrowFunction('Matias')

// Function
function defaultFunction(a = 0, b = 0) {
    console.log(a + b)
}

// forEach
let array = [1, 2, 3, 4]
array.forEach((value) => console.log(value))