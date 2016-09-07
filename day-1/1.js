var input = require('./input');

function getFloor(instructions) {
  var up = 0, down = 0;
  instructions.split('').forEach(function (char) {
    char === '(' ? up++ : down++
  })
  return up - down;
}

function firstInstanceInBasement(instructions) {
  var up = 0, down = 0;
  instructions = instructions.split('')
  for (var i = 0; i < instructions.length; i++) {
    instructions[i] === '(' ? up++ : down++;
    if(down > up){ return i+1 }
  }
}

module.exports = {
  getFloor: getFloor,
  firstInstanceInBasement: firstInstanceInBasement
}
