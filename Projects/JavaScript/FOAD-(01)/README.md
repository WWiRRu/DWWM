# TP : Jeu Pierre-Papier-Ciseaux

**Rappel** : Commitez tôt et souvent !

## Étape 1 : Configuration de la structure du projet

1. Créez un nouveau dépôt Git pour votre projet.
2. Créez un document HTML vierge avec une balise `<script>`.
3. Vérifiez si JavaScript est correctement lié :
    - Écrivez `console.log("Hello World")` en JavaScript.
    - Vérifiez que "Hello World" est affiché dans la console du navigateur une fois votre page ouverte.
    - Il est recommandé de lier un fichier JavaScript externe dans cette balise `<script>`. Utiliser un fichier
      JavaScript externe garde votre fichier HTML propre et organisé.

Vous n'avez pas besoin d'écrire de code supplémentaire dans le fichier HTML. Ce jeu se joue entièrement via la console.

## Étape 2 : Écrire la logique pour obtenir le choix de l'ordinateur

Votre jeu sera joué contre l'ordinateur. Vous allez écrire une fonction qui renvoie aléatoirement "pierre", "papier"
ou "ciseaux".

1. Créez une nouvelle fonction nommée `getComputerChoice`.
2. Écrivez le code pour que `getComputerChoice` renvoie aléatoirement l'une des valeurs de chaîne suivantes : "
   pierre", "papier" ou "ciseaux".
    - Astuce : La méthode `Math.random` retourne un nombre aléatoire compris entre 0 et 1. Réfléchissez à la façon dont
      vous pouvez utiliser cela pour renvoyer conditionnellement l'un des choix multiples.
3. Testez que votre fonction renvoie ce que vous attendez en utilisant `console.log` ou les outils de développement du
   navigateur avant de passer à l'étape suivante.

## Étape 3 : Écrire la logique pour obtenir le choix de l'humain

Votre jeu sera joué par un joueur humain. Vous allez écrire une fonction qui prend le choix de l'utilisateur et le
renvoie.

1. Créez une nouvelle fonction nommée `getHumanChoice`.
2. Écrivez le code pour que `getHumanChoice` renvoie l'un des choix valides en fonction de ce que l'utilisateur entre.
    - Astuce : Utilisez la méthode `prompt` pour obtenir l'entrée de l'utilisateur.
3. Testez ce que votre fonction renvoie en utilisant `console.log`.

## Étape 4 : Déclarer les variables de score des joueurs

Votre jeu gardera une trace des scores des joueurs. Vous allez écrire des variables pour suivre les scores des joueurs.

1. Créez deux nouvelles variables nommées `humanScore` et `computerScore` dans la portée globale.
2. Initialisez ces variables avec la valeur de 0.

## Étape 5 : Écrire la logique pour jouer un seul round

Votre jeu se jouera round par round. Vous allez écrire une fonction qui prend les choix des joueurs humain et ordinateur
comme arguments, joue un seul round, incrémente le score du gagnant du round et affiche une annonce du gagnant.

1. Créez une nouvelle fonction nommée `playRound`.
2. Définissez deux paramètres pour `playRound` : `humanChoice` et `computerChoice`. Utilisez ces deux paramètres pour
   prendre les choix des joueurs humain et ordinateur comme arguments.
3. Rendez le paramètre `humanChoice` de votre fonction insensible à la casse afin que les joueurs puissent entrer "
   pierre", "PIERRE", "Pierre", ou d'autres variations.
4. Écrivez le code pour votre fonction `playRound` afin d'afficher dans la console une valeur de chaîne représentant le
   gagnant du round, par exemple : "Vous perdez ! Papier bat Pierre".
5. Incrémentez la variable `humanScore` ou `computerScore` en fonction du gagnant du round.

Exemple de code :

```javascript
function playRound(humanChoice, computerChoice) {
  // votre code ici !
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
```

## Étape 6 : Écrire la logique pour jouer toute la partie

Votre jeu se jouera en 5 rounds. Vous allez écrire une fonction nommée `playGame` qui appelle `playRound` pour jouer 5
rounds, garde une trace des scores et déclare un gagnant à la fin.

1. Créez une nouvelle fonction nommée `playGame`.
2. Déplacez votre fonction `playRound` et vos variables de score pour qu'elles soient déclarées à l'intérieur de la
   nouvelle fonction `playGame`.
3. Jouez 5 rounds en appelant `playRound` 5 fois.
    - Astuce : Lorsque vous assignez un appel de fonction à une variable, la valeur de retour de cette fonction est
      assignée à la variable. Accéder à la variable par la suite ne rappellera pas la fonction. Vous devez rappeler les
      fonctions de choix pour obtenir de nouveaux choix à chaque round.
4. Révisez vos fonctions précédentes ou créez d'autres fonctions d'assistance si nécessaire. En particulier, vous
   voudrez peut-être changer les valeurs de retour pour quelque chose de plus utile.
