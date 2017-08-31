function Shape(color) {
  this.color = color;
}

Shape.prototype.getColor = function () {
  return this.color;
};

function Rectangle(color, width, height) {
  Shape.call(this, color);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

let rectangle = new Rectangle('red', 5, 8);

console.log(rectangle.getArea());
console.log(rectangle.getColor());

// since all objects inherit from Object, this is valid:
console.log(rectangle.toString());
