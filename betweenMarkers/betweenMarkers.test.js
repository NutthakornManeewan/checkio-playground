const { betweenMarkers } = require("./betweenMarkers");

test("betweenMarkers('What is >apple<', '>', '<') === 'apple'", () => {
    expect(betweenMarkers('What is >apple<', '>', '<')).toEqual('apple');
});

test("betweenMarkers('What is [windows]', '[', ']') === 'windows'", () => {
    expect(betweenMarkers('What is [windows]', '[', ']')).toEqual('windows');
});
