// TODO: Preguntar a Manz sobre export e import de newNumber porque no funciona al hacer export
// También me da problemas con el import de la función checkWinner
// Idea en archivo temporal sobre como verificar por posición, para no quitar la idea lo deje por defecto pero lo guardé por si podiamos implementarlo en clase.
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
