for(let i = 0; i < 3; i++) {
    console.log('Hello')
}

let i = 0
while(i < 3) {
    console.log('Bye')
    i++
}

i = 0
do {
    console.log('Do while')
    i++
} while(i = 0) 



let array = [2, 'hello', true]
let string = 'Hello javascript'

for (let value of array) {
    console.log(value)
}

for (let value of string) {
    console.log(value)
}



// Good practices
// Break and continue
for (let i = 0; i < 6; i++) {
    if (i == 5) {
        continue // Ignore this step
    } else if (i == 6) {
        break // Break the loop
    }
    console.log('Hello')
}