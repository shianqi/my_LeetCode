/**
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 * 
 * Given two integers x and y, calculate the Hamming distance.
 * 
 * Note:
 * 0 ≤ x, y < 231.
 * 
 * Example:
 * 
 * Input: x = 1, y = 4
 * 
 * Output: 2
 * 
 * Explanation:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 *        ↑   ↑
 * 
The above arrows point to positions where the corresponding bits are different.
 */


//  /**
//  * @param {number} x
//  * @param {number} y
//  * @return {number}
//  */
// var hammingDistance = function(x, y) {
//     var hamming = (x ^ y).toString(2).match(/1/g);
    
//     if (hamming) return hamming.length;
//     else return 0;
// };

 /**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var b;
    var s;
    if(x>y){
        b = x.toString(2);
        s = y.toString(2);
    }else{
        b = y.toString(2);
        s = x.toString(2);
    }
    var bl = b.length;
    var sl = s.length;
    var cl = b.slice(0, bl-sl);
    var cr = b.slice(bl-sl, bl);
    var res = 0;
    for(var i=0;i<cl.length;i++){
        if(cl[i]=='1'){
            res++;
        }
    }
    for(var i=0;i<cr.length;i++){
        if(cr[i]!=s[i]){
            res++;
        }
    }
    return res;
};

console.log(hammingDistance(1,4));