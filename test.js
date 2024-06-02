document.addEventListener('DOMContentLoaded', () => {
    let boxes = document.querySelectorAll('.box');

    function map(i, j) {
        return i * 4 + j;
    }

    function isSafe(board, a, b) {
        for (let i = a - 1; i >= 0; i--) {
            if (board[i][b] == 1) return false;
        }
        for (let i = a - 1, j = b - 1; (i >= 0 && j >= 0); i--, j--) {
            if (board[i][j] == 1) return false;
        }
        for (let i = a - 1, j = b + 1; (i >= 0 && j < board.length); i--, j++) {
            if (board[i][j] == 1) return false;
        }
        return true;
    }

    function nQueen(board, row, n) {
        if (row == n) {
            console.log('Solution found:', board);
            return true; // Return true to indicate a solution is found
        }

        for (let i = 0; i < board.length; i++) {
            if (isSafe(board, row, i)) {
                board[row][i] = 1;
                let ind = map(row, i);
                boxes[ind].innerText = 'Q';

                if (nQueen(board, row + 1, n)) {
                    return true; // Return true if the solution works
                }

                board[row][i] = 0;
                boxes[ind].innerText = '';
            }
        }
        return false; // Return false if no solution is found for the current row
    }

    let board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    if (!nQueen(board, 0, board.length)) {
        console.log('No solution exists');
    }
});
