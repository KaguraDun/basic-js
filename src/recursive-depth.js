const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.counter = 1;
    this.maxCounter = 1;
    this.lastElement = undefined;
    this.answer;
  }

  calculateDepth(arr) {
    if (this.lastElement == undefined) this.lastElement = arr[arr.length - 1];

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.counter++;
        this.calculateDepth(arr[i]);
      }
    }
    if (this.counter > this.maxCounter) {
      this.maxCounter = this.counter;
    }
    this.counter = 1;
 
    if (arr == this.lastElement) {
      this.answer = this.maxCounter;
      this.maxCounter = 1;
      this.lastElement = undefined;
      return this.answer;
    }
    return this.answer || this.maxCounter;
  }
};
