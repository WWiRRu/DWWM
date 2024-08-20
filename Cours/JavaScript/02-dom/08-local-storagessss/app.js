/*
 * Copyright (c) 2024. Made by WWiRRu
 */
const friends = ["john", "peter", "bob"];

//change le tableau en chaine de caractères
localStorage.setItem("friends", JSON.stringify(friends))

//change la chaine de caractères en tableau
const values = JSON.parse(localStorage.getItem("friends"))

console.log(values)
console.log(values[0])
console.log(values[1])
console.log(values[2])

//!démo
let fruits = null

if(localStorage.getItem("fruits")){
    fruits = JSON.parse(localStorage.fruits);
}else{
    fruits = ["pomme", "fraise", "framboise", "myrtille", "cassis"];
    localStorage.setItem("fruits", JSON.stringify(fruits))
}