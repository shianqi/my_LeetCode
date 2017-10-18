/**
 * Related to question Excel Sheet Column Title
 *
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 *
 * For example:
 *
 *     A -> 1
 *     B -> 2
 *     C -> 3
 *     ...
 *     Z -> 26
 *     AA -> 27
 *     AB -> 28
 * Credits:
 * Special thanks to @ts for adding this problem and creating all test cases.
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  var num = 0
  for (var i = s.length - 1; i >= 0; i--) {
    var value = s.charCodeAt(i) - 64
    var weightedValue = value * Math.pow(26, s.length - i -1)
    num += weightedValue
  }
  return num
}

console.log(titleToNumber('AB'))
