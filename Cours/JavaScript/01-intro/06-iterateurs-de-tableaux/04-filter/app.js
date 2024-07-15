//* filter
//* retourne un nouvel array
//* peut manipuler la taille d'un array
//* retours basés sur la condition


const people = [
    {name: "bob", age:20, job: "developpeur"},
{name: "peter", age:25, job: "designer"},
{name: "susy", age:30, job: "la boss"},
];

const youngPeople = people.filter(function (person) {
    console.log(person.age <= 25);
 return person.age <= 25;
});

console.log(youngPeople);

const developpeur = people.filter(function (person) {
    return person.job === "developpeur";
});

console.log(developpeur);