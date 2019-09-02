const { mostNumbers } = require("./mostNumbers");

test("mostNumbers(1, 2, 3) == 2", () => {
    expect(mostNumbers(1, 2, 3)).toEqual(2);
});

test("mostNumbers(5, -5) == 10", () => {
    expect(mostNumbers(5, -5)).toEqual(10);
});

test("mostNumbers(10.2, -2.2, 0, 1.1, 0.5) == 12.4", () => {
    expect(mostNumbers(10.2, -2.2, 0, 1.1, 0.5)).toEqual(12.4);
});
