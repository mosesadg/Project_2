// var numbers = [ 2, 4, 6, 8 ];
// numbers.pop();
//
//
// numbers.push( 10 );
//
// numbers.shift( );
// numbers.shift( );



// var morse = [ "dot", "pause", "dot" ];
// var moreMorse = morse.join( " dash " );
// var a = moreMorse.split( " " );
//
// for(i in morse){
//   console.log(morse[i])
// }
//
// for(i in moreMorse){
//   console.log(moreMorse[i])
// }
//
// for(i in a){
//   console.log(a[i])
// }

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";

for(i in bands){
 console.log(bands[i])
}
