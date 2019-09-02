const { digitsMultip } = require("./digitsMultip");

test("digitsMultip(123405) == 120", () => {
    expect(digitsMultip(123405)).toEqual(120);
});

test("digitsMultip(999) == 729", () => {
    expect(digitsMultip(999)).toEqual(729);
});

test("digitsMultip(1000) == 1", () => {
    expect(digitsMultip(1000)).toEqual(1);
});

test("digitsMultip(1111) == 1", () => {
    expect(digitsMultip(1111)).toEqual(1);
});
