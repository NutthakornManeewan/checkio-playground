const { mostFrequent } = require("./mostFrequent");

test("mostFrequent(['a','b','c','a','b','a']) === 'a'", () => {
    expect(mostFrequent(['a','b','c','a','b','a'])).toEqual("a");
});

test("mostFrequent(['a','a','bi','bi','bi']) === 'bi'", () => {
    expect(mostFrequent(['a','a','bi','bi','bi'])).toEqual("bi");
});
