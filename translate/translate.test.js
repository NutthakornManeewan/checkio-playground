const { translate } = require("./translate");

test('translate("hieeelalaooo") == "hello"', () => {
  expect(translate("hieeelalaooo")).toEqual("hello");
});

test('translate("hoooowe yyyooouuu duoooiiine") == "how you doin"', () => {
  expect(translate("hoooowe yyyooouuu duoooiiine")).toEqual("how you doin");
});

test('translate("aaa bo cy da eee fe") == "a b c d e f"', () => {
  expect(translate("aaa bo cy da eee fe")).toEqual("a b c d e f");
});

test('translate("sooooso aaaaaaaaa") == "sos aaa"', () => {
  expect(translate("sooooso aaaaaaaaa")).toEqual("sos aaa");
});
