const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
console.log("colors");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector("[data-action='start']");
const stopBtn = document.querySelector("[data-action='stop']");
const body = document.querySelector("body");
let timerId = null;

startBtn.addEventListener("click", (e) => {
  if (timerId) return;
  startBtn.disabled = true;
  timerId = setInterval(() => {
    const randomInd = randomIntegerFromInterval(0, colors.length - 1);

    console.log(colors[randomInd]);
    body.style.backgroundColor = colors[randomInd];
    console.log((body.style.backgroundColor = colors[randomInd]));
  }, 2000);
});
stopBtn.addEventListener("click", (e) => {
  clearInterval(timerId);
  timerId = null;
  startBtn.disabled = false;
});
