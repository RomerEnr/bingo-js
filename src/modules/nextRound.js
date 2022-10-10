import { checkWinner } from "./checkWinner.js";
import { pump, numberButton } from "./dom.js";
import { createPumpNumbers } from "./createPumpNumbers.js";

const bingoBalls = createPumpNumbers();

const setTakenNumber = (card, takenNumber) => {
  const i = card.indexOf(takenNumber);
  card[i] = "X";
};

export const nextRound = (playerCardNumbers, cpuCardNumbers) => {
  const bingoNumber = bingoBalls.pop();
  const history = document.querySelector(".history");
  const selector = document.querySelectorAll(`.number${bingoNumber}`);
  const isNumberInPlayerCard = playerCardNumbers.includes(bingoNumber);
  const isNumberInCpuCard = cpuCardNumbers.includes(bingoNumber);

  if (isNumberInPlayerCard || isNumberInCpuCard) {
    selector.forEach((number) => number.classList.add("strikethrough"));

    isNumberInPlayerCard && setTakenNumber(playerCardNumbers, bingoNumber);
    isNumberInCpuCard && setTakenNumber(cpuCardNumbers, bingoNumber);
  }

  pump.textContent = bingoNumber;
  const historyBox = document.createElement("div");
  historyBox.classList.add("history-number");
  historyBox.textContent = bingoNumber;
  history.append(historyBox);

  checkWinner(playerCardNumbers, cpuCardNumbers, numberButton);
};
