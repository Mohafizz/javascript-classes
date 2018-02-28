var Circle = require("../src/Circle");

test("Circle.area(1) should return 3.1", function() {
  var r = new Circle(1);
  expect(r.area()).toEqual("3.1");
});

test("Circle.area(2) should return 12.6", function() {
  var r = new Circle(2);
  expect(r.area()).toEqual("12.6");
});

test("Circle.area(3) should return 28.3", function() {
  var r = new Circle(3);
  expect(r.area()).toEqual("28.3");
});

test("Circle.perimeter(1) should return 6.3", function() {
  var r = new Circle(1);
  expect(r.perimeter()).toEqual("6.3");
});

test("Circle.perimeter(2) should return 12.6", function() {
  var r = new Circle(2);
  expect(r.perimeter()).toEqual("12.6");
});

test("Circle.perimeter(3) should return 18.8", function() {
  var r = new Circle(3);
  expect(r.perimeter()).toEqual("18.8");
});
