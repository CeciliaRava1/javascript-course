/*
Class 34 - Exercises: Objects
Video: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Create an object with 3 properties
let cat = {
    name: 'Moon',
    age: 2,
    color: 'gray',
    jump: function () {
        console.log('Im jumping')
    },

    location: {
        adress: 'Montana',
        number: '70'
    }
}

// 2. Access and display its value
console.log(cat)

// 3. Add a new property
cat.city = 'New York'

// 4. Delete one of the first 3 properties
delete cat.color

// 5. Add a function and invoke it
cat.jump()

// 6. Iterate over the object's properties
for (let key in cat) {
    console.log(key)
}

// 7. Create a nested object
// 8. Access and display the value of the nested properties
console.log(cat.location)

// 9. Check if the two created objects are equal
console.log(cat == cat.location)

// 10. Check if two different properties are equal
console.log(cat.name == cat.age)