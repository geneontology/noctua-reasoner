
var assert = require('chai').assert;
var Reasoner = require('..').Reasoner;

var SUBPROPERTY_OF = "subPropertyOf";
var SUBCLASS_OF = "is_a";
var TYPE_OF = "type";

var DESCENDANT_OF = 'descendant-of'
var ANCESTOR_OF = 'ancestor-of'
var FATHER_OF = 'father-of'
var GRANDFATHER_OF = 'grandfather-of'
var GRANDPARENT_OF = 'grandparent-of'
var PARENT_OF = 'parent-of'
var CHILD_OF = 'child-of'
var ANCESTOR_OF = 'ancestor-of'
var f1 = "f1";
var m1 = "m1";
var b2 = "b2";
var b = "b";
var Male = "male";
var Female = "female";
var Person = "person";

describe('test ABOX', function(){

    var reasoner = null
    
    before(function() {
	// Remember, we are running from the project root, so relative
	// to there (?).
        var og = require('./abox.json')
        reasoner = new Reasoner(og)
        var t = reasoner.getFactStore()._totalAdded
        console.log("T="+t)
    });

    it('saturation check', function(){
        console.log(reasoner.edges());
        reasoner.saturate()
        var factstore = reasoner.getFactStore();
        
        assert.isTrue(factstore.has(TYPE_OF, 'f1', 'Male'));
        assert.isTrue(factstore.has(TYPE_OF, 'f1', 'Person'));
        assert.isTrue(factstore.has(TYPE_OF, 'm1', 'Female'));
        assert.isTrue(factstore.has(TYPE_OF, 'm1', 'Person'));
        assert.isTrue(factstore.has(PARENT_OF, b, b2));
        assert.isTrue(factstore.has(CHILD_OF, b2, b));
        assert.isTrue(factstore.has(GRANDPARENT_OF, f1, b2));
        assert.isTrue(factstore.has(DESCENDANT_OF, b2, b));
        assert.isTrue(factstore.has(DESCENDANT_OF, b2, f1));
        assert.isTrue(factstore.has(ANCESTOR_OF, f1, b2));
    });
    
});
