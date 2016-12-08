/**
 * Implement a function to check if a binary tree is a binary search tree.
 */
class validateBst {
    /**
     * Try to find each element in the bst
     * Running time: O(n * lg n)
     * Space complexity: O(lg^2 n)
     * @param  {Node} root Root node of a binary tree
     * @return {boolean}   Returns true if the tree is a binary search tree, false otherwise
     */
    searchBst(root) {
        if( !root ) {
            return true;
        }

        return traversalHelper(root, root.left) && traversalHelper(root, root.right);

        function traversalHelper( root, node ) {
            if( !node ) {
                return true;
            }

            if( !searchHelper(root, node) ) {
                return false;
            }

            return traversalHelper(root, node.left) && traversalHelper(root, node.right);
        }

        function searchHelper(root, target) {
            if( !root ) {
                return false;
            }

            if( root === target ) {
                return true;
            } else if( target.data < root.data ) {
                return searchHelper( root.left, target );
            } else {
                return searchHelper( root.right, target );
            }
        }
    }

    /**
     * Inorder traversal
     * Running time: O(n)
     * Space complexity: O(n)
     * @param  {Node} root Root node of a binary tree
     * @return {boolean}   Returns true if the tree is a binary search tree, false otherwise
     */
    inorder(root) {
        if( !root ) {
            return true;
        }

        let flatTree = [];

        flatten(root);

        // if the array is not already sorted, return false
        for( let i = 0; i < flatTree.length - 1; i++ ) {
            if( flatTree[i] > flatTree[i + 1] ) {
                return false;
            }
        }

        return true;

        function flatten(root) {
            if( root ) {
                flatten(root.left);
                flatTree.push(root.data);
                flatten(root.right);
            }
        }
    }
}

module.exports = exports = new validateBst();
