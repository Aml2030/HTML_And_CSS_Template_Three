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
  }, 3000 / goal);
}
