Array.prototype.cartesianMap = require('../src/cartesian-map');
String.prototype.cartesianMap = require('../src/cartesian-map');

console.log([1, 2, 3].cartesianMap(() => [false, true]));
console.log([2, 11, 24, 39].cartesianMap((item, index) => item % 2 === 0 ? [item] : [item, item + index]));
console.log([2, 11, 24, 39].cartesianMap((item, index) => item % 2 === 0 ? item : [item, item + index]));
console.log([5, 6, 7].cartesianMap((item) => item));
console.log([[5], [6], [7]].cartesianMap((item) => item));
console.log([[5, 6, 7]].cartesianMap((item) => item));

console.log('Foo Bar'.cartesianMap((char) => char === char.toLowerCase() ? char : [char, char.toLowerCase()]));
console.log('bar'.cartesianMap((char) => ['', char]));