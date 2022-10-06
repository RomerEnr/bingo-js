import { range, shuffle } from "lodash-es";
let bingoBalls = range(1, 91);
let playerCard = [];
let cpuCard = [];

const createCard = () => {
  bingoBalls = range(1, 91);
  playerCard = shuffle(range(1, 91));
  playerCard = playerCard.slice(0, 15);
  cpuCard = range(1, 91).slice(0, 15);

  console.log(playerCard);
};

createCard();
