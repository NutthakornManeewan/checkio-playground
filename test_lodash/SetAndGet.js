const _ = require("lodash");

let bar = { foo: { key: "foo" } };
let name = _.get(bar, "name", "John Doe");

_.set(bar, "foo.item[0]", "An item");

console.log("bar >>> ", bar);
console.log("name >>> ", name);
console.log("bar >>> ", bar);