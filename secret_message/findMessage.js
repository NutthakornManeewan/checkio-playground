function findMessage(inputMessage) {
    const splittedStr = inputMessage.split(" ");
    let returnWord = "";
    for (let i = 0; i < splittedStr.length; i++) {
        const firstChar = splittedStr[i][0];
        if(firstChar === firstChar.toUpperCase()) {
            returnWord += firstChar;
        }
    }
    return returnWord;
}

module.exports = {
    findMessage
}