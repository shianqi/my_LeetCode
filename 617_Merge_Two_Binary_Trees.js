/**
 * Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
 * 
 * You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.
 * 
 * Example 1:
 * Input: 
 * 	Tree 1                     Tree 2                  
 *           1                         2                             
 *          / \                       / \                            
 *         3   2                     1   3                        
 *        /                           \   \                      
 *       5                             4   7                  
 * Output: 
 * Merged tree:
 * 	     3
 * 	    / \
 * 	   4   5
 * 	  / \   \ 
 * 	 5   4   7
 * Note: The merging process must start from the root nodes of both trees.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    var node = null;
    if(t1||t2){
        var val = (t1?t1.val:0) + (t2?t2.val:0);
        node = new TreeNode(val);
        node.left = mergeTrees(((t1&&t1.left)?t1.left: null), ((t2&&t2.left)?t2.left: null));
        node.right = mergeTrees(((t1&&t1.right)?t1.right: null), ((t2&&t2.right)?t2.right: null));
        return node;
    }else{
        return node;
    }
};

//Batter Way

// var mergeTrees = function(t1, t2) {
//     if (t1 === null) return t2
//     if (t2 === null) return t1
//     var mergedTree = new TreeNode(t1.val + t2.val)
//     mergedTree.left = mergeTrees(t1.left, t2.left)
//     mergedTree.right = mergeTrees(t1.right, t2.right)
//     return mergedTree
// };

//-------------------------------

var node1 = new TreeNode(1);
var node2 = new TreeNode(3);
var node3 = new TreeNode(2);
var node4 = new TreeNode(5);
var node5 = new TreeNode(2);
var node6 = new TreeNode(1);
var node7 = new TreeNode(3);
var node8 = new TreeNode(4);
var node9 = new TreeNode(7);

node1.left = node2;
node1.right = node3;
node2.left = node4;

node5.left = node6;
node5.right = node7;
node6.right = node8;
node7.right = node9;

console.log(mergeTrees(node1, node5));

