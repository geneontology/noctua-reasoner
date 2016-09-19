#!/usr/bin/env node

var fs = require('fs'),
    path = require('path'),
    getopt = require('node-getopt');

og = require('../tests/ro.json')
var Reasoner = require('..').Reasoner;

var opt = getopt.create([
    ['s' , 'stylesheet=PATH'      , 'path to json stylesheet'],
    ['c' , 'compoundRelations=N+'      , 'list of compound relations'],
    ['h' , 'help'             , 'display this help message']
])              // create Getopt instance
.bindHelp()     // bind option 'help' to default action
.parseSystem(); // parse command line



console.log(Reasoner)
var r = new Reasoner(og)
subjs = ['http://purl.obolibrary.org/obo/BFO_0000003']
objs = ['http://purl.obolibrary.org/obo/BFO_0000003']
rs= r.testRelations(subjs,objs)
console.log(rs)
