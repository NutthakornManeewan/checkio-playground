const { spheroid } = require("./spheroid");

test(`spheroid(4, 2) == [8.38, 21.48]`, () => {
  expect(spheroid(4, 2)).toEqual([8.38, 21.48]);
});

test(`spheroid(2, 2) == [4.19, 12.57]`, () => {
  expect(spheroid(2, 2)).toEqual([4.19, 12.57]);
});
