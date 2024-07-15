// forEach
// ne retourne pas un nouvel array

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
    console.log(num);
})

const people = [
    {name: "bob", age: 20, job: "developpeur"},
    {name: "peter", age: 25, job: "designer"},
    {name: "susy", age: 30, job: "la boss"},
];

people.forEach(function (person) {
    console.log(person);
    console.log(person.job.toUpperCase());
});

function showPerson(person) {
    console.log(person.job.toUpperCase());
}

//! on ne veut pas invoquer/executer la fonction. ca n'est pas le but d'une fonction callback
people.forEach(showPerson);