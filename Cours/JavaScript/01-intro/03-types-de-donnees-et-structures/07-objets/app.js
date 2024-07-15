// Les objets
//* reproduisent un objet de la vraie vie
// objets - paire clef/valeur, methodes


//! si on oublie la virgule entre chaque proprieter on aura une erreur
const person = {
    name: "john",
    lastName: "doe",
    age: 42,
    education: false,
    married: false,
    sibling: ["anna", "susy", "peter"],
    greeting: function () {
        console.log("salut ! je m'appelle john");
    },

};
console.log(person);
console.log(person.name);
//* autre notation
console.log(person["name"]);
console.log(person.sibling[0]);
//! ne pas oublier les () pour invoquer les fonctions
person.greeting();
const age = person.age;
console.log(age);

//* modifie une propriete
person.name = "bob";
console.log(person);

//* ajoute une propriete
person.job = "developpeur";
console.log(person);

// supprime une propriete
delete person.job;
console.log(person);

// notation crochet
//* "art", "math", etc...
const subject = "math";
const total = {};

// total.math = "valeur au pif";
total.subject = "valeur au pif";
//* permet de creer dynamiquement des props
total[subject] = "valeur au pif";  //* ==> total["math"] = "valeur au pif"
total["art"] = "valeur au pif"; //* ==> total.art = "valeur au pif"
console.log(total);

