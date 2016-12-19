const gridPath1 = [
    [1, 1],
    [0, 1]
];

const gridPath2 = [
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1]
];

const gridPath3 = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1]
];

const gridPath4 = [
    [1, 1, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 1],
    [0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1]
];

const gridNoPath1 = [
    [1, 0],
    [0, 0]
];

const gridNoPath2 = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
];

const gridNoPath3 = [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1]
];

module.exports.path = [
    [ gridPath1, ['down', 'right'] ],
    [ gridPath2, ['down', 'down', 'right', 'right'] ],
    [ gridPath3, ['right', 'right', 'down', 'down'] ],
    [ gridPath4, ['right', 'right', 'right', 'down', 'down', 'down', 'down', 'right'] ]
];

module.exports.noPath = [
    gridNoPath1,
    gridNoPath2,
    gridNoPath3
];
