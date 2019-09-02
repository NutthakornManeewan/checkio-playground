function mostNumbers(...inputNumbers) {
    const PRECISION = 5;
    const PRECISION_PREFIX = 1e5;
    if(inputNumbers.length > 0) {
        const max = Math.max(...inputNumbers);
        const min = Math.min(...inputNumbers);
        const diff = max-min;
        if(Number.isInteger(diff)) {
            return diff;
        }
        return (diff.toPrecision(PRECISION)*PRECISION_PREFIX)/PRECISION_PREFIX;
    }
    return 0;
}

module.exports = {
    mostNumbers
};