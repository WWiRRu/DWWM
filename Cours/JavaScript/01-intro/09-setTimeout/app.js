//* setTimeout - exécute la fonction après un temps spécifique

//* - passe la référence à la fonction
//* - durée en ms (1000ms = 1 seconde)
//* - par défaut 0, on verra plus en détail dans la partie async/await
//* - retourne un identifiant unique
//* - clearTimeout pour annuler
//* - sur l'objet window
function sayHello(name){
    console.log("hello " + name);
}
const scndId = setTimeout(function(){
    sayHello("Peter")
},1000)
const firstId = setTimeout(sayHello,0, "John");
console.log(scndId)
console.log(firstId)
clearTimeout(firstId)
