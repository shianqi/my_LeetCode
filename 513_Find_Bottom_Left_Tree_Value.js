/**
 * Given a binary tree, find the leftmost value in the last row of the tree.
 *
 * Example 1:
 * Input:
 *
 *     2
 *    / \
 *   1   3
 *
 * Output:
 * 1
 * Example 2:
 * Input:
 *
 *         1
 *        / \
 *       2   3
 *      /   / \
 *     4   5   6
 *        /
 *       7
 *
 * Output:
 * 7
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
  * @return {number}
  */
 var findBottomLeftValue = function(root) {
     var arr = []
     var res = 0
     arr.push(root)
     while(arr.length!==0){
         var temp = []
         res = arr[0].val
         for(var i=0;i<arr.length;i++){
             if(arr[i].left){
                 temp.push(arr[i].left)
             }
             if(arr[i].right){
                 temp.push(arr[i].right)
             }
         }
         arr=[]
         arr = temp.concat()
     }
     return res
 };

 const node1 = new TreeNode(1)
 const node2 = new TreeNode(2)
 const node3 = new TreeNode(3)
 const node4 = new TreeNode(4)
 const node5 = new TreeNode(5)
 const node6 = new TreeNode(6)
 const node7 = new TreeNode(7)

 node1.left = node2
 node1.right = node3
 node2.left = node4
 node3.left = node5
 node3.right = node6
 node5.left = node7

 console.log(findBottomLeftValue(node1))
