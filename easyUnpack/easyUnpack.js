function easyUnpack(inputArr) {
    return [inputArr[0], inputArr[2], inputArr[inputArr.length-2]];
}

module.exports = {
    easyUnpack
};