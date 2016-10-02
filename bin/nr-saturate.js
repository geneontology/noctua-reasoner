#!/usr/bin/env node

var fs = require('fs'),
    path = require('path'),
    getopt = require('node-getopt');

var Reasoner = require('..').Reasoner;

var opt = getopt.create([
    ['i' , 'input=PATH'      , 'path to json obographs file'],
    ['s' , 'stylesheet=PATH'      , 'path to json stylesheet'],
    ['c' , 'compoundRelations=N+'      , 'list of compound relations'],
    ['h' , 'help'             , 'display this help message']
])              // create Getopt instance
.bindHelp()     // bind option 'help' to default action
.parseSystem(); // parse command line

//console.log("Reading: "+opt.input)
var path = opt.options['input']
var data = fs.readFileSync (path)
og = JSON.parse(data)

var r = new Reasoner(og)
var numAdded = r.saturate()
console.log("Added: "+numAdded)
var factstore = r.getFactStore()
var edges = factstore.edges()
for (var i in edges) {
    var edge = edges[i]
    console.log(edge)
}
var iog = r.inferredGraph()
console.log(iog)
