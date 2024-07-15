//  Les nombres
// Non-typé = on ne declare pas le type en js

//* let number = 24;
//* number = "c'est cool";

// const number = 24;
// console.log(number);

const number2 = 2.456;
console.log(number2);

//* math
const add = number1 + number2;
const sub = number1 - number2;
const mult = number1 * number2;
const div = number1 / number2;


// console.log(add);
// console.log(sub);
// console.log(mult);
// console.log(div);


//* +=, -=, *=, /=, ++, --, %
let number = 40;
number = number + 5;
number += 5;
number += 5;
number += 5;
number += 5;
number += 5;
number -= 5;

//* incrementer
number++;
number++;
number++;
number++;
number++;
number++;


//* decrementer
number--;

console.log(number);

// l'operateur modulo (%) retourne le reste d'une division

//* pizza
const slices = 10;
const children = 3;

const amount = slices / children;
console.log(amount);

const remainder = slices % children;
console.log(remainder);

// priorite des operations
const random = 4 + 6 + 10 * 10;
const random2 = (4 + 6 + 10) * 10;

console.log(random);
console.log(random2);