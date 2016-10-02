var Graph = require("graphlib").Graph;
var _ = require('lodash');
var fp = require('lodash/fp');

var SUBPROPERTY_OF = "subPropertyOf";
var SUBCLASS_OF = "is_a";
var TYPE_OF = "type";
var INVERSE_OF = "inverseOf";

module.exports = Reasoner;

/**
 * Creates a Reasoner instance
 *
 * Note the ontology graph object input is unaffected;
 * reasoning uses a mutable factstore object
 *
 * @param {og} - OBO Graph JSON object
 * @returns {this} new instance
 */
function Reasoner(og) {
    this._og = og
    factstore = new FactStore(og)
    this._factstore = factstore
}

/**
 * @returns {this} current factstore (includes asserted and inferred edges)
 */
Reasoner.prototype.getFactStore = function() {
    return this._factstore
}
    
/**
 * @returns {this} default horn rule objects
 */
Reasoner.prototype.getRules = function() {
    var factstore = this._factstore
    var og = this._og
    isaRule = factstore.makeTransitivityRule(SUBCLASS_OF)
    subpRule = factstore.makeTransitivityRule(SUBPROPERTY_OF)
    typeRule = factstore.makeChainRule(TYPE_OF, TYPE_OF, SUBCLASS_OF)
    var rules = [isaRule, subpRule, typeRule ]
    for (i=0; i<og.graphs.length; i++) {
        var g = og.graphs[i]
        for (j=0; j<g.propertyChainAxioms.length; j++) {
            var a = g.propertyChainAxioms[j]
            cps = a.chainPredicateIds
            if (cps.length == 2) {
                rules.push({
                    type : 'chain',
                    p : a.predicateId,
                    p1 : cps[0],
                    p2 : cps[1]
                })
            }
            else {
                //console.log("Can only deal with rules with body length==2 " + cps)
            }
            
        }
    }
    
    
    return rules
}

/**
 * Tests to see which relations can apply between a pair of classes.
 * It will not perform TBox reasoning, so the closure of the classes
 * should be passed in as arguments
 * 
 * @param {subjects} - list of classes in subject closure
 * @param {objects} - list of classes in object closure
 */

