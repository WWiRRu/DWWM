// Les fonctions - déclare, invoque/appelle

//* console.log("hello bob ");

//* console.log("hello john ");

//* console.log("hello susy ");

//* console.log("hello bob ");

//* console.log("hello john ");

//* console.log("hello susy ");

//* console.log("hello bob ");

//* console.log("hello john ");

//* console.log("hello susy ");


// declaration de fonctions
function hello() {
    // la logique ici
    console.log("hello bob ");
    console.log("hello john ");
    console.log("hello susy ");
}

// appelle/invoque/execute la fonction
hello();
hello();
hello();

// parametres/arguments
//  ce sont des espaces reserves (placeholders), des variables locales
function greet(name) {
console.log(`hello ${name}`);
}
//! "name" est undefined
greet();

greet("bob");
greet("john");
greet("susy");

//! attention a la logique
greet(4);

//* on peut passer des variables
const peter = "peter";
const anna = "anna"

greet(peter);

//* on peut avoir plusieurs parametre
function sayHello(name, second){
    console.log(second);
    console.log(`hello ${name}`);
}

sayHello(anna, "bob");