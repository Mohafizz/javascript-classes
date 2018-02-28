var Rectangle = require("../src/Rectangle");

test("Rectangle.area(2,4) should return 8", function() {
  var r = new Rectangle(2, 4);
  expect(r.area()).toEqual(8);
});

test("Rectangle.area(5,10) should return 50", function() {
  var r = new Rectangle(5, 10);
  expect(r.area()).toEqual(50);
});

test("Rectangle.perimeter(2,4) should return 12", function() {
  var r = new Rectangle(2, 4);
  expect(r.perimeter()).toEqual(12);
});

test("Rectangle.perimeter(5,10) should return 30", function() {
  var r = new Rectangle(5, 10);
  expect(r.perimeter()).toEqual(30);
});
