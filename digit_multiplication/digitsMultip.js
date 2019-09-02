function digitsMultip(inputNumber) {
    const numberString = inputNumber.toString();
    let multipResult = 1;
    for (let i = 0; i < numberString.length; i++) {
        let number = parseInt(numberString[i]);
        if(number !== 0) {
            multipResult *= number;
        }
    }
    return multipResult;
}

module.exports = {
    digitsMultip
}
