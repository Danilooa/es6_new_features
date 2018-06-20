class Target {
    constructor(name) {
        this.name = name;
        this.property1 = 1;
        this.property2 = 2;
    }
}

let targetObject = new Target('targetObject');

/**
 * Here a proxy is being defined to intercept any get operations
 * on the object targetObject
 */
let proxy = new Proxy(targetObject, {
    /**
     * This proxy will just log when some get operation is called
     */
    get: function (target, property, receiver) {
        console.log(`The property ${property.toString()} of ${target.name} has been accessed.`);
        return Reflect.get(target, property, receiver);
    }
});

console.log(targetObject.property1); //Prints 1
console.log(proxy.property1); //Prints The property property1 of targetObject has been accessed. 1

function targetFunction(...args) {
    console.log(`This is the target function working with the args ${args}`);
}

let functionProxy = new Proxy(targetFunction, {
    apply: function (target, thisContext, arguments) {
        console.log("Logging calls to the function " + target.name);
        Reflect.apply(target, thisContext, arguments);
    }
});

targetFunction("arg1", "arg2"); // Prints This is the target function working with the args arg1,arg2
functionProxy("arg1", "arg2"); // Prints Logging calls to the function targetFunction This is the target function working with the args arg1, arg2

class WillHaveAPrototypeProxy {
    constructor() {
        this.property1 = 1;
    }
}

/**
 * This code will create a generic proxy that is able to 
 * log when a property that doesn't exist is called
 */
let proxyAsPrototype = new Proxy({}, {
    get: function (target, property, receiver) {
        console.log(`The property ${property} doesn't exist.`);
    }
});

let objectThatWillBeLogged = new WillHaveAPrototypeProxy();
Reflect.setPrototypeOf(objectThatWillBeLogged, proxyAsPrototype);

console.log(objectThatWillBeLogged.property1);

/**
 * Since the thisPropertyDoesntExist doesn't exist on objectThatWillBeLogged
 * it will try to call this property on its prototype. Since the prototype is
 * in fact a proxy, the message "The property thisPropertyDoesntExist doesn't exist."
 * will be printed.
 */
console.log(objectThatWillBeLogged.thisPropertyDoesntExist);

class ThatWillReceiveARevocableProxy {
    constructor() {
        this.property1 = 1;
    }
}

let objectWithRevocableProxy = new ThatWillReceiveARevocableProxy();
/**
 * Here a proxy will be created by calling Proxy.revocable.
 * This call actually returns the proxy itself and a function that is
 * able to revoke the proxy. 
 */


let revocableProxy = Proxy.revocable(
    objectWithRevocableProxy,
    {
        get: function (target, property, receiver) {
            return Reflect.get(target, property, receiver) + 100;
        }
    }
)

console.log(revocableProxy.proxy.property1); //print 101
revocableProxy.revoke();
try {
    console.log(revocableProxy.proxy.property1); //this line will throw an error since the proxy revoked
}
catch (e) {
    console.log("---->" + e);
}
