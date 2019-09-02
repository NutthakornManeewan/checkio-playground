const _ = require("lodash");

function assignObject() {
    let foo = { a: "a property" };
    let bar = { b: 4, c: "an other property" };
    let result_from_foo_object = _.assign({ a: "an old property" }, foo);
    let result_from_bar_object = _.assign({ a: "an old property" }, bar);
    let result_from_2_object = _.assign({ a: "an old property" }, foo, bar);
    
    console.log("result_from_foo_object => ", result_from_foo_object);
    console.log("result_from_bar_object => ", result_from_bar_object);
    console.log("result_from_2_object => ", result_from_2_object);
}

assignObject();