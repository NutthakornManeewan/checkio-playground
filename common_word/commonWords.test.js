const { commonWords } = require("./commonWords");

test("commonWords('hello,world', 'hello,earth') === hello", () => {
    expect(commonWords("hello,world","hello,earth")).toEqual("hello");
});

test("commonWords('one,two,three', 'four,five,six') === \"\"", () => {
    expect(commonWords('one,two,three', 'four,five,six')).toEqual("");
});

test("commonWords('one,two,three', 'four,five,one,two,six,three') === 'one,three,two'", () => {
    expect(commonWords('one,two,three', 'four,five,one,two,six,three')).toEqual("one,three,two");
});
