var Graph = require("graphlib").Graph;
var _ = require('lodash');
var fp = require('lodash/fp');

var SUBPROPERTY_OF = "subPropertyOf";

module.exports = Reasoner;

/**
 * @param {og} - OBO Graph JSON object
 * @returns {this} new instance
 */
function Reasoner(og) {
    this._og = og
    factstore = new FactStore()
    this._factstore = factstore
    factstore.index(og)
    isaRule = factstore.makeTransitivityRule("is_a")
    subpRule = factstore.makeTransitivityRule("subPropertyOf")
    //factstore.saturate([isaRule, subpRule])
    factstore.saturate([subpRule])
    //this._propertyGraph = this.og_to_graphlib(og,
    //                                          'subPropertyOf');
}

/**
 * 
 * @param {subjects} - list of subject classes
 * @param {objects} - list of subject classes
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



function FactStore() {
}

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

FactStore.prototype.makeTransitivityRule = function(p) {
    return {
        type : 'chain',
        p : p,
        p1 : p,
        p2 : p
    }
}

FactStore.prototype.saturate = function(rules) {
    var isSaturated = false;
    var pindex = this._pindex;
    var totalAdded = 0;
    while (!isSaturated) {

        var numAdded = 0
        for (var i=0; i<rules.length; i++) {
            var r = rules[i]
            var p1i = pindex[r.p1]
            var p2i = pindex[r.p2]
            for (var s in p1i) {
                for (var z in p1i[s]) {
                    for (var o in p2i[z]) {
                        //console.log("INFERR "+s+" "+r.p+" "+o+" VIA "+z)
                        numAdded += this.add(r.p, s, o)
                        //console.log(numAdded)
                    }
                }
                
            }
        }
        totalAdded += numAdded;
        isSaturated = numAdded == 0;
    }
    console.log("TOTAL:"+totalAdded)
    return totalAdded;
}
