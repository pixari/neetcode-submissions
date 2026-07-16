class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const cols = Array.from({ length: 9 }, () => new Set<string>());
        const rows = Array.from({ length: 9 }, () => new Set<string>());
        const boxes = Array.from({ length: 9 }, () => new Set<string>());

        for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
            if(board[i][j] === '.') continue;

            if(rows[i].has(board[i][j])){
                return false;
            }
            rows[i].add(board[i][j]);

            if(cols[j].has(board[i][j])){
                return false;
            } 
            cols[j].add(board[i][j]);

            const boxIndex = Math.floor(i/3)*3 + Math.floor(j/3);
            if(boxes[boxIndex].has(board[i][j])){
                return false;
            }
            boxes[boxIndex].add(board[i][j]);
            }
        }
        
        return true;
    }
}
