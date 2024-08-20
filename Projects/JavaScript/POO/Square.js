import Shape from "./Shape.js";

export default class Square extends Shape {
  constructor(sideLength) {
    super("Carré", 4, sideLength);
    this.sideLength = sideLength;
    this.side = 4;
  }
  calcArea() {
    return this.sideLength ** 2;
  }
}
