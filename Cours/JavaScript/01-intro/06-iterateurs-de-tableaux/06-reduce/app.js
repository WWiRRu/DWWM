//* reduce
//* réduit l'array à une simple valeur - nombre, array, objet
//* itère aussi avec une fonction callback
//* 1er paramètre ('acc') - accumulateur
//* 2ème paramètre ('curr') - itération/valeur actuelle

const people = [
    {id: 1, name: "bob", age: 20, job: "developpeur", salary: 3000},
    {id: 2, name: "peter", age: 25, job: "designer", salary: 2000},
    {id: 3, name: "susy", age: 30, job: "la boss", salary: 5000},
];

const total = people.reduce(function (somme, person) {
    console.log(`total: ${somme}`);
    console.log(`salary: ${person.salary}`);
    somme += person.salary;
    return somme;
}, 0);
console.log(total);