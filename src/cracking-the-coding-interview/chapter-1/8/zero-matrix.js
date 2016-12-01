/**
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire
 * row and column are set to 0.
 */
class zeroMatrix {
    /**
     * Basic implementation
     * Running time: O(m*n)
     * Space complexity: O(m*n)
     * @param {Array} matrix An MxN matrix
     */
    basic(matrix) {
        let m = matrix.length;
        let n = matrix[0].length;

        let zeroRows = [];
        let zeroCols = [];

        // find all zeroes
        for( let i = 0; i < m; i++ ) {
            for( let j = 0; j < n; j++ ) {
                if( matrix[i][j] === 0 ) {
                    zeroRows.push(i);
                    zeroCols.push(j);
                }
            }
        }

        // zero out all rows
        zeroRows.forEach( row => {
            for( let col = 0; col < n; col++ ) {
                matrix[row][col] = 0;
            }
        });

        // zero out all cols
        zeroCols.forEach( col => {
            for( let row = 0; row < m; row++ ) {
                matrix[row][col] = 0;
            }
        });

        return matrix;
    }
}

module.exports = exports = new zeroMatrix();
