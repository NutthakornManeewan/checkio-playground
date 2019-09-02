function matrix(pattern, image) {
  let res = applyConvolutionFilter(image, pattern);
  console.log("res =", res);
  return res;
}

function applyConvolutionFilter(src, kernel) {
  let resultImage = src;
  let [offH, offW] = [kernel.length, kernel[0].length];
  for (let i = 0; i < src.length; i++) {
    for (let j = 0; j < src[i].length; j++) {
      let isMatchingPattern = true;
      for (let k = 0; k < offH; k++) {
        for (let l = 0; l < offW; l++) {
          if (i + k < src.length && j + l < src[i].length) {
            if (src[i][j] !== kernel[k][l]) {
              isMatchingPattern = false;
            }
          }
        }
      }
      if (isMatchingPattern) {
        for (let k = 0; k < offH; k++) {
          for (let l = 0; l < offW; l++) {
            if (i + k < src.length && j + l < src[i].length) {
              if (src[i][j] === 1) {
                resultImage[i][j] = 3;
              } else {
                resultImage[i][j] = 2;
              }
            }
          }
        }
      }
    }
  }
  return resultImage;
}

module.exports = {
  matrix
};
