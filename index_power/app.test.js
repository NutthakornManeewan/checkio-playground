const { inputPower } = require("./app");

test("indexPower([1, 2, 3, 4], 2) == 9", () => {
    expect(inputPower([1,2,3,4],2)).toEqual(9);
});

test("indexPower([1, 3, 10, 100], 3) == 1000000", () => {
    expect(inputPower([1, 3, 10, 100], 3)).toEqual(1000000);
});
// indexPower([1, 2], 3) == -1
test("indexPower([1, 2], 3) == -1", () => {
    expect(inputPower([1,2],3)).toEqual(-1);
});
