const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters.js')

// give the test suite a label using describe
describe('capitalizeFirstLetters', ()=>{
	it('is a function accepting one argument', ()=>{
		assert.strictEqual(typeof capitalizeFirstLetters, 'function');
		assert.strictEqual(capitalizeFirstLetters.length, 1);
	});
	it('transforms a chain of string', ()=>{
		assert.strictEqual(capitalizeFirstLetters('le chien ronge un os'), 'Le Chien Ronge Un Os');
	});
	it('transform a simple string', ()=>{
		assert.strictEqual(capitalizeFirstLetters('chien'), 'Chien');
	});
	it('works with empty string', ()=>{
		assert.strictEqual(capitalizeFirstLetters(''), '');
	})
});