//* Variable - Le plus basique des blocs de construction
//* Variable - Stocke, Accède, Modifie === Valeur
//* Déclare, Opérateur d'assignation, Assigne une valeur


// var
var value = "valeur";
value = "une autre valeur";

// LET
let name = "john";
console.log(name);

let address, zip, country;

// assigne une valeur plus tard
address = "100 rue pablo picasso";
zip = "59220";
country = "France";

// modifie une valeur existante
name = "peter";

console.log(address, zip, country);
console.log(name);

// CONST (constante) - ne peut pas etre réassignée
const LastName = "doe";
//! la réassignation cause une erreur
//* LastName = "smith";

console.log(LastName);

// peut contenir des chiffres, lettres, underscore, $
// doit commencer avec une lettre, $ ou_
//! ne peut pas commencer avec un chiffre
//! pas de mot-clef (ex: let let) 

let_12rando123_$ = "au pif";

// sensible à la casse - fullname different de fullName

//* camel case
let fullName = "au pif";
console.log(fullName);

//* snake case
let full_name = "autre";
console.log(full_name);

//* kebab case (ex: nom-de-fichier)

