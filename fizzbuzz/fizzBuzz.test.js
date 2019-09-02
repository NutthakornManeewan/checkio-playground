const { fizzBuzz } = require("./fizzBuzz");

test("fizzBuzz(15) == 'Fizz Buzz'", () => {
    expect(fizzBuzz(15)).toEqual("Fizz Buzz");
});

test("fizzBuzz(6) == 'Fizz'", () => {
    expect(fizzBuzz(6)).toEqual("Fizz");
});

test("fizzBuzz(5) == 'Buzz'", () => {
    expect(fizzBuzz(5)).toEqual("Buzz");
});

test("fizzBuzz(7) == '7'", () => {
    expect(fizzBuzz(7)).toEqual("7");
});

