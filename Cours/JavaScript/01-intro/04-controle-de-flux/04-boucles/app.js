// les boucles
// repetent un bloc de code tant que la condition est vraie

//* boucle tant que (while)
let amount = 10;

while (amount > 0) {
    console.log(`J'ai ${amount} euros et je vais au magasin`);
    //! ne pas oublier la decrementation sinon on aura un loop infini car la condition sera toujours vraie
    amount--;
}

//* boucle fire tant que (do while)
//* execute le bloc de code d'abord, puis verifie la condition

let money = 0;
money = 12;

do {
    console.log(`tu as ${money} euros`);
    //! il faut un echapatoire
    money++;
} while (money < 10);

//* boucle pour (for)
for (let i = 0; i < 10; i++) {
    console.log(`le nombre est : ${i}`);

}
