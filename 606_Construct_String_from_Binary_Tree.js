/**
 *
 * You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.
 *
 * The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.
 *
 * Example 1:
 * Input: Binary tree: [1,2,3,4]
 *        1
 *      /   \
 *     2     3
 *    /
 *   4
 *
 * Output: "1(2(4))(3)"
 *
 * Explanation: Originallay it needs to be "1(2(4)())(3()())",
 * but you need to omit all the unnecessary empty parenthesis pairs.
 * And it will be "1(2(4))(3)".
 * Example 2:
 * Input: Binary tree: [1,2,3,null,4]
 *        1
 *      /   \
 *     2     3
 *      \
 *       4
 *
 * Output: "1(2()(4))(3)"
 *
 * Explanation: Almost the same as the first example,
 * except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.
 */

var tree2str = function (t) {
  if (!t) return ''

  const left = tree2str(t.left)
  const right = tree2str(t.right)

  // omit printing empty right node in the string
  if (right) return `${t.val}(${left})(${right})`
  else if (left) return `${t.val}(${left})`
  else return `${t.val}`
}

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

var node1 = new TreeNode(1)
var node2 = new TreeNode(2)
var node3 = new TreeNode(3)
var node4 = new TreeNode(4)
var node5 = new TreeNode(5)

node1.left = node2
node2.left = node3
node2.right = node4
node4.left = node5

console.log(`${node1}`)
console.log(tree2str(node1))
