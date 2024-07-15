// "" ou ''
let name = "john";

//* soit on echape ' avec \' soit on utilise des ""
name = 'je m\'appelle john';
console.log(name);

//* Concatenation
name = "john";
const lastName = "DOE";
let fullName;

console.log("salut ! Ton nom est " + name + "" + lastName);

fullName = name + "" + lastName;
console.log("salut ! Ton nom est " + fullName);

console.log(`salut ! Ton nom est ${name} ${lastName}`);