class SimpleCalculator {
  constructor(value = 0) {
    this.value = value;
  }
  add(addValue) {
    return (this.value += addValue);
  }
  subtract(subtractValue) {
    return (this.value -= subtractValue);
  }
  multiply(multiplyValue) {
    return (this.value *= multiplyValue);
  }
  divide(divideValue) {
    return (this.value /= divideValue);
  }
}
module.exports = SimpleCalculator;