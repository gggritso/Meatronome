#!/usr/bin/env node
var
  bookmarkletify = require( 'bookmarkletify' ),
  handlebars = require( 'handlebars' ),

  fs = require( 'fs' );

var
  template = handlebars.compile( fs.readFileSync( 'readme.handlebars', 'utf-8' ) ),
  source = fs.readFileSync( 'meatronome.js', 'utf-8' ),
  output = bookmarkletify( source ),

  readme = fs.writeFileSync( 'readme.md', template({ code: output }) );

console.log( output );
