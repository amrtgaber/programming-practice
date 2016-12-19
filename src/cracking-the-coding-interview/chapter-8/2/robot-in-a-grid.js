/**
 * Imagine a robot sitting on the upper left corner of grid with r rows and c
 * columns. The robot can only move in two directions, right and down, but certain
 * cells are "off limits" such that the robot cannot step on them. Design an
 * algorithm to find a path for the robot from the top left to the bottom right.
 * Valid cells = 1
 * Invalid cells = 0
 */
class robotInAGrid {
    /**
     * Recursive depth first search
     * Running time: O(n^2)
     * Space complexity: O(n)
     * @param  {Array} grid 2 dimensional grid with valid cells as 1s and invalid cells as 0s
     * @return {Array}      Returns a stack of directions to take from the first cell as strings "right" or "down", null if no path is found
     */
    recursiveDFS(grid) {
        let lastRow = grid.length - 1;
        let lastCol = grid[lastRow].length - 1;
        let path = [];

        if( findPath(0, 0) ) {
            return path;
        }

        return null;

        function findPath(x, y) {
            if( x > lastRow || y > lastCol || grid[x][y] === 0 ) {
                return false;
            }

            if( x === lastRow && y === lastCol ) {
                return true;
            }

            if( findPath(x, y + 1) ) {
                path.push('right');
                return true;
            }

            if( findPath(x + 1, y) ) {
                path.push('down');
                return true;
            }

            return false;
        }
    }
}

module.exports = exports = new robotInAGrid();
