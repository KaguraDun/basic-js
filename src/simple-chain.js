const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length();
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || !Number.isInteger(position) || position > this.chain.length || position < 0) {
      this.chain = [];
      throw new Error("Error");
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finalChain = this.chain.join("~~");
    this.chain = [];
    return finalChain;
  }
};

module.exports = chainMaker;
