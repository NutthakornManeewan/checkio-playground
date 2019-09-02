function countInversion(inputArray) {
    const inputLength = inputArray.length;
    let inversion = 0;
    for (let i = 0; i < inputLength-1; i++) {
        const considerNumber = inputArray[i];
        for (let j = i+1; j < inputLength; j++) {
            const comparedNumber = inputArray[j];
            if(considerNumber > comparedNumber) {
                inversion++;
            }
        }
    }
    return inversion;
}

module.exports = {
    countInversion
};