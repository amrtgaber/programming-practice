const Node = require('../tree/node.js');

module.exports = exports = [
    [
        [0, 1, 2, 3],
        new Node(2, [
            new Node(1, [
                new Node(0) ]),
            new Node(3) ])
    ],
    [
        [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
        new Node(12, [
            new Node(6, [
                new Node(4, [
                    new Node(2) ]),
                new Node(10, [
                    new Node(8) ])
            ]),
            new Node(18, [
                new Node(16, [
                    new Node(14) ]),
                new Node(22, [
                    new Node(20) ])
            ])
        ])
    ]
];
