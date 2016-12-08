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

    get left() {
        return this.children[0];
    }

    set left(node) {
        this.children[0] = node;
    }

    get right() {
        return this.children[1];
    }

    set right(node) {
        this.children[1] = node;
    }
}

module.exports = exports = Node;
