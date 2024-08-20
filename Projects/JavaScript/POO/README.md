# Exercices POO

## OOJS 1

Dans cette exercice, nous vous fournissons le début d'une définition pour une classe `Shape`. Il possède trois propriétés : `name`, `sides`, et `sideLength`. Cette classe modélise uniquement des formes dont tous les côtés ont la même longueur, comme un carré ou un triangle équilatéral.

Nous aimerions que vous :

- Ajoutez un constructeur à cette classe. Le constructeur prend des arguments pour les propriétés `name`, `side`, `sideLength` et les initialise.

- Ajoutez une nouvelle méthode `calcPerimeter()` à la classe, qui calcule son périmètre et affiche le résultat dans la console.

- Créez une nouvelle instance de la classe `Shape` appelée `square`. Donnez-lui un nom de `carré`, `4` côtés et une `sideLength` de `5`.

- Appelez votre méthode `calcPerimeter()` sur l'instance pour voir si elle affiche le résultat du calcul dans la console du navigateur comme prévu.

- Créez une nouvelle instance de `Shape` appelée `triangle`, avec un nom de `triangle`, `3` côtés et une `sideLength` de `3`.

- Appelez `triangle.calcPerimeter()` pour vérifier que cela fonctionne correctement.

## OOJS 2

Ensuite, nous aimerions que vous créiez une classe `Square` qui hérite de `Shape` et ajoute une méthode `calcArea()` qui calcule l'aire du carré. Configurez également le constructeur de sorte que la propriété `name` des instances d'objet `Square` soit automatiquement définie sur `square` et que la propriété `sides` soit automatiquement définie sur `4`. Lors de l'appel du constructeur, vous devez donc simplement fournir la propriété `sideLength`.

Créez une instance de la classe `Square` appelée `square` avec les valeurs de propriété appropriées et appelez ses méthodes `calcPerimeter()` et `calcArea()` pour montrer qu'elle fonctionne correctement.
