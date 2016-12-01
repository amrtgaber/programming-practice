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
     * @param  {Array} matrix An NxN matrix
     */
    copy(matrix) {
        let n = matrix.length;
        let copy = [];

        for( let i = 0; i < n; i++ ) {
            copy.push(new Array(n).fill(0) );
        }

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
     * @param  {Array} matrix An NxN matrix
     */
    // inPlace(matrix) {
    //
    // }
}

module.exports = exports = new rotateMatrix();
