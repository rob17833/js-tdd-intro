const assert = require('assert');
const Rectangle = require('../Rectangle.js');
const myRectangle = new Rectangle(5, 2);
const mySquare = new Rectangle(2, 2);

describe('myRectangle', ()=>{
	it('test square rectangle', ()=>{
		assert.strictEqual(mySquare.isSquare(), true);
	})
	it('test is not square rectangle', ()=>{
		assert.strictEqual(myRectangle.isSquare(), false);
	})
	it('test get area', ()=>{
		assert.strictEqual(myRectangle.getArea(), 10);
	})
	it('get perimeter', ()=>{
		assert.strictEqual(myRectangle.getPerimeter(), 14);
	})
});


