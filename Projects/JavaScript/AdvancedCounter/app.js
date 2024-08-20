//import Counter from "./modules/Counter.js";
import Error from "./modules/Error.js";
const error = document.querySelector(".error");
const error2 = document.querySelector(".error2");
//let count = 0;
//let number = 0;
//counters.forEach(function (container) {
//  count += 100;
//  number++;
//  new Counter(count, container, number);
//});
new Error(404, "testttttt", error, 2 * 1000);
new Error(404564, "testttttt", error2, 2 * 1000);
