const BOARD_SIZE = 8;

function createBoard() {
  let board = new Array(BOARD_SIZE);
  for (let i = 0; i < BOARD_SIZE; i++) {
    board[i] = new Array(BOARD_SIZE).fill(0);
  }
  return board;
}

function initializedBoard(board, inputArr) {
  const FILE = "abcdefgh";
  let workingBoard = [...board];
  let position = [];

  for (let i = 0; i < inputArr.length; i++) {
    let x = FILE.indexOf(inputArr[i][0]);
    let y = parseInt(inputArr[i][1]) - 1;
    position.push([y, x, inputArr[i]]);
    board[y][x] = 1;
  }
  return [workingBoard, position];
}

function safePawns(inputArr) {
  let [board, position] = initializedBoard(createBoard(), inputArr);
  let numSafe = 0;

  for (let i = 0; i < position.length; i++) {
    const [y, x] = [position[i][0], position[i][1]];
    if (y - 1 >= 0) {
      if (board[y - 1][x + 1] || board[y - 1][x - 1]) {
        numSafe++;
      }
    }
  }
  return numSafe;
}

module.exports = {
  safePawns
};
