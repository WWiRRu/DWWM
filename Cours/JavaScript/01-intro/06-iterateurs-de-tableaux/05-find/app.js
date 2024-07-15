//* find
//* retourne une instance - (dans le cas de people, un objet, dans celui de names un string)
//* retourne le premier match, si pas de match retourne undefined
//* super pour chercher une valeur unique mais pas pratique si il y en a plusieurs

const people = [
    {id: 1, name: "bob", age: 20, job: "developpeur"},
    {id: 2, name: "peter", age: 25, job: "designer"},
    {id: 3, name: "susy", age: 30, job: "la boss"},
];

const persons = people.find(function (person) {
    return person.id === 3;
});
console.log(persons);
console.log(persons.name);

const persons1 = people.find(function (item) {
    return item.id === 5;
});

console.log(persons1);

const names = ["bob", "peter", "susy"];

console.log(names.find(function (name) {
    return name === "bob";
}));

console.log(names.find(function (name) {
    return name === "zelda";
}));