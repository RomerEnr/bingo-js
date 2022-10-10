import { range, shuffle } from "lodash-es";
import { createCpuCard } from "./modules/createCpuCard.js";
import { createPlayerCard } from "./modules/createPlayerCard.js";
import { animatize } from "./modules/animatize.js";
import { playerCardBoard, cpuCardBoard, numberButton } from "./modules/dom.js";
import { nextRound } from "./modules/nextRound.js";

const playerCardNumbers = shuffle(range(1, 91)).slice(0, 15);
const cpuCardNumbers = shuffle(range(1, 91)).slice(0, 15);

const main = () => {
  animatize();
  createPlayerCard(playerCardBoard, playerCardNumbers);
  createCpuCard(cpuCardBoard, cpuCardNumbers);
  numberButton.addEventListener("click", () => nextRound(playerCardNumbers, cpuCardNumbers));
};

main();
