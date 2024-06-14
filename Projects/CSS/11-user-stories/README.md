# Construire un formulaire de sondage

## User Stories

1. On doit avoir un titre de page dans un élément `<h1>` avec un `id="title"`

2. On doit avoir une courte explication dans un élément `<p>` avec un i`d="description"`

3. On doit avoir un élément `<form>` avec un `id="survey-form"`

4. Dans l'élément `<form>`, il est requis d'entrer un nom dans un `<input>` avec un `id="name"` et un `type="text"`

5. Dans l'élément `<form>`, il est requis d'entrer un email dans un `<input>` avec un `id="email"`

6. Si on entre un format d'email incorrect, on verra une erreur HTML5 de validation

7. Dans le formulaire, on peut entrer un nombre dans un `<input>` qui a un `id="number"`

8. Si on entre autre chose qu'un nombre dans l'`<input>` number, on verra une erreur HTML5 de validation

9. Si on entre en-dehors dans l'intervalle de l'`<input>` number, qui est défini par les attributs `min` et `max`, on verra une erreur HTML5 de validation

10. Pour les champs `name`, `email` et `number`, on peut voir des éléments `<label>` dans le formulaire qui décrivent le but de chaque champs avec les ids : `id="name-label"`, `id="email-label"` et `id="number-label"`

11. Pour les champs `name`, `email` et `number`, on peut voir un placeholder qui donne une description ou une instruction pour chaque champs

12. Dans l'élément `<form>`, on doit voir un élément `<select>` avec un `id="dropdown"` et au moins deux options pour choisir

13. Dans l'élément `<form>`, on peut sélectionner dans un groupe d'au moins deux boutons radio groupés avec un attribut `name`

14. Dans l'élément `<form>`,on peut sélectionner plusieurs champs dans un série de checkboxes, chacune ayant un attribut `value`

15. Dans l'élément `<form>`, on peut voir un élément `<textarea>` pour des commentaires additionnels

16. Dans l'élément `<form>`, on peut voir un bouton avec un `id="submit"` pour soumettre tous les champs

Remplissez les user stories pour compléter ce projet. Donnez-lui votre propre style.
