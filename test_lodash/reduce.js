const _ = require("lodash");
const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 28 },
    { name: "Bill", age: 65 },
    { name: "Emily", age: 17 },
    { name: "Jack", age: 30 }
]

let reducedUser = _.reduce(users, (result, user) => {
    if(user.age >= 18 && user.age <= 59) {
        (result[user.age] || (result[user.age] = [])).push(user);
    }
    return result
}, {});

console.log("reducedUser >>> ", reducedUser);

