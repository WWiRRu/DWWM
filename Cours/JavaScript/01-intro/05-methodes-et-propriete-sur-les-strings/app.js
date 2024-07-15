// proprietes et methodes des chaines de caracteres

let text = "john doe";

//! la propriete length prend en compte les espaces
const result = text.length;

console.log(text.toLowerCase());
console.log(text.toUpperCase());
//* caractere a l'index i
console.log(text.charAt(1));
console.log(text.at(-1));
//* donne l'indexd'un caractere sinin -1
console.log(text.indexOf("d"));
console.log(text.indexOf("D"));
//* si il y a des occurences d'une lettre, on recuperera l'index du premier qu'on rencontre
console.log(text.indexOf("o"));
//* enleve les espaces au debut et a la fin
console.log(text.trim());
console.log(text.startsWith("john"));
//* on peut enchainer plusieurs methodes (chaining)
console.log(text.trim().toLowerCase().startsWith("john"));
console.log(text.includes("hn"));
//* slice(start, end - 1)
console.log(text.slice(0,2));
console.log(text.slice(1));
//* le dernier caractere
console.log(text.slice(-1));
//* transforme une chaine de caractere en tableau
console.log(text.split(""));