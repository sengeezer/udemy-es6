class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

let rectangle = new Rectangle('red', 5, 8);

console.log(rectangle.getArea());
console.log(rectangle.getColor());

// since all objects inherit from Object, this is valid:
console.log(rectangle.toString());
