# ES6 new features

### Math and numbers

[It is better to call parseInt this way Number.parseInt](./number_parse_int.js)

[isNaN and Number.isNaN not always return the same result](./is_nan_number_is_nan.js)

As the previous example, functions called in this manner Number.XXXX will not treat strings as numbers even when they have only numeric characters

[You can call Number.isInt to discover if a number is an integer](./number_is_int.js)

[A safe integer is an integer that can be safely converted to float, the function Number,isSafeInteger can check that for you](./is_safe_integer.js)

[You can discover the sign of a number calling Math.sign](./math_sign.js)

Many new function, as the previous examples, were added to Math

### Regex

[To handle unicode characters properly in regex expressions '/u' must be added to the patterns](./u_in_refex.js)

[The new flag '/y' looks for patterns from the last last index and the last index only](./regex_y_flag.js)

[The flags of a pattern can be discovered calling pattern.flags](./pattern_flags.js)

### Iterators

Iterators are objects that can be iterated (I'm a genious). It means that you can take one element at time out of an iterator and process it, once an element has been taken the iterator will return the next element if asked. Anything can be an iterator if it has a function called 'Symbol.iterator'.  [Here is an example](./iterator_example.js)

### Generators

While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state. Generators provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function which can maintain its own state.

A GeneratorFunction is a special type of function that works as a factory for iterators. When it is executed it returns a new Generator object. A function becomes a GeneratorFunction if it uses the function* syntax.

Examples on how to use generators are [here](./generator_example.js).

### Promises

Promises are now available as part of language.
Learn [here](./promise_example.js) how to use it.

### Arrays

Now it is possible to create an array of disctinct values calling Array.of.
[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of) you can learn how to use it.

Copy of an array can be done by calling Array.from.[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) you can learn how to use it.

The following functions have been added to the array prototype:  
[fill()](https://www.w3schools.com/Jsref/jsref_fill.asp): fills an array with static values.  
[find()](https://www.w3schools.com/Jsref/jsref_find.asp): Get the first value of an array that evaluates true
to test condition.  
[findIndex()](https://www.w3schools.com/Jsref/jsref_findindex.asp): Get the first index of an array that evaluates true to test condition.  
[copyWithin()](https://www.w3schools.com/Jsref/jsref_copywithin.asp): Copies some elements of an array to other indexes inside the same array.  
[entries()](https://www.w3schools.com/Jsref/jsref_entries.asp): Create an Array Iterator object, with key/value pairs for each item in a given array.  
[keys()](https://www.w3schools.com/Jsref/jsref_keys.asp): Create an Array Iterator object, with keys for each item in the given array.  
[values()](https://www.w3schools.com/Jsref/jsref_keys.asp): Create an Array Iterator object, with keys for each item in the given array.  

### ArrayBuffers and Typed Arrays

ArrayBuffer is a new feature that allows you to persist data in raw state and access it using Typed Arrays which are ways to represent the raw data. For example, you can create a BufferArray and read and/or write data in this array using 8-bits or 16-bits format by using respectively Int8Array or Int16Array. [Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) you can find a detailed explanation.

### Maps

Maps are now available in ES6. [Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) you can find a complete explanation.

### WeakMaps

WeakMaps are maps that hold weak references to objects. It means that a reference collected by the garbage collector will be removed from a weak map. [Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) you can find a complete explanation.


### Sets

Sets are now available in ES6. [Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) you can find a complete explanation.

### WeakSets

WeakSets are sets that hold weak references to objects. It means that a reference collected by the garbage collector will be removed from a WeakSet. [Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) you can find a complete explanation.


### Subclassing


????


