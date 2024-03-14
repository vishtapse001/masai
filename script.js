const dice1 = document.getElementById("member-1");
const dice2 = document.getElementById("member-2");
const dice3 = document.getElementById("member-3");
const winnerDisplay = document.getElementById("winner");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function updateDice(dice, value) {
  dice.textContent = value;
}

function resetDiceColors() {
  dice1.style.backgroundColor = "white";
  dice2.style.backgroundColor = "white";
  dice3.style.backgroundColor = "white";
}

function determineWinner() {
  const values = [
    parseInt(dice1.textContent),
    parseInt(dice2.textContent),
    parseInt(dice3.textContent),
  ];
  const max = Math.max(...values);
  const min = Math.min(...values);

  if (values[0] === values[1] && values[1] === values[2]) {
    return "It's a draw!";
  } else {
    const winnerIndex = values.indexOf(max);
    const loserIndex = values.indexOf(min);
    const secondScorerIndex = [0, 1, 2].filter(
      (i) => i !== winnerIndex && i !== loserIndex
    )[0];

    if (values[winnerIndex] === values[secondScorerIndex]) {
      dice1.style.backgroundColor =
        dice2.style.backgroundColor =
        dice3.style.backgroundColor =
          "blue";
    } else {
      document.getElementById(
        `member-${winnerIndex + 1}`
      ).style.backgroundColor = "green";
      document.getElementById(
        `member-${secondScorerIndex + 1}`
      ).style.backgroundColor = "yellow";
      document.getElementById(
        `member-${loserIndex + 1}`
      ).style.backgroundColor = "red";
    }

    return `Member ${winnerIndex + 1} wins!`;
  }
}

document.getElementById("roll").addEventListener("click", () => {
  resetDiceColors();
  const diceValues = [rollDice(), rollDice(), rollDice()];
  updateDice(dice1, diceValues[0]);
  updateDice(dice2, diceValues[1]);
  updateDice(dice3, diceValues[2]);
  winnerDisplay.textContent = determineWinner();
});
