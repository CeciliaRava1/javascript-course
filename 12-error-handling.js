// // Produce an error
// let object 
// console.log(object.name)

// 1- try-catch
// try {
//     console.log(object.name)
// } catch (error) {
//     console.log('There was an error: ', error.message)
// } finally {
//     console.log('This code always execute')
// }

// 2-throw

function sum (a, b) {

    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log('This operation only sum two numbers')
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error('This operation only sum two integers')
    }
    if (a == 0 || b == 0) {
        throw new MyCustomeError('Trying to sum zero', a, b)
    }
    return a + b
}
// try {
//     sum(4,2)
//     sum(5,'2.3')

// } catch (error) {
//     console.log('There was an error', error.message)
// }

// Capture many types of errors

// try {
//     sum(4,2.3)
//     sum(5,'2.3')
// } catch (error) {
//     if (error instanceof TypeError) {
//         console.log('There was an error of type: ', error.message)
//     } else if (error instanceof Error) {
//         console.log('There was an error', error.message)
//     }
// }

// Create exceptions
class MyCustomeError extends Error {
    
    constructor (message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, "+", this.b)
    }
}

try {
    console.log(sum(0, 10))
} catch (error) {
    console.log('There was a personalized error: ', error.message)
    error.printNumbers()
}