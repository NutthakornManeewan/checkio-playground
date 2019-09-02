function betweenMarkers(inputStr, m1, m2) {
    let firstSplited = inputStr.split(m1);
    if(!inputStr.includes(m1) || inputStr.includes(m2)) {
        if(inputStr.indexOf(m2) < inputStr.indexOf(m1)) {
            return '';
        }
        let filtered = firstSplited.filter(str => str.includes(m2));
        if(filtered.length > 0) {
            let secondSplit = filtered[0].indexOf(m2);
            return filtered[0].slice(0,secondSplit);
        }
    } 
    if(inputStr.includes(m1) && !inputStr.includes(m2)) {
        const indexOfm1 = inputStr.indexOf(m1);
        return inputStr.slice(indexOfm1+m1.length, inputStr.length).trim();
    } 
    if(!inputStr.includes(m1) && !inputStr.includes(m2)) {
        return inputStr;
    }
}

module.exports = {
    betweenMarkers
};