//  tableaux - [], commence à l'index 0

const friend1 = "john";
const friend2 = "peter";
const friend3 = "bob";
const friend4 = "susy";

const friends = ["john", "peter", "bob", "susy", 42, null];
console.log(friends);

//* affiche le deuxieme elements
console.log(friends[1]);

//* assigner la valeur d'un elements 
const bestFriend = friends[2];
console.log(bestFriend);

//* reassigner la valeur d'un element
friends[4] = "anna";
console.log(friends)
console.log(friends[4]);;

//* ajoute un element
friends[6] = "jane";
console.log(friends);