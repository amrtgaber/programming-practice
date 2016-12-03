/**
 * Given a directed graph, design an algorithm to find out whether there is a
 * route between two nodes.
 */
class routeBetweenNodes {
    /**
     * Breadth first search
     * Running time: O(V + E)
     * Space complexity: O(V)
     * @param  {Node}    start Start node
     * @param  {Node}    end   End node
     * @return {boolean}       Returns true if there is a route between both nodes, false otherwise
     */
    breadthFirstSearch(start, end) {
        if( !start || !end ) {
            return false;
        }

        let queue = [];
        let visited = new WeakMap();

        queue.push(start);
        visited.set(start, true);

        while( queue.length >  0 ) {
            let node = queue.shift();

            for( let neighbor of node.adjacent ) {
                if( !visited.has(neighbor) ) {
                    if( neighbor === end ) {
                        // route found
                        return true;
                    }

                    visited.set(neighbor, true);
                    queue.push(neighbor);
                }
            }
        }

        // route was not found
        return false;
    }
}

module.exports = exports = new routeBetweenNodes();
