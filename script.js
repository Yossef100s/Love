// A Little World for Ragya — beginner-friendly interactions

const enterBtn = document.querySelector("#enterBtn");
const letterSection = document.querySelector("#letter");
const giftBtn = document.querySelector("#giftBtn");
const revealMessage = document.querySelector("#revealMessage");
const againBtn = document.querySelector("#againBtn");
const heartsLayer = document.querySelector(".floating-hearts");
const musicToggle = document.querySelector("#musicToggle");

// Scroll down to the letter when she clicks the welcome button.
enterBtn.addEventListener("click", () => {
  letterSection.scrollIntoView({ behavior: "smooth" });
  makeHearts(12);
});

// Reveal the final message when the gift is clicked.
giftBtn.addEventListener("click", () => {
  giftBtn.classList.add("opened");
  revealMessage.hidden = false;
  makeHearts(24);
});

// Let her replay the surprise.
againBtn.addEventListener("click", () => {
  giftBtn.classList.remove("opened");
  revealMessage.hidden = true;
  giftBtn.focus();
});

// A small decorative interaction; no music plays unless you add an audio file.
musicToggle.addEventListener("click", () => {
  musicToggle.classList.toggle("is-active");
  const active = musicToggle.classList.contains("is-active");
  musicToggle.innerHTML = active ? "♡ <span>love mode on</span>" : "♥ <span>love mode on</span>";
  if (active) makeHearts(8);
});

// Create floating hearts with JavaScript.
function makeHearts(amount) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (12 + Math.random() * 22) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    heartsLayer.appendChild(heart);

    // Remove each heart after its animation so the page stays lightweight.
    heart.addEventListener("animationend", () => heart.remove());
  }
}

// A few hearts drift by now and then, without covering buttons.
setInterval(() => {
  if (document.visibilityState === "visible") makeHearts(1);
}, 2600);
