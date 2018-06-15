'use strict';

var unsafeInteger = Math.pow(2, 53);
console.log(`${unsafeInteger} is a safe integer? ${Number.isSafeInteger(unsafeInteger)}`);
console.log(`${unsafeInteger-1} is a safe integer? ${Number.isSafeInteger(unsafeInteger-1)}`);
