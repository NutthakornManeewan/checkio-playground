function gcd(topNumber, bottomNumber) {
  for (; bottomNumber !== 0; ) {
    let tempNumber = bottomNumber;
    bottomNumber = topNumber % bottomNumber;
    topNumber = tempNumber;
  }
  return topNumber;
}

function processing(sumTop, sumBot) {
  let GCD = gcd(sumTop, sumBot);
  sumTop /= GCD;
  sumBot /= GCD;
  return [sumTop, sumBot];
}

function addFractions(inputArray) {
  let [sumTop, sumBot] = inputArray[0];
  for (let i = 1; i < inputArray.length; i++) {
    let [top, down] = inputArray[i];
    let [tmpTop, tmpBot] = [sumTop, sumBot];
    tmpTop = tmpTop * down + top * sumBot;
    tmpBot = tmpBot * down;
    [sumTop, sumBot] = [tmpTop, tmpBot];
  }
  if (sumTop > sumBot) {
    let integerNum = parseInt(sumTop / sumBot);
    if(sumTop % sumBot === 0) {
        return integerNum;
    }
    sumTop = sumTop - sumBot;
    let [newSumTop, newSumBot] = processing(sumTop, sumBot);
    return `${integerNum} and ${newSumTop}/${newSumBot}`;
  }
  if (sumTop < sumBot) {
    let [newSumTop, newSumBot] = processing(sumTop, sumBot);
    return [newSumTop, newSumBot].join("/");
  }
  return 1;
}

module.exports = {
  addFractions
};
