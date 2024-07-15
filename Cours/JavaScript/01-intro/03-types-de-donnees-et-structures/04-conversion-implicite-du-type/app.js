const name = "john";
const lastName = "doe";
const fullName = name + " " + lastName;

console.log(fullName);

const number = 4;
const number2 = 10;
const result = number + number2;

console.log(result);

//! on n'obtient NAN - not a number
const value = name - number;
console.log(value);

const number3 = "10";
const number4 = "23";
const result2 = number3 - number4;
const result3 = number3 + number4;

console.log(result2);
console.log(result3);

// null - "le developpeur a defini la valeur"
 const number5 = 20 + null; //* 20 + 0 
console.log(number5);

// undefined - "js ne peut pas trouver le valeur"
const number6 = 20 + undefined; //* 20 + undefined
console.log(number6);