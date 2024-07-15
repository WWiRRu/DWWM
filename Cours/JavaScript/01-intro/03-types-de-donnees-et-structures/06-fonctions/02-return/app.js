//* return
//* par défaut, une fonction retourne undefined
//* 1 inch = 2.54cm


const wallheight = 80;

function calculate(value){
// const result = value * 2.54;
// console.log(`La valeur en cm est : ${result} cm`);
// return result;
// raccourci
return value * 2.54;

//! le code ne s'execute pas apres un return (il est ignore)
console.log("hello");
}
const width = calculate(100);
const height = calculate(wallheight);

const dimensions = [width, height];
console.log(dimensions);


