var Rectangle = require("./Rectangle");

test.only("Rectangle.getArea(10,20) should return 200", function() {
  var r = new Rectangle(10, 20);
  expect(r.getArea()).toEqual(200);
});
