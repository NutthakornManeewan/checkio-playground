function fizzBuzz(inputNumber) {
    const fizzBuzzKey = {
        fizz: 3,
        buzz: 5,
    }
    let returnString = "";
    
    if(inputNumber % fizzBuzzKey.fizz === 0)
        returnString += "Fizz ";
    if(inputNumber % fizzBuzzKey.buzz === 0)
        returnString += "Buzz "
    if(returnString === "")
        return returnString += inputNumber;
    else
        return returnString.trim();
}

module.exports = {
    fizzBuzz
}