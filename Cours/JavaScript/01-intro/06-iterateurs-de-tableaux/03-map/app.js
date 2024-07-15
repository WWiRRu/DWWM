//* map
//* retourne un nouveau tableau
//* ne change pas la taille de l'array originel
//* utilise les valeurs originelles de l'array pour en faire un nouveau

const people = [
    {name: "bob", age:20, job: "developpeur"},
{name: "peter", age:25, job: "designer"},
{name: "susy", age:30, job: "la boss"},
];

const ages = people.map(function (person) {
    return person.age + 20;
});

console.log(people);
console.log(ages);

const newPeople = people.map(function (person) {
    return{
        firstName: person.name.toUpperCase(),
        oldAge: person.age + 20,
    };
});

console.log(newPeople);

const names = people.map(function (person) {
    return `<h2>${person.name}</h2>`;
});

console.log(names);

document.body.innerHTML = names.join("");