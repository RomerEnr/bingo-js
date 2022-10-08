export const createPlayerCard = (element, card) => {
  for (let i = 0; i < card.length; i++) {
    const miniBox = document.createElement("div");
    miniBox.classList.add("number", `number${card[i]}`);
    miniBox.textContent = `${card[i]}`;
    element.appendChild(miniBox);
  }

  return element;
};
