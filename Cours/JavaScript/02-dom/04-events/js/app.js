//* events
// tous nos changements fait en JS sont instantannées mais pour que notre app soit plus interactive il faut qu'elle réponde à des events
// ex: clic, scroll, soumi

//* sélectionner l'élément
//* addEventListener() puis préciser quel event et ce qu'on veut faire
const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
let toggle = true;
btn.addEventListener('click', function(e ) {
    // cible l'élément qui a déclenché l'événement (e.currentTarget)

    if(e.currentTarget.className === "btn"){
        console.log("test")
    }
    //heading.classList.contains("blue") ? heading.classList.remove("blue") : heading.classList.add("blue");
    //raccourci
    heading.classList.toggle("blue");
    toggle = !toggle;
    toggle ? btn.textContent = "Dark mode" : btn.textContent = "Light mode";
    toggle ? btn.style.color = "black" : btn.style.color = "white";

});