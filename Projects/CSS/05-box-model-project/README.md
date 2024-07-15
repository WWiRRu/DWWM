# Projet modèle de boîte CSS

- Gris clair `#f1f5f9`
- Blanc `#fff`
- Rose clair `#ffe8f1`
- Rose foncé `#ff69a6`
- Bleu clair `#ecf4ff`
- Blue foncé `#68a3ff`

## Setup

- Créer un dossier (`05-box-model-project`)
- Créer un fichier `index.html` (structure générale - emmet `!`)
- Créer un fichier CSS (ex: main.css, style.css, etc...)
- Lier le CSS dans le HTML (dans l'élément `<head>`)

## HTML (structure)

- Créer une `<div>` avec les classes `card card-1`
- Placer dedans :
    - Une `<div>` avec la classe `icon`
    - Un titre `<h2>` "Première carte" avec la class `title`
    - Un paragraphe `<p>` avec la classe `text` et du lorem10
    - Un bouton `<button>` "Se connecter" avec les classes `btn btn-pink`
- Copier/coller 1 fois
- Changer la classe `card-1` de la seconde `<div>` en `card-2` et le titre
- Changer la classe `btn-pink` du second `<button>` en `btn-blue`

## CSS (styles)

- Sélectionner `body` et ajouter la police du système et background (`#f1f5f9`)
- Sélectionner `.card`, aligner le texte au centre, ajouter background (`#fff`), padding, max-width, margin,
  border-radius et border
- Sélectionner `.card-1`, ajouter la couleur de bordure (`#ff69a6`)
- Sélectionner `.icon`, ajouter width, height, border-radius (faire un rond)
- Ajouter background (`#ff69a6`), seulement au premier icône
- Sélectionner `.title`, capitaliser le texte, ajouter du letter spacing
- Sélectionner `.text`, changer la hauteur de ligne et ajouter color (`#64748b`)
- Sélectionner `.btn`, capitaliser le texte, rendre les bordures transparentes et ajouter border radius, padding,
  letter-spacing
- Sélectionner `.btn-pink`, ajouter background (`#ffe8f1`) et color (`#ff69a6`)
- Sélectionner `.btn-blue`, ajouter background (`#ecf4ff`) et color (`#68a3ff`)
- Changer le background de l'icône dans `.card-2` (`#68a3ff`)
- Changer la couleur de la bordure de `.card-2` (`#68a3ff`)
