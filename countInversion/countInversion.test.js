const { countInversion } = require("./countInversion");

test("countInversion([1,2,5,3,4,7,6]) === 3",() => {
    expect(countInversion([1,2,5,3,4,7,6])).toEqual(3);
});

test("countInversion([0,1,2,3]) === 0",() => {
    expect(countInversion([0,1,2,3])).toEqual(0);
});

test("countInversion([5,3,2,1,0]) === 0",() => {
    expect(countInversion([5,3,2,1,0])).toEqual(10);
});
