var Graph = require("graphlib").Graph;

module.exports = getValidRelations;

function getRelationOntology() {
    var f = require("ro.js")
    return f()
}

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

    var draMap = {}
    for (i=0; i<dras.length; i++) {
        var dra = dras[i]
        var pid = dra.predicateId;
        // todo - propagate down subProperty hierarchy
        if (!draMap[pid]) {
            draMap[pid] = []
        }
        draMap[pid].push(dra)
    }

    var pids = []
    
    for (i=0; i<spg.nodes.length; i++) {
        var p = spg.nodes[p]
        var axioms = draMap[p]
        var isValid = true
        for (j=0; j<axioms.length; j++) {
            var axiom = axioms[j]
            isValid = isValid || check(subjects, axiom['domainClassIds'])
            isValid = isValid || check(objects, axiom['rangeClassIds'])
        }
        if (isValid) {
            pids.push(p)
        }
    }
    return pids
}

function check(testClassIds, expectedClassIds) {
    if (!expectedClassIds) {
        return true;
    }
    return expectedClassIds.filter(
        // returns true if fails check
        function(c) {
            return testClassIds.indexOf(c) == -1
        }
    ).length == 0
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

        for (j=0; j<nodes.length; j++) {
            var n = nodes[j]
            if (n.type == 'PROPERTY') {
                digraph.setNode(n.id, {label: n.lbl})
            }
        }
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
