const { numberRadix } = require("./numberRadix");

test("numberRadix('AF', 16) == 175", () => {
    expect(numberRadix("AF",16))
        .toEqual(175);
});

test("numberRadix('101', 2) == 5", () => {
    expect(numberRadix("101", 2))
        .toEqual(5);
});

test("numberRadix('Z', 36) == 5", () => {
    expect(numberRadix("Z", 36))
        .toEqual(35);
});

test("numberRadix('AB', 10) == -1", () => {
    expect(numberRadix("AB", 10))
        .toEqual(-1);
});
