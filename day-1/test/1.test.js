var assert = require('assert');
var myFuncs = require('../1');

describe('Advent of Code Day 1', function () {
  describe('#getFloor', function () {
    it('determines what floor the instructions take santa to', function () {
      var input = '))(((((';
      var expected = 3;
      assert.equal(myFuncs.getFloor(input), expected);
    })
  })
  describe('#firstInstanceInBasement', function () {
    it('finds the position of the first character to take santa to the basement', function () {
      var input = '()())';
      var expected = 5;
      assert.equal(myFuncs.firstInstanceInBasement(input), expected);
    })
  })
})
