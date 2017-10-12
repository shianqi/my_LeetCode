/**
 * You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.
 * Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water,
 * and there is exactly one island (i.e., one or more connected land cells).
 * The island doesn't have "lakes" (water inside that isn't connected to the water around the island).
 * One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100.
 * Determine the perimeter of the island.
 * [[0,1,0,0],
 * [1,1,1,0],
 * [0,1,0,0],
 * [1,1,0,0]]

 * Answer: 16
 * Explanation: The perimeter is the 16 yellow stripes in the image below:
 */

/**
 * @param {number[][]} grid
 * @return {number}
 * 遍历数组，检查每一个等于1的上下左右，加上4-(上下左右等于1的数量)
 */
var islandPerimeter = function (grid) {
  var size = 0
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        size += 4
        if (i - 1 >= 0 && grid[i - 1][j] === 1) size--
        if (i + 1 < grid.length && grid[i + 1][j] === 1) size--
        if (j - 1 >= 0 && grid[i][j - 1] === 1) size--
        if (j + 1 < grid[i].length && grid[i][j + 1] === 1) size--
      }
    }
  }
  return size
}

console.log(islandPerimeter([[0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]]))
