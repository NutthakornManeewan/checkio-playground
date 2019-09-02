const { worthOfWords } = require("./worthOfWords");

test("worthOfWords(['hi', 'quiz', 'bomb', 'president']) == 'quiz'", () => {
  expect(worthOfWords(["hi", "quiz", "bomb", "president"])).toEqual("quiz");
});

test("worthOfWords(['zero', 'one', 'two', 'three', 'four', 'five']) == 'zero'", () => {
  expect(worthOfWords(["zero", "one", "two", "three", "four", "five"])).toEqual(
    "zero"
  );
});
