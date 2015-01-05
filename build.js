#!/usr/bin/env node
var
  bookmarkletify = require( 'bookmarkletify' ),
  fs = require( 'fs' );

var
  source = fs.readFileSync( 'meatronome.js', 'utf-8' ),
  output = bookmarkletify( source );

fs.writeFileSync( 'bookmarklet.js', output );
console.log( output );
