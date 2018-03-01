class SimpleCalculator {
  constructor(value = 0) {
    this.value = value;
  }
  add(addValue) {
    this.value += addValue;
    return this;
  }
  subtract(subtractValue) {
    this.value -= subtractValue
    return this;
  }
  multiply(multiplyValue) {
    this.value *= multiplyValue
    return this;
  }
  divide(divideValue) {
    this.value /= divideValue;
    return this;
  }
}
module.exports = SimpleCalculator;
