import anime from "animejs";

export const animatize = () => {
  const textWrapper = document.querySelector(".ml9 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({ loop: false })
    .add({
      targets: ".ml9 .letter",
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: (el, i) => 45 * (i + 1)
    }).add({
      targets: ".ml9",
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
};
