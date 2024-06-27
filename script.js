const gameboard = (function () { 
    const gameTiles = [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
    ];

    const checkForPlayerWin = (() => {
        for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
          if (
            gameTiles[rowIndex][0] &&
            gameTiles[rowIndex][0] === gameTiles[rowIndex][1] &&
            gameTiles[rowIndex][1] === gameTiles[rowIndex][2]
          ) {
            return gameTiles[rowIndex][0];
          }
        }
      
        for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
          if (
            gameTiles[0][columnIndex] &&
            gameTiles[0][columnIndex] === gameTiles[1][columnIndex] &&
            gameTiles[1][columnIndex] === gameTiles[2][columnIndex]
          ) {
            return gameTiles[0][columnIndex];
          }
        }
      
        if (
          gameTiles[1][1] &&
          ((gameTiles[0][0] === gameTiles[1][1] &&
            gameTiles[1][1] === gameTiles[2][2]) ||
            (gameTiles[2][0] === gameTiles[1][1] &&
              gameTiles[1][1] === gameTiles[0][2]))
        ) {
          return gameTiles[1][1];
        }
      })();

      function renderGameboard() {
        const gameboardContainer = document.querySelector("#gameboard-container");
        for (let tileRow = 0; tileRow < 3; tileRow++) {
            for (let tileColumn = 0; tileColumn < 3; tileColumn++) {
                const tileContainer = document.createElement("div");
                tileContainer.classList.add("gameboard-tile");
                gameboardContainer.appendChild(tileContainer);
            }

            // TODO make tile change to player marker and update list when clicked
            
        }
      };
      renderGameboard();

    return {
        gameTiles,
        checkForPlayerWin
    };
})();

console.log("Gameboard", gameboard.checkForPlayerWin);