import { range, shuffle } from "lodash-es";
export const createPumpNumbers = () => {
  let bingoBalls = range(1, 91);
  bingoBalls = shuffle(bingoBalls);
  return bingoBalls;
};
