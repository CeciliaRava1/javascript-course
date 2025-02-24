/*
Class 39 - Exercises: Classes
Video: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Create a class that receives two properties

class Person {
    // 8. Modify the class with getters and setters to use private properties
    #age

    constructor(name ,age) {
        this.name = name,
        this.#age = age
    }
// 4. Add a static method to the first class
    static scream() {
        return 'Wuuuu'
    }

    // 2. Add a method to the class that uses the properties
    // 7. Create a class that uses getters and setters
    get personName() {
        return this.name
    }

    set personName(newName) {
        this.name = newName
    }
}

// 3. Display the values of the properties and invoke the function
let person = new Person('Rocio', 2)
console.log(person.personName)

// 5. Use the static method
console.log(Person.scream())

// 6. Create a class that uses inheritance
class Child extends Person {

    // 10. Override a method of a class that uses inheritance
    scream() {
        return "I'm a child crying"
    }

}


// 9. Use the get and set methods and display their values
person.personName = 'Linda'; 
console.log(person.personName);

let child = new Child()
console.log(child.scream())
