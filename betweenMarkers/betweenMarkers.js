const betweenMarkers = (inputStr, marker1, marker2) => {
    const indexOfMarker1 = inputStr.indexOf(marker1);
    const indexOfMarker2 = inputStr.indexOf(marker2);
    return inputStr.slice(indexOfMarker1+1, indexOfMarker2);
}

module.exports = {
    betweenMarkers
};