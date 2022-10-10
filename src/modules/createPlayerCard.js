export const createPlayerCard = (element, card) => {
  for (let i = 0; i < card.length; i++) {
    const numberContainer = document.createElement("div");
    numberContainer.classList.add("number", `number${card[i]}`);
    numberContainer.textContent = `${card[i]}`;
    element.appendChild(numberContainer);
  }

  return element;
};
