const secondIndex = require("./index");

test("secondIndex('sims', 's') == 3", () => { 
    expect(secondIndex("sims", "s")).toEqual(3);
})

test("secondIndex('find the river', 'e') == 12", () => { 
    expect(secondIndex("find the river", "e")).toEqual(12);
})

test("secondIndex('hi', ' ')  == undefined", () => { 
    expect(secondIndex("hi", " ")).toEqual(undefined);
})
