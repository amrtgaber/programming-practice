/**
 * Implement a function to check if a binary tree is balanced.
 */
class checkBalanced {
    /**
     * Track max and min heights as we traverse
     * Running time: O(n)
     * Space complexity: O(1)
     * @param  {Node} root Root node of a binary tree
     * @return {array}     Returns true if the tree is balanced, false otherwise
     */
    trackMaxAndMin(root) {
        let maxHeight = Number.NEGATIVE_INFINITY;
        let minHeight = Number.POSITIVE_INFINITY;

        function helper(root, height) {
            if( !root ) {
                if( height > maxHeight ) {
                    maxHeight = height;
                }

                if( height < minHeight ) {
                    minHeight = height;
                }

                if( ( maxHeight - minHeight ) > 1 ) {
                    return false;
                } else {
                    return true;
                }
            }

            return helper(root.children[0], height + 1) && helper(root.children[1], height + 1);
        }

        return helper(root, 1);
    }
}

module.exports = exports = new checkBalanced();
