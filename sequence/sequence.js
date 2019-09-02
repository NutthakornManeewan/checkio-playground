const MAXIMUM_COUNT = 4;

function sequence(matric) {
  let [resVertical, resHorizontal, resDiagLeft, resDiagRight] = [
    false,
    false,
    false,
    false
  ];
  for (let i = 0; i < matric.length; i++) {
    for (let j = 0; j < matric[i].length; j++) {
      resVertical = findVertical(matric, i, j);
      resHorizontal = findHorizontal(matric, i, j);
      resDiagLeft = findDiagLeft(matric, i, j);
      resDiagRight = findDiagRight(matric, i, j);
      if (resVertical || resHorizontal || resDiagLeft || resDiagRight) {
        console.log(
          `${resVertical}||${resHorizontal}||${resDiagLeft}||${resDiagRight}`
        );
        return true;
      }
    }
  }
  return false;
}

function findDiagRight(matric, coni, conj) {
  let val = matric[coni][conj];
  let max = 1;
  for (let [i, j] = [coni - 1, conj + 1]; i >= 0; ) {
    if (matric[i][j] === val) max++;
    if (matric[i][j] !== val) max = 0;
    if (max >= MAXIMUM_COUNT) return true;
    i--;
    j++;
  }
  for (let [i, j] = [coni + 1, conj - 1]; i < matric.length; ) {
    if (matric[i][j] === val) max++;
    if (matric[i][j] !== val) max = 0;
    if (max >= MAXIMUM_COUNT) return true;
    i++;
    j--;
  }
  return false;
}

function findDiagLeft(matric, coni, conj) {
  let val = matric[coni][conj];
  let max = 1;
  for (let [i, j] = [coni - 1, conj - 1]; i >= 0; ) {
    if (matric[i][j] === val) max++;
    if (matric[i][j] !== val) max = 0;
    if (max >= MAXIMUM_COUNT) return true;
    i--;
    j--;
  }
  for (let [i, j] = [coni + 1, conj + 1]; i < matric.length; ) {
    if (matric[i][j] === val) max++;
    if (matric[i][j] !== val) max = 0;
    if (max >= MAXIMUM_COUNT) return true;
    i++;
    j++;
  }
  return false;
}

function findVertical(matric, coni, conj) {
  let val = matric[coni][conj];
  let max = 1;
  for (let i = coni - 1; i >= 0; i--) {
    if (matric[i][conj] === val) max++;
    if (matric[i][conj] !== val) max = 0;
    if (max >= MAXIMUM_COUNT) {
      console.log(`${coni},${conj}|${i}`);
      return true;
    }
  }
  for (let i = coni + 1; i < matric.length; i++) {
    if (matric[i][conj] === val) max++;
    if (matric[i][conj] !== val) max = 0;
    if (max >= MAXIMUM_COUNT) {
      console.log(`${coni},${conj}|${i}`);
      return true;
    }
  }
  return false;
}

function findHorizontal(matric, coni, conj) {
  let val = matric[coni][conj];
  let max = 1;
  for (let j = conj - 1; j >= 0; j--) {
    if (matric[coni][j] === val) max++;
    if (matric[coni][j] !== val) max = 0;
    if (max >= MAXIMUM_COUNT) return true;
  }
  for (let j = conj + 1; j < matric[coni].length; j++) {
    if (matric[coni][j] === val) max++;
    if (matric[coni][j] !== val) max = 0;
    if (max >= MAXIMUM_COUNT) return true;
  }
  return false;
}

module.exports = {
  sequence
};
