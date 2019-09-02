const { firstWord } = require("./firstWord");

test("firstWord('Hello world') === 'Hello'", () => {
    expect(firstWord("Hello world")).toEqual("Hello");
});

test("firstWord('greetings, friends') === 'greetings'", () => {
    expect(firstWord("greetings, friends")).toEqual("greetings");
});

test("firstWord(' a word ') === 'a'", () => {
    expect(firstWord(" a word ")).toEqual("a");
});

test('firstWord("don\'t touch it")', () => {
    expect(firstWord("don't touch it")).toEqual("don't");
});
