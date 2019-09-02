const VOWELS = "aeiouy";
function translate(inputString) {
  const words = inputString.split(" ");
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
    const chars = words[i];
    let newChars = "";
    for (let j = 0; j < chars.length;) {
      const character = chars[j];
      if (VOWELS.includes(character)) {
        if (chars[j + 1] === character) {
          newChars += character;
          j += 3;
        }
      } else {
        newChars += character;
        j += 2;
      }
    }
    newWords.push(newChars);
  }
  return newWords.join(" ");
}

module.exports = {
  translate
};
