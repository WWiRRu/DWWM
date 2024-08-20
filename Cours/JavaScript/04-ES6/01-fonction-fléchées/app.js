//* Fonctions fléchées
//* pas de nom, toujours une expression qu'on assigne à une variable
//* pas de mot-clef "function"
//* retour implicite
//* "this"

const bob = {
  firstName: "bob",
  sayName() {
    setTimeout(() => {
      console.log(self);
    }, 1000);
    console.log(this);
    console.log("Salut mon nom est ".this.firstName);
  },
};
bob.sayName;

const sayHello = (name) => {
  console.log(`Bonjour ${name}`);
};
sayHello;
