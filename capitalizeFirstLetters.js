function capitalizeFirstLetters(argument) {
	// test5 empty string
	if (argument.length===0) {
		return argument
	// test4 simple string
	} else if (argument.indexOf(' ')<0){
		return argument.replace(argument[0], argument[0].toUpperCase())
	// test3 chain of string
	} else {
		return argument.split(' ').map(item=>item.replace(item[0], item[0].toUpperCase())).join(' ')
	}
}


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

