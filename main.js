// Increasing the width while scrolling SKILLS

let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".skills .the-progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    spans.forEach((s) => {
      s.style.width = s.dataset.width;
    });
  }
};

// Increase Numbers On Scrolling STATS

let section = document.querySelector(".stats");
let numsArr = document.querySelectorAll(".number");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      numsArr.forEach((e) => startIncrement(e));
    }
    started = true;
  }
};

function startIncrement(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 3500 / goal);
}


// Create Countdown Timer EVENT

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let diff = countDownDate - dateNow;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.querySelector(".time .days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".time .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".time .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".time .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (diff < 0) {
    clearInterval(counter);
  }
}, 1000);
