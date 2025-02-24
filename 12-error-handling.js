// // Produce an error
// let object 
// console.log(object.name)

// 1- try-catch
try {
    console.log(object.name)
} catch (error) {
    console.log('There was an error: ', error.message)
} finally {
    console.log('This code always execute')
}

// 2-throw

function sum (a, b) {
    if (typeof a === 'number') {
        console.log('This is a number instance')
    }
    if (!Number.isNaN(a)) {
        console.log('This is a number')
    }
    if (!(a instanceof Number) && !(b instanceof Number)) {
        console.log('Can not to sum this values')
    }
    return a + b
}

sum(5,2)