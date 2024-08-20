//* Les bases de l'Objet

//* Les objets sont une collection de paires de clef (propriété) et valeur
//* Les valeurs peuvent être des strings, numbers, booleans, arrrays et functions, dans ce cas on l'appelera une méthode

const age = 60;

//* synthaxe d'un objet, {}
const person = {
  name: "john",
  age,
  married: true,
  siblings: ["anna", "peter"],
  greet: function (name) {
    console.log(`Salut, je m'appelle ${name}`);
  },
  sayHello(name) {
    console.log(`Salut, je m'appelle ${name}`);
  },
  job: {
    title: "formateur",
    company: {
      name: "ForEach",
      address: " 393 Rue du Général de Gaulle",
    },
  },
  // on ne peut pas utiliser random-value comme nom de variable pour notre prop sauf si c'est un string
  // pratique pour utiliser des noms non-conformes
  "random-value": "random",
};
console.log(person);
console.log(person.name);
person.city = "Valenciennes";
const siblings = delete person.siblings;
console.log(siblings);
console.log(person.work);

console.log(person["random-value"]);
