"use strict";

//Guess my number using prompt

// const luckyNumber = 13;
// let count = Number(prompt('Enter the number between 1-20'));
// let counter = 1;
// while (count !== luckyNumber) {
//   if (count > luckyNumber) {
//     count = Number(prompt('Too high enter again'));
//     counter++;
//     continue;
//   } else if (count < luckyNumber) {
//     count = Number(prompt('Too low enter again'));
//     counter++;
//     continue;
//   }
// }

// alert(`Congrats You won, you took ${counter} tries to win`);

// document.querySelector('.number-box').textContent = 12;
// console.log(document.querySelector('.number-box').textContent);
// document.querySelector('.hint').textContent = '🥳 Correct Number!';

// document.querySelector('.score').textContent = 13;

// document.querySelector('.enter-num').value = 15;
// console.log(document.querySelector('.enter-num').value);

//Main Script

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
// document.querySelector('.number-box').textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".enter-num").value);
  console.log(guess, typeof guess);
  console.log(score);
  if (score > 1) {
    if (!guess) {
      document.querySelector(".hint").textContent = "⛔ No number";
      score--;
    } else if (guess !== secretNumber) {
      document.querySelector(".hint").textContent =
        guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
      document.querySelector(".enter-num").value = "";
      score--;
    } else {
      document.querySelector(".hint").textContent = "🥳 Correct Number!";
      document.querySelector(".number-box").textContent = secretNumber;
      document.querySelector(".enter-num").style.backgroundColor = "#c084fc";
      document.querySelector(".number-box").style.width = "30rem";
      document.body.style.backgroundColor = "#c084fc";
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    }
  } else {
    document.querySelector(".hint").textContent = "😥 You lost";
    document.querySelector(".number-box").textContent = secretNumber;
    document.querySelector(".enter-num").style.backgroundColor = "#6b7280";
    document.querySelector(".number-box").style.width = "30rem";
    document.body.style.backgroundColor = "#6b7280";
    score = 0;
  }
  document.querySelector(".score").textContent = score;
});

//Implementation of the Playing Again

document.querySelector(".again-btn").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number-box").textContent = "?";
  document.querySelector(".number-box").style.width = "20rem";
  document.querySelector(".hint").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".enter-num").value = "";
  document.querySelector(".enter-num").style.backgroundColor = "#222";
  document.body.style.backgroundColor = "#222";
  score = 20;
});
