class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} fait du bruit`);
  }
}

const bird = new Animal("Oiseau");
bird.speak();

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} aboie`);
  }
}
const dog = new Dog("Beethoven");
dog.speak();
