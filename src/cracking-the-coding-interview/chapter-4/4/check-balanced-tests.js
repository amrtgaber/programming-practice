const Node = require('../tree/node');

/*
 * Balanced
 * root has no children
 */
let tree1 = new Node(0);

/*
 * Balanced
 *     0
 *   /   \
 *  1     2
 */
let tree2 = new Node(0);
tree2.children[0] = new Node(1);
tree2.children[1] = new Node(2);

/*
 * Balanced
 *     0
 *   /
 *  1
 */
let tree3 = new Node(0);
tree3.children[0] = new Node(1);

/*
 * Balanced
 *       0
 *     /   \
 *    1     2
 *   /
 *  3
 */
let tree4 = new Node(0);
tree4.children[0] = new Node(1);
tree4.children[1] = new Node(2);
tree4.children[0].children[0] = new Node(3);

/*
 * Balanced
 *    0
 *  /   \
 * 1     2
 *  \
 *   3
 */
let tree5 = new Node(0);
tree5.children[0] = new Node(1);
tree5.children[1] = new Node(2);
tree5.children[0].children[1] = new Node(3);

/*
 * Not balanced
 *       0
 *     /
 *    1
 *   /
 *  3
 */
let tree6 = new Node(0);
tree6.children[0] = new Node(1);
tree6.children[0].children[0] = new Node(3);

/*
 * Not balanced
 *        0
 *      /
 *     1
 *    /
 *   3
 *  /
 * 4
 */
let tree7 = new Node(0);
tree7.children[0] = new Node(1);
tree7.children[0].children[0] = new Node(3);
tree7.children[0].children[0].children[0] = new Node(4);

/*
 * Not Balanced
 *    0
 *  /   \
 * 1     2
 *  \
 *   3
 *    \
 *     4
 */
let tree8 = new Node(0);
tree8.children[0] = new Node(1);
tree8.children[1] = new Node(2);
tree8.children[0].children[1] = new Node(3);
tree8.children[0].children[1].children[1] = new Node(4);

/*
 * export balanced test cases
 */
module.exports.balanced = [
    null,
    tree1,
    tree2,
    tree3,
    tree4,
    tree5
];

/*
 * export not balanced test cases
 */
module.exports.notBalanced = [
    tree6,
    tree7,
    tree8
];
