# PROJET LES UNITÉS CSS

## Setup

- Créer un dossier (`03-units-project`)
- Créer un fichier `index.html` (structure générale - emmet !)
- Créer un fichier CSS (ex: main, styles, etc...)
- Lier le CSS dans le HTML (dans élément `<head>`)

## HTML (structure)

- Créer une `<div>` avec l'id `"navbar"` et placer dedans :
    - Une `<span>` avec la classe `"logo"` et le texte `"LOGO"`
- Juste après la première `<div>`, faire une autre `<div>` avec la classe `"hero"` et placer dedans :
    - Une `<span>` avec le texte `"NOUS SOMMES LES MEILLEURS"`
    - Un `<h1>` avec le texte `"Nous croyons en la créativité"`
    - Un `<p>` avec du lorem10
    - Un bouton `button` avec la class `"hero-btn"` et le texte `"En savoir plus"`

## CSS (styles)

- Définir les marges à 0 pour tous les élements (\* {margin: 0})
- Pour la navbar - Définir la height et ajouter un background-color
- Pour le logo - Définir la font-size et ajouter une color
- Pour le hero - Définir color, background, et min-height avec calc() (soustraire la hauteur de la navbar de toute la
  hauteur de l'écran)
- Pour le bouton - Ajouter background-color et color
