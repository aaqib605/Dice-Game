let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let h1 = document.querySelector("h1");

let src1 = Math.floor(Math.random() * 6 + 1);
let src2 = Math.floor(Math.random() * 6 + 1);

img1.setAttribute("src", `images/dice${src1}.png`);
img2.setAttribute("src", `images/dice${src2}.png`);

if (src1 > src2) {
  h1.textContent = "Player 1 wins! 🚩";
} else if (src2 > src1) {
  h1.textContent = "Player 2 wins! 🚩";
} else if (src1 === src2) {
  h1.textContent = "Draw!";
}
