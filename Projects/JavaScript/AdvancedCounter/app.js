import Counter from "./modules/Counter.js";
let count = 0;
let number = 0;
const counters = document.querySelectorAll(".counter");
counters.forEach(function (container) {
  count += 100;
  number++;
  new Counter(count, container, number);
});
