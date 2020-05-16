# cartesian-map

This small library contains a `map`-like function that iterates over elements of an array (or over characters of a string), calls a user-provided function on each, and returns the cartesian product of the lists returned by the function for each of the elements.

## Examples

```js
Array.prototype.cartesianMap = require('cartesian-map');
String.prototype.cartesianMap = require('cartesian-map');

console.log([1, 2, 3].cartesianMap(() => [false, true]));
/*
[
  [ false, false, false ],
  [ false, false, true ],
  [ false, true, false ],
  [ false, true, true ],
  [ true, false, false ],
  [ true, false, true ],
  [ true, true, false ],
  [ true, true, true ]
]
*/

console.log([2, 11, 24, 39].cartesianMap((item, index) => item % 2 === 0 ? [item] : [item, item + index]));
// or - alternatively - omitting square brackets for single elements:
console.log([2, 11, 24, 39].cartesianMap((item, index) => item % 2 === 0 ? item : [item, item + index]));
/*
[
  [ 2, 11, 24, 39 ],
  [ 2, 11, 24, 42 ],
  [ 2, 12, 24, 39 ],
  [ 2, 12, 24, 42 ]
]
*/

console.log('Foo Bar'.cartesianMap((char) => char === char.toLowerCase() ? char : [char, char.toLowerCase()]));
/*
[ 'Foo Bar', 'Foo bar', 'foo Bar', 'foo bar' ]
*/

console.log('bar'.cartesianMap((char) => ['', char]));
/*
[ '', 'r', 'a', 'ar', 'b', 'br', 'ba', 'bar' ]
*/
```