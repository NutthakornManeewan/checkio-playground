const { addFractions } = require("./addFractions");

test('addFractions([[2, 3], [2, 3]]) == "1 and 1/3"', () => {
  expect(addFractions([[2, 3], [2, 3]])).toEqual("1 and 1/3");
});

test('addFractions([[1, 3], [1, 3]]) == "2/3"', () => {
  expect(addFractions([[1, 3], [1, 3]])).toEqual("2/3");
});

test("addFractions([[1, 3], [1, 3], [1, 3]]) == 1", () => {
  expect(addFractions([[1, 3], [1, 3], [1, 3]])).toEqual(1);
});

test("addFractions([2,1],[3,1],[4,2],[5,1]) == 12", () => {
  expect(addFractions([[2, 1], [3, 1], [4, 2], [5, 1]])).toEqual(12);
});
