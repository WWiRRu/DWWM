//  operateurs logiques
// (|| - ou), (&&, and)
const name = "john";
const age = 24;

//* on a besoin que l'une ou l'autre valeur soit vraie
// if (name === "bob" || age === 24) {
//     console.log("salut cher utilisateur");
// }
// else {
//     console.log("mauvaise valeur");
// }


//* il faut que les 2 valeurs soit vraies
if (name === "bob" && age === 24) {
    console.log("salut cher utilisateur");
}
else {
    console.log("mauvaise valeur");
}