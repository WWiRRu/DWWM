//* setInterval - exécute la fonction répétitivement à un interval de temps spécifique

//* - passe la référence à la fonction
//* - durée en ms (1000ms = 1 seconde)
//* - par défaut 0, on verra plus en détail dans la partie async/await
//* - retourne un identifiant unique
//* - clearInterval pour annuler
function sayHello(name){
    console.log("hello " + name);
}
const scndId = setInterval(function(){
    sayHello("Peter")
},1000)
const firstId = setInterval(sayHello,0, "John");
console.log(scndId)
console.log(firstId)
clearInterval(firstId)
