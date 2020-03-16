// This cipher involves taking each character of a string and multiplying their char codes by 6.
//
// For example, `Hello World!` would become `ưɞʈʈʚÀȊʚʬʈɘÆ`.
//
// You must write two functions:
// `encode` to encode a given string,
// `decode` to decode a given string.
// 

function encode(str) {
  var enc = []
  var x = str.split("")
    for(var i=0;i<x.length;i++){
    enc.push(x[i].charCodeAt()*6)
    }
  return String.fromCharCode.apply(null, enc)
}

function decode(str) {
  var dec = []
  var x = str.split("")
    for(var i=0;i<x.length;i++){
    dec.push(x[i].charCodeAt()/6)
    }
  return String.fromCharCode.apply(null, dec)
}
