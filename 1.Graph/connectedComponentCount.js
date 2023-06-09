const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
}

/**
 iterate over each nodes. ie iterate over keys of the object.
 apply dfs/bfs over the neighbors of each iterate nodes.

 conditions to be applie
     1. check for cyclic nature i.e. ues set as visited contant lookup time.
     2. if the graph is in the form of object then make sure. to use String() while adding the current to visited.
     

 */

const connectecComponentcount = (graph)=>{
    let count = 0;

    const visited = new Set();

    for (let node in graph) {
        if (explore(graph, node, visited) === true) {
            count += 1;
        }
    }
    return count;
}

const explore = (graph,current,visited)=>{

    if (visited.has(String(current)))
        return false;

    visited.add(String(current));

    for (let neighbor of graph[current]) {
        explore(graph, neighbor, visited)
    }

    return true;
}

connectecComponentcount(graph)
