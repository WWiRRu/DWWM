//* Les conditionelles
//* <, >, <=, >=, ==, ===, !=, !==

if (2 > 1) {
console.log("hello word");
}

const value = 2 > 1;

const value2 = false;

if (value2) {
    console.log("hello word");
}

// else

if (value) {
    console.log("hello word");
}
else {
    console.log("salut les gens");
}

// if else
const num1 = 6;
const num2 = 6;
if (num1 > num2){
    console.log("le 1er nombre est plus grand");
}
else if (num1 === num2){
console.log("les nombres sont egaux");
}
else {
    console.log("le 2eme nombre est le plus grand");
}

// operateur ! (not operator)

const value3 = true;

if (!value3) {
    console.log("la valeur est vraie");
}


// == verifie seulement la valeur
// === verifie la valeur est le type

const num3 = 6;
const num4 = "6";

const value4 = num3 == num4 ;
const value5 = num3 === num4;

console.log(value4);
console.log(value5);

const value6 = num3 != num4;
const value7 = num3 !== num4;

console.log(value6)
console.log(value7);;