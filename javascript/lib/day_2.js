var fs = require('fs');
var appRoot = process.cwd();
var input = fs.readFileSync(appRoot + '/data/day_2_input.js', 'utf8')

function getBoxPaperOrder(box) {

}

function getBoxRibbonOrder(box) {

}

function getTotalOrder(boxes, cb) {

}

console.log(getTotalOrder(input, getBoxRibbonOrder));

module.exports = {
  getBoxPaperOrder: getBoxPaperOrder,
  getBoxRibbonOrder: getBoxRibbonOrder,
  getTotalOrder: getTotalOrder
}
