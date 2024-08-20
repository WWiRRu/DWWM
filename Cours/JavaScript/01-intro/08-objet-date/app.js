//* Objet Data
const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
];

const days = [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
];
// date d'aujourd'hui
let date = new Date();
// date d'une date précise
date = new Date('1/12/2021');
date = new Date(2025, 5, 8, 17, 0, 0); // 8 juin 2025 à 17h
console.log(date);

// temps en millisecondes depuis le 1er janvier 1970
let time = date.getTime();
console.log(time);

const month = date.getMonth();
console.log(month); // 5
console.log(months[month]); // juin

const day = date.getDay();
console.log(day); // 1
console.log(days[day]); // mardi

console.log(date.getDate()); // 8

console.log(date.getFullYear()); // 2025

//* toLocaleDateString retourne la date selon la convention locale
console.log(date.toLocaleDateString("fr-FR", {
    //year: 'numeric',
    //month: 'long',
    //day: 'numeric',
    dateStyle: "medium"
})); // 8/6/2025

//* intl
console.log(new Intl.DateTimeFormat("fr-FR").format(date)); // 8/6/2025