const BOARD_SIZE = 4;
const MOVE_TO_ORIGIN = 3;

function prepareGrillePosition(grille) {
  let grillePositions = [];
  for (let i = 0; i < BOARD_SIZE; i++) {
    const pieceGrille = grille[i];
    let indexX = 0;
    for (;;) {
      indexX = pieceGrille.indexOf("X", indexX);
      if (indexX !== -1) {
        grillePositions.push([i, indexX]);
        indexX++;
      } else {
        break;
      }
    }
  }
  return grillePositions;
}

function sortPosition(a, b) {
  if (a[0] < b[0]) {
    return -1;
  } else if (a[0] === b[0]) {
    if (a[1] < b[1]) {
      return -1;
    } else {
      return 1;
    }
  } else {
    return 1;
  }
}

function rotate(x, y) {
  return [y, -x + MOVE_TO_ORIGIN];
}

function recallPassword(grille, password) {
  let crackedPassword = "";
  let grillePositions = prepareGrillePosition(grille);
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < grillePositions.length; i++) {
      const grilleDot = grillePositions[i];
      crackedPassword += password[grilleDot[0]][grilleDot[1]];
      grillePositions[i] = rotate(grilleDot[0], grilleDot[1]);
    }
    grillePositions.sort(sortPosition);
  }
  return crackedPassword;
}

module.exports = {
  recallPassword
};
