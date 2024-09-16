const gameboard = (function() {
  const gameTiles = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ];

  function checkForPlayerWin() {
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
  };

  let playerMarker = "x";
  function renderGameboard() {
    const gameboardContainer = document.querySelector("#gameboard-container");
    for (let tileRow = 0; tileRow < 3; tileRow++) {
      for (let tileColumn = 0; tileColumn < 3; tileColumn++) {
        const tileContainer = document.createElement("div");
        tileContainer.classList.add("gameboard-tile");

        if (gameTiles[tileRow][tileColumn] === undefined) {
          tileContainer.addEventListener(
            "click",
            () => {
              let classToAdd;
              tileContainer.textContent = playerMarker.toUpperCase();
              gameTiles[tileRow][tileColumn] = playerMarker;
              if (playerMarker === "x") {
                playerMarker = "o";
                classToAdd = "player-x-marker";
              } else {
                playerMarker = "x";
                classToAdd = "player-o-marker";
              };
              tileContainer.classList.add(classToAdd);

              function gameHeader() {
                const player1Name = document.querySelector("#player1-name");
                const player2Name = document.querySelector("#player2-name");
                let player1Score = document.querySelector("#player1-value");
                let player2Score = document.querySelector("#player2-value");
                const gameOverModal = document.querySelector('#gameover-modal');
                const newGameButton = document.querySelector('#gameover-modal button');

                function gameEnd(playerName, playerScore) {
                  gameOverModal.showModal();
                  playerScore.textContent = Number(playerScore.textContent) + 1;
                  gameOverModal.querySelector('div').textContent = playerName.textContent + " Wins!";
                  newGameButton.addEventListener("click", () => {
                    gameOverModal.close();
                    gameTiles.forEach((row, rowIndex) => {
                      row.forEach((_, tileIndex) => {
                        gameTiles[rowIndex][tileIndex] = undefined;
                      });
                    });
                    gameboardContainer.textContent = "";
                    renderGameboard();
                  });
                }
          
                if (checkForPlayerWin() === "x") {
                  gameEnd(player1Name, player1Score);
                } else if (checkForPlayerWin() === "o") {
                  gameEnd(player2Name, player2Score);
                }
              }
              gameHeader();
            },
            { once: true }
          );
        }
        gameboardContainer.appendChild(tileContainer);
      }
    }
  }
  renderGameboard();
})();