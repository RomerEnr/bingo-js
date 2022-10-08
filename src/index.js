// TODO:
import { range, shuffle } from "lodash-es";
import { createPumpNumbers } from "./modules/createPumpNumbers.js";
import { createCpuCard } from "./modules/createCpuCard";
import { createPlayerCard } from "./modules/createPlayerCard";
// Player Elements
const playerCardBoard = document.querySelector(".player-cardboard").children[1];
let playerCardNumbers = [];
playerCardNumbers = shuffle(range(1, 91)).slice(0, 15);

// Cpu Elements
const cpuCardBoard = document.querySelector(".cpu-cardboard").children[1];
let cpuCardNumbers = [];
cpuCardNumbers = shuffle(range(1, 91)).slice(0, 15);

// Bingo Elements
const bingoBalls = createPumpNumbers();
const numberButton = document.querySelector(".btnNumber");
const pump = document.querySelector(".bingo").children[0];
const history = document.querySelector(".history");

console.log(pump);

const getPumpNumberAndHistory = () => {
  const bingoNumber = bingoBalls.pop();
  pump.textContent = bingoNumber;
  const historyBox = document.createElement("div");
  historyBox.classList.add("number");
  historyBox.textContent = bingoNumber;

  history.append(historyBox);
  console.log(historyBox);
};

const main = () => {
  createPlayerCard(playerCardBoard, playerCardNumbers);
  createCpuCard(cpuCardBoard, cpuCardNumbers);

  numberButton.addEventListener("click", getPumpNumberAndHistory);
};

main();
