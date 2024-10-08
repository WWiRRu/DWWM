//* Référence vs Valeur

//* Type de données primitif
//* String, Number, Symbol, Boolean, Undefined, Null

//* Type de données non-primitif
//* Arrays, Functions, Objects = object

//* Quand on assigne un type de donnée primitif à une variable. Tous les changements sont faits directement sur la valeur sans affecter la valeur originale.

//* Quand on assigne un type de donnée non-primitif à une variable, c'est fait par référence donc n'importe quel changement va affecter les références

const number = 1;
let number2 = number;
number2 = 7;
console.log(`la 1ere valeur est : ${number}`);
console.log(`la 2eme valeur est : ${number2}`);

const person = {
    name: "bob",
};
const person2 = person;

person2.name = "susy";

console.log(`le nom de la premiere personne est ${person.name}`);
console.log(`le nom de la deuxieme personne est ${person2.name}`);