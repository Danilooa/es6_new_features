let pattern = /191/y
console.log(pattern.test('111191')); //false
pattern.lastIndex = 3
console.log(pattern.test('111191')); //true