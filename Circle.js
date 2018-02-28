module.exports = Circle;

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return (Math.PI * this.radius ** 2).toPrecision(3);
  }

  perimeter() {
    return (2 * Math.PI * this.radius).toPrecision(3);
  }
}

var c = new Circle(1);
c.area();
c.perimeter();
console.log("c.perimeter();: ", c.perimeter());
console.log("c.area();: ", c.area());
