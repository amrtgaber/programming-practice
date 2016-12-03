/**
 * Simple graph node
 * @param {any} data Any value
 */
class Node {
    constructor(data = null) {
        this.data = data;
        this.adjacent = [];
    }

    addEdge(node) {
        this.adjacent.push(node);
    }
}

module.exports = exports = Node;
