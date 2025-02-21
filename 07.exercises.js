/*
Class 30 - Exercises: Loops
Video: https://youtu.be/1glVfFxj8a4?t=12732
*/

// 1. Create a loop that prints numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    // console.log(i)
}

// 2. Create a loop that sums all numbers from 1 to 100 and displays the result
let counter = 1
let sum = 0
while (counter < 100) {
    sum += counter
    counter ++
}
// console.log(sum)

// 3. Create a loop that prints all even numbers between 1 and 50: (even 2, odd 1)
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        // console.log(i)
    }
}

// 4. Given an array of names, use a loop to print each name to the console
let names = ['Lili', 'Oscar', 'Will', 'Sophia']
for (let value of names) {
    // console.log(value)
}

// 5. Write a loop that counts the number of vowels in a string
let string = 'Write in a keyboard is very funnny'
let vowels = ['a', 'e', 'i', 'o', 'u']
let amountOfVowels = 0

for (let value of string) {
    if (vowels.includes(value)) {
        amountOfVowels++
    }
}
// console.log(amountOfVowels)

// 6. Given an array of numbers, use a loop to multiply all the numbers and display the product
let numbers = [1, 2, 3, 4, 5, 6, 7]
counter = 0
let multiplication = 1

while (counter < numbers.length) {
    multiplication *= numbers[counter]
    counter++
}
// console.log(multiplication)

// 7. Write a loop that prints the multiplication table for 5
counter = 0
while (counter <= 10) {
    // console.log(5*counter)
    counter++
}

// 8. Use a loop to reverse a string

// 9. Use a loop to generate the first 10 numbers of the Fibonacci sequence

// 10. Given an array of numbers, use a loop to create a new array containing only numbers greater than 10