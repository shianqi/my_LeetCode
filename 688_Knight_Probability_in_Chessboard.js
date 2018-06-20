/**
 * On an NxN chessboard, a knight starts at the r-th row and c-th column and attempts to make exactly K moves. The rows and columns are 0 indexed, so the top-left square is (0, 0), and the bottom-right square is (N-1, N-1).
 *
 * A chess knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.
 *
 *
 * Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.
 *
 * The knight continues moving until it has made exactly K moves or has moved off the chessboard. Return the probability that the knight remains on the board after it has stopped moving.
 *
 * Example:
 * Input: 3, 2, 0, 0
 * Output: 0.0625
 * Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
 * From each of those positions, there are also two moves that will keep the knight on the board.
 * The total probability the knight stays on the board is 0.0625.
 * Note:
 * N will be between 1 and 25.
 * K will be between 0 and 100.
 * The knight always initially starts on the board.
 *
 * Your runtime beats 86.67 % of javascript submissions.
 */

/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function(N, K, r, c) {
  const inBoard = (x, y) => (x >= 0 && y >= 0 && x < N && y < N)
  const newArray2 = (size) => {
    const arr = new Array(size)
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(size)
    }
    return arr
  }

  const jumpCase = [
    { x: 1, y: 2 },
    { x: 1, y: -2 },
    { x: -1, y: 2 },
    { x: -1, y: -2 },
    { x: 2, y: 1 },
    { x: 2, y: -1 },
    { x: -2, y: 1 },
    { x: -2, y: -1 },
  ]

  let dp1 = newArray2(N)
  dp1[r][c] = 1

  for (let i = 0; i < K; i ++ ) {
    const dp2 = newArray2(N)
    for (let j = 0; j < N; j ++) {
      for (let k = 0; k < N; k ++) {
        if (dp1[j][k] == null || dp1[j][k] === 0) {
        } else {
          for (let l = 0; l < jumpCase.length; l ++) {
            const x1 = j + jumpCase[l].x
            const y1 = k + jumpCase[l].y
            if (inBoard(x1, y1)) {
              dp2[x1][y1] = ((dp1[j][k] || 0) / 8) + (dp2[x1][y1] || 0)
            }
          }
        }
      }
    }
    for (let i = 0; i < dp2.length; i++ ) {
      for (let j = 0; j < dp2[i].length; j++) {
        dp1[i][j] = dp2[i][j]
      }
    }
  }
  let all = 0
  for (let i = 0; i < dp1.length; i++ ) {
    for (let j = 0; j < dp1[i].length; j++) {
      all += dp1[i][j] || 0
    }
  }
  return all
}

console.log(knightProbability(3, 2, 0, 0))
