# Noctua-reasoner

This is intended for performing incomplete reasoning on client
side. The primary use case is validity checking for relations between
a pair of properties, in principle extendible

## OWL Profile

This is a rule based reasoner, implementing the following subset of horn-logic:

 * SUBPROPERTY: xPy, P subPropertyOf Q -> xQy
 * INVERSE: xPy, P inverseOf Q -> yQx
 * CHAIN: xP1y, yP2z, P<-P1 o P2 -> xPz

Additional rules compile down to these:

 * TRANSITIVITY: Transitive(P) -> P<-PoP
 * TYPE: type <- type o is_a
 * SUBCLASS-TRANSITIVITY: Transitive(is_a)
 * SUBPROPERTY-TRANSITIVITY: Transitive(subPropertyOf)
 * INVERSE-SYMMETRY: P inverseOf Q -> Q inverseOf P

Note both classes and individuals are in the domain of discourse. 

The input is an [OBO Graph JSON Ontology](https://github.com/geneontology/obographs)

The reasoner will create a FactStore object based on this input
ontology, and forward chain / saturate. The implementation is naive,
but the intend is to reason over small ABox/RBox combos, so
optimization is a lower priority.


## See also

https://github.com/geneontology/noctua/issues/358
