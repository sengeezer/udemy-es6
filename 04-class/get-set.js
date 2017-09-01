class Square {
  constructor(width) {
    this.width = width;
  }

  get height() {
    return this.width;
  }

  set height(height) {
    this.width = height;
  }

  get area() {
    return this.width * this.width;
  }
}

let square = new Square(5);
console.log(`area, height: ${square.area}, ${square.height}`);

square.height = 6;
console.log(`area, height: ${square.area}, ${square.height}`);

square.width = 4;
console.log(`area, height: ${square.area}, ${square.height}`);
