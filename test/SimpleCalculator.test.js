var SimpleCalculator = require("../src/SimpleCalculator");

test("0 add(1) should return 1", function() {
  var calculator = new SimpleCalculator();
  expect(calculator.add(1).value).toEqual(1);
});

test("instantiated 1 add(1) should return 2", function() {
  var calculator = new SimpleCalculator(1);
  expect(calculator.add(1).value).toEqual(2);
});

test("0 subtract(1) should return -1", function() {
  var calculator = new SimpleCalculator();
  expect(calculator.subtract(1).value).toEqual(-1);
});

test("instantiated 1 subtract(1) should return 0", function() {
  var calculator = new SimpleCalculator(1);
  expect(calculator.subtract(1).value).toEqual(0);
});

test("0 multiply(1) should return 0", function() {
  var calculator = new SimpleCalculator();
  expect(calculator.multiply(1).value).toEqual(0);
});

test("instantiated 1 multiply(1) should return 1", function() {
  var calculator = new SimpleCalculator(1);
  expect(calculator.multiply(1).value).toEqual(1);
});

test("0 divide(1) should return 0", function() {
  var calculator = new SimpleCalculator();
  expect(calculator.divide(1).value).toEqual(0);
});

test("instantiated 1 divide(1) should return 1", function() {
  var calculator = new SimpleCalculator(1);
  expect(calculator.divide(1).value).toEqual(1);
});

test("Chaining instantiated 1 with calculator.add(12).multiply(2).divide(2) should return 2", function() {
  var calculator = new SimpleCalculator(1);
  expect(
    calculator
      .add(1)
      .multiply(2)
      .divide(2).value
  ).toEqual(2);
});
