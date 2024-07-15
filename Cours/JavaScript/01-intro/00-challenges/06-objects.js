let car = {
    make: "peugeot",
    model: 607,
    year: 2005,
    color: ["noir", "bleu", "rouge"],
    hybrid: false,
    drive:() => ("bonne conduite"),
    stop:() => ("conduiser avec prudence"),
};

let info = (voiture) => (`je roule en ${voiture}`)
console.log(info(car.make),(car.color[0]));
car.drive();
car.stop();