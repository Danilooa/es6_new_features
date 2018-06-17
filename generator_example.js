/**
 * The use of '*' makes a function a generator
 */
console.log("---------- Process 1 -----------")
function *process1() {
    console.log("1.Step 1");
    //Using yield to return 1
    yield 1;
    console.log("1.Step 2");
    yield 2;
}

let proc1 = process1();
/**
 * Whe the following line is executed,
 * the generator process will execute just
 * until its first yield. The fiest yield
 * will return 1, then 1 will be printed.
 */
console.log(proc1.next().value);

console.log("---------- Process 2 -----------")
function *process2() {
    //yield assumes the value that is passed as argument to next()
    console.log(`2.Step 1: ${yield}`);
    console.log(`2.Step 2: ${yield}`);
}

let proc2 = process2();
proc2.next();       //It inits the generator
proc2.next(1000);   //2.Step 1: 1000
proc2.next(2000);   //2.Step 2: 2000

console.log("---------- Process 3 -----------")
function *process3() {
    yield 1;
    yield 2;
    /**
     * Using '*' when a iterable, like the array in this case,
     * is returned will the delagate the yield to the iterable returned.
     * In this case, it will be the same as calling 
     * yield 3
     * yield 4
     * yield 5
     */
    yield* [3,4,5];
}

/**
 * the following for loop will print
 * 1
 * 2
 * 3
 * 4
 * 5
 * It will happen because the yield that returns an array
 * was delegated.
 */
let proc3 = process3();
for (let yield_ of proc3) {
    console.log(yield_);
}

console.log("---------- Process 4 -----------")
function *process4() {
    try {
        yield 1;
        yield 2;
        yield 3;
    } catch(e) {
        console.log("The execution didn't terminate because the exception was treated");
    }
}

let proc4 = process4();
console.log(proc4.next());
/**
 * It will cause an error that stops the generator.
 * It the error it is not treated inside the generator,
 * the whole execution will terminate.
 */
console.log(proc4.throw("Any error"));
/**
 * An object contained done=true and value=undefined will be return,
 * since the exception from the last line finished the
 * generator
 */
console.log(proc4.next());

console.log("---------- Process 5 -----------")
function *process5() {
    yield 1;
    yield 2;
    yield 3;
}

let proc5 = process5();
/**
 * This line will print 1
 */
console.log(proc5.next().value);
/**
 * Return will finish the generator without
 * throwing exceptions.
 */
console.log(proc5.return("Finishing the generator"));
/**
 * This line will return an object with value=undefinied and
 * done=true since the previous line finished the generator
 */
console.log(proc5.next());