const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const cta = document.querySelector(".buttons");
const form = document.querySelector("form");
const bgMusic = document.getElementById("bg-music");

noButton.addEventListener("click", () => {
  const yesIndex = Array.from(cta.children).indexOf(yesButton);
  const noIndex = Array.from(cta.children).indexOf(noButton);
  if (yesIndex < noIndex) {
    cta.insertBefore(noButton, yesButton);
  } else {
    cta.insertBefore(yesButton, noButton);
  }
});

yesButton.addEventListener("click", () => {
  form.innerHTML = `
      <h2>Thank you!</h2>
      <div class="bouncing-heart">❤️</div>
    `;
  const heart = form.querySelector(".bouncing-heart");
  heart.style.fontSize = "84px";
  heart.style.display = "flex";
  heart.style.justifyContent = "center";
  heart.style.alignItems = "center";
  heart.style.height = "100%";

  bgMusic.play();
});
