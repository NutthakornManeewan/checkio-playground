function middle(inputString) {
  const strLength = inputString.length;
  if(strLength % 2 === 0) {
    let str = inputString[parseInt(strLength/2)-1]+inputString[parseInt(strLength/2)]
    return str;
  } else {
    return inputString[parseInt(strLength/2)];
  }
}

module.exports = {
  middle
};
