
var assert = require('chai').assert;
var Reasoner = require('..').Reasoner;

describe('test RO', function(){

    var reasoner = null
    var CONTINUANT = 'http://purl.obolibrary.org/obo/BFO_0000002'
    var OCCURENT = 'http://purl.obolibrary.org/obo/BFO_0000003'
    var INDEPENDENT_CONTINUANT = 'http://purl.obolibrary.org/obo/BFO_0000004'
    var CELL = 'http://purl.obolibrary.org/obo/CL_0000000'

    var HAS_COMPONENT = 'http://purl.obolibrary.org/obo/RO_0002180'
    var OCCURENT_PART_OF = 'http://purl.obolibrary.org/obo/RO_0002012'
    var ATTACHED_TO_PART_OF = 'http://purl.obolibrary.org/obo/RO_0002177'
    var DIRECTLY_DEVELOPS_FROM = 'http://purl.obolibrary.org/obo/RO_0002207'
    var BIOLOGICAL_PROCESS = 'http://purl.obolibrary.org/obo/GO_0008150'
    var HAS_GENE_PRODUCT = 'http://purl.obolibrary.org/obo/RO_0002205' // C-->IC
    
    before(function() {
	// Remember, we are running from the project root, so relative
	// to there (?).
        var og = require('./ro.json')
        reasoner = new Reasoner(og)
    });

    it('domain-range check', function(){
        subjs = [BIOLOGICAL_PROCESS, OCCURENT]
        objs = [BIOLOGICAL_PROCESS, OCCURENT]
        var result = reasoner.testRelations(subjs,objs)
        assert.include(result.valid, HAS_COMPONENT) // succeeds because there is no domain and range constraint
        assert.include(result.valid, OCCURENT_PART_OF)  // succeeds because domain and range constraints satisfy
        assert.include(Object.keys(result.failureMap), ATTACHED_TO_PART_OF)
    });
    
    it('domain-range check2', function(){
        subjs = [CONTINUANT, INDEPENDENT_CONTINUANT]
        objs = [CONTINUANT, INDEPENDENT_CONTINUANT]
        var result = reasoner.testRelations(subjs,objs)
        assert.include(result.valid, HAS_GENE_PRODUCT)
    });
    it('all-values-from check', function(){
        var result = reasoner.testRelations([CELL],[CELL])
        assert.include(result.valid, DIRECTLY_DEVELOPS_FROM) // satisfies AVF
        result = reasoner.testRelations([CONTINUANT],[CONTINUANT])
        assert.include(result.valid, DIRECTLY_DEVELOPS_FROM)  // AVF does not apply
        result = reasoner.testRelations([CELL],[CONTINUANT])
        assert.include(Object.keys(result.failureMap), DIRECTLY_DEVELOPS_FROM) // does not satisfy AVF
        result = reasoner.testRelations([CONTINUANT],[CELL]) 
        assert.include(result.valid, DIRECTLY_DEVELOPS_FROM)  // AVF does not apply
    });
});
