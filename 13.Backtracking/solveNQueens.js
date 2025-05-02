function solveNQueens(n) {
  const result = [];
  const board = Array.from({ length: n }, () => ".".repeat(n)); // Empty board

  function isSafe(board, row, col, n) {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    // Check top-left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    // Check top-right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }

  function backtrack(row) {
    if (row === n) {
      result.push([...board]);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(board, row, col, n)) {
        // Place queen
        board[row] =
          board[row].substring(0, col) + "Q" + board[row].substring(col + 1);

        // Recurse to next row
        backtrack(row + 1);

        // Remove queen (backtrack)
        board[row] =
          board[row].substring(0, col) + "." + board[row].substring(col + 1);
      }
    }
  }

  backtrack(0);
  return result;
}
