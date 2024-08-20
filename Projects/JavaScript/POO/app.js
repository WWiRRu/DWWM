import Square from "./Square.js";
import Triangle from "./Triangle.js";

const triangle = new Triangle(2);
const square = new Square(5);

console.log(triangle.calcPerimeter());
console.log(square.calcPerimeter());
console.log(square.calcArea());
