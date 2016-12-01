'use strict';

/**
 * Given an image represented by an NxN matrix, where each pixel in the image is
 * 4 bytes, write a method to rotate the image by 90 degress. Can you do this in place?
 */
class rotateMatrix {
    /**
     * Copy
     * Running time: O(n^2)
     * Space complexity: O(n^2)
     * @param {Array} matrix An NxN matrix
     */
    copy(matrix) {
        let n = matrix.length;
        let copy = [];

        // initialize copy with zeroes
        for( let i = 0; i < n; i++ ) {
            copy.push(new Array(n).fill(0) );
        }

        // do copy
        for( let i = 0; i < n; i++ ) {
            for( let j = 0; j < n; j++ ) {
                copy[i][j] = matrix[n - 1 - j][i];
            }
        }

        return copy;
    }

    /**
     * In place
     * Running time: O(n^2)
     * Space complexity: O(1)
     * @param {Array} matrix An NxN matrix
     */
    inPlace(matrix) {
        let n = matrix.length;

        // rotate each square starting from outermost rows and columns
        for( let row = 0; row < Math.floor(n / 2); row++ ) {
            let rowInverse = n - 1 - row;

            // every iteration we start at the diagonal and loop to the inverse diagonal
            for( let col = row; col < rowInverse; col++ ) {
                let colInverse = n - 1 - col;

                // swap
                let temp1 = matrix[col][rowInverse];
                let temp2 = matrix[rowInverse][colInverse];
                let temp3 = matrix[colInverse][row];

                matrix[col][rowInverse] = matrix[row][col];
                matrix[rowInverse][colInverse] = temp1;
                matrix[colInverse][row] = temp2;
                matrix[row][col] = temp3;
            }
        }

        return matrix;
    }
}

module.exports = exports = new rotateMatrix();
