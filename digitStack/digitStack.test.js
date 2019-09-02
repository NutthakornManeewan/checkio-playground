const { digitStack } = require("./digitStack");

test('digitStack(["PUSH 3", "POP", "POP", "PUSH 4", "PEEK", "PUSH 9", "PUSH 0", "PEEK", "POP", "PUSH 1", "PEEK"]) == 8', () => {
  expect(
    digitStack([
      "PUSH 3",
      "POP",
      "POP",
      "PUSH 4",
      "PEEK",
      "PUSH 9",
      "PUSH 0",
      "PEEK",
      "POP",
      "PUSH 1",
      "PEEK"
    ])
  ).toEqual(8);
});

test('digitStack(["POP", "POP"]) == 0', () => {
  expect(digitStack(["POP", "POP"])).toEqual(0);
});

test('digitStack(["PUSH 9", "PUSH 9", "POP"]) == 9', () => {
  expect(digitStack(["PUSH 9", "PUSH 9", "POP"])).toEqual(9);
});

test("digitStack([]) == 0", () => {
  expect(digitStack([])).toEqual(0);
});
