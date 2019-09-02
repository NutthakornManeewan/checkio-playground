function commonWords(firstString, secondString) {
    let splitedStrings = [];
    splitedStrings[0] = firstString.split(",");
    splitedStrings[1] = secondString.split(",");
    let resultObject = {}, maximum=-1, maximumWord=[];

    for (let i = 0; i < splitedStrings.length; i++) {
        const splitedString = splitedStrings[i];
        for (let j = 0; j < splitedString.length; j++) {
            const word = splitedString[j];
            if(resultObject[word]) {
                resultObject[word]++;
                if(resultObject[word] >= maximum) {
                    maximum = resultObject[word];
                    maximumWord.push(word);
                }
            } else {
                resultObject[word] = 1;
            }
        }    
    }
    maximumWord.sort();
    if(maximum !== 1) {
        return maximumWord.join(",");
    }
    return "";
}

module.exports = { commonWords }