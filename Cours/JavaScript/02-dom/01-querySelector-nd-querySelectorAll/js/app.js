//* querySelector("any css"); - sélectionne un élément
//* querySelectorAll("any css"); - sélectionne plusieurs éléments et peut utiliser les méthodes pour un tableau

const result = document.querySelector("#result");
result.style.backgroundColor = "blue";
const list = document.querySelectorAll(".special");
list.forEach((item) => {
    item.style.color = "yellow";
});
console.log(list);