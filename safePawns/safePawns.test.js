const { safePawns } = require("./safePawns");

test('safePawns(["b4", "d4", "f4", "c3", "e3", "g5", "d2"]) == 6', () => {
  expect(safePawns(["b4", "d4", "f4", "c3", "e3", "g5", "d2"])).toEqual(6);
});

test('safePawns(["b4", "c4", "d4", "e4", "f4", "g4", "e5"]) == 1', () => {
  expect(safePawns(["b4", "c4", "d4", "e4", "f4", "g4", "e5"])).toEqual(1);
});

test('safePawns(["e8"]) == 0', () => {
  expect(safePawns(["e8"])).toEqual(0);
});

test('safePawns(["a1","b2","c3","d4","e5","f6","g7","h8"]) == 0', () => {
  expect(safePawns(["a1", "b2", "c3", "d4", "e5", "f6", "g7", "h8"])).toEqual(
    7
  );
});
