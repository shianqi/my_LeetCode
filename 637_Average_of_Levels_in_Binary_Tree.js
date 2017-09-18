/**
 * Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
 *
 * Example 1:
 * Input:
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * Output: [3, 14.5, 11]
 * Explanation:
 * The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
 *
 */


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    var stick = []
    var res = []
    stick.push(root)
    while(stick.length!==0){
        var temp = 0
        var tempSize = 0
        var _stick = stick.concat()
        stick=[]
        for(var i=0;i<_stick.length;i++){
            temp+=_stick[i].val
            tempSize++
            if(_stick[i].left)stick.push(_stick[i].left)
            if(_stick[i].right)stick.push(_stick[i].right)
        }
        res.push(temp/tempSize)
    }
    return res
};

var node1 = new TreeNode(3)
var node2 = new TreeNode(9)
var node3 = new TreeNode(20)
var node4 = new TreeNode(15)
var node5 = new TreeNode(7)

node1.left = node2
node1.right = node3
node3.left = node4
node3.right = node5

console.log(averageOfLevels(node1))
