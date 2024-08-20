import Shape from "./Shape.js";

export default class Triangle extends Shape {
  constructor(sideLength) {
    super("Triangle", 3, sideLength);
    this.sideLength = sideLength;
    this.side = 3;
  }
}
