/**
 * Reflect is already an object
 * that has been created for us.
 */
console.log(typeof Reflect); //It will print object

/**
 * We are going to create an intance of a person
 * using the Reflect Api
 */

class Person { }

let personInstance = Reflect.construct(Person, []);
console.log(personInstance instanceof Person); //It will print true 

class City { 
    constructor(state, city) {
        console.log(`State: ${state}, City: ${city}`);
    }
}

/**
 * Now we will construct a City passing arguments to its
 * constructor.
 * The following code will print:
 * State: Santa Catarina, City: Florianópolis
 */
let cityInstance = Reflect.construct(City, ["Santa Catarina", "Florianópolis"]);