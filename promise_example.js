let p1 = function () {

    /**
     * The promise need a function that
     * accepts resolve and reject as parameters.
     * Actually, those objects are used by the promise
     * to succeed the promise calling 'resolve()' or fail the promise
     * calling 'reject()'. 
     */
    return new Promise(
        function (resolve, reject) {
            console.log("Running simplePromise");
            setTimeout(
                function () {
                    console.log('resolving simplePromise');
                    /**
                     * In this case we are resolving this promise
                     */
                    resolve();
                    /**
                     * It could be reject calling the following code
                     */
                    //reject
                },
                500
            );
        }
    );
}

//The promise will execute just by calling it
let simplePromiseCall = p1();

p1().then(
    function () {
        console.log("This is called when the promise is resolved.");
    },
    function () {
        console.log("This is called when the promise is rejected.");
    }
)

/**
 * The promises can be concatenated by calling
 * then at end of the last call
 */

p1().then(
    function () {
        console.log('"Still going" will be passed to next promise');
        return 'Still going';
    }
).then(
    function (value) {
        console.log(value); //It will print 'Still going' because it was returned by the previous promise
        console.log('That ends here');
    }
);

/**
 * The function inside catch will run when some promise is rejected
 */
p1().then(
    function (resolve, reject) {
        throw 'Error on purpose';
    }
).catch(
    function (reason) {
        console.log(`It has failed because '${reason}'`);
    }
);

/**
 * Promises can be concatenated by calling
 * resolve(anotherPromise()). In this way,
 * the concataned promise has to be resolved
 * to the original function be resolved as well. 
 */
let p2 = function () {

    return new Promise(
        function (resolve, reject) {
            console.log('p2 is a good promise and always resolves')
            resolve(p1());
        }
    );
};

p2().then(
    function () {
        console.log('p2 has resolved');
    }
)

/**
 * We can call instantaneous prommise by calling
 */
let p3 = function () {
    return Promise.resolve("Something");
    //OR
    //return Promise.reject("Reason ...");
};

p3().then(function () { console.log('resolving...') });

/**
 * Using Promise.all we can execute a function
 * only when all the promises have suceeded.
 */

Promise.all([p1(), p2(), p3()]).then(
    function (value) {
        console.log("It runs only all promises resolve");
    },
    function (value) {
        console.log("Some of the promises reject because: " + value);
    }
);

/**
 * Using Promise.race we can execute a function
 * as far at least one function resolves before any
 * other rejects. If the fastest promise rejects,
 * the reject handle will run.
 */
Promise.all([p1(), p2(), p3()]).then(
    function (value) {
        console.log("It runs only all promises resolve");
    },
    function (reason) {
        console.log("Some of the promises reject because: " + value);
    }
)