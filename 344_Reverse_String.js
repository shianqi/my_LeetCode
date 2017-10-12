/**
 * Write a function that takes a string as input and returns the string reversed.
 * 
 * Example:
 * Given s = "hello", return "olleh".
 */

/**
 * @param {string} s
 * @return {string}
 * Runtime: 152 ms
 * Batter than: 62.19%
 */
var reverseString = function (s) {
  var resStr = ''
  for (var j = s.length - 1; j >= 0; j--) {
    resStr += s[j]
  }
  return resStr
}

console.log(reverseString('hello'))
