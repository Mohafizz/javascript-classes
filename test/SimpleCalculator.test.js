var SimpleCalculator = require("../src/SimpleCalculator");

test("0 add(1) should return 1", function() {
  var calculator = new SimpleCalculator();
  expect(calculator.add(1)).toEqual(1);
});

test("instantiated 1 add(1) should return 2", function() {
  var calculator = new SimpleCalculator(1);
  expect(calculator.add(1)).toEqual(2);
});

test("0 subtract(1) should return -1", function() {
  var calculator = new SimpleCalculator();
  expect(calculator.subtract(1)).toEqual(-1);
});

test("instantiated 1 subtract(1) should return 0", function() {
  var calculator = new SimpleCalculator(1);
  expect(calculator.subtract(1)).toEqual(0);
});

test("0 multiply(1) should return 0", function() {
  var calculator = new SimpleCalculator();
  expect(calculator.multiply(1)).toEqual(0);
});

test("instantiated 1 multiply(1) should return 1", function() {
  var calculator = new SimpleCalculator(1);
  expect(calculator.multiply(1)).toEqual(1);
});

test("0 divide(1) should return 0", function() {
  var calculator = new SimpleCalculator();
  expect(calculator.divide(1)).toEqual(0);
});

test("instantiated 1 divide(1) should return 1", function() {
  var calculator = new SimpleCalculator(1);
  expect(calculator.divide(1)).toEqual(1);
});

test("Chaining instantiated 12 divide(2)==6, multiply(6)==36, add(36)==72, subtract(71)== should return 72", function() {
  var calculator = new SimpleCalculator(12);
  expect((calculator.add(calculator.multiply(calculator.divide(2))))).toEqual(72);
});
