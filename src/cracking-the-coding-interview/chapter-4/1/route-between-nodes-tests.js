const Node = require('../graph/node');

/**
* Create test case
* @param {Node} start Start node
* @param {Node} end   End node
*/
class Test {
    constructor(start = null, end = null) {
        this.start = start;
        this.end = end;
    }
}

/**
 * Create graph and populate with nodes
 * @param {number} nodeCount Number of nodes to create
 */
function createGraph(nodeCount = 0) {
    let graph = [];

    for( let i = 0; i < nodeCount; i++ ) {
        graph.push( new Node(i) );
    }

    return graph;
}

/*
 * create graphs for test cases
 */
// one continuous route
let graph1 = createGraph(10);
for( let i = 0; i < graph1.length - 1; i++ ) {
    graph1[i].addEdge( graph1[i + 1] );
}

// one edge
let graph2 = createGraph(10);
graph2[0].addEdge( graph2[1] );

// no edges
let graph3 = createGraph(10);

// route through all even nodes
let graph4 = createGraph(25);
for( let i = 0; i < graph4.length - 2; i += 2 ) {
    graph4[i].addEdge( graph4[i + 2] );
}

// all possible edges
let graph5 = createGraph(10);
for( let i = 0; i < graph5.length - 1; i++ ) {
    for( let j = 0; j < graph5.length - 1; j++ ) {
        if( j !== i ) {
            graph5[i].addEdge( graph5[j] );
        }
    }
}

/*
 * export route test cases
 */
module.exports.route = [
    new Test( graph1[0], graph1[1] ),
    new Test( graph1[0], graph1[9] ),
    new Test( graph2[0], graph2[1] ),
    new Test( graph4[0], graph4[20] ),
    new Test( graph5[1], graph5[5] )
];

/*
 * export no route test cases
 */
module.exports.noRoute = [
    new Test( null, null ),
    new Test( graph1[1], graph1[0] ),
    new Test( graph2[0], graph2[2] ),
    new Test( graph3[0], graph3[9] ),
    new Test( graph4[0], graph4[15] ),
    new Test( graph5[1], graph5[1] )
];
