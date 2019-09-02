function numberRadix(numStr, baseNumber) {
    const NUMBER_CONST = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const max_number = NUMBER_CONST[baseNumber-1];
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        const charNumber = numStr[(numStr.length-1)-i];
        const num = NUMBER_CONST.indexOf(charNumber);
        if(charNumber.charCodeAt(0) > max_number.charCodeAt(0)) {
            return -1;
        }
        sum += (num * Math.pow(baseNumber, i));
    }
    return sum;
}

module.exports = {
    numberRadix
};
