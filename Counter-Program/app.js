let counter = document.getElementById("counter");
let count = Number(counter.textContent);

document.getElementById("decreaseBtn").onclick = function () {
  count--;
  counter.textContent = count;
};

document.getElementById("increaseBtn").onclick = function () {
  count++;
  counter.textContent = count;
};

document.getElementById("resetBtn").onclick = function () {
  count = 0;
  counter.textContent = count;
};
