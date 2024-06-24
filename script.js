let emptyGameboard = [
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
];

const xWinsByRowGameboard = [
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
  ["x", "x", "x"],
];

const xWinsByColumnGameboard = [
  ["x", undefined, undefined],
  ["x", undefined, undefined],
  ["x", undefined, undefined],
];

const xWinsByDiagonalGameboard1 = [
  ["x", undefined, undefined],
  [undefined, "x", undefined],
  [undefined, undefined, "x"],
];
const xWinsByDiagonalGameboard2 = [
  [undefined, undefined, "x"],
  [undefined, "x", undefined],
  ["x", undefined, undefined],
];

function checkWin(gameboard) {
  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    if (
      gameboard[rowIndex][0] &&
      gameboard[rowIndex][0] === gameboard[rowIndex][1] &&
      gameboard[rowIndex][1] === gameboard[rowIndex][2]
    ) {
      return gameboard[rowIndex][0];
    }
  }

  for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
    if (
      gameboard[0][columnIndex] &&
      gameboard[0][columnIndex] === gameboard[1][columnIndex] &&
      gameboard[1][columnIndex] === gameboard[2][columnIndex]
    ) {
      return gameboard[0][columnIndex];
    }
  }

  if (
    gameboard[1][1] &&
    ((gameboard[0][0] === gameboard[1][1] &&
      gameboard[1][1] === gameboard[2][2]) ||
      (gameboard[2][0] === gameboard[1][1] &&
        gameboard[1][1] === gameboard[0][2]))
  ) {
    return gameboard[1][1];
  }
}

console.log("emptyGameboard", checkWin(emptyGameboard));
console.log("xWinsByRowGameboard", checkWin(xWinsByRowGameboard));
console.log("xWinsByColumnGameboard", checkWin(xWinsByColumnGameboard));
console.log("xWinsByDiagonalGameboard1", checkWin(xWinsByDiagonalGameboard1));
console.log("xWinsByDiagonalGameboard2", checkWin(xWinsByDiagonalGameboard2));
