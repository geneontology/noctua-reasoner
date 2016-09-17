var Graph = require("graphlib").Graph;

module.exports = getValidRelations;

/**
 * 
 * @param {og} - OBO Graph JSON object
 * @param {subjects} - list of subject classes
 * @param {objects} - list of subject classes
 */
function getValidRelations(og, subjects, objects) {
    var spg = og_to_graphlib(og,
                             'subPropertyOf');

    var dras = []
    for (i=0; i<og.graphs.length; i++) {
        var g = og.graphs[i]
        dras.push(g.domainRangeAxioms)
    }
    for (i=0; i<spg.nodes.length; i++) {
        p = spg.nodes[p]
        
    }
}

/**
 * Translate an OBO Graph JSON object into a graphlib object, using
 * compound graphs in nestedRelations are specified
 */
function og_to_graphlib(og, gPred) {
    var digraph = new Graph({ directed: true, compound: false, multigraph: true });


    // iterate through all graph objects
    for (i=0; i<og.graphs.length; i++) {
        var g = og.graphs[i]

        var nodes = g.nodes
        var edges = g.edges

        // create a compound graph object, consisting of all
        // edges with preds in the nestedRelations list
        for (j=0; j<edges.length; j++) {
            var e = edges[j]
            var pred = e.pred
            var subj = e.subj || e.sub
            var obj = e.obj
            if (pred == gPred) {
                digraph.setEdge(subj, obj)
            }
        }
    }
    return digraph;
}
