function biggerPrice(selectedRank, inputArray) {
    const comparePrice = (a,b) => {
        if(a.price < b.price) return 1;
        if(a.price > b.price) return -1;
        return 0;
    };
    const sortedInputArray = inputArray.sort(comparePrice);
    return sortedInputArray.slice(0,selectedRank);
}

module.exports = {
    biggerPrice
};