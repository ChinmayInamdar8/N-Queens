document.addEventListener('DOMContentLoaded', () => {
    let boxes = document.querySelectorAll('.box');
    let delay = 100;
    let board = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
        ];


    function map(i , j)
    {
        return i * 8 + j;
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


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    async function nQueen(board, row, n) {
        if (row == n) {
            console.log(board);
            return true;
        }

        for (let i = 0; i < board.length; i++) {
            if (isSafe(board, row, i)) {
                board[row][i] = 1;
                let ind = map(row, i);
                boxes[ind].innerHTML = `<img src = "q.png">`;

                await sleep(delay);
                if ( await nQueen(board, row + 1, n)) {
                    return true;
                }
                
                board[row][i] = 0;
                boxes[ind].innerHTML = '';
                await sleep(delay);
            }
        }
        return false;
    }

    

    (async () => {
        if (!await nQueen(board, 0, board.length)) {
            console.log('No solution exists');
        }
    })();

});



















