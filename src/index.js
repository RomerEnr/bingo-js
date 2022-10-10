// TODO: Preguntar a Manz sobre export e import de newNumber porque no funciona al hacer export
// También me da problemas con el import de la función checkWinner
// Idea en archivo temporal sobre como verificar por posición, para no quitar la idea lo deje por defecto pero lo guardé por si podiamos implementarlo en clase.
import { range, shuffle } from "lodash-es";
import { createCpuCard } from "./modules/createCpuCard";
import { createPlayerCard } from "./modules/createPlayerCard";
import { createPumpNumbers } from "./modules/createPumpNumbers";
import { animatize } from "./modules/animatize";

// Player Elements
const playerCardBoard = document.querySelector(".player-cardboard").children[1];
let playerCardNumbers = [];
playerCardNumbers = shuffle(range(1, 91)).slice(0, 15);

// Cpu Elements
const cpuCardBoard = document.querySelector(".cpu-cardboard").children[1];
let cpuCardNumbers = [];
cpuCardNumbers = shuffle(range(1, 91)).slice(0, 15);

// Bingo Elements
const numberButton = document.querySelector(".btnNumber");
const bingoBalls = createPumpNumbers();

// Auxiliar functions
const replaceNumberArray = (arr, item) => {
  const i = arr.indexOf(item);
  arr[i] = "X";
};

export const pump = document.querySelector(".bingo").children[0];
const newNumber = () => {
  const history = document.querySelector(".history");
  const bingoNumber = bingoBalls.pop();
  const selector = document.querySelectorAll(`.number${bingoNumber}`);

  if (playerCardNumbers.includes(bingoNumber) || cpuCardNumbers.includes(bingoNumber)) {
    selector.forEach((x) => {
      x.classList.add("strikethrough");
    });
  }

  if (playerCardNumbers.includes(bingoNumber)) {
    replaceNumberArray(playerCardNumbers, bingoNumber);

    // console.log(playerCardNumbers, "Tarjeta jugador");
    // console.log(matrixNumberPlayer);
  }

  if (cpuCardNumbers.includes(bingoNumber)) {
    replaceNumberArray(cpuCardNumbers, bingoNumber);

    // console.log(cpuCardNumbers, "Tarjeta cpu");
    // console.log(matrixNumberCpu);
  };

  pump.textContent = bingoNumber;
  const historyBox = document.createElement("div");
  historyBox.classList.add("history-number");
  historyBox.textContent = bingoNumber;

  history.append(historyBox);
  checkWinner(playerCardNumbers, cpuCardNumbers, numberButton);
};

const checkWinner = (playerArr, cpuArr, element) => {
  let win = false;
  if (playerArr === cpuArr) {
    alert("Empate");
  }

  if (playerArr.every((el) => el === "X")) {
    win = true;
    pump.textContent = "¡Player Wins! 🎉";
  }
  if (cpuArr.every((el) => el === "X")) {
    win = true;
    pump.textContent = "¡CPU Wins! 😔";
  }

  if (win) {
    element.disabled = true;
  }
  return win;
};

const main = () => {
  animatize();
  createPlayerCard(playerCardBoard, playerCardNumbers);
  createCpuCard(cpuCardBoard, cpuCardNumbers);
  numberButton.addEventListener("click", newNumber);
};

main();
