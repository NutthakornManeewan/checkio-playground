const _ = require("lodash");

let str1 = "déjà vu";
let str2 = "Juan José";

console.log("str1 >>> ", _.deburr(str1));
console.log("str2 >>> ", _.deburr(str2));
