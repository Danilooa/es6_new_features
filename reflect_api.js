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

class Continent {
    constructor() {
        console.log("Constructing a continent");
    }
}

class Africa extends Continent {

}

console.log(Reflect.getPrototypeOf(Africa).toString()); //The prototype of Africa will be printed, in this case continent

class ClassWithNoPrototype {

}

let anyPrototype = {
    doSomething: function () {
        console.log("Doing something")
    }
}

let classWithNoPrototype = new ClassWithNoPrototype();

/**
 * It set anyPrototype as the prototype of classWithNoPrototype,
 * then classWithNoProperty will have the function doSomething
 */
Reflect.setPrototypeOf(classWithNoPrototype, anyPrototype);

classWithNoPrototype.doSomething(); //Prints "Doing something"

class ClassWithSettersAndGetters {

    constructor() {
        this._property1 = 1;
        this._property2 = 2;
    }

    set property1(value) {
        this._property1 = value;
    }

    get property1() {
        return this._property1;
    }

    set property2(value) {
        this._property2 = value;
    }

    get property2() {
        return this._property2;
    }

}

let classWithSettersAndGetters = new ClassWithSettersAndGetters();

Reflect.set(classWithSettersAndGetters, 'property2', 2.5); //The same as classWithSettersAndGetters.property = 2.5
console.log(Reflect.get(classWithSettersAndGetters, 'property2')); //The same as classWithSettersAndGetters.property2

/**
 * anyTarget is going to be the 'this' when getProperty1 is called
 */
let anyTarget = {
    _property2: 999
}

console.log(Reflect.get(classWithSettersAndGetters, 'property2', anyTarget)); //Print 999

anyTarget._property1 = 0;

/**
 * anyTarget is going to be the 'this' when setProperty1 is called
 */

Reflect.set(classWithSettersAndGetters, 'property1', 777, anyTarget);

console.log("Still the same: " + classWithSettersAndGetters._property1);
console.log("anyTarget was the 'this' then it changed: " + anyTarget._property1);

console.log(Reflect.has(anyTarget, '_property1')); //Print true

/**
 * It is possble to all the properties of an object
 * calling Reflect.ownKeys
 */

console.log(Reflect.ownKeys(classWithSettersAndGetters)); //Prints [ '_property1', '_property2' ]

class RawClass {

}

let rawClass = new RawClass();

/**
 * A property can be created using the following code
 */
Reflect.defineProperty(rawClass, 'value', {
    value: 1994,
    configurable: true,
    enumerable: true
});

console.log(rawClass.value); //Prints 1994

/**
 * This code will remove the property value
 * from rawClass
 */
Reflect.deleteProperty(rawClass, 'value');

console.log(rawClass.value); //Print undefined

/**
 * All the details about an property can be get
 * by calling 
 *  
 * The following code will print:
 * { value: 1, writable: true, enumerable: true, configurable: true }
 */
console.log(Reflect.getOwnPropertyDescriptor(classWithSettersAndGetters, '_property1'));

/**
 * Sometimes it desirable to prevent objects from getting extended, which means having more
 * properties added to it.
 * 
 * It can be done by calling Reflect.preventExtensions
 */

class ExtensibleClass {

}

let extensibleObject = new ExtensibleClass();

Reflect.preventExtensions(extensibleObject);
extensibleObject.anyProperty = 1;
console.log(extensibleObject.anyProperty);

/**
 * If a third parameter is passed to Reflect.construct, the new.target will point 
 * at it. 
 */

class Mammal {
    constructor() {
        console.log(`This animal has ${new.target.getNumberOfPaws()} paws.`);
    }
}

class Cat {
    static getNumberOfPaws() {
        return 4;
    }
}

let catInstance = Reflect.construct(Mammal, [], Cat); // It will This animal has 4 paws. since new.taget was pointed at Cat

/**
 * Reflect.apply can be used to call a function.
 * The syntax is: Reflect.apply(target, this_reference, argument_list)
 */

class AnyClass {
    showSomething(...args) {
        console.log(`Showing anyProperty: "${this.anyProperty}"`);
        console.log(`Showing args: "${args}"`);
    }
}

/**
 * The following line will print:
 *
 * Showing anyProperty: "Any value"
 * Showing args: "arg1,arg2,arg3"
 */
Reflect.apply(AnyClass.prototype.showSomething, { anyProperty: 'Any value'}, ['arg1', 'arg2', 'arg3'] );