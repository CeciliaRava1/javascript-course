let person = {
    name: 'Matias',
    age: 10,
    walk: function() {
        console.log('Walking')
    }
}

person.name = 'Brais'
delete person.age
person.color = 'blue'
person.walk()
console.log(person)

// keys
for (let key in person) {
    console.log(key)
}

// values
for (let key in person) {
    console.log(person[key])
}

// constructor (no, it must be a class)
function Person (name, age) {
    this.name = name,
    this.age = age
}

let person1 = new Person('Ludmila', 13)
console.log(person1)