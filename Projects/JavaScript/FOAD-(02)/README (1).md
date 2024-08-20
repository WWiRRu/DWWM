# Exercice Array.prototype

## Partie 1

`map` est une fonction du prototype JavaScipt `Array` à laquelle on peut fournir une fonction de rappel, qui sera appelée pour chaque élément du tableau - la valeur de retour sera un nouveau tableau contenant les éléments originaux après qu'ils aient été passés par le rappel.

Par exemple :

```js
function double(x) {
  return x * 2;
}

const myArray = [1, 2, 3, 4, 5];
const mappedArray = myArray.map(double);
console.log(mappedArray); // [2, 4, 6, 8, 10];
```

Vous devez implémenter votre propre version de `map`, à laquelle on peut passer un tableau et une fonction callback, et qui renverra un nouveau tableau avec le callback exécuté sur chaque élément. Par exemple :

```js
function map(array, callback) {
  // Ajouter votre code ici
}

const mappedArray = map([1, 2, 3, 4, 5], (x) => x * 2);
console.log(mappedArray); // [2, 4, 6, 8, 10];
```

Dans le cadre de votre mise en œuvre, vous devrez accéder à chaque élément du tableau transmis. Cela peut être réalisé avec une simple boucle `for` ou `while`.

Veillez à ne pas modifier le tableau original qui a été transmis à la fonction `map`.

## Partie 2

À partir de votre fonction map, transmettez l'`index` actuel à la fonction callback. Par exemple, le code suivant devrait fonctionner :

```js
map(myArray, (x, i) => {
  console.log(`L'élément ${x} est à l'index ${i}`);
  return x;
});
```

implémenter d'autres itérateurs de tableaux JavaScript : `forEach`, `filter`, `every`, `find`, `some`
