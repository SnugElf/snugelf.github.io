const cells = document.querySelectorAll("td");
const resetButton = document.querySelector("#reset-button");
const resultDisplay = document.querySelector("#result");
let currentPlayer = "X";
let gameOver = false;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function(event) {
    if (!gameOver && event.target.textContent === "") {
      event.target.textContent = currentPlayer;
      event.target.classList.add("played");
      checkForWin();
      switchPlayer();
    }
  });
}

resetButton.addEventListener("click", resetGame);

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkForWin() {
  const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    const cellA = document.querySelector(`#cell-${a}`);
    const cellB = document.querySelector(`#cell-${b}`);
    const cellC = document.querySelector(`#cell-${c}`);

    if (
      cellA.textContent === currentPlayer &&
      cellB.textContent === currentPlayer &&
      cellC.textContent === currentPlayer
    ) {
      resultDisplay.textContent = `Player ${currentPlayer} wins!`;
      cells.forEach(cell => cell.removeEventListener("click", switchPlayer));
      gameOver = true;
    }
  }
}

function resetGame() {
  currentPlayer = "X";
  gameOver = false;
  resultDisplay.textContent = "";
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("played");
    cell.removeEventListener("click", switchPlayer);
    cell.addEventListener("click", function(event) {
        if (!gameOver && event.target.textContent === "") {
        event.target.textContent = currentPlayer;
        event.target.classList.add("played");
        checkForWin();
        switchPlayer();
      }
    });
  });
}
