/*! console.doge v0.0.0 | (c) MIT 2014 Yuri Victor */
var Doge = function ( options ) {
  if( typeof console === 'undefined' ) {
    return false;
  }

  if ( typeof( options ) === 'string' ) {
    options = { text : options };
  }
  if ( typeof( options ) === 'undefined' ) {
    options = { text: this.random( this.text() ) };
  }
  this.text = options.text;
  this.fontcolor = options.fontcolor ||  this.random( this.colors() );
  this.fontsize = options.fontsize || '100px';

  console.log( "%c" + this.text, "color:" + this.fontcolor + "; font-size:" + this.fontsize + "; font-family:'Comic Sans MS'" );
};

Doge.prototype = {
  colors: function () {
    return [
      '#50e0e6',
      '#f94247',
      '#d72bcb',
      '#41e125'
    ];
  },
  text: function () {
    return [
      'wow',
      'such colors',
      'so console',
      'such console',
      'such text',
      'so errors',
      'such errors'
    ]
  },
  random: function ( input ) {
    return input[ Math.floor( Math.random() * input.length ) ];
  }
};

if(typeof console === 'undefined') {
  var console = {}
  console.log = function() {};
}

console.doge = function ( options ) {
  return new Doge( options );
};
