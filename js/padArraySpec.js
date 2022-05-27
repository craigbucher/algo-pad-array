// Write unit tests!

var pad = require("./padArray");
//var shallowEqualArrays = require('shallow-equal/arrays');

console.log(pad.pad([1,2,3], 5),JSON.stringify([ 1, 2, 3, 'None', 'None' ]));
console.log(pad.pad([1,2,3], 5, 'apple'), JSON.stringify([ 1, 2, 3, 'apple', 'apple' ]));
console.log(pad.pad([1,2,3], 3), JSON.stringify([ 1, 2, 3 ]));
console.log(pad.pad([1,2,3], 0), JSON.stringify([ 1, 2, 3 ]));