Reasoner.prototype.testRelations = function(subjects, objects) {
    var pg = this._propertyGraph;
    var og = this._og
    
    var dras = []
    for (i=0; i<og.graphs.length; i++) {
        var g = og.graphs[i]
        var dra = g.domainRangeAxioms
        dras = dras.concat(dra)
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

    var failMap = {}

    predList = this._factstore.getPredicates();
    for (i=0; i<predList.length; i++) {
        var p = predList[i].id
        var axioms = draMap[p] || []
        var fails = []
        for (j=0; j<axioms.length; j++) {
            var axiom = axioms[j]
            fails = fails.concat(this.check(subjects, axiom['domainClassIds'], 'domain'))
            fails = fails.concat(this.check(objects, axiom['rangeClassIds'], 'range'))
            var avfs = axiom['allValuesFromEdges'] || []
            for (k=0; k<avfs.length; k++) {
                var avf = avfs[k]
                if (subjects.indexOf(avf.sub) > -1) {
                    if (objects.indexOf(avf.obj) == -1) {
                        fails.push("someValuesFromFail")
                    }
                }
            }
            
        }
        if (fails.length == 0) {
            pids.push(p)
        }
        else {
            failMap[p] = fails
        }
    }
    return {
        valid: pids,
        failureMap: failMap
    }
}

Reasoner.prototype.check = function(testClassIds, expectedClassIds, type) {
    if (!expectedClassIds) {
        return [];
    }
    var isFail =
        expectedClassIds.filter(
            // returns true if fails check
            function(c) {
                return testClassIds.indexOf(c) == -1
            }
        ).length > 0;
    if (isFail) {
        return [type + "Check-fail"]
    }
    else {
        return []
    }
}

Reasoner.prototype.edgesByPredicate = function(p) {
    return this._factstore.edgesByPredicate(p);
}

Reasoner.prototype.edges = function() {
    return this._factstore.edges();
}

Reasoner.prototype.inferredGraph = function() {
    var edgeTuples = this._factstore.edges()
    var edges = []
    for (var i in edgeTuples) {
        var et = edgeTuples[i]
        edges.push({pred: et[0], sub: et[1], obj: et[2]})
    }
    var iog = {}
    iog.nodes = this._og.nodes // copy reference; consider deep copy?
    iog.edges = edges
    return iog
}


/**
 * Applies horn rules until fact store is saturated
 *
 */
Reasoner.prototype.saturate = function() {
    rules = this.getRules()
    console.log("Rules:"+rules.length)
    console.log("RULES="+rules)
    var isSaturated = false;
    var factstore = this.getFactStore();
    var pindex = factstore._pindex;
    var totalAdded = 0;
    while (!isSaturated) {

        var numAdded = 0

        // property chain rules: p <- p1 o p2
        for (var i=0; i<rules.length; i++) {
            var r = rules[i]
            if (r.type == 'chain') {
                var p1i = pindex[r.p1] || {}
                var p2i = pindex[r.p2] || {}
                //console.log("RULE: "+r.p + " <- " + r.p1 +" o " + r.p2)
                for (var s in p1i) {
                    //console.log(" SUBJ: "+s)
                    for (var z in p1i[s]) {
                        //console.log("  Z: "+z)
                        for (var o in p2i[z] || []) {
                            //console.log("  INFERR "+s+" "+r.p+" "+o+" VIA "+z)
                            numAdded += factstore.add(r.p, s, o)
                            //console.log(numAdded)
                        }
                    }
                    
                }
            }
        }
        
        // subproperty rules: q <- p
        var subreli = pindex[SUBPROPERTY_OF] || {}
        for (var p in subreli) {
            //console.log(" P: "+p)
            for (var q in subreli[p]) {
                var p1i = pindex[p] || {}
                for (var s in p1i) {
                    //console.log(" SUBJ: "+s)
                    for (var o in p1i[s]) {
                        //console.log("  INFERR "+s+" "+q+" "+o+" // VIA SUBPOF: "+p)
                        numAdded += factstore.add(q, s, o)
                    }
                }                
            }
        }

        // inverse property rules: x p y <-> y q z
        var invpi = pindex[INVERSE_OF] || {}
        for (var p in invpi) {
            //console.log(" P: "+p)
            for (var q in invpi[p]) {
                //console.log(" INVERSES: "+p+","+q)

                // direction1: base assertion is p(s,o)
                var p1i = pindex[p] || {}
                for (var s in p1i) {
                    //console.log(" SUBJ: "+s)
                    for (var o in p1i[s]) {
                        numAdded += factstore.add(q, o, s)
                    }
                }                

                // direction2: base assertion is q(s,o)
                var q1i = pindex[q] || {}
                for (var s in q1i) {
                    for (var o in q1i[s]) {
                        numAdded += factstore.add(p, o, s)
                    }
                }                
            }
        }
        
        totalAdded += numAdded;
        isSaturated = numAdded == 0;
    }
    console.log("TOTAL:"+totalAdded)
    this._totalAdded = totalAdded
    return totalAdded;
}


/**
 * A FactStore is a simple triple store indexed by predicate followed by subject.
 *
 * It is designed specifically for use with a forward chaining reasoner
 * 
 * @param {og} ontology graph
 * @returns {this} new instance
 */
function FactStore(og) {
    this.index(og)
}

// translate an ontology graph into an index p->s->o
FactStore.prototype.index = function(og) {
    this._pindex = {}
    var nodesByType = {}
    this._nodesByType = nodesByType
    var ctxt = this
    _.map(og.graphs,
          function(g) {
              _.map(g.edges,
                    function(e) {
                        ctxt.add(e.pred, e.sub, e.obj);
                    })
          });
    _.map(og.graphs,
          function(g) {
              _.map(g.nodes,
                    function(n) {
                        nodesByType[n.type] = nodesByType[n.type] || []
                        nodesByType[n.type].push(n)
                    })
          });
}

FactStore.prototype.getPredicates = function() {
    return this._nodesByType['PROPERTY'] || []
}

// add a fact to the factstore
FactStore.prototype.add = function(p,s,o) {
    var pindex = this._pindex;
    if (!pindex[p]) {
        pindex[p] = {};
    }
    var sindex = pindex[p]
    if (!sindex[s]) {
        sindex[s] = {};
    }
    var oindex = sindex[s]
    if (!oindex[o]) {
        oindex[o] = true;
        //console.log("NEW**** "+s+" "+p+" "+o)
        return 1;
    }
    else {
        // already have: no effect
        return 0;
    }
}

// tests if a factstore contains a triple
FactStore.prototype.has = function(p,s,o) {
    var pindex = this._pindex;
    if (pindex[p]) {
        var sindex = pindex[p]
        if (sindex[s]) {
            var oindex = sindex[s]
            if (oindex[o]) {
                return true
            }
        }
    }
    return false
}

FactStore.prototype.edgesByPredicate = function(p) {
    var pindex = this._pindex;
    var ix = pindex[p] || {}
    var pairs = []
    for (var s in ix) {
        for (var o in s) {
            pairs.push([s,o])
        }
    }
    return pairs
}

FactStore.prototype.edges = function() {
    var pindex = this._pindex;
    var pairs = []
    for (var p in pindex) {
        console.log("P="+p)
        var ix = pindex[p] || {}
        for (var s in ix) {
            //console.log(" S="+s)
            for (var o in ix[s]) {
                pairs.push([p,s,o])
            }
        }
    }
    return pairs
}

FactStore.prototype.makeTransitivityRule = function(p) {
    return {
        type : 'chain',
        p : p,
        p1 : p,
        p2 : p
    }
}

FactStore.prototype.makeChainRule = function(ph, p1, p2) {
    return {
        type : 'chain',
        p : ph,
        p1 : p1,
        p2 : p2
    }
}

