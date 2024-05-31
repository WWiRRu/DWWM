# Projet : Lettre

Pour ce projet, votre tâche consiste à baliser une lettre destinée à être hébergée dans l'intranet d'une université. La lettre est une réponse d'une chercheuse en poste à une doctorante éventuelle à propos de sa candidature pour travailler à l'université.

## Lien

[Démo](https://dwwm-letter.netlify.app/)

## sémantique de blocs/structures

- Il convient que vous donniez à la totalité du document une structure appropriée comprenant le type de document et les éléments `<html>`, `<head>` et `<body>`.

- La lettre doit être marquée avec une structure de paragraphes et d'en‑têtes, en prenant en considération - les points suivants : un en‑tête de haut niveau (la ligne "Objet : ") et trois en-têtes de deuxième niveau.

- Les dates de début des semestres, les sujets d'étude et les danses exotiques seront balisées avec [les types de listes](https://developer.mozilla.org/fr/docs/Learn/CSS/Styling_text/Styling_lists) appropriés.

- Mettez les deux adresses dans [l'élément `<address>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/address). En plus, chaque ligne des adresses doit être mise sur une nouvelle ligne sans que ce soit un nouveau paragraphe.

## Sémantique en ligne

- Les noms de l'expéditeur et du destinataire (et "Tél" et "E‑mail") doivent être marqués comme étant de grande importance.

- Les quatre dates du document doivent être indiquées dans des éléments appropriés contenant [des dates lisibles par la machine](https://developer.mozilla.org/fr/docs/Web/HTML/Element/time).

- La première adresse et la première date de la lettre sont regroupés dans un élément `<header>` qui doit recevoir une valeur d'attribut de classe "sender-column" ; le CSS que vous ajouterez plus tard les alignera à droite, comme c'est le cas dans une mise en page de lettre classique.

- Les quatre [acronymes/abréviations](https://developer.mozilla.org/fr/docs/Web/HTML/Element/abbr) dans le corps du texte de la lettre seront marqués pour permettre leur développement.

- Les six indices/exposants seront balisés de manière appropriée.

- Les symboles « degré », « plus grand que » , « multiplier » seront marqués avec les références d'entités voulues.

- Essayez de marquer au moins deux mots importants en gras/italique.

- Deux emplacements nécessitent un hyperlien ; ajoutez les liens appropriés avec des intitulés. Pour l'emplacement sur lequel le lien pointe, utilisez simplement `https://www.goggle.fr`.

- La citation et la devise de l'université doivent être marquées avec les éléments appropriés.

## Dans l'en‑tête du document

- L'auteur de la lettre sera indiqué dans une balise meta adéquate.
- Les CSS fournies seront incorporées avec le marquage approprié.

## Conseils et astuces

Utilisez [le validateur HTML W3C](https://validator.w3.org/) pour valider votre HTML
