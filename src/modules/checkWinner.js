import { pump } from "./dom.js";
import confetti from "canvas-confetti";

export const checkWinner = (playerCardNumbers, cpuCardNumbers, nextRoundButton) => {
  const isPlayerWin = playerCardNumbers.every((el) => el === "X");
  const isCpuWin = cpuCardNumbers.every((el) => el === "X");

  if (isPlayerWin && isCpuWin) {
    pump.textContent = "¡Draw! 🚫";
    nextRoundButton.disabled = true;
  } else if (isPlayerWin) {
    pump.textContent = "¡Player Wins! 🎉";
    confetti({
      particleCount: 100,
      spread: 160
    });
    nextRoundButton.disabled = true;
  } else if (isCpuWin) {
    pump.textContent = "¡CPU Wins! 😔";
    nextRoundButton.disabled = true;
  };
};
