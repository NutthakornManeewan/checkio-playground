const { middle } = require("./middle");

test(`middle('example') == 'm'`, () => {
  expect(middle("example")).toEqual("m");
});

test(`middle('test') == 'es'`, () => {
  expect(middle("test")).toEqual("es");
});
