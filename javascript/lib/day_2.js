var fs = require('fs');
var appRoot = process.cwd();
var input = fs.readFileSync(appRoot + '/data/day_2_input.js', 'utf8')

function getBoxPaperOrder(box) {
  box = box.split('x');
  var sqft = [];
  sqft.push((box[0]*box[1])*2);
  sqft.push((box[1]*box[2])*2);
  sqft.push((box[0]*box[2])*2);
  sqft.push(Math.min.apply(null, sqft)/2);
  return sqft.reduce(function (total, num) {
    return num += total;
  })
}

function getBoxRibbonOrder(box) {
  box = box.split('x');
  var boxFt = (box[0]*2) + (box[1]*2);
  var bowFt = box[0]*box[1]*box[2];
  return boxFt + bowFt;
}

function getTotalOrder(boxes, cb) {
  boxes = boxes.split('\n');
  boxes.pop();
  return boxes.reduce(function (total, box) {
    total += cb(box);
    return total;
  }, 0)
}

console.log(getTotalOrder(input, getBoxRibbonOrder));

module.exports = {
  getBoxPaperOrder: getBoxPaperOrder,
  getBoxRibbonOrder: getBoxRibbonOrder,
  getTotalOrder: getTotalOrder
}
