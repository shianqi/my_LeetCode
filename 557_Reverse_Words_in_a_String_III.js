/**
 * Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 * Example 1:
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 * Note: In the string, each word is separated by single space and there will not be any extra space in the string.
 */

/**
 * @param {string} s
 * @return {string}
 * Runtime: 132 ms
 * Batter Than: 90.66%
 */
var reverseWords = function (s) {
  var list = s.split(' ')
  var res = []
  for (var i = 0; i < list.length; i++) {
    var str = list[i]
    var resStr = ''
    for (var j = str.length - 1; j >= 0; j--) {
      resStr += str[j]
    }
    res.push(resStr)
  }
  return res.join(' ')
}

console.log(reverseWords("Let's take LeetCode contest"))
