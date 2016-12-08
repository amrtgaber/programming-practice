const Node = require('../tree/node');

/*
 * BST
 * root has no children
 */
let bstTree1 = new Node(0);

/*
 * BST
 *     1
 *   /   \
 *  0     2
 */
let bstTree2 = new Node(1);
bstTree2.left = new Node(0);
bstTree2.right = new Node(2);

/*
 * BST
 *     1
 *   /
 *  0
 */
let bstTree3 = new Node(1);
bstTree3.left = new Node(0);

/*
 * BST
 *       3
 *     /   \
 *    2     4
 *   /
 *  1
 */
let bstTree4 = new Node(3);
bstTree4.left = new Node(2);
bstTree4.right = new Node(4);
bstTree4.left.left = new Node(1);

/*
 * BST
 *    3
 *  /   \
 * 1     4
 *  \
 *   2
 */
let bstTree5 = new Node(3);
bstTree5.left = new Node(1);
bstTree5.right = new Node(4);
bstTree5.left.right = new Node(2);

/*
 * BST
 *    4
 *  /   \
 * 1     5
 *  \     \
 *   2     6
 *    \
 *     3
 */
let bstTree6 = new Node(4);
bstTree6.left = new Node(1);
bstTree6.right = new Node(5);
bstTree6.left.right = new Node(2);
bstTree6.right.right = new Node(6);
bstTree6.left.right.right = new Node(3);

/*
 * BST
 *        4
 *     /     \
 *    2       6
 *  /   \   /   \
 * 1     3 5     7
 */
let bstTree7 = new Node(4);
bstTree7.left = new Node(2);
bstTree7.right = new Node(6);
bstTree7.left.left = new Node(1);
bstTree7.left.right = new Node(3);
bstTree7.right.left = new Node(5);
bstTree7.right.right = new Node(7);

/*
 * BST
 * null
 */
let bstTree8 = null;

/*
 * Not BST
 *    0
 *  /
 * 1
 */
let notBstTree1 = new Node(0);
notBstTree1.left = new Node(1);

/*
 * Not BST
 *    2
 *  /   \
 * 0     1
 */
let notBstTree2 = new Node(2);
notBstTree2.left = new Node(0);
notBstTree2.right = new Node(1);

/*
 * Not BST
 *    3
 *  /   \
 * 1     5
 *  \
 *   2
 *    \
 *     4
 */
let notBstTree3 = new Node(3);
notBstTree3.left = new Node(1);
notBstTree3.right = new Node(5);
notBstTree3.left.right = new Node(2);
notBstTree3.left.right.right = new Node(4);

/*
 * Not BST
 *    4
 *  /   \
 * 1     6
 *  \     \
 *   2     5
 *    \
 *     3
 */
let notBstTree4 = new Node(4);
notBstTree4.left = new Node(1);
notBstTree4.right = new Node(6);
notBstTree4.left.right = new Node(2);
notBstTree4.right.right = new Node(5);
notBstTree4.left.right.right = new Node(3);

/*
 * Not BST
 *    4
 *  /   \
 * 1     5
 *  \
 *   5
 */
let notBstTree5 = new Node(4);
notBstTree5.left = new Node(1);
notBstTree5.right = new Node(5);
notBstTree5.left.right = new Node(5);

/*
 * export BST test cases
 */
module.exports.bst = [
    bstTree1,
    bstTree2,
    bstTree3,
    bstTree4,
    bstTree5,
    bstTree6,
    bstTree7,
    bstTree8
];

/*
 * export not BST test cases
 */
module.exports.notBst = [
    notBstTree1,
    notBstTree2,
    notBstTree3,
    notBstTree4,
    notBstTree5
];
