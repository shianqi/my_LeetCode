/**
 * Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.
 * The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.
 * Example 1:
 * Input: "UD"
 * Output: true
 * Example 2:
 * Input: "LL"
 * Output: false
 */

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  var x = 0
  var y = 0
  for (var i = 0; i < moves.length; i++) {
    if (moves[i] === 'U') { y++ } else if (moves[i] === 'D') { y-- } else if (moves[i] === 'L') { x-- } else if (moves[i] === 'R') { x++ }
  }
  if (x === 0 && y === 0) { return true } else { return false }
}

console.log(judgeCircle('UD'))
/**
 * Tips:
 * 代码空格越少，执行越快
 * for循环的效率最高
 * == 比 === 快
 */
