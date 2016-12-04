const Node = require('../linked-list/node');

/**
 * Given a binary tree, design an algorithm which creates a linked list of all
 * the nodes at each depth (e.g. if you have a tree with depth D, you'll have D
 * linked lists).
 */
class listOfDepths {
    /**
     * Recursively append nodes to front of linked list
     * Running time: O(n)
     * Space complexity: O(lg n)
     * @param  {Node} root Root node of a binary tree
     * @return {array}     Returns array where each index is a linked list of nodes at that depth
     */
    appendToFront(root) {
        if( !root ) {
            return [];
        }

        let list = [ new Node(root) ];

        appendToFrontHelper(list, root.children[0], 1);
        appendToFrontHelper(list, root.children[1], 1);

        function appendToFrontHelper(list, root, depth) {
            if( !root ) {
                return;
            }

            let newNode = new Node(root);

            if( list[depth] ) {
                newNode.next = list[depth];
            } else {
                newNode.next = null;
            }

            list[depth] = newNode;

            appendToFrontHelper(list, root.children[0], depth + 1);
            appendToFrontHelper(list, root.children[1], depth + 1);
        }

        return list;
    }
}

module.exports = exports = new listOfDepths();
