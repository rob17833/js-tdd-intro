
const assert = require('assert');
// test1 if capitalizeFirstLetters() is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// test2 if capitalizeFirstLetters() accepts only one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);
// test3 first case, a chain of strings
assert.strictEqual(capitalizeFirstLetters('le chien ronge un os'), 'Le Chien Ronge Un Os');
// test4 second case, a simple string
assert.strictEqual(capitalizeFirstLetters('chien'), 'Chien');
// test5 an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');

