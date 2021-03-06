function main() {
    var graph = Viva.Graph.graph();
    for (var i=1; i<6; i++) {
        graph.addLink('0', ''+i);
        for (var j=1; j<6; j++) {
            graph.addLink(''+i, i+''+j);
        }
    }

    /* Note: graph.addLink() creates new nodes if they are not yet
       present in the graph. Thus calling this method is equivalent to:

       graph.addNode(1);
       graph.addNode(2);
       graph.addLink(1, 2);
    */

    var renderer = Viva.Graph.View.renderer(graph);
    renderer.run();
}
