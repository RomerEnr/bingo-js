// Transoformar los arrays a una matriz

const matrixNumberCpu = [];
const matrixNumberPlayer = [];

// Generar matriz
const generateMatrix = (arr) => {
  const matrixNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    const aux = [];
    for (let j = 0; j < 5; j++, i++) {
      aux.push(arr[i]);
    }
    matrixNumbers.push(aux);
    i--;
  }
  return matrixNumbers;
};

// intentar checkear ganadores horizonalemente
const checkWinnerHorizontal = (arr = []) => {
  arr.forEach((element) => {
    // console.log(element);
    // console.log(element.every((el) => el === "X"));
  });
};

// Intentar checkear ganadores verticalemente
const checkWinnerVertical = (arr = []) => {
  let win = false;
  for (let j = 0; i < 5; j++) {
    for (let i = 0; i < 3; i++) {
      if (arr[i][j] !== "X") {
        win = false;
        break;
      } else {
        win = true;
      }
    }
  }
  return win;
};
