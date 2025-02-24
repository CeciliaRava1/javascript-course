class Person {

    constructor (name, age, country) {
        this.name = name,
        this.age = age,
        this.country = country
    }
}

let person = new Person('Lia', 10, 'USA')


class DefaultPerson {

    constructor (name = 'Default name', age = 'Default age', country = 'Default country') {
        this.name = name,
        this.age = age,
        this.country = country
    }
}

let defaultPerson = new DefaultPerson()


class PersonMethods {

    // Private
    #name
    #age
    #country
    #bank

    constructor (name, age, country, bank) {
        this.#name = name,
        this.#age = age,
        this.#country = country
        this.#bank = bank
    }

    walk () {
        // console.log('The person is walking')
    }

    get name() {
        return this.#name
    }

    get bank() {
        return this.#bank
    }

    set bank(newBank) {
        this.#bank = newBank
    }
}

let personMethods = new PersonMethods('Lia', 2, 'China', 'ib')
personMethods.walk()
personMethods.bank = 'new number'
// console.log(personMethods.bank)



// inheritance
class Animal {

    constructor (name) {
        this.name = name
    }

    sound () {
        console.log('Generic Wrarr!')
    }
}

class Dog extends Animal {

    run () {
        console.log("I'm running")
    }

    sound () {
        console.log('Woof!')
    }
}

let dog = new Dog('Lolo')
dog.sound()


// Static methods
class MathOperations {

    static sum (a, b) { // No need to instance the class to use it
        return a + b
    }
}

let myOperation = new MathOperations()
console.log(MathOperations.sum(2, 1))
