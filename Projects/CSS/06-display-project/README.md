# PROJET DiSPLAY PROPERTY

## Setup

- Créer un dossier (`06-display-project`)
- Créer un fichier `index.html` (structure générale - emmet !)
- Créer un fichier CSS (ex: main, styles, etc...)
- Lier le CSS dans le HTML (dans élément è )

## HTML (strucutre)

- Créer une `<div>` avec la classe `"section"`
    - Dedans, placer :
        - Une `<div>` avec la classe `"section-title"`
            - Dedans, placer :
            - Un `<h1>`avec le texte "Tire de la section"
            - Une `<div>` avec la classe `"title-underline"`
        - Une `<div>` avec la classe `"section-center"`
            - Dedans, placer :
            - Un `<p>` avec du lorem

## CSS (styles)

- Faire un reset (margin, padding, box-sizing)
- Sélectionner le `body`, ajouter les system fonts, background (`#f1f5f9`), line-height
- Sélectionner `.section`, ajouter padding, background (`#fff`)
- Sélectionner `.section-title`, ajouter text-align, text-transform
- Sélectionner `.title-underline`, ajouter height, width, background, placer au centre et ajouter une marge en-dessous
  pour "souligner" le titre
- Sélectionner `.section-center`, ajouter width (`90vw`), max-width (`600px`) et placer au centre

## Questions

- Pourquoi `.section-title` dans une div à part ?

  Il n'y a pas de modèles/composants en HTML donc il faut copier/coller le code. C'est plus pratique de réutiliser
  une `<div>`

- Pourquoi `90vw` et `600px` ?

  C'est une histore de préférence. Il n'y a pas de règle mais c'est une approche commune d'avoir une max-width

- Le but de `.section-center` ?

  Avoir une section qui fait 90% de largeur (maxium 600px) et centrer son contenu
