/*
 * Copyright (c) 2024. Made by WWiRRu
 */
//Local storage, conserve les données dans le navigateur
//stocke dans le localstorage
localStorage.setItem('name', "john");
//si on utilise la même clef, ça va l'override
localStorage.setItem('name', "peter")

//récupére la valeur "key"
const name = localStorage.getItem("name");

//supprime une clef
localStorage.removeItem("name");

const anotherName = localStorage.getItem("name");
console.log(anotherName)

//vide le localstorage
localStorage.clear()