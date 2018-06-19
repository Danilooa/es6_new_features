class Country {
    constructor() {
        console.log(`We are constructing a country of category "${new.target.getCountryCategory()}"`);
        this.newTarget = new.target;
    }

    getNewTarget() {
        return this.newTarget;
    }
}

class DevelopingCountry extends Country {
    /**
     * This constructor is always created by the javascript
     * interpretor when none constructor is written
     * @param {*} args 
     */

    constructor(...args) {
        super(...args);
    }

    static getCountryCategory() {
        return "Under Developing";
    }
}

/**
 * When an object is instantiated using the new keyword,
 * "new.target" you hold a reference to the class that effectivelly owns
 * the called constructor.
 * 
 * Thus, in the following example, "new.target" will point at DevelopingCountry.
 * 
 * Since "new.target" allows calls to the static properties of the effective constructor class,
 * the following code "new.target.getCountryCategory()"}" in Country.constructor will be able to access
 * getCountryCategory that is static property of DevelopingCountry.
 */

let country = new DevelopingCountry(); //We are constructing a country of category "Under Developing"
console.log(country.getNewTarget()); //[Function: DevelopingCountry]
