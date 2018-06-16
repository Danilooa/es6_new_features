let anyString = 'I will write anything here';
/**
 * String is iterator then will can iterate it 
 * using a for loop. The iterable itens in a 
 * String are its characters.
 */

/**
 * This will print all the characters out
 * anyString
 */
for (let character of anyString) {
    console.log(character);
}

/**
 * What the previous loop did was to call
 * anyString.next() repeatedly until it reached
 * the last character of the string.
 * So lets see what anyString.next() returns.
 */

let anotherString = 'I wrote anything here againt';
/**
 * It is necessary to call any_iterable_object.[Symbol.iterator]()
 * to return an iterator ifself.
 */
let anotherStringIterator = anotherString[Symbol.iterator]();
console.log(anotherStringIterator.next()); //out: { value: 'I', done: false }

/**
 * As the previous example demonstrated the next() call returned an object containing
 * the property 'done'. When 'done' is false, all the elements in an iterator
 * have been processed and the iteration must finish.
 */

/**
 * The next example will show how to make any object iterable.
 * To do this all that is needed is a function called Symbol.iterator
 * that returns an object with the properties value and done.
 * 
 * The following example will instantiate a person with its full name.
 * This person will be iterable and will show all its names when iterated.
 */

function Person(fullName) {
    that = this;
    this.fullName = fullName; 
    this[Symbol.iterator] = function() {
        this.indexCurrentName = 0;
        this.next = function() {
            let names;
            /**
             * It the array of names does not exit yet, it will be created
             */
            if (!names) {
                names = that.fullName.split(" ");
            }
            /**
             * If the iteration is not yet done, it will
             * return the current name
             */
            if (this.indexCurrentName >= 0 && this.indexCurrentName < names.length) {
                return {
                    value: names[this.indexCurrentName++],
                    done: false
                }
            }
            /**
             * When the iteration is already done,
             * an object with undefined value and the flag done=true will tbe return.
             * It will tell that the iteration is over.
             */
            return {
                value: undefined,
                done: true
            }
        }
        /**
         * Needs to return an object that contains the function next().
         * In this case, the function itself.
         */
        return this;

    }
}

let person = new Person("Pedro Álvares Cabral");
let personIterator = person[Symbol.iterator]();
/**
 * The for will print:
 * 
 * Pedro
 * Álvares
 * Cabral
 */
for(let name of personIterator) {
    console.log(name);
}