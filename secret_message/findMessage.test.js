const { findMessage } = require("./findMessage");

test("findMessage('How are you? Eh, ok. Low or Lower? Ohhh.') == 'HELLO'", () => {
    expect(findMessage("How are you? Eh, ok. Low or Lower? Ohhh.")).toEqual("HELLO");
});

test("findMessage('hello world!') == ''",() => {
    expect(findMessage("hello world!")).toEqual("");
});