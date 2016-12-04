const Node = require('../tree/node');

/**
 * Given a sorted array with unique integer elements, write an algorithm to create
 * a binary search tree with minimal height.
 */
class minimalTree {
    /**
     * Binary search
     * Running time: O(n)
     * Space complexity: O(lg n)
     * @param  {array} arr A sorted array of unique integer elements
     * @return {Node}      Returns the root of a binary search tree with minimal height
     */
    binarySearch(arr) {
        let middleIndex = Math.floor(arr.length / 2);
        let root = new Node( arr[middleIndex] );

        binarySearchHelper(arr, 0, middleIndex, root, true);
        binarySearchHelper(arr, middleIndex + 1, arr.length, root, false);

        function binarySearchHelper(arr, leftIndex, rightIndex, root, isLeft) {
            if( leftIndex >= rightIndex ) {
                return;
            }

            let middleIndex = Math.floor( (leftIndex + rightIndex) / 2 );
            let newNode = new Node( arr[middleIndex] );

            if( isLeft ) {
                root.children[0] = newNode;
            } else {
                root.children[1] = newNode;
            }

            binarySearchHelper(arr, leftIndex, middleIndex, newNode, true);
            binarySearchHelper(arr, middleIndex + 1, rightIndex, newNode, false);
        }

        return root;
    }
}

module.exports = exports = new minimalTree();
