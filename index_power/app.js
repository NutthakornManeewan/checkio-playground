function inputPower(inputArray, index) {
    let result = 1;
    if(index < inputArray.length){
        for (let i = 0; i < index; i++) {
            result *= inputArray[index];
        }
    } else {
        return -1;
    }
    return result;
}

module.exports = {
    inputPower
}