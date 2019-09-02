const _ = require("lodash");

function timesForObject() {
    let getRandomGenerator = () => {
        return Math.round(Math.random() * 100);
    };
    let result = _.times(20, getRandomGenerator);
    console.log("result >>> ", result);
    console.log("result length >>> ", result.length);
}

timesForObject();
