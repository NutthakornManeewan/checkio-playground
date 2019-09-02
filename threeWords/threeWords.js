function threeWords(inputString) {
    const splitedString = inputString.split(" ");
    let countingNumber = 0;
    for (let i = 0; i < splitedString.length; i++) {
        const element = splitedString[i];
        if(isNaN(element)) {
            countingNumber++;
        } else {
            countingNumber = 0;
        }
        
        if(countingNumber >= 3) {
            return true;
        }
    }
    return false;
}

module.exports = {
    threeWords
};
