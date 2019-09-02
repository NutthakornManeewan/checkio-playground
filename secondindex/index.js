const secondIndex = (inputString, searchingChar) => {
    const firstIndex = inputString.indexOf(searchingChar);
    const secondIdx = inputString.indexOf(searchingChar, firstIndex+1);
    if(secondIdx === -1)
        return undefined;
    return secondIdx;
}

module.exports = secondIndex;
