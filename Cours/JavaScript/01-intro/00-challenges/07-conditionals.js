let person1 = {
name:"john",
age:20,
status:"résident",
};

let person2 = {
name:"doe",
age:25,
status:"touriste",
};

const auto = (person) => {
if (person.age >= 18 && person.status === "résident") {
    console.log("accepter");
}
else{
    console.log("refuser");
}
}

auto(person1);
auto(person2);


// exo 1
const temp = 32;
if (temp > 30) {
    console.log("il fait chaud !");
}


// exo 2


if (temp > 30) {
    console.log("il fait chaud !");
}
else{
    console.log("il fait froid !");
}

// exo 3

if (temp >30) {
    console.log("il fait chaud !");
}
else if (temp >= 20){
console.log("il fait bon !");
}
else{
    console.log("il fait froid !");
}

// exo 4

const heure = 10;
const jour = "lundi";

if ((jour === "lundi" || "mardi" || "mercredi" || "jeudi" || "vendredi") && heure >= 9 && heure <= 17) {
     console.log("c'est l'heure de travailler");
} else {
    console.log("profitez de votre temps libre");
}