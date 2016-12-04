/**
 * Simple linked list node
 * @param {any}  data Any value
 * @param {Node} next Link to next node
 */
class Node {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}

module.exports = exports = Node;
