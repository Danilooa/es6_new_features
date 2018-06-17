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

Iterators are objects that can be iterate (I'm a genious). It means that you can take one element at time out of an iterator and process it, once an element has been taken the iterator will return the next element if asked. Anything can be an iterator if it has a function called 'Symbol.iterator'.  [Here is an example](./iterator_example.js)

### Generators

While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state. Generators provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function which can maintain its own state.

A GeneratorFunction is a special type of function that works as a factory for iterators. When it is executed it returns a new Generator object. A function becomes a GeneratorFunction if it uses the function* syntax.

Examples on how to use generators are [here](./generator_example.js)