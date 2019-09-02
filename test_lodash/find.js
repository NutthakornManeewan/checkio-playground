const _ = require('lodash');

function findInsideArray() {
    const users = [
        { firstname: "John", lastname: "Doe", age: 28, gender: "male" },
        { firstname: "Jane", lastname: "Doe", age: 5, gender: "female" },
        { firstname: "Jim", lastname: "Carrey", age: 54, gender: "male" },
        { firstname: "Kate", lastname: "Winslet", age: 40, gender: "female" },
    ];
    const user = _.find(users, { lastname: "Doe" });
    const userUnderAge = _.find(users, (user) => user.age < 18)
    console.log("user >>> ", user);
    console.log("user under 18 >>> ", userUnderAge);
}

findInsideArray();
