

function calculateTotale (subTotal, taxt) {

    return subTotal + taxt;
};
console.log(calculateTotale(15, 5));

let order1 = calculateTotale(14, 20) ;
let order2 = calculateTotale(25, 88);
let order3  = calculateTotale(60, 21);



const totale = (subTotal, taxt) => (subTotal + taxt);

console.log(order1, order2, order3);


const hello = (name) => (`hello ${name}`);
console.log(hello("john"));

const add = (num1, num2) => (num1 + num2);
console.log(add(5, 7));

const mult = (num1, num2) => (num1 * num2);
console.log(mult(5, 7));

const greet = (name, age) => (`Bonjour ${name} vous avez ${age} ans`);
console.log(greet("john", 30));

const square = (num1) => (num1 * num1);
console.log(square(5));