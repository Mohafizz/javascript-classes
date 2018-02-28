class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return (Math.PI * this.radius ** 2).toFixed(1);
  }

  perimeter() {
    return (2 * Math.PI * this.radius).toFixed(1);
  }
}

module.exports = Circle;
