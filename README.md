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