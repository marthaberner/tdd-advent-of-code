var assert = require('assert');
var funcs = require('../2');

describe('Wrapping Paper', function() {
  describe('#getBoxPaperOrder', function() {
    it('should return square footage of box plus area of smallest side', function() {
      var box = '2x3x4';
      var expected = 58;
      assert.equal(funcs.getBoxPaperOrder(box), expected)
    });
  });
  describe('getTotalPaperOrder', function() {
    it('should return the total square footage of paper that should be ordered', function() {
      var boxes = '2x3x4\n1x1x10\n';
      var expected = 101;
      assert.equal(funcs.getTotalOrder(boxes, funcs.getBoxPaperOrder), expected)
    });
  });
});
describe('Ribbons and bows', function() {
  describe('#getBoxRibbonOrder', function() {
    it('should return feet of ribbon required for single box and bow', function() {
      var box = '2x3x4';
      var expected = 34;
      assert.equal(funcs.getBoxRibbonOrder(box), expected)
    });
  });
  describe('getTotalRibbonOrder', function() {
    it('should return total feet of ribbon required for all boxes', function() {
      var boxes = '2x3x4\n1x1x10\n';
      var expected = 48;
      assert.equal(funcs.getTotalOrder(boxes, funcs.getBoxRibbonOrder), expected)
    });
  });
});
