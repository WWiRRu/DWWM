# PROJET BACKGROUND IMAGE

## Setup

- Créer un dossier (`07-position-project`)
- Créer un fichier `index.html` (structure générale - emmet `!`)
- Créer un fichier CSS (ex: main.css, style.css, etc...)
- Lier le CSS dans le HTML (dans l'élément `<head>`)

## HTML (strucutre)

- Une `<div>` avec une class `"nav"`
  - Une `<div>` avec une classe "`nav-center"`
    - Une `<span>` avec la classe `"nav-title"` et un texte qui fera office de logo (ex: Kofi)
- Une `<div>` avec la classe `"hero"`
  - Une `<div>` avec la classe `"hero-center"`
    - Un `<h1>` avec le texte "Marché du café"
    - Un `<p>` avec du lorem20
    - Un bouton `<button>` avec la classe `"hero-btn"` et le texte "Explorer"
- Ajouter une `<div>` avec une classe `"temp"` à la fin du document HTML

## CSS (styles)

- reset (margin, padding, box-sizing)
- `body` = system fonts and line-height
- `.nav` = height, background (#222), padding
- `.nav-title` = font-size, text-transform, font-weight, color (#fff), letter-spacing
- `.nav-center` = width, max-width, margin (placer au center)
- `.hero` = background, min-height (soustraire la hauteur de la nav)
- `.hero-center` (doit avoir la même largeur que nav-center) = width, max-width, margin, padding, color (#fff)
- Sélectionner le `<h1>` à l'intérieur de `.hero-center` = letter-spacing, margin-bottom
- Sélectionner `<p>` à l'intérieur .hero-center = max-width, margin-bottom
- `.hero-btn` = background, border, padding, text-transform, color (#fff), letter-spacing

- Définir `min-height: 100vh` pour`.temp` afin qu'il y ait du scolling
- Définir `.nav` en position `sticky` (position, top 0, z-index 1)
- Ajouter la position `relative` à `.hero`
- Définir `.hero-center` en position `absolute` et le placer au centre
