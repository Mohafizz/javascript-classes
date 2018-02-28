module.exports = Rectangle;

class Rectangle {
  constructor(breadth, length) {
    this.breadth = breadth;
    this.length = length;
  }

  area() {
    return this.length * this.breadth;
  }
  perimeter() {
    return 2 * this.length + 2 * this.breadth;
  }
}

var a = new Rectangle(2, 4);
a.area();
a.perimeter();
console.log("a.perimeter();: ", a.perimeter());
console.log("a.area();: ", a.area());
