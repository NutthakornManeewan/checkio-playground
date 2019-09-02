const { betweenMarkers } = require("./betweenMarkers");

test("betweenMarkers('What is >apple<', '>', '<') == 'apple'", () => {
    expect(betweenMarkers('What is >apple<', '>', '<'))
    .toEqual('apple')
});

test("betweenMarkers('No[/b] hi', '[b]', '[/b]') == 'No'", () => {
    expect(betweenMarkers('No[/b] hi', '[b]', '[/b]'))
    .toEqual('No');
});

test('betweenMarkers("<head><title>My new site</title></head>","<title>", "</title>" == "My new site"', () => {
    expect(betweenMarkers('<head><title>My new site</title></head>','<title>','</title>'))
    .toEqual('My new site');
});

test('betweenMarkers(\'No [b]hi\', \'[b]\', \'[/b]\') == \'hi\'', () => {
    expect(betweenMarkers('No [b]hi', '[b]', '[/b]'))
    .toEqual('hi');
});

test('betweenMarkers(\'No hi\', \'[b]\', \'[/b]\') == \'No hi\'', () => {
    expect(betweenMarkers("No hi", "[b]", "[/b]"))
    .toEqual("No hi");
});

test("betweenMarkers('No <hi>', '>', '<') == ''", () => {
    expect(betweenMarkers('No <hi>', '>', '<'))
    .toEqual('');
});