function firstWord(inputString) {
    const words = inputString.match(/[a-zA-Z']+/g);
    for (let i = 0; i < words.length; i++) {
        const element = words[i];
        if(element !== "") {
            return words[i];
        }
    }
    return words[0];
}

module.exports = {
    firstWord
};