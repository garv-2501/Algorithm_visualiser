function breadthFirstSearch_visual_setup(n, nodes) {
    // Create the nodes of the graph
    for (var i = 0; i < n; i++) {
        nodes[i] = {
            x: random(width),
            y: random(height),
            value: i,
        };
    }

    // Create the edges of the graph
    for (var i = 0; i < nodes.length; i++) {
        for (var j = 0; j < nodes.length; j++) {
            if (i !== j) {
                edges.push({
                    a: i,
                    b: j,
                });
            }
        }
    }
}
