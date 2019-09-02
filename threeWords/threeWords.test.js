const { threeWords } = require("./threeWords");

test("threeWords(\"Hello World hello\") === True", () => {
    expect(threeWords("Hello World hello")).toEqual(true);
});

test("threeWords(\"He is 123 man\")  === False", () => {
    expect(threeWords("He is 123 man")).toEqual(false);
});
