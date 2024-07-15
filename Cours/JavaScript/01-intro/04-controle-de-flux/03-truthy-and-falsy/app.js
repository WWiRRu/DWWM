//* Truthy and Falsy
//* "", '', 0, -0, NaN, false, null, undefined

const booll = 2 > 1;

if (booll) {
    console.log("hey, ça marche");
}

const text = "john";

if (text) {
    console.log("hey la valeur est vraie");
}
else {
    console.log("hey la valeur est fausse");
}