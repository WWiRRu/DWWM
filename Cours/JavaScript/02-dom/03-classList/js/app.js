const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');

//ajoute ou enlève une classe
first.classList.remove('text');
second.classList.add('colors');

//raccourci
second.classList.remove('text', "colors");
second.classList.add('colors', "text");



// vérifie si un élément possède une classe
const result = second.classList.contains('colors');
if (result) {
    console.log('contains');
}else{
    console.log('not contains');
}
