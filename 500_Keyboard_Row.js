/**
 * 
 * Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
 * 
 * 
 * American keyboard
 * 
 * 
 * Example 1:
 * Input: ["Hello", "Alaska", "Dad", "Peace"]
 * Output: ["Alaska", "Dad"]
 * Note:
 * You may use one character in the keyboard more than once.
 * You may assume the input string will only contain letters of alphabet.
 */

/**
 * @param {string[]} words
 * @return {string[]}
 * Runtime: 109 ms 
 * Batter Than: 32.82%
 */
var findWords = function (words) {
  var keys = {
    q: 1,
    w: 1,
    e: 1,
    r: 1,
    t: 1,
    y: 1,
    u: 1,
    i: 1,
    o: 1,
    p: 1,
    a: 2,
    s: 2,
    d: 2,
    f: 2,
    g: 2,
    h: 2,
    j: 2,
    k: 2,
    l: 2,
    z: 3,
    x: 3,
    c: 3,
    v: 3,
    b: 3,
    n: 3,
    m: 3
  }
  var res = []
  for (var i = 0; i < words.length; i++) {
    var word = words[i]
    var side = 0
    for (var j = 0; j < word.length; j++) {
      if (side === 0) {
        side = keys[word[j].toLowerCase()]
      } else {
        if (side !== keys[word[j].toLowerCase()]) {
          break
        }
      }
      if (j === word.length - 1) {
        res.push(word)
      }
    }
  }
  return res
}

console.log(findWords(['Aasdfghjkl', 'Qwertyuiop', 'zZxcvbnm']))
