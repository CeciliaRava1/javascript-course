/*
Class 41 - Exercises: Error Handling
Video: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 2. Catch an exception using try-catch and finally
// 5. Throw a custom exception
function isVowel(letter) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 
        'v', 'w', 'x', 'y', 'z']  
    if (!letters.includes(letter)) {
       throw new Error('is not a letter')
    }
    if(vowels.includes(letter)) {
        throw new Error('is a vowel')
    } else {
        throw new MyCustomeError('Is not a vowel', letter)
    }
}


// 4. Create a custom exception
class MyCustomeError extends Error {
    
    constructor (message, letter) {
        super(message)
        this.letter = letter
    }

    printLetter() {
        console.log(this.letter)
    }
}

try {
    isVowel('s')
} catch (error){
    console.log('There was a personalized error: ', error.message)
    error.printLetter()
} finally {
    console.log('This code always execute')
}

// 6. Throw multiple exceptions based on defined logic

// 7. Catch multiple exceptions in the same try-catch block

// 8. Create a loop that attempts to convert each value to a float and catches and displays errors

// 9. Create a function that checks if an object has a specific property and throws a custom exception if it doesn't

// 10. Create a function that retries on error up to a maximum of 10 times