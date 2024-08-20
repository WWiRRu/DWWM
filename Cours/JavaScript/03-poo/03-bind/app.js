//* bind - s'assigne, s'utilise plus tard, 1er argument - this, 2ème argument - liste d'items
//* "bind" retourne une nouvelle fonction que l'on peut invoquer plus tard

const john = {
  name: "john",
  age: 24,
};

const susan = {
  name: "susan",
  age: 21,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `Bonjour, je suis ${this.name}, j'ai ${this.age} ans et j'habite à ${city}, ${country}`
  );
}
