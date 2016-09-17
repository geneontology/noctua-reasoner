#!/usr/bin/env node

var fs = require('fs'),
    path = require('path'),
    getopt = require('node-getopt'),
    getValidRelations = require('..').getValidRelations

var opt = getopt.create([
    ['s' , 'stylesheet=PATH'      , 'path to json stylesheet'],
    ['c' , 'compoundRelations=N+'      , 'list of compound relations'],
    ['h' , 'help'             , 'display this help message']
])              // create Getopt instance
.bindHelp()     // bind option 'help' to default action
.parseSystem(); // parse command line
