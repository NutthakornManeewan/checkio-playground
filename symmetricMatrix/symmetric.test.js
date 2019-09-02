const { symmetric } = require("./symmetric");

test(`symmetric([[ 0,  1,  2],[-1,  0,  1],[-2, -1,  0]]) == true`, () => {
  expect(symmetric([[0, 1, 2], [-1, 0, 1], [-2, -1, 0]])).toEqual(true);
});

test(`symmetric([[ 0,  1, 2],[-1,  1, 1],[-2, -1, 0]]) == false`, () => {
  expect(symmetric([[0, 1, 2], [-1, 1, 1], [-2, -1, 0]])).toEqual(false);
});

test(`symmetric([[ 0,  1, 2],[-1,  0, 1],[-3, -1, 0]]) == false`, () => {
  expect(symmetric([[0, 1, 2], [-1, 0, 1], [-3, -1, 0]])).toEqual(false);
});
