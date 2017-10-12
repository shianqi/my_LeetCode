/**
 * Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
 * 
 * Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)
 * 
 * Example 1:
 * [[0,0,1,0,0,0,0,1,0,0,0,0,0],
 *  [0,0,0,0,0,0,0,1,1,1,0,0,0],
 *  [0,1,1,0,1,0,0,0,0,0,0,0,0],
 *  [0,1,0,0,1,1,0,0,1,0,1,0,0],
 *  [0,1,0,0,1,1,0,0,1,1,1,0,0],
 *  [0,0,0,0,0,0,0,0,0,0,1,0,0],
 *  [0,0,0,0,0,0,0,1,1,1,0,0,0],
 *  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
 * Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
 * Example 2:
 * [[0,0,0,0,0,0,0,0]]
 * Given the above grid, return 0.
 * Note: The length of each dimension in the given grid does not exceed 50.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  var y = grid.length
  var x = grid[0].length
  var maxVal = 0

  var find = function (i, j) {
    var res = 1
    grid[i][j] = 0
    if (j - 1 >= 0 && grid[i][j - 1] === 1) {
      grid[i][j - 1] = 0
      res += find(i, j - 1)
    }
    if (j + 1 < x && grid[i][j + 1] === 1) {
      grid[i][j + 1] = 0
      res += find(i, j + 1)
    }
    if (i + 1 < y && grid[i + 1][j] === 1) {
      grid[i + 1][j] = 0
      res += find(i + 1, j)
    }
    if (i - 1 >= 0 && grid[i - 1][j] === 1) {
      grid[i - 1][j] = 0
      res += find(i - 1, j)
    }
    return res
  }
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        var temp = find(i, j)
        if (temp > maxVal) {
          maxVal = temp
        }
      }
    }
  }
  return maxVal
}

var test1 = [[1, 0, 1], [1, 1, 1]]

console.log(maxAreaOfIsland(test1))
