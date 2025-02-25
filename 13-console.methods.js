console.error('This is an error message')
console.warn('This is a warning')
console.info('This is an info message')


// table
let data = [
    { name: 'Li', age: 2},
    { name: 'Sara', age: 21}
]

console.table(data)


console.group('User')
console.log('Name: Fer')
console.log('Age: 10')
console.groupEnd()
console.log('hello')


console.time('Execution time')

for (let i = 0; i < 10000; i++) {

}

console.timeEnd('Execution time')


// assert
let age = 17
console.assert(age >= 18, 'User must be of age')

console.count('Click')
console.countReset('Click')

console.trace('Execution follow')

console.clear()