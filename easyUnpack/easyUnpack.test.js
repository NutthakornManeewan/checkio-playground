const { easyUnpack } = require("./easyUnpack");

test("easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]) == [1, 3, 7]", () => {
    expect(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]))
        .toEqual([1,3,7]);
});

test("easyUnpack([1, 1, 1, 1]) == [1, 1, 1]", () => {
    expect(easyUnpack([1, 1, 1, 1]))
        .toEqual([1,1,1]);
});

test("easyUnpack([6, 3, 7]) == [6, 7, 3]", () => {
    expect(easyUnpack([6, 3, 7]))
        .toEqual([6, 7, 3]);
});
