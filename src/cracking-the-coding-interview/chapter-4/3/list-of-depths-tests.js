const TreeNode = require('../tree/node');
const LinkedListNode = require('../linked-list/node');

let tree1 = new TreeNode(0, [ new TreeNode(1, [ new TreeNode(2), new TreeNode(3) ]), new TreeNode(4, [ new TreeNode(5), new TreeNode(6) ]) ]);

module.exports = exports = [
    [
        tree1,
        [
            new LinkedListNode(tree1),
            new LinkedListNode(tree1.children[1], new LinkedListNode(tree1.children[0]) ),
            new LinkedListNode(tree1.children[1].children[1], new LinkedListNode(tree1.children[1].children[0], new LinkedListNode(tree1.children[0].children[1], new LinkedListNode(tree1.children[0].children[0]) ) ) )
        ]
    ],
    [
        null,
        []
    ],
    [
        new TreeNode(null),
        [ new LinkedListNode( new TreeNode(null) ) ]
    ]
];
