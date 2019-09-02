const _ = require("lodash");

let original = { foo: 'bar' };
let copy = original;
copy.foo = 'new value';

console.log('original >>> ', original);
console.log('copy >>> ', copy);

let original2 = { Foo: 'Bar' };
let copy2 = _.cloneDeep(original2);
copy2.Foo = 'New value';

console.log('original2 >>> ', original2);
console.log('copy2 >>> ', copy2);
