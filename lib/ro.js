module.exports = ro
function ro() {
    return
{
  "graphs" : [ {
    "nodes" : [ {
      "id" : "http://purl.obolibrary.org/obo/RO_0002170",
      "meta" : {
        "definition" : {
          "val" : "a is connected to b if and only if a and b are discrete structure, and there exists some connecting structure c, such that c connects a and b",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "connected to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002291",
      "meta" : {
        "definition" : {
          "val" : "x is ubiquitously expressed in y if and only if x is expressed in y, and the majority of cells in y express x",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "ubiquitously expressed in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002292",
      "meta" : {
        "definition" : {
          "val" : "Inverse of 'expressed in'",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "expresses"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002171",
      "meta" : {
        "definition" : {
          "val" : "A is mutually_spatially_disjoint_with B if both A and B are classes, and there exists no p such that p is part_of some A and p is part_of some B.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "mutually spatially disjoint with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002176",
      "meta" : {
        "definition" : {
          "val" : "c connects a if and only if there exist some b such that a and b are similar parts of the same system, and c connects b, specifically, c connects a with b. When one structure connects two others it unites some aspect of the function or role they play within the system.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "connects"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002297",
      "type" : "PROPERTY",
      "lbl" : "results in formation of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002177",
      "meta" : {
        "definition" : {
          "val" : "a is attached to part of b if a is attached to b, or a is attached to some p, where p is part of b.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "attached to part of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002298",
      "meta" : {
        "definition" : {
          "val" : "The relationship that links an entity with the process that results in the formation and shaping of that entity over time from an immature to a mature state.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "results in morphogenesis of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002299",
      "meta" : {
        "definition" : {
          "val" : "The relationship that links an entity with a process that results in the progression of the entity over time that is independent of changes in it's shape and results in an end point state of that entity.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "results in maturation of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002178",
      "meta" : {
        "definition" : {
          "val" : "Relation between an arterial structure and another structure, where the arterial structure acts as a conduit channeling fluid, substance or energy.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "supplies"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002179",
      "meta" : {
        "definition" : {
          "val" : "Relation between an collecting structure and another structure, where the collecting structure acts as a conduit channeling fluid, substance or energy away from the other structure.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "drains"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002293",
      "meta" : {
        "definition" : {
          "val" : "inverse of ubiquiotously expressed in",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "ubiquitously expresses"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002172",
      "meta" : {
        "definition" : {
          "val" : "An assertion that holds between an ontology class and an organism taxon class, which is intepreted to yield some relationship between instances of the ontology class and the taxon.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "taxonomic class assertion"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002173",
      "meta" : {
        "definition" : {
          "val" : "S ambiguous_for_taxon T if the class S does not have a clear referent in taxon T. An example would be the class 'manual digit 1', which encompasses a homology hypotheses that is accepted for some species (e.g. human and mouse), but does not have a clear referent in Aves - the referent is dependent on the hypothesis embraced, and also on the ontogenetic stage.  [PHENOSCPAE:asilomar_mtg]",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "ambiguous for taxon"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002295",
      "meta" : {
        "definition" : {
          "val" : "p results in the developmental progression of s iff p is a developmental process and s is an anatomical structure and p causes s to undergo a change in state at some point along its natural developmental cycle (this cycle starts with its formation, through the mature structure, and ends with its loss).",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "results in developmental progression of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002174",
      "meta" : {
        "definition" : {
          "val" : "S dubious_for_taxon T if it is probably the case that no instances of S can be found in any instance of T.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "dubious for taxon"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002175",
      "meta" : {
        "definition" : {
          "val" : "S present_in_taxon T if some instance of T has some S. This does not means that all instances of T have an S - it may only be certain life stages or sexes that have S",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "present in taxon"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002296",
      "meta" : {
        "definition" : {
          "val" : "p 'results in development of' c if and only if p is a developmental process and p results in the state of c changing from its initial state as a primordium or anlage through its mature state and to its final state.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "results in development of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/PATO_0000001",
      "type" : "CLASS",
      "lbl" : "quality"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002160",
      "meta" : {
        "definition" : {
          "val" : "x only in taxon y if and only if x is in taxon y, and there is no other organism z such that y!=z a and x is in taxon z.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "only in taxon"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002286",
      "meta" : {
        "definition" : {
          "val" : "Inverse of developmentally preceded by",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "developmentally succeeded by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002287",
      "type" : "PROPERTY",
      "lbl" : "part of developmental precursor of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002161",
      "meta" : {
        "definition" : {
          "val" : "x never in taxon T if and only if T is a class, and x does not instantiate the class expression \"in taxon some T\". Note that this is a shortcut relation, and should be used as a hasValue restriction in OWL.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "never in taxon"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002162",
      "meta" : {
        "definition" : {
          "val" : "x is in taxon y if an only if y is an organism, and the relationship between x and y is one of: part of (reflexive), developmentally preceded by, derives from, secreted by, expressed.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "in taxon"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002163",
      "meta" : {
        "definition" : {
          "val" : "A is spatially_disjoint_from B if and only if they have no parts in common",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "spatially disjoint from"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002285",
      "meta" : {
        "definition" : {
          "val" : "x developmentally replaces y if and only if there is some developmental process that causes x to move or to cease to exist, and for the site that was occupied by x to become occupied by y, where y either comes into existence in this site or moves to this site from somewhere else",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "developmentally replaces"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002158",
      "meta" : {
        "definition" : {
          "val" : "two individual entities d1 and d2 stand in a shares_ancestor_with relation if and only if there exists some a such that d1 derived_by_descent_from a and d2 derived_by_descent_from a.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "shares ancestor with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002159",
      "type" : "PROPERTY",
      "lbl" : "serially homologous to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0000092",
      "meta" : {
        "definition" : {
          "val" : "inverse of has disposition",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "disposition of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0000091",
      "meta" : {
        "definition" : {
          "val" : "a relation between an independent continuant (the bearer) and a disposition, in which the disposition specifically depends on the bearer for its existence",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has disposition"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0003002",
      "meta" : {
        "definition" : {
          "val" : "Holds between protein a (a transcription factor) and DNA element b if and only if a diminishes the process of transcription of b.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "represses expression of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0003001",
      "meta" : {
        "definition" : {
          "val" : "a produced_by b iff some process that occurs_in b has_output a.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "produced by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002156",
      "meta" : {
        "definition" : {
          "val" : "d derived_by_descent_from a if d is specified by some genetic program that is sequence-inherited-from a genetic program that specifies a.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "derived by descent from"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002157",
      "meta" : {
        "definition" : {
          "val" : "inverse of derived by descent from",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has derived by descendant"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0003003",
      "meta" : {
        "definition" : {
          "val" : "Holds between protein a (a transcription factor) and DNA element b if and only if a activates the process of transcription of b.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "increases expression of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002150",
      "meta" : {
        "definition" : {
          "val" : "X continuous_with Y if and only if X and Y share a fiat boundary.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "continuous with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002151",
      "meta" : {
        "definition" : {
          "val" : "x partially overlaps y iff there exists some z such that z is part of x and z is part of y, and it is also the case that neither x is part of y or y is part of x",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "partially overlaps"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0003000",
      "meta" : {
        "definition" : {
          "val" : "a produces b if some process that occurs_in a has_output b, where a and b are material entities. Examples: hybridoma cell line produces monoclonal antibody reagent; chondroblast produces avascular GAG-rich matrix.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "produces"
    }, {
      "id" : "http://purl.obolibrary.org/obo/PATO_0000141",
      "type" : "CLASS",
      "lbl" : "structure"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000412",
      "type" : "PROPERTY",
      "lbl" : "imported from"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0100001",
      "lbl" : "term replaced by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002380",
      "meta" : {
        "definition" : {
          "val" : "x is a branching part of y if and only if x is part of y and x is connected directly or indirectly to the main stem of y",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "branching part of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0000081",
      "meta" : {
        "definition" : {
          "val" : "a relation between a role and an independent continuant (the bearer), in which the role specifically depends on the bearer for its existence",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "role of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0000080",
      "meta" : {
        "definition" : {
          "val" : "a relation between a quality and an independent continuant (the bearer), in which the quality specifically depends on the bearer for its existence",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "quality of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0044456",
      "type" : "CLASS",
      "lbl" : "synapse part"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0000085",
      "meta" : {
        "definition" : {
          "val" : "a relation between an independent continuant (the bearer) and a function, in which the function specifically depends on the bearer for its existence",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has function"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002385",
      "meta" : {
        "definition" : {
          "val" : "x has potential to developmentrally contribute to y iff x developmentally contributes to y or x is capable of developmentally contributing to y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has potential to developmentally contribute to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002264",
      "meta" : {
        "definition" : {
          "val" : "c acts upstream of or within p if c is enables 'p' and p' causally upstream of or within p",
          "xrefs" : [ ]
        },
        "synonyms" : [ {
          "pred" : "hasRelatedSynonym",
          "val" : "affects",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "acts upstream of or within"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002386",
      "meta" : {
        "definition" : {
          "val" : "x has potential to developmentally induce y iff x developmentally induces y or x is capable of developmentally inducing y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has potential to developmentally induce"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002387",
      "meta" : {
        "definition" : {
          "val" : "x has the potential to develop into y iff x develops into y or if x is capable of developing into y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has potential to develop into"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0043005",
      "type" : "CLASS",
      "lbl" : "neuron projection"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002388",
      "meta" : {
        "definition" : {
          "val" : "x has potential to directly develop into y iff x directly develops into y or x is capable of directly developing into y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has potential to directly develop into"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002381",
      "meta" : {
        "definition" : {
          "val" : "x main_stem_of y if y is a branching structure and x is a channel that traces a linear path through y, such that x has higher capacity than any other such path.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "main stem of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002260",
      "meta" : {
        "definition" : {
          "val" : "c has-biological-role r iff c has-role r and r is a biological role (CHEBI:24432)",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has biological role"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002382",
      "meta" : {
        "definition" : {
          "val" : "x proper_distributary_of y iff x distributary_of y and x does not flow back into y",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "proper distributary of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002261",
      "meta" : {
        "definition" : {
          "val" : "c has-application-role r iff c has-role r and r is an application role (CHEBI:33232)",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has application role"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002262",
      "meta" : {
        "definition" : {
          "val" : "c has-chemical-role r iff c has-role r and r is a chemical role (CHEBI:51086)",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has chemical role"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002383",
      "meta" : {
        "definition" : {
          "val" : "x proper_tributary_of y iff x tributary_of y and x does not originate from y",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "proper tributary of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0000087",
      "meta" : {
        "definition" : {
          "val" : "a relation between an independent continuant (the bearer) and a role, in which the role specifically depends on the bearer for its existence",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has role"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0000086",
      "meta" : {
        "definition" : {
          "val" : "a relation between an independent continuant (the bearer) and a quality, in which the quality specifically depends on the bearer for its existence",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has quality"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002263",
      "meta" : {
        "definition" : {
          "val" : "c involved in regulation of p if c enables  'p' and p' causally upstream of p",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "acts upstream of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002384",
      "meta" : {
        "definition" : {
          "val" : "x has developmental potential involving y iff x is capable of a developmental process with output y. y may be the successor of x, or may be a different structure in the vicinity (as for example in the case of developmental induction).",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has developmental potential involving"
    }, {
      "id" : "http://purl.obolibrary.org/obo/PATO_0001241",
      "type" : "CLASS",
      "lbl" : "physical object quality"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0000079",
      "meta" : {
        "definition" : {
          "val" : "a relation between a function and an independent continuant (the bearer), in which the function specifically depends on the bearer for its existence",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "function of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002378",
      "meta" : {
        "definition" : {
          "val" : "x anabranch_of y if x is a distributary of y (i.e. it channels a from a larger flow from y) and x ultimately channels the flow back into y.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "anabranch of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002257",
      "meta" : {
        "definition" : {
          "val" : "Inverse of developmentally induced by",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "developmentally induces"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002258",
      "meta" : {
        "definition" : {
          "val" : "Candidate definition: x developmentally related to y if and only if there exists some developmental process (GO:0032502) p such that x and y both participates in p, and x is the output of p and y is the input of p",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "developmentally preceded by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002379",
      "meta" : {
        "definition" : {
          "val" : "x spatially_coextensive_with y if and inly if x and y have the same location",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "spatially coextensive with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002259",
      "type" : "PROPERTY",
      "lbl" : "defined by inverse"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000424",
      "type" : "PROPERTY",
      "lbl" : "expand expression to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000425",
      "type" : "PROPERTY",
      "lbl" : "expand assertion to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/CARO_0000003",
      "type" : "CLASS",
      "lbl" : "anatomical structure"
    }, {
      "id" : "http://purl.obolibrary.org/obo/CARO_0000007",
      "type" : "CLASS",
      "lbl" : "immaterial anatomical entity"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002490",
      "meta" : {
        "definition" : {
          "val" : "x existence overlaps y if and only if either (a) the start of x is part of y or (b) the end of x is part of y. Formally: x existence starts and ends during y iff (α(x) >= α(y) & α(x) <= ω(y)) OR (ω(x) <= ω(y) & ω(x) >= α(y))",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "existence overlaps"
    }, {
      "id" : "http://purl.obolibrary.org/obo/CARO_0000006",
      "type" : "CLASS",
      "lbl" : "material anatomical entity"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002011",
      "meta" : {
        "definition" : {
          "val" : "A relationship that holds between a  process that regulates a transport process and the entity transported by that process.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "regulates transport of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002253",
      "meta" : {
        "definition" : {
          "val" : "inverse of connecting branch of",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has connecting branch"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002132",
      "meta" : {
        "definition" : {
          "val" : "The relation between a neuron projection bundle and a neuron projection that is fasciculated with it.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has fasciculating neuron projection"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002495",
      "meta" : {
        "definition" : {
          "val" : "x immediate transformation of y iff x immediately succeeds y temporally at a time boundary t, and all of the matter present in x at t is present in y at t, and all the matter in y at t is present in x at t",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "immediate transformation of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002374",
      "meta" : {
        "definition" : {
          "val" : "x has_fused_element y iff: there exists some z : x has_part z, z homologous_to y, and y is a distinct element, the boundary between x and z is largely fiat",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has fused element"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002496",
      "meta" : {
        "definition" : {
          "val" : "x existence starts during or after y if and only if the time point at which x starts is after or equivalent to the time point at which y starts. Formally: x existence starts during or after y iff α (x) >= α (y).",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "existence starts during or after"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002254",
      "meta" : {
        "definition" : {
          "val" : "x has developmental contribution from y iff x has some part z such that z develops from y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has developmental contribution from"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002375",
      "meta" : {
        "definition" : {
          "val" : "A relationship that holds between two material entities in a system of connected structures, where the branching relationship holds based on properties of the connecting network.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "in branching relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002012",
      "meta" : {
        "definition" : {
          "val" : "A part of relation that applies only between occurents.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "occurent part of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002376",
      "meta" : {
        "definition" : {
          "val" : "x tributary_of y if and only if x a channel for the flow of a substance into y, where y is larger than x. If x and y are hydrographic features, then y is the main stem of a river, or a lake or bay, but not the sea or ocean. If x and y are anatomical, then y is a vein.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "tributary of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002255",
      "meta" : {
        "definition" : {
          "val" : "inverse of has developmental contribution from",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "developmentally contributes to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002497",
      "meta" : {
        "definition" : {
          "val" : "x existence ends during or before y if and only if the time point at which x ends is before or equivalent to the time point at which y ends.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "existence ends during or before"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002134",
      "meta" : {
        "definition" : {
          "val" : "Relation between a 'neuron projection bundle' and a region in which one or more of its component neuron projections either synapses to targets or receives synaptic input.\nT innervates some R\nExpands_to: T has_fasciculating_neuron_projection that synapse_in some R.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "innervates"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002256",
      "meta" : {
        "definition" : {
          "val" : "t1 induced_by t2 if there is a process of developmental induction (GO:0031128) with t1 and t2 as interacting participants. t2 causes t1 to change its fate from a precursor anatomical structure type T to T', where T' develops_from T",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "developmentally induced by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002377",
      "meta" : {
        "definition" : {
          "val" : "x distributary_of y if and only if x is capable of channeling the flow of a substance to y, where y channels less of the substance than x",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "distributary of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002491",
      "meta" : {
        "definition" : {
          "val" : "x existence starts and ends during y if and only if the start of x is part of y and the end of x is part of y. Formally: x existence starts and ends during y iff α(x) >= α(y) & α(x) <= ω(y) & ω(x) <= ω(y) & ω(x) >= α(y)",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "existence starts and ends during"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002371",
      "meta" : {
        "definition" : {
          "val" : "a is attached to b if and only if a and b are discrete objects or object parts, and there are physical connections between a and b such that a force pulling a will move b, or a force pulling b will move a",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "attached to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0044464",
      "type" : "CLASS",
      "lbl" : "cell part"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002492",
      "meta" : {
        "definition" : {
          "val" : "x existence ends during y if and only if the time point at which x ends is before or equivalent to the time point at which y ends and after or equivalent to the point at which y starts. Formally: x existence ends during y iff ω(x) <= ω(y) and ω(x) >= α(y).",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "existence ends during"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002372",
      "meta" : {
        "definition" : {
          "val" : "m has_muscle_origin s iff m is attached_to s, and it is the case that when m contracts, s does not move. The site of the origin tends to be more proximal and have greater mass than what the other end attaches to.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has muscle origin"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002493",
      "meta" : {
        "definition" : {
          "val" : "x existence ends with y if and only if the time point at which x ends is equivalent to the time point at which y ends. Formally: x existence ends with y iff ω(x) = ω(y).",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "existence ends with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002130",
      "meta" : {
        "definition" : {
          "val" : "A general relation between a neuron and some structure in which it either chemically synapses to some target or in which it receives (chemical) synaptic input.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has synaptic terminal in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002131",
      "meta" : {
        "definition" : {
          "val" : "x overlaps y if and only if there exists some z such that x has part z and z part of y",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "overlaps"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002373",
      "meta" : {
        "definition" : {
          "val" : "m has_muscle_insertion s iff m is attaches_to s, and it is the case that when m contracts, s moves. Insertions are usually connections of muscle via tendon to bone.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has muscle insertion"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002252",
      "meta" : {
        "definition" : {
          "val" : "b connecting-branch-of s iff b is connected to s, and there exists some tree-like structure t such that the mereological sum of b plus s is either the same as t or a branching-part-of t.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "connecting branch of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002494",
      "meta" : {
        "definition" : {
          "val" : "x transformation of y if x is the immediate transformation of y, or is linked to y through a chain of transformation relationships",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "transformation of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002010",
      "meta" : {
        "definition" : {
          "val" : "x 'regulates in other organism' y if and only if: (x is the realization of a function to exert an effect on the frequency, rate or extent of y) AND (the agents of x are produced by organism o1 and the agents of y are produced by organism o2).",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "regulates in other organism"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002008",
      "meta" : {
        "definition" : {
          "val" : "A relation that holds between two linear structures that are approximately parallel to each other for their entire length and where either the two structures are adjacent to each other or one is part of the other.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "coincident with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002009",
      "meta" : {
        "definition" : {
          "val" : "A relation that applies between a cell(c) and a gene(g) , where the process of 'transcription, DNA templated (GO_0006351)' is occuring in in cell c and that process has input gene g.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "cell expresses"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002488",
      "meta" : {
        "definition" : {
          "val" : "x existence starts during y if and only if the time point at which x starts is after or equivalent to the time point at which y starts and before or equivalent to the time point at which y ends. Formally: x existence starts during y iff α(x) >= α(y) & α(x) <= ω(y).",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "existence starts during"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002004",
      "meta" : {
        "definition" : {
          "val" : "The relationship that holds between a trachea or tracheole and an antomical structure that is contained in (and so provides an oxygen supply to).",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "tracheates"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002246",
      "meta" : {
        "definition" : {
          "val" : "g is under-expressed in t iff g is expressed in t, and the expression level of g is decreased relative to some background.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "under-expressed in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002005",
      "type" : "PROPERTY",
      "lbl" : "innervated_by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002489",
      "meta" : {
        "definition" : {
          "val" : "x starts ends with y if and only if the time point at which x starts is equivalent to the time point at which y starts. Formally: x existence starts with y iff α(x) = α(y).",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "existence starts with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002006",
      "type" : "PROPERTY",
      "lbl" : "has synaptic terminal of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002248",
      "meta" : {
        "definition" : {
          "val" : "A relationship that holds between a substance and a chemical entity, if the chemical entity is part of the substance, and the chemical entity forms the biologically active component of the substance.",
          "xrefs" : [ ]
        },
        "synonyms" : [ {
          "pred" : "hasRelatedSynonym",
          "val" : "has active pharmaceutical ingredient",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "has active substance",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "has active ingredient"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002007",
      "meta" : {
        "definition" : {
          "val" : "X outer_layer_of Y iff:\n. X :continuant that bearer_of some PATO:laminar\n. X part_of Y\n. exists Z :surface\n. X has_boundary Z\n. Z boundary_of Y\n\nhas_boundary: http://purl.obolibrary.org/obo/RO_0002002\nboundary_of: http://purl.obolibrary.org/obo/RO_0002000",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "bounding layer of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002249",
      "meta" : {
        "definition" : {
          "val" : "inverse of has active ingredient",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "active ingredient in'"
    }, {
      "id" : "http://purl.obolibrary.org/obo/ENVO_00000428",
      "type" : "CLASS",
      "lbl" : "biome"
    }, {
      "id" : "http://purl.obolibrary.org/obo/CARO_0000011",
      "type" : "CLASS",
      "lbl" : "connected anatomical system"
    }, {
      "id" : "http://purl.obolibrary.org/obo/CARO_0000014",
      "type" : "CLASS",
      "lbl" : "cell part"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0016020",
      "type" : "CLASS",
      "lbl" : "membrane"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002000",
      "meta" : {
        "definition" : {
          "val" : "a relation between a 2D immaterial entity (the boundary) and a material entity, in which the boundary delimits the material entity",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "2D boundary of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002121",
      "meta" : {
        "definition" : {
          "val" : "Relation between a neuron and some structure  (e.g.- a brain region) in which its dendrite receives synaptic input.\n\n\t",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "dendrite synapsed in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002242",
      "meta" : {
        "definition" : {
          "val" : "A broad relationship between an exposure event or process and a process by which the exposure stressor comes into contact with the exposure receptor",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has exposure route"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002484",
      "meta" : {
        "definition" : {
          "val" : "Connects an ontology entity (class, property, etc) to a URL from which curator guidance can be obtained. This assertion is inherited in the same manner as functional annotations (e.g. for GO, over SubClassOf and part_of)",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "curator guidance link"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002001",
      "type" : "PROPERTY",
      "lbl" : "aligned with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002485",
      "type" : "PROPERTY",
      "lbl" : "receives input from"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002243",
      "meta" : {
        "definition" : {
          "val" : "A broad relationship between an exposure event or process and a the material an agent takes from the source to the target.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has exposure transport path"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002486",
      "type" : "PROPERTY",
      "lbl" : "sends output to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002244",
      "type" : "PROPERTY",
      "lbl" : "related via exposure to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002002",
      "meta" : {
        "definition" : {
          "val" : "a relation between a material entity and a 2D immaterial entity (the boundary), in which the boundary delimits the material entity",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has 2D boundary"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0045202",
      "type" : "CLASS",
      "lbl" : "synapse"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002487",
      "type" : "PROPERTY",
      "lbl" : "relation between structure and stage"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002003",
      "meta" : {
        "definition" : {
          "val" : "A relation that holds between two neurons that are electrically coupled via gap junctions.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "electrically_synapsed_to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002245",
      "meta" : {
        "definition" : {
          "val" : "g is over-expressed in t iff g is expressed in t, and the expression level of g is increased relative to some background.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "over-expressed in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002480",
      "meta" : {
        "definition" : {
          "val" : "An interaction relation between x and y in which x catalyzes a reaction in which one or more ubiquitin groups are added to y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "ubiquitinates"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002481",
      "type" : "PROPERTY",
      "lbl" : "is kinase activity"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002360",
      "type" : "PROPERTY",
      "lbl" : "has dendrite location"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002240",
      "meta" : {
        "definition" : {
          "val" : "A broad relationship between an exposure event or process and any entity (e.g., a human, human population, or a human organ) that interacts with an exposure stressor during the exposure event",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has exposure receptor"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002482",
      "type" : "PROPERTY",
      "lbl" : "is ubiquitination"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002241",
      "meta" : {
        "definition" : {
          "val" : "A broad relationship between an exposure event or process and any agent, stimulus, activity, or event that causes stress or tension on an organism and interacts with an exposure receptor during an exposure event.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has exposure stressor"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002120",
      "meta" : {
        "definition" : {
          "val" : " Relation between a neuron and an anatomical structure (including cells) that it chemically synapses to.\n        ",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "synapsed to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002483",
      "type" : "PROPERTY",
      "lbl" : "inherited annotation property"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0000059",
      "meta" : {
        "definition" : {
          "val" : "A relationship between a specifically dependent continuant and a generically dependent continuant, in which the generically dependent continuant depends on some independent continuant in virtue of the fact that the specifically dependent continuant also depends on that same independent continuant. Multiple specifically dependent continuants can concretize the same generically dependent continuant.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "concretizes"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0000058",
      "meta" : {
        "definition" : {
          "val" : "A relationship between a generically dependent continuant and a specifically dependent continuant, in which the generically dependent continuant depends on some independent continuant in virtue of the fact that the specifically dependent continuant also depends on that same independent continuant. A generically dependent continuant may be concretized as multiple specifically dependent continuants.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is concretized as"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0000057",
      "meta" : {
        "definition" : {
          "val" : "a relation between a process and a continuant, in which the continuant is somehow involved in the process",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has participant"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002356",
      "meta" : {
        "definition" : {
          "val" : "The relationship linking a cell and its participation in a process that results in the fate of the cell being specified. Once specification has taken place, a cell will be committed to differentiate down a specific pathway if left in its normal environment. ",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "results in specification of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0001025",
      "meta" : {
        "definition" : {
          "val" : "a relation between two independent continuants, the target and the location, in which the target is entirely within the location",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "located in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002235",
      "meta" : {
        "definition" : {
          "val" : "A parasite-of relationship in which the host is a plant and the parasite that attaches to the host stem (PO:0009047)",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "stem parasite of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002598",
      "meta" : {
        "definition" : {
          "val" : "Holds between c and p if and only if c is capable of some activity a, and a positively regulates p.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "capable of positively regulating"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002477",
      "meta" : {
        "definition" : {
          "val" : "A child nucleus relationship in which the cells are part of a hermaphroditic organism",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "child nucleus of in hermaphrodite"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002114",
      "meta" : {
        "definition" : {
          "val" : "A relation between a motor neuron and a muscle that it synapses to via a type III bouton.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "synapsed_via_type_III_bouton_to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002478",
      "meta" : {
        "definition" : {
          "val" : "A child nucleus relationship in which the cells are part of a male organism",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "child nucleus of in male"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002357",
      "meta" : {
        "definition" : {
          "val" : "p results in developmental induction of c if and only if p is a collection of cell-cell signaling processes that signal to a neighbouring tissue that is the precursor of the mature c, where the signaling results in the commitment to cell types necessary for the formation of c.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "results in developmental induction of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002599",
      "meta" : {
        "definition" : {
          "val" : "Holds between a material entity c and a pathological process p if and only if c is capable of some activity a, where a inhibits p.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "capable of inhibiting or preventing pathological process"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002236",
      "meta" : {
        "definition" : {
          "val" : "A parasite-of relationship in which the host is a plant and the parasite that attaches to the host root (PO:0009005)",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "root parasite of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002115",
      "meta" : {
        "definition" : {
          "val" : "Relation between a muscle and a motor neuron that synapses to it via a type III bouton.\n",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "synapsed_by_via_type_III_bouton"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002479",
      "meta" : {
        "definition" : {
          "val" : "p has part that occurs in c if and only if there exists some p1, such that p has_part p1, and p1 occurs in c.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has part that occurs in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002237",
      "meta" : {
        "definition" : {
          "val" : "A sub-relation of parasite-of in which the parasite is a plant, and the parasite is parasitic under natural conditions and is also photosynthetic to some degree. Hemiparasites may just obtain water and mineral nutrients from the host plant. Many obtain at least part of their organic nutrients from the host as well.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "hemiparasite of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000600",
      "type" : "PROPERTY",
      "lbl" : "elucidation"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0019787",
      "type" : "CLASS",
      "lbl" : "small conjugating protein ligase activity"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002231",
      "meta" : {
        "definition" : {
          "val" : "x 'has starts location' y if and only if there exists some process z such that x 'starts with' z and z 'occurs in' y",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has start location"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002473",
      "meta" : {
        "definition" : {
          "val" : "x composed_primarily_of y if and only if more than half of the mass of x is made from y or units of the same type as y.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "composed primarily of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0001021",
      "meta" : {
        "definition" : {
          "val" : "A relation between a material entity and a condition (a phenotype or disease) of a host, in which the material entity is part of the host itself, and the condition results in pathological processes that include an abnormally strong immune response against the material entity.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is autoimmune trigger for"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002594",
      "meta" : {
        "definition" : {
          "val" : "An annotation property that connects an object property to a class, where the object property is derived from or a shortcut property for the class. The exact semantics of this annotation may vary on a case by case basis.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is relational form of a class"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002352",
      "meta" : {
        "definition" : {
          "val" : "inverse of has input",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco", "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "input of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0000052",
      "meta" : {
        "definition" : {
          "val" : "a relation between a specifically dependent continuant (the dependent) and an independent continuant (the bearer), in which the dependent specifically depends on the bearer for its existence",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "inheres in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002110",
      "meta" : {
        "definition" : {
          "val" : "Relation between a neuron and some structure (e.g.- a brain region) in which it receives (chemical) synaptic input. ",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has postsynaptic terminal in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002595",
      "meta" : {
        "definition" : {
          "val" : "A relationship that holds between a material entity and a process in which causality is involved, with either the material entity or some part of the material entity exerting some influence over the process, or the process influencing some aspect of the material entity.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "causal relation between material entity and a process"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002111",
      "type" : "PROPERTY",
      "lbl" : "releases neurotransmitter"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0001022",
      "meta" : {
        "definition" : {
          "val" : "A relation between a condition (a phenotype or disease) of a host and a material entity, in which the material entity is not part of the host, and is considered harmless to non-allergic hosts, and the condition results in pathological processes that include an abnormally strong immune response against the material entity.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has allergic trigger"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002474",
      "meta" : {
        "definition" : {
          "val" : "An assertion that holds between an OWL Object Property and a dispositional interpretation that elucidates how OWL Class Axioms or OWL Individuals that use this property are to be interpreted in a dispositional context. For example,  A binds B may be interpreted as A have a mutual disposition that is realized by binding to the other one.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "dispositional interpretation"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002232",
      "meta" : {
        "definition" : {
          "val" : "x 'has end location' y if and only if there exists some process z such that x 'ends with' z and z 'occurs in' y",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has end location"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002353",
      "meta" : {
        "definition" : {
          "val" : "inverse of has output",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco", "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "output of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002233",
      "meta" : {
        "definition" : {
          "val" : "p has direct input c iff c is a participant in p, c is present at the start of p, and the state of c is modified during p.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has input"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002596",
      "meta" : {
        "definition" : {
          "val" : "Holds between c and p if and only if c is capable of some activity a, and a regulates p.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "capable of regulating"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002475",
      "meta" : {
        "definition" : {
          "val" : "A is has_no_connections_with B if there are no parts of A or B that have a connection with the other.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has no connections with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002112",
      "meta" : {
        "definition" : {
          "val" : "Relation between a muscle and a motor neuron that synapses to it via a type Is bouton.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "synapsed_by_via_type_Is_bouton"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002354",
      "type" : "PROPERTY",
      "lbl" : "formed as result of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0001023",
      "meta" : {
        "definition" : {
          "val" : "A relation between a condition (a phenotype or disease) of a host and a material entity, in which the material entity is part of the host itself, and the condition results in pathological processes that include an abnormally strong immune response against the material entity.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has autoimmune trigger"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002113",
      "meta" : {
        "definition" : {
          "val" : "Relation between a neuron and some structure (e.g.- a brain region) in which it receives (chemical) synaptic input.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has presynaptic terminal in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002234",
      "meta" : {
        "definition" : {
          "val" : "p has output c iff c is a participant in p, c is present at the end of p, and c is not present at the beginning of p.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has output"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002476",
      "meta" : {
        "definition" : {
          "val" : "c is a child nucleus of d if and only if c and d are both nuclei and parts of cells c' and d', where c' is derived from d' by mitosis and the genetic material in c is a copy of the generic material in d",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "child nucleus of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002597",
      "meta" : {
        "definition" : {
          "val" : "Holds between c and p if and only if c is capable of some activity a, and a negatively regulates p.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "capable of negatively regulating"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002355",
      "meta" : {
        "definition" : {
          "val" : "A relationship between a process and an anatomical entity such that the process contributes to the act of creating the structural organization of the anatomical entity.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "results in structural organization of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0045211",
      "type" : "CLASS",
      "lbl" : "postsynaptic membrane"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002590",
      "type" : "PROPERTY",
      "lbl" : "results in disassembly of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0000056",
      "meta" : {
        "definition" : {
          "val" : "a relation between a continuant and a process, in which the continuant is somehow involved in the process",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "participates in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002470",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "eats"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002591",
      "type" : "PROPERTY",
      "lbl" : "results in remodeling of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002471",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "is eaten by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002350",
      "meta" : {
        "definition" : {
          "val" : "is member of is a mereological relation between a item and a collection.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "member of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002592",
      "meta" : {
        "definition" : {
          "val" : "p results in organization of c iff p results in the assembly, arrangement of constituent parts, or disassembly of c",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "results in organization of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002472",
      "meta" : {
        "definition" : {
          "val" : "A relationship between a piece of evidence a and some entity b, where b is  an information content entity, material entity or process, and \nthe a supports either the existence of b, or the truth value of b.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "is evidence for"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002230",
      "meta" : {
        "definition" : {
          "val" : "x ends with y if and only if x has part y and the time point at which x ends is equivalent to the time point at which y ends. Formally: α(y) > α(x) ∧ ω(y) = ω(x), where α is a function that maps a process to a start point, and ω is a function that maps a process to an end point.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "ends with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002351",
      "meta" : {
        "definition" : {
          "val" : "has member is a mereological relation between a collection and an item.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has member"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0000053",
      "meta" : {
        "definition" : {
          "val" : "a relation between an independent continuant (the bearer) and a specifically dependent continuant (the dependent), in which the dependent specifically depends on the bearer for its existence",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "bearer of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0001020",
      "meta" : {
        "definition" : {
          "val" : "A relation between a material entity and a condition (a phenotype or disease) of a host, in which the material entity is not part of the host, and is considered harmless to non-allergic hosts, and the condition results in pathological processes that include an abnormally strong immune response against the material entity.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is allergic trigger for"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002593",
      "meta" : {
        "definition" : {
          "val" : "x existence starts at point y if and only if the time point at which x starts is equivalent to the time point at which y ends.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "existence ends at point"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002228",
      "meta" : {
        "definition" : {
          "val" : "A sub-relations of parasite-of in which the parasite that can complete its life cycle independent of a host.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "facultative parasite of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002107",
      "meta" : {
        "definition" : {
          "val" : "A relation between a motor neuron and a muscle that it synapses to via a type II bouton.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "synapsed_via_type_II_bouton_to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0001018",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "contained in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002349",
      "meta" : {
        "definition" : {
          "val" : "p 'results in determination of' c if and only if p is a developmental process and c is a cell and p results in the state of c changing to be determined. Once a cell becomes determined, it becomes committed to differentiate down a particular pathway regardless of its environment.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "results in determination of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0001019",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "contains"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002229",
      "meta" : {
        "definition" : {
          "val" : "inverse of ends with",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "ends"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002108",
      "meta" : {
        "definition" : {
          "val" : "Relation between a muscle and a motor neuron that synapses to it via a type II bouton.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "synapsed_by_via_type_II_bouton"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002109",
      "meta" : {
        "definition" : {
          "val" : "Relation between a muscle and a motor neuron that synapses to it via a type Ib bouton.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "synapsed_by_via_type_Ib_bouton"
    }, {
      "id" : "http://www.geneontology.org/formats/oboInOwl#shorthand",
      "type" : "PROPERTY",
      "lbl" : "shorthand"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002103",
      "meta" : {
        "definition" : {
          "val" : "Relation between an anatomical structure (including cells) and a neuron that chemically synapses to it. ",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "synapsed by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002224",
      "meta" : {
        "definition" : {
          "val" : "x starts with y if and only if x has part y and the time point at which x starts is equivalent to the time point at which y starts. Formally: α(y) = α(x) ∧ ω(y) < ω(x), where α is a function that maps a process to a start point, and ω is a function that maps a process to an end point.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "starts with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002466",
      "type" : "PROPERTY",
      "lbl" : "is commensalism"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002345",
      "type" : "PROPERTY",
      "lbl" : "exports"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002587",
      "type" : "PROPERTY",
      "lbl" : "results in synthesis of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002104",
      "meta" : {
        "definition" : {
          "val" : "Holds between a cell c and a protein complex or protein p if and only if that cell has as part a plasma_membrane[GO:0005886], and that plasma membrane has p as part.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has plasma membrane part"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002225",
      "meta" : {
        "definition" : {
          "val" : "x develops from part of y if and only if there exists some z such that x develops from z and z is part of y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "develops from part of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0001015",
      "meta" : {
        "definition" : {
          "val" : "a relation between two independent continuants, the location and the target, in which the target is entirely within the location",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "location of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002467",
      "type" : "PROPERTY",
      "lbl" : "is mutualism"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002588",
      "type" : "PROPERTY",
      "lbl" : "results in assembly of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002226",
      "meta" : {
        "definition" : {
          "val" : "x develops_in y if x is located in y whilst x is developing",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "develops in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002589",
      "meta" : {
        "definition" : {
          "val" : "p results in catabolism of c if and only if p is a catabolic process, and the execution of p results in c being broken into smaller parts with energy being released.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "results in catabolism of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002105",
      "meta" : {
        "definition" : {
          "val" : "A relation between a motor neuron and a muscle that it synapses to via a type Ib bouton.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "synapsed_via_type_Ib_bouton_to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002468",
      "type" : "PROPERTY",
      "lbl" : "is parasitism"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002106",
      "meta" : {
        "definition" : {
          "val" : "A relation between a motor neuron and a muscle that it synapses to via a type Is bouton.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "synapsed_via_type_Is_bouton_to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002348",
      "meta" : {
        "definition" : {
          "val" : "p 'results in commitment to' c if and only if p is a developmental process and c is a cell and p results in the state of c changing such that is can only develop into a single cell type.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "results in commitment to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002469",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "provides nutrients for"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002227",
      "meta" : {
        "definition" : {
          "val" : "A sub-relation of parasite-of in which the parasite that cannot complete its life cycle without a host.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "obligate parasite of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/CARO_0001000",
      "type" : "CLASS",
      "lbl" : "multi-cell-part structure"
    }, {
      "id" : "http://purl.obolibrary.org/obo/CARO_0001001",
      "type" : "CLASS",
      "lbl" : "neuron projection bundle"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0030424",
      "type" : "CLASS",
      "lbl" : "axon"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0030425",
      "type" : "CLASS",
      "lbl" : "dendrite"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002341",
      "meta" : {
        "definition" : {
          "val" : "Holds between p and l when p is a transportation or localization process and the outcome of this process is to move c from one location to another, and the route taken by c follows a path that is aligned_with l ",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "results in transport along"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002462",
      "type" : "PROPERTY",
      "lbl" : "subject participant in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002583",
      "meta" : {
        "definition" : {
          "val" : "x existence starts at point y if and only if the time point at which x starts is equivalent to the time point at which y ends.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "existence starts at point"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002220",
      "meta" : {
        "definition" : {
          "val" : "x adjacent to y if and only if x and y share a boundary.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "adjacent to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002221",
      "meta" : {
        "definition" : {
          "val" : "inverse of surrounded by",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "surrounds"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002100",
      "meta" : {
        "definition" : {
          "val" : "Relation between a neuron and an anatomical structure that its soma is part of.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has soma location"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002584",
      "meta" : {
        "definition" : {
          "val" : "s 'has part structure that is capable of' p if and only if there exists some part x such that s 'has part' x and x 'capable of' p",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has part structure that is capable of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002342",
      "meta" : {
        "definition" : {
          "val" : "Holds between p and m when p is a transportation or localization process and the outcome of this process is to move c from one location to another, and the route taken by c follows a path that crosses m.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "results in transport across"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002463",
      "type" : "PROPERTY",
      "lbl" : "target participant in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002222",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "temporally related to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002343",
      "type" : "PROPERTY",
      "lbl" : "results in growth of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002101",
      "meta" : {
        "definition" : {
          "val" : "relationship between a neuron and a neuron projection bundle (e.g.- tract or nerve bundle) that one or more of its projections travels through.\n",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "fasciculates with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002585",
      "type" : "PROPERTY",
      "lbl" : "results in closure of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002464",
      "type" : "PROPERTY",
      "lbl" : "helper property"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002586",
      "meta" : {
        "definition" : {
          "val" : "p results in breakdown of c if and only if the execution of p leads to c no longer being present at the end of p",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "results in breakdown of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002102",
      "meta" : {
        "definition" : {
          "val" : "Relation between a neuron and some structure its axon forms (chemical) synapses in.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "axon synapses in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002344",
      "type" : "PROPERTY",
      "lbl" : "results in transport to from or in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002465",
      "type" : "PROPERTY",
      "lbl" : "is symbiosis"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002223",
      "meta" : {
        "definition" : {
          "val" : "inverse of starts with",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "starts"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002580",
      "type" : "PROPERTY",
      "lbl" : "logical macro assertion on an axiom"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002460",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has vector"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002581",
      "meta" : {
        "definition" : {
          "val" : "If R <- P o Q is a defining property chain axiom, then it also holds that R -> P o Q. Note that this cannot be expressed directly in OWL",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is a defining property chain axiom"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002340",
      "meta" : {
        "definition" : {
          "val" : "Holds between p and c when p is a transportation or localization process and the outcome of this process is to move c to a destination that is part of some s, where the start location of c is part of the region that surrounds s.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "imports"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002582",
      "meta" : {
        "definition" : {
          "val" : "If R <- P o Q is a defining property chain axiom, then (1) R -> P o Q holds and (2) Q is either reflexive or locally reflexive. A corollary of this is that P SubPropertyOf R.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is a defining property chain axiom where second argument is reflexive"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002461",
      "type" : "PROPERTY",
      "lbl" : "partner in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002217",
      "meta" : {
        "definition" : {
          "val" : "x actively participates in y if and only if x participates in y and x realizes some active role",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "actively participates in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002459",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "is vector for"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0003307",
      "meta" : {
        "definition" : {
          "val" : "A relationship between an entity (a genotype, genetic variation or environment) and a condition (a phenotype or disease) where the entity prevents or reduces the severity of a condition.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is preventative for condition"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002338",
      "meta" : {
        "definition" : {
          "val" : "This relationship holds between p and l when p is a transport or localization process in which the outcome is to move some cargo c from some initial location l to some destination.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has target start location"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002218",
      "meta" : {
        "definition" : {
          "val" : "x has participant y if and only if x realizes some active role that inheres in y",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has active participant"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0003306",
      "meta" : {
        "definition" : {
          "val" : "A relationship between an entity (a genotype, genetic variation or environment) and a condition (a phenotype or disease) where the entity influences the frequency of the condition in a population.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "contributes to frequency of condition"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002339",
      "meta" : {
        "definition" : {
          "val" : "This relationship holds between p and l when p is a transport or localization process in which the outcome is to move some cargo c from a an initial location to some destination l.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has target end location"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002219",
      "meta" : {
        "definition" : {
          "val" : "x surrounded_by y if and only if (1) x is adjacent to y and for every region r that is adjacent to x, r overlaps y (2) the shared boundary between x and y occupies the majority of the outermost boundary of x",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "surrounded by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0003308",
      "meta" : {
        "definition" : {
          "val" : "A relationship between an entity and a condition (phenotype or disease) with which it exhibits a statistical dependence relationship.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "correlated with condition"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0003303",
      "meta" : {
        "definition" : {
          "val" : "A relationship between an entity (a genotype, genetic variation or environment) and a condition (a phenotype or disease) where the entity has a causal role for the condition.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "causes condition"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002576",
      "meta" : {
        "definition" : {
          "val" : "inverse of has skeleton",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "skeleton of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002334",
      "meta" : {
        "definition" : {
          "val" : "inverse of regulates",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "regulated by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002213",
      "meta" : {
        "definition" : {
          "val" : "x positively regulates y if and only if the progression of x increases the frequency, rate or extent of y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "positively regulates"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002455",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "pollinates"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002456",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "pollinated by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002335",
      "meta" : {
        "definition" : {
          "val" : "inverse of negatively regulates",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "negatively regulated by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0003302",
      "meta" : {
        "definition" : {
          "val" : "A relationship between an entity (a genotype, genetic variation or environment) and a condition (a phenotype or disease) where the entity has some causal or contributing role that influences the condition.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "causes or contributes to condition"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002214",
      "meta" : {
        "definition" : {
          "val" : "x has prototype y if and only if x is an instance of C and y is a prototypical instance of C. For example, every instance of heart, both normal and abnormal is related by the has prototype relation to some instance of a \"canonical\" heart, which participates in blood circulation.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has prototype"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002577",
      "meta" : {
        "definition" : {
          "val" : "A material entity consisting of multiple components that are causally integrated.",
          "xrefs" : [ ]
        }
      },
      "type" : "CLASS",
      "lbl" : "system"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002578",
      "meta" : {
        "definition" : {
          "val" : "p 'directly regulates' q if and only if p and q are processes, and p regulates q, and q directly follows from p",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "directly regulates"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002336",
      "meta" : {
        "definition" : {
          "val" : "inverse of positively regulates",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "positively regulated by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002457",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "acquires nutrients from"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002215",
      "meta" : {
        "definition" : {
          "val" : "A relation between a material entity (such as a cell) and a process, in which the material entity has the ability to carry out the process. ",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "capable of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0003305",
      "meta" : {
        "definition" : {
          "val" : "A relationship between an entity (a genotype, genetic variation or environment) and a condition (a phenotype or disease) where the entity influences the severity with which a condition manifests in an individual.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "contributes to severity of condition"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0003304",
      "meta" : {
        "definition" : {
          "val" : "A relationship between an entity (a genotype, genetic variation or environment) and a condition (a phenotype or disease) where the entity has some contributing role in the manifestation of the condition.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "contributes to condition"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002458",
      "meta" : {
        "definition" : {
          "val" : "inverse of preys on",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco", "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "preyed upon by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002579",
      "meta" : {
        "definition" : {
          "val" : "relation p is the indirect form of relation q iff p is a subPropertyOf q, and there exists some p' such that p' is the direct form of q, p' o p' -> p, and forall x,y : x q y -> either (1) x p y or (2) x p' y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is indirect form of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002216",
      "meta" : {
        "definition" : {
          "val" : "c stands in this relationship to p if and only if there exists some p' such that c is capable_of p', and p' is part_of p.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "capable of part of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002337",
      "meta" : {
        "definition" : {
          "val" : "A relationship that holds via some process of localization",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "related via localization to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002451",
      "meta" : {
        "definition" : {
          "val" : "A relationship that holds between a disease and organism",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "transmitted by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002572",
      "meta" : {
        "definition" : {
          "val" : "s is luminal space of x iff s is lumen_of x and s is an immaterial entity",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "luminal space of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002330",
      "meta" : {
        "definition" : {
          "val" : "holds between two entities when some genome-level process such as gene expression is involved. This includes transcriptional, spliceosomal events. These relations can be used between either macromolecule entities (such as regions of nucleic acid) or between their abstract informational counterparts.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "genomically related to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0001000",
      "meta" : {
        "definition" : {
          "val" : "a relation between two distinct material entities, the new entity and the old entity, in which the new entity begins to exist when the old entity ceases to exist, and the new entity inherits the significant portion of the matter of the old entity",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "derives from"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002331",
      "meta" : {
        "definition" : {
          "val" : "c involved_in p if and only if c enables some process p', and p' is part of p",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "involved in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002210",
      "meta" : {
        "definition" : {
          "val" : "inverse of directly develops from",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "directly develops into"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002452",
      "meta" : {
        "definition" : {
          "val" : "A relation that holds between a disease or an organism and a phenotype",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has symptom"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002573",
      "meta" : {
        "definition" : {
          "val" : "A relation that holds between an attribute or a qualifier and another attribute.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has modifier"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002574",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "participates in a biotic-biotic interaction with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002211",
      "meta" : {
        "definition" : {
          "val" : "x regulates y if and only if the x is the realization of a function to exert an effect on the frequency, rate or extent of y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "regulates"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002453",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "host of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002332",
      "meta" : {
        "definition" : {
          "val" : "p regulates levels of c if p regulates some amount (PATO:0000070) of c",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "regulates levels of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0001001",
      "meta" : {
        "definition" : {
          "val" : "a relation between two distinct material entities, the old entity and the new entity, in which the new entity begins to exist when the old entity ceases to exist, and the new entity inherits the significant portion of the matter of the old entity",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "derives into"
    }, {
      "id" : "http://purl.obolibrary.org/obo/PATO_0000402",
      "type" : "CLASS",
      "lbl" : "branched"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0003301",
      "meta" : {
        "definition" : {
          "val" : "Relation between a research artifact and an entity it is used to study, in virtue of its replicating or approximating features of the studied entity.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is model of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002212",
      "meta" : {
        "definition" : {
          "val" : "x negatively regulates y if and only if the progression of x reduces the frequency, rate or extent of y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "negatively regulates"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002454",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has host"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002333",
      "meta" : {
        "definition" : {
          "val" : "inverse of enables",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "enabled by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002575",
      "meta" : {
        "definition" : {
          "val" : "relation p is the direct form of relation q iff p is a subPropertyOf q, p does not have the Transitive characteristic, q does have the Transitive characteristic, and for all x, y: x q y -> exists z1, z2, ..., zn such that x p z1 ... z2n y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is direct form of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002570",
      "meta" : {
        "definition" : {
          "val" : "x is a conduit for y iff y overlaps through the lumen_of of x, and y has parts on either side of the lumen of x.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "conduit for"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002571",
      "meta" : {
        "definition" : {
          "val" : "x lumen_of y iff x is the space or substance that is part of y and does not cross any of the inner membranes or boundaries of y that is maximal with respect to the volume of the convex hull.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "lumen of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002450",
      "meta" : {
        "definition" : {
          "val" : "Holds between molecules a and b if and only if a executes a process that directly activates a process executed by b.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "molecularly increases activity of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002569",
      "meta" : {
        "definition" : {
          "val" : "inverse of branching part of",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco", "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has branching part"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002206",
      "meta" : {
        "definition" : {
          "val" : "x expressed in y if and only if there is a gene expression process (GO:0010467) that occurs in y, and one of the following holds: (i) x is a gene, and x is transcribed into a transcript as part of the gene expression process (ii) x is a transcript, and the transcription of x is part of the gene expression process (iii) x is a mature gene product such as a protein, and x was translated or otherwise processes from a transcript that was transcribed as part of this gene expression process",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "expressed in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002448",
      "meta" : {
        "definition" : {
          "val" : "Holds between molecular entities a and b when the execution of a activates or inhibits the activity of b",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "molecularly controls"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002327",
      "type" : "PROPERTY",
      "lbl" : "enables"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002449",
      "meta" : {
        "definition" : {
          "val" : "Holds between molecules a and b if and only if a executes a process that directly diminishes a process executed by b.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "molecularly decreases activity of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002328",
      "type" : "PROPERTY",
      "lbl" : "functionally related to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002207",
      "meta" : {
        "definition" : {
          "val" : "Candidate definition: x directly_develops from y if and only if there exists some developmental process (GO:0032502) p such that x and y both participates in p, and x is the output of p and y is the input of p, and a substantial portion of the matter of y comes from x, and the start of x is coincident with or after the end of y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "directly develops from"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002208",
      "meta" : {
        "definition" : {
          "val" : "A parasite that kills or sterilizes its host",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "parasitoid of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002329",
      "meta" : {
        "definition" : {
          "val" : "this relation holds between c and p when c is part of some c', and c' is capable of p.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "part of structure that is capable of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002209",
      "meta" : {
        "definition" : {
          "val" : "inverse of parasitoid of",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has parasitoid"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002444",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ],
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "direct parasite of",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "parasite of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002202",
      "meta" : {
        "definition" : {
          "val" : "x develops from y if and only if either (a) x directly develops from y or (b) there exists some z such that x directly develops from z and z develops from y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "develops from"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002323",
      "meta" : {
        "definition" : {
          "val" : "A mereological relationship or a topological relationship",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "mereotopologically related to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002565",
      "meta" : {
        "definition" : {
          "val" : "Holds between p and c when p is locomotion process and the outcome of this process is the change of location of c",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "results in movement of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002445",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ],
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "directly parasitized by",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "parasitized by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002203",
      "meta" : {
        "definition" : {
          "val" : "inverse of develops from",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "develops into"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002324",
      "meta" : {
        "definition" : {
          "val" : "A relationship that holds between entities participating in some developmental process (GO:0032502)",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "developmentally related to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002566",
      "meta" : {
        "definition" : {
          "val" : "Holds between materal entities a and b if the activity of a is causally upstream of the activity of b, or causally upstream of a an activity that modifies b",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "causally influences"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002567",
      "meta" : {
        "definition" : {
          "val" : "A relation that holds between elements of a musculoskeletal system or its analogs.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "biomechanically related to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002325",
      "meta" : {
        "definition" : {
          "val" : "a colocalizes_with b if and only if  a is transiently or peripherally associated with b[GO].",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "colocalizes with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002446",
      "meta" : {
        "definition" : {
          "val" : "A biotic interaction relationship in which one partner is an organism and the other partner is inorganic. For example, the relationship between a sponge and the substrate to which is it anchored.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ],
        "synonyms" : [ {
          "pred" : "hasRelatedSynonym",
          "val" : "semibiotically interacts with",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "participates in a abiotic-biotic interaction with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002204",
      "meta" : {
        "definition" : {
          "val" : "definition \"x has gene product of y if and only if y is a gene (SO:0000704) that participates in some gene expression process (GO:0010467) where the output of that process is either y or something that is ribosomally translated from x\"",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "gene product of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002205",
      "meta" : {
        "definition" : {
          "val" : "x has gene product y if and only if x is a gene (SO:0000704) that participates in some gene expression process (GO:0010467) where the output of that process is either y or something that is ribosomally translated from y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has gene product"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002326",
      "type" : "PROPERTY",
      "lbl" : "contributes to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002568",
      "meta" : {
        "definition" : {
          "val" : "m1 has_muscle_antagonist m2 iff m1 has_muscle_insertion s, m2 has_muscle_insection s, m1 acts in opposition to m2, and m2 is responsible for returning the structure to its initial position.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has muscle antagonist"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002447",
      "type" : "PROPERTY",
      "lbl" : "phosphorylates"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000116",
      "type" : "PROPERTY",
      "lbl" : "editor note"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000117",
      "type" : "PROPERTY",
      "lbl" : "term editor"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000114",
      "type" : "PROPERTY",
      "lbl" : "has curation status"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000115",
      "type" : "PROPERTY",
      "lbl" : "definition"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000112",
      "type" : "PROPERTY",
      "lbl" : "example of usage"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000111",
      "type" : "PROPERTY",
      "lbl" : "editor preferred term"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000232",
      "type" : "PROPERTY",
      "lbl" : "curator note"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000118",
      "type" : "PROPERTY",
      "lbl" : "alternative term"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000119",
      "type" : "PROPERTY",
      "lbl" : "definition source"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002561",
      "meta" : {
        "definition" : {
          "val" : "If Rel is the relational form of a process Pr, then it follow that: Rel(x,y) <-> exists p : Pr(p), x partner-in p, y partner-in p",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is symmetric relational form of process class"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002440",
      "meta" : {
        "definition" : {
          "val" : "A biotic interaction in which the two organisms live together in more or less intimate association.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "symbiotically interacts with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002441",
      "meta" : {
        "definition" : {
          "val" : "An interaction relationship between two organisms living together in more or less intimate association in a relationship in which one benefits and the other is unaffected (GO).",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "commensually interacts with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002320",
      "meta" : {
        "definition" : {
          "val" : "A relationship that holds via some environmental process",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "evolutionarily related to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002562",
      "meta" : {
        "definition" : {
          "val" : "R is the relational form of a process if and only if either (1) R is the symmetric relational form of a process or (2) R is the asymmetric relational form of a process",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is relational form of process class"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002321",
      "meta" : {
        "definition" : {
          "val" : "A relationship that is mediated in some way by the environment or environmental feature (ENVO:00002297)",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "ecologically related to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002442",
      "meta" : {
        "definition" : {
          "val" : "An interaction relationship between two organisms living together in more or less intimate association in a relationship in which both organisms benefit from each other (GO).",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "mutualistically interacts with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002200",
      "meta" : {
        "definition" : {
          "val" : "A relationship that holds between a biological entity and a phenotype. Here a phenotype is construed broadly as any kind of quality of an organism part, a collection of these qualities, or a change in quality or qualities (e.g. abnormally increased temperature). The subject of this relationship can be an organism (where the organism has the phenotype, i.e. the qualities inhere in parts of this organism), a genomic entity such as a gene or genotype (if modifications of the gene or the genotype causes the phenotype), or a condition such as a disease (such that if the condition inheres in an organism, then the organism has the phenotype).",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has phenotype"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002563",
      "type" : "PROPERTY",
      "lbl" : "interaction relation helper property"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002201",
      "meta" : {
        "definition" : {
          "val" : "inverse of has phenotype",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco", "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "phenotype of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002443",
      "meta" : {
        "definition" : {
          "val" : "An interaction relationship between two organisms living together in more or less intimate association in a relationship in which association is disadvantageous or destructive to one of the organisms (GO).",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "interacts with via parasite-host interaction"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002322",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "confers advantage in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002564",
      "type" : "PROPERTY",
      "lbl" : "molecular interaction relation helper property"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002560",
      "meta" : {
        "definition" : {
          "val" : "If Rel is the relational form of a process Pr, then it follow that: Rel(x,y) <-> exists p : Pr(p), x subject-partner-in p, y object-partner-in p",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is asymmetric relational form of process class"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002558",
      "meta" : {
        "definition" : {
          "val" : "inverse of is evidence for",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259", "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has evidence"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002437",
      "meta" : {
        "definition" : {
          "val" : "An interaction relationship in which at least one of the partners is an organism and the other is either an organism or an abiotic entity with which the organism interacts.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "biotically interacts with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002438",
      "meta" : {
        "definition" : {
          "val" : "An interaction relationship in which the partners are related via a feeding relationship.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "trophically interacts with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002559",
      "type" : "PROPERTY",
      "lbl" : "causally influenced by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002439",
      "meta" : {
        "definition" : {
          "val" : "An interaction relationship involving a predation process, where the subject kills the target in order to eat it or to feed to siblings, offspring or group members",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "preys on"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002554",
      "meta" : {
        "definition" : {
          "val" : "inverse of hyperparasite of",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco", "http://purl.obolibrary.org/obo/RO_0002259" ],
        "synonyms" : [ {
          "pred" : "hasRelatedSynonym",
          "val" : "has epiparasite",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "has hyperparasite",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "hyperparasitoidized by",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "hyperparasitized by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002433",
      "meta" : {
        "definition" : {
          "val" : "p contributes to morphology of w if and only if a change in the morphology of p entails a change in the morphology of w. Examples: every skull contributes to morphology of the head which it is a part of. Counter-example: nuclei do not generally contribute to the morphology of the cell they are part of, as they are buffered by cytoplasm.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "contributes to morphology of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002312",
      "type" : "PROPERTY",
      "lbl" : "evolutionary variant of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002313",
      "meta" : {
        "definition" : {
          "val" : "Holds between p and c when p is a transportation or localization process and the outcome of this process is to regulate the location of c",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "transports or maintains localization of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002555",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "allelopath of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002434",
      "meta" : {
        "definition" : {
          "val" : "A relationship that holds between two entities in which the processes executed by the two entities are causally connected.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ],
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "in pairwise interaction with",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "interacts with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002556",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "pathogen of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002435",
      "type" : "PROPERTY",
      "lbl" : "genetically interacts with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002314",
      "meta" : {
        "definition" : {
          "val" : "q inheres in part of w if and only if there exists some p such that q inheres in p and p part of w.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "inheres in part of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002315",
      "meta" : {
        "definition" : {
          "val" : "The relationship that links a specified entity with the process that results in an unspecified entity acquiring the features and characteristics of the specified entity",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "results in acquisition of features of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002557",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has pathogen"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002436",
      "meta" : {
        "definition" : {
          "val" : "An interaction relationship in which the two partners are molecular entities and are executing molecular processes that are directly causally connected.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "molecularly interacts with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000125",
      "type" : "INDIVIDUAL",
      "lbl" : "pending final vetting"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000122",
      "type" : "INDIVIDUAL",
      "lbl" : "ready for release"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002550",
      "type" : "PROPERTY",
      "lbl" : "end, weeks post birth"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002551",
      "meta" : {
        "definition" : {
          "val" : "A relation between a segment or subdivision of an organism and the maximal subdivision of material entities that provides structural support for that segment or subdivision.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has skeleton"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002430",
      "type" : "PROPERTY",
      "lbl" : "involved in negative regulation of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002431",
      "meta" : {
        "definition" : {
          "val" : "c involved in or regulates p if and only if either (i) c is involved in p or (ii) c is involved in regulation of p",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "involved in or involved in regulation of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002552",
      "meta" : {
        "definition" : {
          "val" : "p results in the end of s if p results in a change of state in s whereby s either ceases to exist, or s becomes functionally impaired or s has its fate committed such that it is put on a path to be degraded.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "results in ending of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002432",
      "meta" : {
        "definition" : {
          "val" : "c executes activity in d if and only if c enables p and p occurs_in d",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "enables activity in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002553",
      "meta" : {
        "definition" : {
          "val" : "x is a hyperparasite of y iff x is a parasite of a parasite of the target organism y",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ],
        "synonyms" : [ {
          "pred" : "hasRelatedSynonym",
          "val" : "epiparasite of",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "hyperparasitoid of",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "hyperparasite of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002547",
      "meta" : {
        "definition" : {
          "val" : "Count of number of days intervening between the start of the stage and the time of coitum.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "start, days post coitum"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002426",
      "type" : "PROPERTY",
      "lbl" : "differs in attribute"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002427",
      "meta" : {
        "definition" : {
          "val" : "inverse of causally upstream of or within",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "causally downstream of or within"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002548",
      "meta" : {
        "definition" : {
          "val" : "Count of number of days intervening between the end of the stage and the time of coitum.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "end, days post coitum"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002428",
      "meta" : {
        "definition" : {
          "val" : "c involved in regulation of p if c is involved in some 'p' and p' regulates some p",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "involved in regulation of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0008150",
      "type" : "CLASS",
      "lbl" : "biological_process"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002549",
      "type" : "PROPERTY",
      "lbl" : "start, weeks post birth"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002429",
      "type" : "PROPERTY",
      "lbl" : "involved in positive regulation of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002543",
      "meta" : {
        "definition" : {
          "val" : "Count of number of months intervening between the start of the stage and the time of birth according to a reference model. Note that the first month of post-birth development has the value of 0 for this property, and the period during which the child is one month old has the value 1.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "start, months post birth"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002301",
      "type" : "PROPERTY",
      "lbl" : "results in developmental regression of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002422",
      "type" : "PROPERTY",
      "lbl" : "logical macro assertion on an object property"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002423",
      "type" : "PROPERTY",
      "lbl" : "logical macro assertion on an annotation property"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002544",
      "meta" : {
        "definition" : {
          "val" : "Count of number of months intervening between the end of the stage and the time of birth according to a reference model. Note that the first month of post-birth development has the value of 1 for this property, and the period during which the child is one month old has the value 2",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "end, months post birth"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002303",
      "meta" : {
        "definition" : {
          "val" : "x 'has habitat' y if and only if: x is an organism, y is a habitat, and y can sustain and allow the growth of a population of xs.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has habitat"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002545",
      "meta" : {
        "definition" : {
          "val" : "Defines the start and end of a stage with a duration of 1 month, relative to either the time of fertilization or last menstrual period of the mother (to be clarified), counting from one, in terms of a reference model. Thus if month_of_gestation=3, then the stage is 2 month in.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "month of gestation"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002424",
      "type" : "PROPERTY",
      "lbl" : "differs in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002546",
      "meta" : {
        "definition" : {
          "val" : "A relationship between a stage class and an anatomical structure or developmental process class, in which the stage is characterized by the appearance of the structure or the occurrence of the biological process",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has developmental stage marker"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002425",
      "type" : "PROPERTY",
      "lbl" : "differs in attribute of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002540",
      "meta" : {
        "definition" : {
          "val" : "Count of number of days intervening between the end of the stage and the time of fertilization according to a reference model. Note that the first day of development has the value of 1 for this property.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "end, days post fertilization"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002420",
      "meta" : {
        "definition" : {
          "val" : "A logical macro assertion whose domain is an IRI for a class",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "logical macro assertion on a class"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002541",
      "meta" : {
        "definition" : {
          "val" : "Count of number of years intervening between the start of the stage and the time of birth according to a reference model. Note that the first year of post-birth development has the value of 0 for this property, and the period during which the child is one year old has the value 1.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "start, years post birth"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002542",
      "meta" : {
        "definition" : {
          "val" : "Count of number of years intervening between the end of the stage and the time of birth according to a reference model. Note that the first year of post-birth development has the value of 1 for this property, and the period during which the child is one year old has the value 2",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "end, years post birth"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002421",
      "meta" : {
        "definition" : {
          "val" : "A logical macro assertion whose domain is an IRI for a property",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "logical macro assertion on a property"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002300",
      "type" : "PROPERTY",
      "lbl" : "results in disappearance of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002536",
      "type" : "PROPERTY",
      "lbl" : "measurement property has unit"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002537",
      "type" : "PROPERTY",
      "lbl" : "has start time value"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002416",
      "meta" : {
        "definition" : {
          "val" : "An assertion that involves at least one OWL object that is intended to be expanded into one or more logical axioms. The logical expansion can yield axioms expressed using any formal logical system, including, but not limited to OWL2-DL.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "logical macro assertion"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002538",
      "type" : "PROPERTY",
      "lbl" : "has end time value"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002418",
      "meta" : {
        "definition" : {
          "val" : "p 'causally upstream or within' q iff (1) the end of p is before the end of q and (2) the execution of p exerts some causal influence over the outputs of q; i.e. if p was abolished or the outputs of p were to be modified, this would necessarily affect q.",
          "xrefs" : [ ]
        },
        "synonyms" : [ {
          "pred" : "hasRelatedSynonym",
          "val" : "affects",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "causally upstream of or within"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002539",
      "meta" : {
        "definition" : {
          "val" : "Count of number of days intervening between the start of the stage and the time of fertilization according to a reference model. Note that the first day of development has the value of 0 for this property.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "start, days post fertilization"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002532",
      "meta" : {
        "definition" : {
          "val" : "Any entity that is ordered in discrete units along a linear axis.",
          "xrefs" : [ ]
        }
      },
      "type" : "CLASS",
      "lbl" : "sequentially ordered entity"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002411",
      "meta" : {
        "definition" : {
          "val" : "p is causally upstream of q if and only if p precedes q and p and q are linked in a causal chain",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "causally upstream of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002412",
      "meta" : {
        "definition" : {
          "val" : "p is immediately causally upstream of q iff both (a) p immediately precedes q and (b) p is causally upstream of q. In addition, the output of p  must be an input of q.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "immediately causally upstream of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002533",
      "meta" : {
        "definition" : {
          "val" : "Any individual unit of a collection of like units arranged in a linear order",
          "xrefs" : [ ]
        }
      },
      "type" : "CLASS",
      "lbl" : "sequence atomic unit"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002534",
      "meta" : {
        "definition" : {
          "val" : "Any entity that can be divided into parts such that each part is an atomical unit of a sequence",
          "xrefs" : [ ]
        }
      },
      "type" : "CLASS",
      "lbl" : "sequence bearer"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002413",
      "meta" : {
        "definition" : {
          "val" : "p1 directly provides input for p2 iff there exists some c such that p1 has_output c and p2 has_input c",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "directly provides input for"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002535",
      "type" : "PROPERTY",
      "lbl" : "temporal logical macro assertion on a class"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002414",
      "meta" : {
        "definition" : {
          "val" : "transitive form of directly_provides_input_for",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "transitively provides input for"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002419",
      "meta" : {
        "definition" : {
          "val" : "An assertion that holds between an OWL Annotation Property P and a non-negative integer N, with the interpretation: for any P(i j) it must be the case that | { k : P(i k) } | = N.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "annotation property cardinality"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0003824",
      "type" : "CLASS",
      "lbl" : "catalytic activity"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000428",
      "type" : "INDIVIDUAL",
      "lbl" : "requires discussion"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000426",
      "meta" : {
        "definition" : {
          "val" : "An assertion that holds between an OWL Object Property and a string or literal, where the value of the string or literal is a Common Logic sentence of collection of sentences that define the Object Property.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "first order logic expression"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002530",
      "meta" : {
        "definition" : {
          "val" : "x is immediately downstream of the sequence of y iff either (1) x and y have sequence units, and all units of x are downstream of all units of y, and x is sequentially adjacent to y, or (2) x and y are sequence units, in which case the immediately downstream relation is primitive and defined by context: for DNA bases, y would be adjacent and 5' to y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is immediately downstream of sequence of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002531",
      "meta" : {
        "definition" : {
          "val" : "inverse of immediately downstream of",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is immediately upstream of sequence of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002410",
      "meta" : {
        "definition" : {
          "val" : "This relation groups causal relations between material entities and causal relations between processes",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "causally related to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002525",
      "meta" : {
        "definition" : {
          "val" : "inverse of has subsequence",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "is subsequence of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002404",
      "meta" : {
        "definition" : {
          "val" : "inverse of upstream of",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "causally downstream of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002526",
      "meta" : {
        "definition" : {
          "val" : "x overlaps the sequence of x if and only if x has a subsequence z and z is a subsequence of y.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "overlaps sequence of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002405",
      "type" : "PROPERTY",
      "lbl" : "immediately causally downstream of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002406",
      "meta" : {
        "definition" : {
          "val" : "p directly activates q if and only if p is immediately upstream of q and p is the realization of a function to increase the rate or activity of q",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "directly activates"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002527",
      "meta" : {
        "definition" : {
          "val" : "x does not overlaps the sequence of x if and only if there is no z such that x has a subsequence z and z is a subsequence of y.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "does not overlap sequence of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002407",
      "meta" : {
        "definition" : {
          "val" : "p directly activates q if and only if p is immediately upstream of q and p is the realization of a function to increase the rate or activity of q",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "indirectly activates"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002528",
      "meta" : {
        "definition" : {
          "val" : "inverse of downstream of sequence of",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is upstream of sequence of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002521",
      "meta" : {
        "definition" : {
          "val" : "x is sequentially aligned with if a significant portion bases of x and y correspond in terms of their base type and their relative ordering",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is sequentially aligned with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002400",
      "meta" : {
        "definition" : {
          "val" : "p has direct input c iff c is a participant in p, c is present at the start of p, and the state of c is modified during p.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has direct input"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002401",
      "type" : "PROPERTY",
      "lbl" : "obsolete has indirect input"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002522",
      "meta" : {
        "definition" : {
          "val" : "x bounds the sequence of y iff the upstream-most part of x is upstream of or coincident with the upstream-most part of y, and the downstream-most part of x is downstream of or coincident with the downstream-most part of y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "bounds sequence of"
    }, {
      "id" : "http://www.geneontology.org/formats/oboInOwl#inSubset",
      "type" : "PROPERTY",
      "lbl" : "in_subset"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002523",
      "meta" : {
        "definition" : {
          "val" : "inverse of bounds sequence of",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "is bound by sequence of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002402",
      "meta" : {
        "definition" : {
          "val" : "p has direct input c iff c is a participanti n p, c is present at the end of p, and c is not present at the beginning of c. ",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "obsolete has direct output"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002524",
      "meta" : {
        "definition" : {
          "val" : "x has subsequence y iff all of the sequence parts of x are sequence parts of y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has subsequence"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002403",
      "type" : "PROPERTY",
      "lbl" : "obsolete has indirect output"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002408",
      "type" : "PROPERTY",
      "lbl" : "directly inhibits"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002529",
      "meta" : {
        "definition" : {
          "val" : "x is downstream of the sequence of y iff either (1) x and y have sequence units, and all units of x are downstream of all units of y, or (2) x and y are sequence units, and x is either immediately downstream of y, or transitively downstream of y.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is downstream of sequence of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002409",
      "type" : "PROPERTY",
      "lbl" : "indirectly inhibits"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002640",
      "meta" : {
        "definition" : {
          "val" : "A sub-relation of endoparasite-of in which the parasite inhabits host cells.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "intracellular endoparasite of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002520",
      "meta" : {
        "definition" : {
          "val" : "x is a consecutive sequence of y iff x has subsequence y, and all the parts of x are made of zero or more repetitions of y or sequences as the same type as y.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is consecutive sequence of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002641",
      "meta" : {
        "definition" : {
          "val" : "inverse of intracellular endoparasite of",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has intracellular endoparasite"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002514",
      "meta" : {
        "definition" : {
          "val" : "A relation that holds between two entities that have the property of being sequences or having sequences. ",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "sequentially related to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002635",
      "type" : "PROPERTY",
      "lbl" : "has endoparasite"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002515",
      "meta" : {
        "definition" : {
          "val" : "x is sequentially adjacent to y iff x and y do not overlap and if there are no base units intervening between x and y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "sequentially adjacent to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002636",
      "meta" : {
        "definition" : {
          "val" : "A sub-relation of parasite-of in which the parasite is partially an endoparasite and partially an ectoparasite",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "mesoparasite of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002516",
      "meta" : {
        "definition" : {
          "val" : "x has start sequence y if the start of x is identical to the start of y, and x has y as a subsequence",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has start sequence"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002637",
      "meta" : {
        "definition" : {
          "val" : "inverse of mesoparasite of",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has mesoparasite"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002517",
      "meta" : {
        "definition" : {
          "val" : "inverse of has start sequence",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "is start sequence of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002638",
      "meta" : {
        "definition" : {
          "val" : "A sub-relation of endoparasite-of in which the parasite inhabits the spaces between host cells.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "intercellular endoparasite of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002510",
      "meta" : {
        "definition" : {
          "val" : "x is transcribed from y if and only if x is synthesized from template y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "transcribed from"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0085031",
      "type" : "CLASS",
      "lbl" : "commensalism"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002632",
      "meta" : {
        "definition" : {
          "val" : "A sub-relation of parasite-of in which the parasite lives on or in the integumental system of the host",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "ectoparasite of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002511",
      "meta" : {
        "definition" : {
          "val" : "inverse of transcribed from",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "transcribed to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002633",
      "meta" : {
        "definition" : {
          "val" : "inverse of ectoparasite of",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has ectoparasite"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002512",
      "meta" : {
        "definition" : {
          "val" : "x is the ribosomal translation of y if and only if a ribosome reads x through a series of triplet codon-amino acid adaptor activities (GO:0030533) and produces y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "ribosomal translation of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002513",
      "meta" : {
        "definition" : {
          "val" : "inverse of ribosomal translation of",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "ribosomally translates to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002634",
      "meta" : {
        "synonyms" : [ {
          "pred" : "hasRelatedSynonym",
          "val" : "lives inside of",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "endoparasite of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0085030",
      "type" : "CLASS",
      "lbl" : "mutualism"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002639",
      "meta" : {
        "definition" : {
          "val" : "inverse of intercellular endoparasite of",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has intercellular endoparasite"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002518",
      "meta" : {
        "definition" : {
          "val" : "x has end sequence y if the end of x is identical to the end of y, and x has y as a subsequence",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has end sequence"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002519",
      "meta" : {
        "definition" : {
          "val" : "inverse of has end sequence",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "is end sequence of"
    }, {
      "id" : "http://www.geneontology.org/formats/oboInOwl#hasDbXref",
      "type" : "PROPERTY",
      "lbl" : "database_cross_reference"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002630",
      "meta" : {
        "definition" : {
          "val" : "p 'directly negatively regulates' q if and only if p and q are processes, and p negatively regulates q, and q directly follows from p",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "directly negatively regulates"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002503",
      "meta" : {
        "definition" : {
          "val" : "q towards e2 if and only if q is a relational quality such that q inheres-in some e, and e != e2 and q is dependent on e2",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "towards"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002624",
      "type" : "PROPERTY",
      "lbl" : "lays eggs in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002504",
      "meta" : {
        "definition" : {
          "val" : "S always_present_in_taxon T if every fully formed member of taxon T has part some S, or is an instance of S",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "always present in taxon"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002625",
      "type" : "PROPERTY",
      "lbl" : "has eggs laid in by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002505",
      "meta" : {
        "definition" : {
          "val" : "p has intermediate c if and only if p has parts p1, p2 and p1 has output c, and p2 has input c",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has intermediate"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002626",
      "type" : "PROPERTY",
      "lbl" : "kills"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002627",
      "type" : "PROPERTY",
      "lbl" : "is killed by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002506",
      "type" : "PROPERTY",
      "lbl" : "causal relation between material entities"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002500",
      "meta" : {
        "definition" : {
          "val" : "A relationship between a material entity and a process where the material entity has some causal role that influences the process",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "causal agent in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002622",
      "type" : "PROPERTY",
      "lbl" : "visits flowers of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002501",
      "meta" : {
        "definition" : {
          "val" : "p is causally related to q if and only if p or any part of p and q or any part of q are linked by a chain of events where each event pair is one of direct activation or direct inhibition. p may be upstream, downstream, part of or a container of q.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "causal relation between processes"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0044403",
      "type" : "CLASS",
      "lbl" : "symbiosis, encompassing mutualism through parasitism"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002502",
      "type" : "PROPERTY",
      "lbl" : "depends on"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002623",
      "type" : "PROPERTY",
      "lbl" : "has flowers visited by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002507",
      "meta" : {
        "definition" : {
          "val" : "s determined by f if and only if s is a type of system, and f is a material entity that is part of s, such that f exerts a strong causal influence on the functioning of s, and the removal of f would cause the collapse of s.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "determined by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002629",
      "meta" : {
        "definition" : {
          "val" : "p 'directly positively regulates' q if and only if p and q are processes, and p positively regulates q, and q directly follows from p",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "directly positively regulates"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002508",
      "meta" : {
        "definition" : {
          "val" : "inverse of determined by",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco", "http://purl.obolibrary.org/obo/RO_0002259" ]
      },
      "type" : "PROPERTY",
      "lbl" : "determines"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002509",
      "meta" : {
        "definition" : {
          "val" : "s 'determined by part of' w if and only if there exists some f such that (1) s 'determined by' f and (2) f part_of w, or f=w.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "determined by part of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002613",
      "meta" : {
        "definition" : {
          "val" : "A relationship between a sentence and an instance of a piece of evidence in which the evidence contradicts the axiom",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "axiom contradicted by evidence"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002614",
      "meta" : {
        "definition" : {
          "val" : "A relationship between a piece of evidence and an entity that plays a role in supporting that evidence.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is evidence with support from"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002615",
      "meta" : {
        "definition" : {
          "val" : "Inverse of is-model-of",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has model"
    }, {
      "id" : "http://purl.obolibrary.org/obo/CARO_0010000",
      "type" : "CLASS",
      "lbl" : "multicellular anatomical structure"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0044419",
      "type" : "CLASS",
      "lbl" : "interspecies interaction between organisms"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002616",
      "type" : "PROPERTY",
      "lbl" : "related via evidence or inference to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002610",
      "meta" : {
        "definition" : {
          "val" : "A relationship that holds between two entities, where the entities exhibit a statistical dependence relationship. The entities may be statistical variables, or they may be other kinds of entities such as diseases, chemical entities or processes.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "correlated with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002611",
      "type" : "PROPERTY",
      "lbl" : "evidential logical macro assertion on an axiom"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002612",
      "meta" : {
        "definition" : {
          "val" : "A relationship between a sentence and an instance of a piece of evidence in which the evidence supports the axiom",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "axiom has evidence"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000589",
      "type" : "PROPERTY",
      "lbl" : "OBO foundry unique label"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000225",
      "lbl" : "obsolescence reason specification"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002617",
      "meta" : {
        "definition" : {
          "val" : "this property relates an IRI to the xsd boolean value \"True\" if the IRI is intended to be the representative IRI for a collection of classes that are mutually equivalent.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is representative IRI for equivalence set"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002618",
      "type" : "PROPERTY",
      "lbl" : "visits"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002619",
      "type" : "PROPERTY",
      "lbl" : "visited by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0003674",
      "type" : "CLASS",
      "lbl" : "molecular_function"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000028",
      "meta" : {
        "definition" : {
          "val" : "Biological homology that is characterized by changes, over evolutionary time, in the rate or timing of developmental events of homologous structures.",
          "xrefs" : [ "http://purl.obolibrary.org/obo/HOM_0000028", "ISBN:978-0674639416" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "heterochrony",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "heterochronous homologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in heterochronous homology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000029",
      "meta" : {
        "definition" : {
          "val" : "Heterochronous homology that is produced by a retention in adults of a species of traits previously seen only in juveniles.",
          "xrefs" : [ "http://en.wikipedia.org/wiki/Pedomorphosis", "http://purl.obolibrary.org/obo/HOM_0000029", "ISBN:978-0674639416" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "juvenification",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "pedomorphosis",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in paedomorphorsis relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000026",
      "meta" : {
        "definition" : {
          "val" : "1:many orthology that involves a gene in species A and its ortholog in species B, when duplications more recent than the species split have occurred in species A but not in species B.",
          "xrefs" : [ "http://dx.doi.org/10.1006/scdb.1999.0338", "http://dx.doi.org/10.1038/nrg2099", "http://purl.obolibrary.org/obo/HOM_0000026" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "semi-orthologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in semi-orthology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000027",
      "meta" : {
        "definition" : {
          "val" : "Iterative homology that involves structures arranged along the main body axis.",
          "xrefs" : [ "http://dx.doi.org/10.1146/annurev.es.20.110189.000411", "http://purl.obolibrary.org/obo/HOM_0000027" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "serial homologous to",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "homonomy",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in serial homology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0000302",
      "meta" : {
        "definition" : {
          "val" : "A relation that holds between a neuron that is synapsed_to another neuron or a neuron that is connected indirectly to another by a chain of neurons, each synapsed_to the next.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "downstream in neural circuit with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002602",
      "meta" : {
        "definition" : {
          "val" : "A shortcut relationship between two entities x and y1, such that the intent is that the relationship is functional and inverse function, but there is no guarantee that this property holds.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "in approximate one to one relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000031",
      "meta" : {
        "definition" : {
          "val" : "Paedomorphosis that is produced by precocious sexual maturation of an organism still in a morphologically juvenile stage.",
          "xrefs" : [ "http://en.wikipedia.org/wiki/Progenesis", "http://purl.obolibrary.org/obo/HOM_0000031", "ISBN:978-0674639416" ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "in progenesis relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000032",
      "meta" : {
        "definition" : {
          "val" : "Paedomorphosis that is produced by a retardation of somatic development.",
          "xrefs" : [ "http://en.wikipedia.org/wiki/Neoteny", "http://purl.obolibrary.org/obo/HOM_0000032", "ISBN:978-0674639416" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "neotenous to",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "juvenilization",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in neoteny relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0000301",
      "meta" : {
        "definition" : {
          "val" : "A relation that holds between a neuron that is synapsed_to another neuron or a neuron that is connected indirectly to another by a chain of neurons, each synapsed_to the next.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "upstream in neural circuit with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002603",
      "meta" : {
        "definition" : {
          "val" : "x is approximately equivalent to y if it is the case that x is equivalent, identical or near-equivalent to y",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is approximately equivalent to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0000300",
      "meta" : {
        "definition" : {
          "val" : "A relation that holds between two neurons connected directly via a synapse, or indirectly via a series of synaptically connected neurons.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "in neural circuit with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/CL_0000000",
      "type" : "CLASS",
      "lbl" : "cell"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002604",
      "meta" : {
        "definition" : {
          "val" : "x is the opposite of y if there exists some distance metric M, and there exists no z such as M(x,z) <= M(x,y) or M(y,z) <= M(y,x).",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is opposite of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000030",
      "meta" : {
        "definition" : {
          "val" : "Heterochronous homology that is produced by a maturation of individuals of a species past adulthood, which take on hitherto unseen traits.",
          "xrefs" : [ "http://en.wikipedia.org/wiki/Peramorphosis", "http://purl.obolibrary.org/obo/HOM_0000030" ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "in peramorphosis relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002605",
      "meta" : {
        "definition" : {
          "val" : "x is indistinguishable from y if there exists some distance metric M, and there exists no z such as M(x,z) <= M(x,y) or M(y,z) <= M(y,x).",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is indistinguishable from"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000036",
      "meta" : {
        "definition" : {
          "val" : "Historical homology that involves two members of a larger set of homologs.",
          "xrefs" : [ "http://dx.doi.org/10.1093/molbev/msp002", "http://purl.obolibrary.org/obo/HOM_0000036" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "many-to-many homology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "many:many homology ",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "many to many homologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in many to many homology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000033",
      "meta" : {
        "definition" : {
          "val" : "Convergence that results from co-evolution usually involving an evolutionary arms race.",
          "xrefs" : [ "http://purl.obolibrary.org/obo/HOM_0000033", "http:://en.wikipedia.org/wiki/Mimicry" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "mimicrous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in mimicry relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002600",
      "meta" : {
        "definition" : {
          "val" : "Holds between a material entity c and a pathological process p if and only if c is capable of some activity a, where a negatively regulates p.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "capable of upregulating or causing pathological process"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000034",
      "meta" : {
        "definition" : {
          "val" : "Orthology that involves two genes when duplications more recent than the species split have occurred in one species but not the other.",
          "xrefs" : [ "http://dx.doi.org/10.1038/415741a", "http://purl.obolibrary.org/obo/HOM_0000034", "http://www.ensembl.org/info/docs/compara/homology_method.html" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "one-to-many orthology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "co-orthology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "many to 1 orthology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "1:many orthology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "1 to many orthologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in 1 to many orthology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002601",
      "meta" : {
        "definition" : {
          "val" : "A shortcut relationship that holds between two entities based on their identity criteria",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "logical macro assertion involving identity"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0016740",
      "type" : "CLASS",
      "lbl" : "transferase activity"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002606",
      "meta" : {
        "definition" : {
          "val" : "c is a substance that treats d if c is a material entity (such as a small molecule or compound) and d is a pathological process, phenotype or disease, and c is capable of some activity that negative regulates or decreases the magnitude of d.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is substance that treats"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002607",
      "meta" : {
        "definition" : {
          "val" : "c is marker for d iff the presence or occurrence of d is correlated with the presence of occurrence of c, and the observation of c is used to infer the presence or occurrence of d. Note that this does not imply that c and d are in a direct causal relationship, as it may be the case that there is a third entity e that stands in a direct causal relationship with c and d.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "is marker for"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002608",
      "meta" : {
        "definition" : {
          "val" : "Inverse of 'causal agent in'",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has causal agent"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002609",
      "meta" : {
        "definition" : {
          "val" : "A relationship that holds between two entities, where the relationship holds based on the presence or absence of statistical dependence relationship. The entities may be statistical variables, or they may be other kinds of entities such as diseases, chemical entities or processes.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "related via dependence to"
    }, {
      "id" : "http://purl.obolibrary.org/obo/IAO_0000078",
      "lbl" : "curation status specification"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000017",
      "meta" : {
        "definition" : {
          "val" : "Historical homology that involves genes that diverged after a speciation event.",
          "xrefs" : [ "http://dx.doi.org/10.1007/BF02814484", "http://dx.doi.org/10.1016/S0168-9525(00)02005-9", "http://dx.doi.org/10.1146/annurev.genet.39.073003.114725", "http://purl.obolibrary.org/obo/HOM_0000017", "http://www.ncbi.nlm.nih.gov/pubmed/5449325" ]
        },
        "xrefs" : [ {
          "val" : "ECO:00000060"
        }, {
          "val" : "SO:0000855"
        }, {
          "val" : "SO:0000858"
        }, {
          "val" : "SO:orthologous_to"
        } ],
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "orthologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in orthology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000018",
      "meta" : {
        "definition" : {
          "val" : "Historical homology that is characterized by an interspecies (horizontal) transfer since the common ancestor.",
          "xrefs" : [ "http://dx.doi.org/10.1016/S0168-9525(00)02005-9", "http://dx.doi.org/10.1146/annurev.genet.39.073003.114725", "http://purl.obolibrary.org/obo/HOM_0000018" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "xenologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in xenology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000015",
      "meta" : {
        "definition" : {
          "val" : "Structural homology that is detected at the level of the 3D protein structure, but maybe not at the level of the amino acid sequence.",
          "xrefs" : [ "http://dx.doi.org/10.1016/0022-2836(76)90195-9", "http://purl.obolibrary.org/obo/HOM_0000015" ]
        },
        "xrefs" : [ {
          "val" : "MeSH:Structural_Homology,_Protein"
        } ],
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "protein structural homologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in protein structural homology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000016",
      "meta" : {
        "definition" : {
          "val" : "Structural homology that involves a pseudogenic feature and its functional ancestor.",
          "xrefs" : [ "http://purl.obolibrary.org/obo/HOM_0000016", "SO:non_functional_homolog_of" ]
        },
        "xrefs" : [ {
          "val" : "SO:non_functional_homolog_of"
        } ],
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "non functional homologous to",
          "xrefs" : [ ]
        }, {
          "pred" : "hasBroadSynonym",
          "val" : "pseudogene",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in non functional homology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000019",
      "meta" : {
        "definition" : {
          "val" : "Historical homology that involves two members sharing no other homologs in the lineages considered.",
          "xrefs" : [ "http://purl.obolibrary.org/obo/HOM_0000019", "BGEE:curator" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "1 to 1 homologous to",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "1:1 homology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "one-to-one homology",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in 1 to 1 homology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000020",
      "meta" : {
        "definition" : {
          "val" : "Orthology that involves two genes that did not experience any duplication after the speciation event that created them.",
          "xrefs" : [ "http://dx.doi.org/10.1007/BF02814484", "http://purl.obolibrary.org/obo/HOM_0000020", "http://www.ensembl.org/info/docs/compara/homology_method.html" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "1 to 1 orthologous to",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "1:1 orthology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "one-to-one orthology",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in 1 to 1 orthology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0016879",
      "type" : "CLASS",
      "lbl" : "ligase activity, forming carbon-nitrogen bonds"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000024",
      "meta" : {
        "definition" : {
          "val" : "Paralogy that results from a duplication preceding a given speciation event.",
          "xrefs" : [ "http://dx.doi.org/10.1146/annurev.genet.39.073003.114725", "http://purl.obolibrary.org/obo/HOM_0000024" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "alloparalogy",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "outparalogy",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "out-paralogous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in out-paralogy relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000025",
      "meta" : {
        "definition" : {
          "val" : "1:many orthology that involves a gene in species A and one of its ortholog in species B, when duplications more recent than the species split have occurred in species B but not in species A.",
          "xrefs" : [ "http://dx.doi.org/10.1006/scdb.1999.0338", "http://dx.doi.org/10.1038/nrg2099", "http://purl.obolibrary.org/obo/HOM_0000025" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "pro-orthologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in pro-orthology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0016874",
      "type" : "CLASS",
      "lbl" : "ligase activity"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000022",
      "meta" : {
        "definition" : {
          "val" : "Paralogy that results from a whole genome duplication event.",
          "xrefs" : [ "http://dx.doi.org/10.1038/75560", "http://purl.obolibrary.org/obo/HOM_0000022" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "ohnologous to",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "homoeology",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in ohnology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000023",
      "meta" : {
        "definition" : {
          "val" : "Paralogy that results from a lineage-specific duplication subsequent to a given speciation event.",
          "xrefs" : [ "http://dx.doi.org/10.1146/annurev.genet.39.073003.114725", "http://purl.obolibrary.org/obo/HOM_0000023" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "symparalogy",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "in-paralogous to",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "inparalogy",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in in-paralogy relationship with"
    }, {
      "id" : "http://www.geneontology.org/formats/oboInOwl#hasRelatedSynonym",
      "type" : "PROPERTY",
      "lbl" : "has_related_synonym"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000006",
      "meta" : {
        "definition" : {
          "val" : "Homology that is defined by similarity with regard to selected structural parameters.",
          "xrefs" : [ "http://dx.doi.org/10.1016/j.jhevol.2006.11.014", "http://dx.doi.org/10.1146/annurev.es.20.110189.000411", "http://purl.obolibrary.org/obo/HOM_0000006", "ISBN:0123195837" ]
        },
        "xrefs" : [ {
          "val" : "ECO:0000071"
        }, {
          "val" : "MI:2163"
        } ],
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "structural homologous to",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "idealistic homology",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in structural homology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000007",
      "meta" : {
        "definition" : {
          "val" : "Homology that is defined by common descent.",
          "xrefs" : [ "http://dx.doi.org/10.1016/S0169-5347(97)01125-7", "http://purl.obolibrary.org/obo/HOM_0000007", "ISBN:0123195837" ]
        },
        "xrefs" : [ {
          "val" : "SO:0000853"
        }, {
          "val" : "SO:0000857"
        }, {
          "val" : "SO:0000330"
        }, {
          "val" : "ECO:0000080"
        }, {
          "val" : "SO:homologous_to"
        }, {
          "val" : "TAO:homologous_to"
        }, {
          "val" : "RO_proposed_relation:homologous_to"
        } ],
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "historical homologous to",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "taxic homology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasBroadSynonym",
          "val" : "homology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "cladistic homology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "phylogenetic homology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "true homology",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in historical homology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000004",
      "meta" : {
        "definition" : {
          "val" : "Homoplasy that involves different underlying mechanisms or structures.",
          "xrefs" : [ "http://dx.doi.org/10.1016/j.jhevol.2006.11.010", "http://purl.obolibrary.org/obo/HOM_0000004" ]
        },
        "synonyms" : [ {
          "pred" : "hasRelatedSynonym",
          "val" : "analogy",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in convergence relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000005",
      "meta" : {
        "definition" : {
          "val" : "Homoplasy that involves homologous underlying mechanisms or structures.",
          "xrefs" : [ "http://dx.doi.org/10.1016/j.jhevol.2006.11.010", "http://purl.obolibrary.org/obo/HOM_0000005" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "parallel evolution",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in parallelism relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000008",
      "meta" : {
        "definition" : {
          "val" : "Homology that is defined by sharing of a set of developmental constraints, caused by locally acting self-regulatory mechanisms of differentiation, between individualized parts of the phenotype.",
          "xrefs" : [ "http://dx.doi.org/10.1016/S0169-5347(97)01125-7", "http://dx.doi.org/10.1146/annurev.es.20.110189.000411", "http://purl.obolibrary.org/obo/HOM_0000008" ]
        },
        "xrefs" : [ {
          "val" : "ECO:0000067"
        } ],
        "synonyms" : [ {
          "pred" : "hasRelatedSynonym",
          "val" : "transformational homology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "biological homologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in biological homology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000009",
      "meta" : {
        "definition" : {
          "val" : "Homoplasy that involves phenotypes similar to those seen in ancestors within the lineage.",
          "xrefs" : [ "http://dx.doi.org/10.1016/j.jhevol.2006.11.010", "http://purl.obolibrary.org/obo/HOM_0000009" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "rudiment",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "reversion",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "atavism",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in reversal relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000010",
      "meta" : {
        "definition" : {
          "val" : "Structural homology that is detected by similarity in content and organization between chromosomes.",
          "xrefs" : [ "http://purl.obolibrary.org/obo/HOM_0000010", "MeSH:Synteny" ]
        },
        "xrefs" : [ {
          "val" : "SO:0005858"
        }, {
          "val" : "SO:0000860"
        }, {
          "val" : "MeSH:Synteny"
        } ],
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "syntenic homologous to",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "synteny",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in syntenic homology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000013",
      "meta" : {
        "definition" : {
          "val" : "Syntenic homology that involves chromosomes of different species.",
          "xrefs" : [ "http://dx.doi.org/10.1101/gr.6380007", "http://purl.obolibrary.org/obo/HOM_0000013" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "syntenic orthologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in syntenic orthology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000014",
      "meta" : {
        "definition" : {
          "val" : "Structural homology that involves complex structures from which only a fraction of the elements that can be isolated are separately homologous.",
          "xrefs" : [ "http://purl.obolibrary.org/obo/HOM_0000014", "ISBN:0123195837", "ISBN:978-0471984931" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "fractional homology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "segmental homology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "partial homologous to",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "partial correspondence",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "mixed homology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "modular homology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "percent homology",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in partial homology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000011",
      "meta" : {
        "definition" : {
          "val" : "Historical homology that involves genes that diverged after a duplication event.",
          "xrefs" : [ "http://dx.doi.org/10.1016/S0168-9525(00)02005-9", "http://dx.doi.org/10.1146/annurev.genet.39.073003.114725", "http://purl.obolibrary.org/obo/HOM_0000011", "http://www.ncbi.nlm.nih.gov/pubmed/5449325" ]
        },
        "xrefs" : [ {
          "val" : "SO:0000854"
        }, {
          "val" : "SO:0000859"
        }, {
          "val" : "SO:paralogous_to"
        } ],
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "paralogous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in paralogy relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000012",
      "meta" : {
        "definition" : {
          "val" : "Paralogy that involves sets of syntenic blocks.",
          "xrefs" : [ "http://dx.doi.org/10.1186/1471-213X-7-100", "http://purl.obolibrary.org/obo/HOM_0000012", "DOI:10.1002/1097-010X(20001215)288:4<345::AID-JEZ7>3.0.CO;2-Y" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "syntenic paralogous to",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "paralogon",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "duplicon",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in syntenic paralogy relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000002",
      "meta" : {
        "definition" : {
          "val" : "Similarity that results from independent evolution.",
          "xrefs" : [ "http://dx.doi.org/10.1016/j.jhevol.2006.11.010", "http://purl.obolibrary.org/obo/HOM_0000002" ]
        },
        "synonyms" : [ {
          "pred" : "hasRelatedSynonym",
          "val" : "analogy",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "homoplasous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in homoplasy relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000003",
      "meta" : {
        "definition" : {
          "val" : "Similarity that is characterized by the organization of anatomical structures through the expression of homologous or identical patterning genes.",
          "xrefs" : [ "http://dx.doi.org/10.1007/BF02814484", "http://dx.doi.org/10.1007/s00427-003-0301-4", "http://dx.doi.org/10.1186/1742-9994-2-15", "http://purl.obolibrary.org/obo/HOM_0000003" ]
        },
        "xrefs" : [ {
          "val" : "ECO:0000075"
        } ],
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "homocracous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in homocracy relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000000",
      "meta" : {
        "definition" : {
          "val" : "Relation between biological objects that resemble or are related to each other sufficiently to warrant a comparison.",
          "xrefs" : [ "http://purl.obolibrary.org/obo/HOM_0000000", "BGEE:curator" ]
        },
        "xrefs" : [ {
          "val" : "ECO:0000041"
        }, {
          "val" : "SO:similar_to"
        } ],
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "sameness",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "correspondence",
          "xrefs" : [ "http://dx.doi.org/10.1007/BF02814479" ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "similar to",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "resemblance",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in similarity relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000001",
      "meta" : {
        "definition" : {
          "val" : "Similarity that results from common evolutionary origin.",
          "xrefs" : [ "http://dx.doi.org/10.1002/bies.950180611", "http://dx.doi.org/10.1002/jmor.1051730307", "http://dx.doi.org/10.1007/BF02814480", "http://purl.obolibrary.org/obo/HOM_0000001" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "homologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in homology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0004842",
      "type" : "CLASS",
      "lbl" : "ubiquitin-protein ligase activity"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000075",
      "meta" : {
        "definition" : {
          "val" : "Historical homology that involves orthologous pairs of transcription factors and downstream regulated genes in different organisms.",
          "xrefs" : [ "http://dx.doi.org/10.1101/gr.1774904", "http://purl.obolibrary.org/obo/HOM_0000075" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "regulogous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in regulogy relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000073",
      "meta" : {
        "definition" : {
          "val" : "Synology that results from allopolyploidy.",
          "xrefs" : [ "http://dx.doi.org/10.1073/pnas.0505156102", "http://purl.obolibrary.org/obo/HOM_0000073" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "homoeologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in homoeology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000074",
      "meta" : {
        "definition" : {
          "val" : "Iterative homology that involves two structures, one of which originated as a duplicate of the other and co-opted the expression of patterning genes of the ancestral structure.",
          "xrefs" : [ "http://dx.doi.org/10.1007/s10441-007-9023-8", "http://dx.doi.org/10.1046/j.1525-142x.2000.00054.x", "http://purl.obolibrary.org/obo/HOM_0000074" ]
        },
        "synonyms" : [ {
          "pred" : "hasRelatedSynonym",
          "val" : "axis paramorphism",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in paramorphism relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000071",
      "meta" : {
        "definition" : {
          "val" : "Structural homology that involves structures with the same or similar relative positions.",
          "xrefs" : [ "http://dx.doi.org/10.1007/BF02814484", "http://dx.doi.org/10.1007/BF02814485", "http://purl.obolibrary.org/obo/HOM_0000071", "ISBN:0123195837" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "homotopous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in homotopy relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000072",
      "meta" : {
        "definition" : {
          "val" : "Biological homology that involves an ectopic structure and the normally positioned structure.",
          "xrefs" : [ "http://dx.doi.org/10.1007/BF02814485", "http://dx.doi.org/10.1016/j.cell.2008.06.030", "http://purl.obolibrary.org/obo/HOM_0000072" ]
        },
        "synonyms" : [ {
          "pred" : "hasRelatedSynonym",
          "val" : "heterotopy",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in homeosis relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000065",
      "meta" : {
        "definition" : {
          "val" : "Similarity that is characterized by interchangeability in function.",
          "xrefs" : [ "http://dx.doi.org/10.1007/BF02814484", "http://dx.doi.org/10.1038/415741a", "http://purl.obolibrary.org/obo/HOM_0000065" ]
        },
        "synonyms" : [ {
          "pred" : "hasRelatedSynonym",
          "val" : "functional similarity",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in functional equivalence relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000062",
      "meta" : {
        "definition" : {
          "val" : "Historical homology that involves functional equivalent genes with retention of the ancestral function.",
          "xrefs" : [ "http://dx.doi.org/10.1093/nar/gkl1043", "http://purl.obolibrary.org/obo/HOM_0000062" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "equivalogous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in equivalogy relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000063",
      "meta" : {
        "definition" : {
          "val" : "Historical homology that involves orthologous pairs of interacting molecules in different organisms.",
          "xrefs" : [ "http://dx.doi.org/10.1101/gr.1774904", "http://dx.doi.org/10.1126/science.287.5450.116", "http://purl.obolibrary.org/obo/HOM_0000063" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "interologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in interology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000068",
      "meta" : {
        "definition" : {
          "val" : "Xenology that is characterized by multiple horizontal transfer events, resulting in the presence of two or more copies of the foreign gene in the host genome.",
          "xrefs" : [ "http://purl.obolibrary.org/obo/HOM_0000068", "http://www.ncbi.nlm.nih.gov/pubmed/3065587" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "duplicate xenology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "multiple xenology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "paraxenologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in paraxenology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000069",
      "meta" : {
        "definition" : {
          "val" : "Paralogy that is characterized by extra similarity between paralogous sequences resulting from concerted evolution.",
          "xrefs" : [ "http://purl.obolibrary.org/obo/HOM_0000069", "http://www.ncbi.nlm.nih.gov/pubmed/3065587" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "plerologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in plerology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000066",
      "meta" : {
        "definition" : {
          "val" : "Biological homology that involves parts of the same organism.",
          "xrefs" : [ "http://dx.doi.org/10.1146/annurev.es.20.110189.000411", "http://purl.obolibrary.org/obo/HOM_0000066" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "iterative homologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in iterative homology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0042734",
      "type" : "CLASS",
      "lbl" : "presynaptic membrane"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000060",
      "meta" : {
        "definition" : {
          "val" : "Between-species paralogy that involves single copy paralogs resulting from reciprocal gene loss.",
          "xrefs" : [ "http://dx.doi.org/10.1146/annurev.genet.39.073003.114725", "http://purl.obolibrary.org/obo/HOM_0000060", "http://www.ensembl.org/info/docs/compara/homology_method.html" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "pseudoorthology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "apparent orthologous to",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "1:1 paralogy",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "apparent 1:1 orthology",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in apparent orthology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000061",
      "meta" : {
        "definition" : {
          "val" : "Xenology that involves genes that ended up in a given genome as a result of a combination of vertical inheritance and horizontal gene transfer.",
          "xrefs" : [ "http://dx.doi.org/10.1146/annurev.genet.39.073003.114725", "http://purl.obolibrary.org/obo/HOM_0000061" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "pseudoparalogous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in pseudoparalogy relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000048",
      "meta" : {
        "definition" : {
          "val" : "Orthology that involves two genes that experienced duplications more recent than the species split that created them.",
          "xrefs" : [ "http://dx.doi.org/10.1038/415741a", "http://purl.obolibrary.org/obo/HOM_0000048", "http://www.ensembl.org/info/docs/compara/homology_method.html" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "many-to-many orthology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "co-orthology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "many:many orthology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "trans-orthology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "trans-homology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "many to many orthologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in many to many orthology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000049",
      "meta" : {
        "definition" : {
          "val" : "Paralogy that involves genes from the same species.",
          "xrefs" : [ "http://purl.obolibrary.org/obo/HOM_0000049", "http://www.ensembl.org/info/docs/compara/homology_method.html" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "within-species paralogous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in within-species paralogy relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000053",
      "meta" : {
        "definition" : {
          "val" : "Xenology that results, not from the transfer of a gene between two species, but from a hybridization of two species.",
          "xrefs" : [ "http://dx.doi.org/10.1007/BF00173425", "http://dx.doi.org/10.1016/S0168-9525(00)02005-9", "http://purl.obolibrary.org/obo/HOM_0000053" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "synologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in synology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000054",
      "meta" : {
        "definition" : {
          "val" : "Orthology that involves functional equivalent genes with retention of the ancestral function.",
          "xrefs" : [ "http://dx.doi.org/10.1016/S0168-9525(00)02005-9", "http://purl.obolibrary.org/obo/HOM_0000054" ]
        },
        "xrefs" : [ {
          "val" : "ECO:0000080"
        } ],
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "isoorthologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in isoorthology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000051",
      "meta" : {
        "definition" : {
          "val" : "Paedomorphosis that is produced by delayed growth of immature structures into the adult form.",
          "xrefs" : [ "http://en.wikipedia.org/wiki/Pedomorphosis", "http://purl.obolibrary.org/obo/HOM_0000051" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "post-displacement",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in postdisplacement relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000052",
      "meta" : {
        "definition" : {
          "val" : "Peramorphosis that is produced by a delay in the offset of development.",
          "xrefs" : [ "http://en.wikipedia.org/wiki/Peramorphosis", "http://purl.obolibrary.org/obo/HOM_0000052", "ISBN:978-0674639416" ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "in hypermorphosis relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/CL_0000540",
      "type" : "CLASS",
      "lbl" : "neuron"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000057",
      "meta" : {
        "definition" : {
          "val" : "Parallelism that involves morphologically very similar structures, occurring only within some members of a taxon and absent in the common ancestor (which possessed the developmental basis to develop this character).",
          "xrefs" : [ "http://dx.doi.org/10.1007/BF02814485", "http://dx.doi.org/10.1016/j.jhevol.2006.11.010", "http://dx.doi.org/10.1186/1742-9994-2-15", "http://purl.obolibrary.org/obo/HOM_0000057", "ISBN:0199141118" ]
        },
        "synonyms" : [ {
          "pred" : "hasRelatedSynonym",
          "val" : "re-awakening",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "cryptic homology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "homoplastic tendency",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "apomorphic tendency",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "latent homologous to",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "homoiology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "underlying synapomorphy",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in latent homology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000058",
      "meta" : {
        "definition" : {
          "val" : "Homocracy that involves recognizably corresponding characters that occurs in two or more taxa, or as a repeated unit within an individual.",
          "xrefs" : [ "http://dx.doi.org/10.1186/1742-9994-2-15", "http://purl.obolibrary.org/obo/HOM_0000058", "DOI:10.1002/1521-1878(200009)22:9<846::AID-BIES10>3.0.CO;2-R" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "generative homology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "syngenous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in syngeny relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000055",
      "meta" : {
        "definition" : {
          "val" : "Paralogy that is characterized by duplication of adjacent sequences on a chromosome segment.",
          "xrefs" : [ "http://dx.doi.org/10.1016/S0168-9525(00)02005-9", "http://purl.obolibrary.org/obo/HOM_0000055", "ISBN:978-0878932665" ]
        },
        "synonyms" : [ {
          "pred" : "hasRelatedSynonym",
          "val" : "serial paralogy",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "tandem paralogous to",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "iterative paralogy",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in tandem paralogy relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000050",
      "meta" : {
        "definition" : {
          "val" : "Paralogy that involves genes from different species.",
          "xrefs" : [ "http://purl.obolibrary.org/obo/HOM_0000050", "http://www.ensembl.org/info/docs/compara/homology_method.html" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "between-species paralogous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in between-species paralogy relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000037",
      "meta" : {
        "definition" : {
          "val" : "Historical homology that involves a structure that has no other homologs in the species in which it is defined, and several homologous structures in another species.",
          "xrefs" : [ "http://purl.obolibrary.org/obo/HOM_0000037", "BGEE:curator" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "one-to-many homology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "1:many homology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "1 to many homologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in 1 to many homology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000042",
      "meta" : {
        "definition" : {
          "val" : "Historical homology that is based on recent shared ancestry, characterizing a monophyletic group.",
          "xrefs" : [ "http://purl.obolibrary.org/obo/HOM_0000042", "ISBN:978-0252068140" ]
        },
        "synonyms" : [ {
          "pred" : "hasRelatedSynonym",
          "val" : "synapomorphy",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "apomorphous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in apomorphy relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000043",
      "meta" : {
        "definition" : {
          "val" : "Historical homology that is based on distant shared ancestry.",
          "xrefs" : [ "http://purl.obolibrary.org/obo/HOM_0000043", "ISBN:978-0252068140" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "plesiomorphous to",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "symplesiomorphy",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in plesiomorphy relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000046",
      "meta" : {
        "definition" : {
          "val" : "Historical homology that involves not recombining and subsequently differentiated sex chromosomes.",
          "xrefs" : [ "http://purl.obolibrary.org/obo/HOM_0000046", "http://www.ncbi.nlm.nih.gov/pubmed/11110898" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "gametologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in gametology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000047",
      "meta" : {
        "definition" : {
          "val" : "Historical homology that involves the chromosomes able to pair (synapse) during meiosis.",
          "xrefs" : [ "http://purl.obolibrary.org/obo/HOM_0000047", "ISBN:0195307615" ]
        },
        "xrefs" : [ {
          "val" : "MeSH:Chromosome_Pairing"
        } ],
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "chromosomal homologous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in chromosomal homology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0042995",
      "type" : "CLASS",
      "lbl" : "cell projection"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000044",
      "meta" : {
        "definition" : {
          "val" : "Homocracy that involves morphologically and phylogenetically disparate structures that are the result of parallel evolution.",
          "xrefs" : [ "http://dx.doi.org/10.1007/BF02814485", "http://dx.doi.org/10.1038/nature07891", "http://purl.obolibrary.org/obo/HOM_0000044" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "deep homologous to",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "generative homology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasRelatedSynonym",
          "val" : "homoiology",
          "xrefs" : [ ]
        }, {
          "pred" : "hasExactSynonym",
          "val" : "deep genetic homology",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in deep homology relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_HOM0000045",
      "meta" : {
        "definition" : {
          "val" : "Historical homology that is characterized by topological discordance between a gene tree and a species tree attributable to the phylogenetic sorting of genetic polymorphisms across successive nodes in a species tree.",
          "xrefs" : [ "http://dx.doi.org/10.1073/pnas.0807433105", "http://purl.obolibrary.org/obo/HOM_0000045" ]
        },
        "synonyms" : [ {
          "pred" : "hasExactSynonym",
          "val" : "hemiplasous to",
          "xrefs" : [ ]
        } ]
      },
      "type" : "PROPERTY",
      "lbl" : "in hemiplasy relationship with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0007631",
      "type" : "CLASS",
      "lbl" : "feeding behavior"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000050",
      "meta" : {
        "definition" : {
          "val" : "a core relation that holds between a part and its whole",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "part of"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000055",
      "type" : "PROPERTY",
      "lbl" : "realizes"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000051",
      "meta" : {
        "definition" : {
          "val" : "a core relation that holds between a whole and its part",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "has part"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000054",
      "type" : "PROPERTY",
      "lbl" : "realized in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0001900",
      "meta" : {
        "definition" : {
          "val" : "An assertion that holds between an OWL Object Property and a temporal interpretation that elucidates how OWL Class Axioms that use this property are to be interpreted in a temporal context.",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "temporal interpretation"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0001901",
      "meta" : {
        "definition" : {
          "val" : "\n\n## Elucidation\n\nThis is used when the statement/axiom is assumed to hold true 'eternally'\n\n## How to interpret (informal)\n\nFirst the \"atemporal\" FOL is derived from the OWL using the standard\ninterpretation. This axiom is temporalized by embedding the axiom\nwithin a for-all-times quantified sentence. The t argument is added to\nall instantiation predicates and predicates that use this relation.\n\n## Example\n\n    Class: nucleus\n    SubClassOf: part_of some cell\n\n    forall t :\n      forall n :\n        instance_of(n,Nucleus,t)\n         implies\n        exists c :\n          instance_of(c,Cell,t)\n          part_of(n,c,t)\n\n## Notes\n\nThis interpretation is *not* the same as an at-all-times relation\n\n",
          "xrefs" : [ ]
        }
      },
      "type" : "INDIVIDUAL",
      "lbl" : "axiom holds for all times"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000040",
      "meta" : {
        "definition" : {
          "val" : "An independent continuant that is spatially extended whose identity is independent of that of other entities and can be maintained through time.",
          "xrefs" : [ ]
        }
      },
      "type" : "CLASS",
      "lbl" : "material entity"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0001902",
      "meta" : {
        "definition" : {
          "val" : "\n\n## Elucidation\n\nThis is used when the first-order logic form of the relation is\nbinary, and takes no temporal argument.\n\n## Example:\n\n    Class: limb\n    SubClassOf: develops_from some lateral-plate-mesoderm\n\n     forall t, t2:\n      forall x :\n        instance_of(x,Limb,t)\n         implies\n        exists y :\n          instance_of(y,LPM,t2)\n          develops_from(x,y)\n\n\n",
          "xrefs" : [ ]
        }
      },
      "type" : "INDIVIDUAL",
      "lbl" : "relation has no temporal argument"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0051816",
      "type" : "CLASS",
      "lbl" : "acquisition of nutrients from other organism during symbiotic interaction"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0007610",
      "type" : "CLASS",
      "lbl" : "behavior"
    }, {
      "id" : "http://www.geneontology.org/formats/oboInOwl#ObsoleteClass",
      "type" : "CLASS",
      "lbl" : "Obsolete Class"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0072519",
      "type" : "CLASS",
      "lbl" : "parasitism"
    }, {
      "id" : "http://purl.obolibrary.org/obo/PATO_0001199",
      "type" : "CLASS",
      "lbl" : "linear"
    }, {
      "id" : "http://www.geneontology.org/formats/oboInOwl#hasOBOFormatVersion",
      "type" : "PROPERTY",
      "lbl" : "has_obo_format_version"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0051702",
      "type" : "CLASS",
      "lbl" : "interaction with symbiont"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0051704",
      "type" : "CLASS",
      "lbl" : "multi-organism process"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0051705",
      "type" : "CLASS",
      "lbl" : "multi-organism behavior"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000060",
      "type" : "PROPERTY",
      "lbl" : "obsolete preceded by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000066",
      "meta" : {
        "definition" : {
          "val" : "b occurs_in c =def b is a process and c is a material entity or immaterial entity& there exists a spatiotemporal region r and b occupies_spatiotemporal_region r.& forall(t) if b exists_at t then c exists_at t & there exist spatial regions s and s’ where & b spatially_projects_onto s at t& c is occupies_spatial_region s’ at t& s is a proper_continuant_part_of s’ at t",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "occurs in"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000067",
      "meta" : {
        "definition" : {
          "val" : "[copied from inverse property 'occurs in'] b occurs_in c =def b is a process and c is a material entity or immaterial entity& there exists a spatiotemporal region r and b occupies_spatiotemporal_region r.& forall(t) if b exists_at t then c exists_at t & there exist spatial regions s and s’ where & b spatially_projects_onto s at t& c is occupies_spatial_region s’ at t& s is a proper_continuant_part_of s’ at t",
          "xrefs" : [ ]
        }
      },
      "type" : "PROPERTY",
      "lbl" : "contains process"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000062",
      "meta" : {
        "definition" : {
          "val" : "x is preceded by y if and only if the time point at which y ends is before or equivalent to the time point at which x starts. Formally: x preceded by y iff ω(y) <= α(x), where α is a function that maps a process to a start point, and ω is a function that maps a process to an end point.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "preceded by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000063",
      "meta" : {
        "definition" : {
          "val" : "x precedes y if and only if the time point at which x ends is before or equivalent to the time point at which y starts. Formally: x precedes y iff ω(x) <= α(y), where α is a function that maps a process to a start point, and ω is a function that maps a process to an end point.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "precedes"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002091",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "starts during"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000019",
      "type" : "CLASS",
      "lbl" : "quality"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002092",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "happens during"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002093",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "ends during"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000015",
      "meta" : {
        "definition" : {
          "val" : "An occurrent that has temporal proper parts and for some time t, p s-depends_on some material entity at t.",
          "xrefs" : [ ]
        }
      },
      "type" : "CLASS",
      "lbl" : "process"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000016",
      "type" : "CLASS",
      "lbl" : "disposition"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000017",
      "meta" : {
        "definition" : {
          "val" : "A specifically dependent continuant  that inheres in continuant  entities and are not exhibited in full at every time in which it inheres in an entity or group of entities. The exhibition or actualization of a realizable entity is a particular manifestation, functioning or process that occurs under certain circumstances.",
          "xrefs" : [ ]
        }
      },
      "type" : "CLASS",
      "lbl" : "realizable entity"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002090",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "immediately precedes"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0016301",
      "type" : "CLASS",
      "lbl" : "kinase activity"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002081",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "before or simultaneous with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002082",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "simultaneous with"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002083",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "before"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000004",
      "meta" : {
        "definition" : {
          "val" : "A continuant that is a bearer of quality and realizable entity entities, in which other entities inhere and which itself cannot inhere in anything.",
          "xrefs" : [ ]
        }
      },
      "type" : "CLASS",
      "lbl" : "independent continuant"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000005",
      "meta" : {
        "definition" : {
          "val" : "A continuant  that is either dependent on one or other independent continuant  bearers or inheres in or is borne by other entities.",
          "xrefs" : [ ]
        }
      },
      "type" : "CLASS",
      "lbl" : "obsolete dependent continuant"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002088",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "during which starts"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002089",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "starts before"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002084",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "during which ends"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002085",
      "type" : "PROPERTY",
      "lbl" : "encompasses"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002086",
      "meta" : {
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "ends after"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002087",
      "type" : "PROPERTY",
      "lbl" : "immediately preceded by"
    }, {
      "id" : "http://purl.obolibrary.org/obo/PATO_0000051",
      "type" : "CLASS",
      "lbl" : "morphology"
    }, {
      "id" : "http://purl.obolibrary.org/obo/PATO_0000052",
      "type" : "CLASS",
      "lbl" : "shape"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000002",
      "meta" : {
        "definition" : {
          "val" : "An entity that exists in full at any time in which it exists at all, persists through time while maintaining its identity and has no temporal parts.",
          "xrefs" : [ ]
        }
      },
      "type" : "CLASS",
      "lbl" : "continuant"
    }, {
      "id" : "http://www.geneontology.org/formats/oboInOwl#hasBroadSynonym",
      "type" : "PROPERTY",
      "lbl" : "has_broad_synonym"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000003",
      "meta" : {
        "definition" : {
          "val" : "An entity that has temporal parts and that happens, unfolds or develops through time.",
          "xrefs" : [ ]
        }
      },
      "type" : "CLASS",
      "lbl" : "occurrent"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0051850",
      "type" : "CLASS",
      "lbl" : "acquisition of nutrients from symbiont"
    }, {
      "id" : "http://www.geneontology.org/formats/oboInOwl#hasExactSynonym",
      "type" : "PROPERTY",
      "lbl" : "has_exact_synonym"
    }, {
      "id" : "http://purl.obolibrary.org/obo/ro/subsets#ro-eco",
      "type" : "PROPERTY",
      "lbl" : "eco subset"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0005634",
      "type" : "CLASS",
      "lbl" : "nucleus"
    }, {
      "id" : "http://purl.obolibrary.org/obo/PATO_0002009",
      "type" : "CLASS",
      "lbl" : "branchiness"
    }, {
      "id" : "http://purl.obolibrary.org/obo/PATO_0002124",
      "type" : "CLASS",
      "lbl" : "laminar"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0016881",
      "type" : "CLASS",
      "lbl" : "acid-amino acid ligase activity"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000034",
      "type" : "CLASS",
      "lbl" : "function"
    }, {
      "id" : "http://purl.obolibrary.org/obo/ENVO_01000254",
      "type" : "CLASS",
      "lbl" : "environmental system"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000031",
      "meta" : {
        "definition" : {
          "val" : "A continuant that is dependent on one or other independent continuant bearers. For every instance of A requires some instance of (an independent continuant type) B but which instance of B serves can change from time to time.",
          "xrefs" : [ ]
        }
      },
      "type" : "CLASS",
      "lbl" : "generically dependent continuant"
    }, {
      "id" : "http://purl.obolibrary.org/obo/RO_0002180",
      "meta" : {
        "definition" : {
          "val" : "w 'has component' p if w 'has part' p and w is such that it can be directly disassembled into into n parts p, p2, p3, ..., pn, where these parts are of similar type.",
          "xrefs" : [ ]
        },
        "subsets" : [ "http://purl.obolibrary.org/obo/ro/subsets#ro-eco" ]
      },
      "type" : "PROPERTY",
      "lbl" : "has component"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0050896",
      "type" : "CLASS",
      "lbl" : "response to stimulus"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000023",
      "meta" : {
        "definition" : {
          "val" : "A realizable entity  the manifestation of which brings about some result or end that is not essential to a continuant  in virtue of the kind of thing that it is but that can be served or participated in by that kind of continuant  in some kinds of natural, social or institutional contexts.",
          "xrefs" : [ ]
        }
      },
      "type" : "CLASS",
      "lbl" : "role"
    }, {
      "id" : "http://purl.obolibrary.org/obo/GO_0016772",
      "type" : "CLASS",
      "lbl" : "transferase activity, transferring phosphorus-containing groups"
    }, {
      "id" : "http://www.geneontology.org/formats/oboInOwl#SubsetProperty",
      "type" : "PROPERTY",
      "lbl" : "subset_property"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000020",
      "meta" : {
        "definition" : {
          "val" : "A continuant that inheres in or is borne by other entities. Every instance of A requires some specific instance of B which must always be the same.",
          "xrefs" : [ ]
        }
      },
      "type" : "CLASS",
      "lbl" : "specifically dependent continuant"
    }, {
      "id" : "http://purl.obolibrary.org/obo/BFO_0000141",
      "type" : "CLASS",
      "lbl" : "immaterial entity"
    } ],
    "edges" : [ {
      "sub" : "http://purl.obolibrary.org/obo/GO_0042995",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0044464"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/CARO_0010000",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/CARO_0000003"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0051705",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0051704"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0016301",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0016772"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/BFO_0000141",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/BFO_0000004"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0051850",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0051816"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0008150",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/BFO_0000015"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0044419",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0051704"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/RO_0002577",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/BFO_0000040"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/CARO_0000003",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/CARO_0000006"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/CL_0000000",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/CARO_0000003"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0016772",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0016740"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0004842",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0019787"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/BFO_0000020",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/BFO_0000002"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/CL_0000540",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/CL_0000000"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0051816",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0007631"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/CARO_0000007",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/BFO_0000141"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/BFO_0000015",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/BFO_0000003"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0085030",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0044403"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0044403",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0044419"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0045211",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0016020"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/PATO_0001241",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/PATO_0000001"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0005634",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0044464"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/ENVO_01000254",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/RO_0002577"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/RO_0002534",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/RO_0002532"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0030425",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0043005"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/PATO_0001199",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/PATO_0000052"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0044456",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/CARO_0000014"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0030424",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0043005"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0051850",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0051702"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0051850",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0051705"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0045211",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0044456"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/CARO_0000014",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/CARO_0000003"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0051702",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0044419"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/RO_0002533",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/RO_0002532"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0042734",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0016020"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/BFO_0000019",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/BFO_0000020"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/PATO_0000051",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/PATO_0001241"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/BFO_0000031",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/BFO_0000002"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/PATO_0000402",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/PATO_0002009"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0003674",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/BFO_0000015"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0043005",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0042995"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/CARO_0001000",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/CARO_0000003"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0042734",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0044456"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/CARO_0000011",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/RO_0002577"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0016740",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0003824"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/PATO_0002009",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/PATO_0000052"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/CARO_0000011",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/CARO_0000006"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0003824",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0003674"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0016881",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0016879"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/PATO_0000001",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/BFO_0000020"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/PATO_0000141",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/PATO_0000051"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/BFO_0000005",
      "pred" : "is_a",
      "obj" : "http://www.geneontology.org/formats/oboInOwl#ObsoleteClass"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0044464",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/CARO_0000014"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0085031",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0044403"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/PATO_0000052",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/PATO_0000051"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0072519",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0044403"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/BFO_0000017",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/BFO_0000020"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0016874",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0003824"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/BFO_0000023",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/BFO_0000017"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/PATO_0000051",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/BFO_0000019"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0051704",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0008150"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/BFO_0000040",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/BFO_0000004"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0007631",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0007610"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0050896",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0008150"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0016879",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0016874"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0019787",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0016881"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/BFO_0000004",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/BFO_0000002"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0016020",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0044464"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0007610",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0050896"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/CARO_0001001",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/CARO_0001000"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0051705",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/GO_0007610"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/GO_0045202",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/CARO_0000014"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/CARO_0000006",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/BFO_0000040"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/RO_0002532",
      "pred" : "http://purl.obolibrary.org/obo/RO_0002524",
      "obj" : "http://purl.obolibrary.org/obo/RO_0002533"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/BFO_0000034",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/BFO_0000016"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/ENVO_00000428",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/ENVO_01000254"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/PATO_0002124",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/PATO_0000141"
    }, {
      "sub" : "http://purl.obolibrary.org/obo/BFO_0000016",
      "pred" : "is_a",
      "obj" : "http://purl.obolibrary.org/obo/BFO_0000017"
    } ],
    "id" : "http://purl.obolibrary.org/obo/ro.owl",
    "meta" : {
      "subsets" : [ ],
      "xrefs" : [ ],
      "basicPropertyValues" : [ {
        "pred" : "http://www.w3.org/2000/01/rdf-schema#comment",
        "val" : "Includes Ontology(OntologyID(OntologyIRI(<http://purl.obolibrary.org/obo/ro/core.owl>) VersionIRI(<null>))) [Axioms: 276 Logical Axioms: 56]"
      }, {
        "pred" : "http://www.w3.org/2000/01/rdf-schema#comment",
        "val" : "Includes Ontology(OntologyID(OntologyIRI(<http://purl.obolibrary.org/obo/ro/temporal-intervals.owl>) VersionIRI(<null>))) [Axioms: 146 Logical Axioms: 45]"
      }, {
        "pred" : "http://purl.org/dc/elements/1.1/description",
        "val" : "The OBO Relations Ontology (RO) is a collection of OWL relations (ObjectProperties) intended for use across a wide variety of biological ontologies."
      }, {
        "pred" : "http://www.w3.org/2000/01/rdf-schema#comment",
        "val" : "Includes Ontology(OntologyID(OntologyIRI(<http://purl.obolibrary.org/obo/ro/go-biotic.owl>) VersionIRI(<null>))) [Axioms: 42 Logical Axioms: 16]"
      }, {
        "pred" : "http://www.w3.org/2000/01/rdf-schema#comment",
        "val" : "Includes Ontology(OntologyID(OntologyIRI(<http://purl.obolibrary.org/obo/ro/pato_import.owl>) VersionIRI(<null>))) [Axioms: 20 Logical Axioms: 6]"
      }, {
        "pred" : "http://www.w3.org/2000/01/rdf-schema#comment",
        "val" : "Includes Ontology(OntologyID(OntologyIRI(<http://purl.obolibrary.org/obo/ro/go_mf_import.owl>) VersionIRI(<null>))) [Axioms: 29 Logical Axioms: 9]"
      }, {
        "pred" : "http://www.w3.org/2000/01/rdf-schema#comment",
        "val" : "Includes Ontology(OntologyID(OntologyIRI(<http://purl.obolibrary.org/obo/ro/el-constraints.owl>) VersionIRI(<null>))) [Axioms: 6 Logical Axioms: 2]"
      }, {
        "pred" : "http://www.w3.org/2000/01/rdf-schema#comment",
        "val" : "Includes Ontology(OntologyID(Anonymous-21)) [Axioms: 26 Logical Axioms: 0]"
      }, {
        "pred" : "http://www.w3.org/2000/01/rdf-schema#comment",
        "val" : "Includes Ontology(OntologyID(OntologyIRI(<http://purl.obolibrary.org/obo/ro/annotations.owl>) VersionIRI(<null>))) [Axioms: 61 Logical Axioms: 0]"
      }, {
        "pred" : "http://www.w3.org/2000/01/rdf-schema#comment",
        "val" : "Includes Ontology(OntologyID(OntologyIRI(<http://purl.obolibrary.org/obo/ro/rohom.owl>) VersionIRI(<null>))) [Axioms: 731 Logical Axioms: 148]"
      }, {
        "pred" : "http://xmlns.com/foaf/0.1/homepage",
        "val" : " https://github.com/oborel/obo-relations/"
      }, {
        "pred" : "http://www.w3.org/2000/01/rdf-schema#comment",
        "val" : "Includes Ontology(OntologyID(OntologyIRI(<http://purl.obolibrary.org/obo/ro/bfo-classes-minimal.owl>) VersionIRI(<null>))) [Axioms: 53 Logical Axioms: 12]"
      }, {
        "pred" : "http://www.w3.org/2000/01/rdf-schema#comment",
        "val" : "Includes Ontology(OntologyID(Anonymous-21)) [Axioms: 32 Logical Axioms: 0]"
      }, {
        "pred" : "http://purl.org/dc/elements/1.1/source",
        "val" : "http://obofoundry.org/ro"
      }, {
        "pred" : "http://purl.org/dc/elements/1.1/title",
        "val" : "OBO Relations Ontology"
      } ]
    },
    "equivalentNodesSets" : [ ],
    "logicalDefinitionAxioms" : [ ],
    "domainRangeAxioms" : [ {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002091",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000003" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000003" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002176",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002132",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/CARO_0001001" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002330",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000002" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000002" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002572",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000141" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002012",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000003" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000003" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002177",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002254",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/CARO_0000003" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/CARO_0000003" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002375",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002573",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/PATO_0000001" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002211",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000015" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000015" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002134",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/CARO_0001001" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002256",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/CARO_0000003" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/CARO_0000003" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002295",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/GO_0008150" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/CARO_0000003" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002570",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002010",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000015" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000015" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002571",
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002206",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000002" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002207",
      "allValuesFromEdges" : [ {
        "sub" : "http://purl.obolibrary.org/obo/CL_0000000",
        "pred" : "http://purl.obolibrary.org/obo/RO_0002207",
        "obj" : "http://purl.obolibrary.org/obo/CL_0000000"
      }, {
        "sub" : "http://purl.obolibrary.org/obo/CARO_0010000",
        "pred" : "http://purl.obolibrary.org/obo/RO_0002207",
        "obj" : "http://purl.obolibrary.org/obo/CARO_0010000"
      } ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002009",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/CL_0000000" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002202",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002565",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/GO_0040011" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002204",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000002" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002325",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002007",
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002205",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000002" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/BFO_0000055",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000015" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000017" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/BFO_0000054",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000017" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000015" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002121",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/CL_0000540" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002002",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000141" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002200",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000002" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002244",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000015" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002487",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000002" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000003" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002162",
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002437",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002514",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/RO_0002532" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/RO_0002532" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0000059",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000020" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000031" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0000058",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000031" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000020" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0000057",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000003" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000002" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002356",
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/CL_0000000" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002434",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002479",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000003" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002315",
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/CL_0000000" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0000091",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000016" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0001021",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002231",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000015" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0001022",
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0003001",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002232",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000015" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002595",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000015" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0001023",
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002476",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/GO_0005634" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/GO_0005634" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002150",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0000056",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000002" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000003" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0003000",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0001020",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0000053",
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000020" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0001018",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002349",
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/CL_0000000" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002426",
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000020" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002506",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002226",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/CARO_0000003" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002303",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/CARO_0000006" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/ENVO_01000254" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002501",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000003" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000003" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002348",
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/CL_0000000" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002507",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/RO_0002577" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002509",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/RO_0002577" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000040" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002220",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0000085",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000034" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002100",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/CL_0000540" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002222",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000003" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002101",
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/CARO_0001001" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002102",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/CL_0000540" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0000087",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000023" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0000086",
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000019" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0000079",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000034" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002576",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/CARO_0000003" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/CARO_0000003" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002334",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000015" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000015" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002215",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000015" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002337",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000015" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000002" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/RO_0002414",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000015" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000015" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/BFO_0000066",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000003" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000004" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/BFO_0000062",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000003" ],
      "rangeClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000003" ]
    }, {
      "predicateId" : "http://purl.obolibrary.org/obo/BFO_0000063",
      "domainClassIds" : [ "http://purl.obolibrary.org/obo/BFO_0000003" ]
    } ]
  } ]
}    
}
