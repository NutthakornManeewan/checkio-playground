const _ = require("lodash");
let sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];
let result = _.sortedUniq(sortedArray);

console.log('sortedArray >>> ', sortedArray);
console.log('result >>> ', result);
