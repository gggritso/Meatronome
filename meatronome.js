var style = document.createElement( 'style' );
style.appendChild( document.createTextNode( '' ) ); // for WebKit

document.head.appendChild( style );

style.sheet.insertRule( '#meatronome { height: 10px; position: absolute; top: 0; width: 100%;}', 0 );
style.sheet.insertRule( '@-webkit-keyframes move { from { left: 10%; } to { left: 90%; } }', 0 );

style.sheet.insertRule( '#meatronome .dot {  display: block; position: absolute; width: 10px; height: 10px; border-radius: 10px; background-color: rgba( 0, 0, 0, 0.6 ); -webkit-animation: 1s move linear 0s infinite alternate; }', 0 );


var meatronome = document.createElement( 'div' );
meatronome.id = 'meatronome';

var dot = document.createElement( 'b' );
dot.className = 'dot';

meatronome.appendChild( dot );

document.querySelector( '#video-preview' ).appendChild( meatronome );
