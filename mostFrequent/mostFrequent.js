function mostFrequent(inputArray) {
    let countingObject = {}, max=-1, word="";
    if(inputArray.length > 0) {
        for (let i = 0; i < inputArray.length; i++) {
            const element = inputArray[i];
            if(countingObject[element]) {
                countingObject[element]++;
            } else {
                countingObject[element] = 1;
            }
            if(countingObject[element] > max) {
                max = countingObject[element]
                word = element;
            }
        }
        return word;
    }
    return "";
}

module.exports = {
    mostFrequent
};
