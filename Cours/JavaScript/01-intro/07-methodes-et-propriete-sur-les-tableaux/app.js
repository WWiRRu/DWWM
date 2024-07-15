//* Propriétés et Méthodes pour les Arrays
const names = ["john", "bobo", "barry", "olga", "ben", 2, 3, 4];

//*length
console.log(names.length);

//*affiche le dernier
console.log(names[names.length - 1]);
console.log(names.at(-1));

//*concat
const vegetables = ["poivron", "oignon", "tomate"];
const newNames = vegetables.concat(vegetables);
console.log(newNames);

//*inverse
//! mutate le tableau original
//console.log(names.reverse());
console.log(names.toReversed());

//*unshift - ajoute un élément au début d'un tableau
//! mutate le tableau original
names.unshift("susy");
console.log(names);

//*shift - supprime le premier élément du tableau
//! mutate le tableau original
names.shift();
console.log(names);

//*push - ajoute un élément a la fin d'un tableau
//! mutate le tableau original
names.push("susy");
console.log(names);

//* pop - supprime le dernier élément du tableau
//! mutate le tableau original
names.pop();
console.log(names);

//*slice - permet de couper une chaine de caractères  slice(début, fin)
const specificNames = names.slice(0, 5);
console.log(specificNames);

//*join - permet de joindre les éléments d'un tableau
console.log(names.join(", "));