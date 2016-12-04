/**
 * Simple tree node
 * @param {any}   data     Any value
 * @param {array} children Child nodes. For binary tree assume index 0 is left and index 1 is right
 */
class Node {
    constructor(data = null, children = []) {
        this.data = data;
        this.children = children;
    }
}

module.exports = exports = Node;
