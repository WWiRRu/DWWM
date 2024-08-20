const element = document.querySelector("#result");
const fruitsContainer = document.querySelector("#fruit-container")

const ul = document.createElement("ul")
ul.innerHTML =
    "<li>Item#1</li>" +
    "<li>Item#2</li>" +
    "<li>Item#3</li>";
element.append(ul)



const fruits = ["fraise", "framboise", "myrtille"]
const fruitsList = document.createElement('ol');
const newFruits = fruits.map(function (fruit){
    return `<li>${fruit}</li>`
})
fruitsList.innerHTML = newFruits.join("")
fruitsContainer.append(fruitsList);

fruitsContainer.remove();