/**
 * Write a program that outputs the string representation of numbers from 1 to n.
 * 
 * But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
 * 
 * Example:
 * 
 * n = 15,
 * 
 * Return:
 * [
 *     "1",
 *     "2",
 *     "Fizz",
 *     "4",
 *     "Buzz",
 *     "Fizz",
 *     "7",
 *     "8",
 *     "Fizz",
 *     "Buzz",
 *     "11",
 *     "Fizz",
 *     "13",
 *     "14",
 *     "FizzBuzz"
 * ]
 */

/**
 * @param {number} n
 * @return {string[]}
 * 
 * Runtime: 128 ms
 * Batter than 44.39%
 */
var fizzBuzz = function (n) {
  var arr = []
  for (var i = 1; i < n + 1; i++) {
    var res = i + ''
    if (i % 3 === 0) {
      res = 'Fizz'
    }
    if (i % 5 === 0) {
      if (res === 'Fizz') {
        res = 'FizzBuzz'
      } else {
        res = 'Buzz'
      }
    }
    arr[i - 1] = res
  }
  return arr
}

// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var fizzBuzz = function(n) {
//     var result = [];
//     for (var i = 1; i <= n; i++) {
//         if (i % 15 === 0) {
//             result.push("FizzBuzz");
//         } else if (i % 3 === 0) {
//             result.push("Fizz");
//         } else if (i % 5 === 0) {
//             result.push("Buzz");
//         } else {
//             result.push(String(i));
//         }
//     }
//     return result;
// };

console.log(fizzBuzz(15))
