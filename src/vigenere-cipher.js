const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isReverse) {
    this.machineType = isReverse == undefined ? (isReverse = true) : isReverse;
    this.alphabetCharCount = 26;
    this.alphabet = this.createAlphabet();
  }

  createAlphabet() {
    let charIndexStart = 97;
    let alphabet = [];

    for (let i = 0; i < this.alphabetCharCount; i++) {
      alphabet.push(String.fromCharCode(charIndexStart + i));
    }

    return alphabet;
  }

  encrypt(str, key) {
    str = str.toLowerCase();
    key = key.toLowerCase();
    let encryptedStr = "";
    let keyIndex = 0;

    for (let i = 0; i < str.length; i++) {
      if (this.alphabet.indexOf(str[i]) !== -1) {
        if (keyIndex > key.length - 1) keyIndex = 0;

        let indexSum =
          this.alphabet.indexOf(str[i]) + this.alphabet.indexOf(key[keyIndex]);
        let index = indexSum % this.alphabetCharCount;

        encryptedStr += this.alphabet[index];
        keyIndex++;
      } else {
        encryptedStr += str[i];
      }
    }

    encryptedStr = encryptedStr.toUpperCase();
    return this.machineType
      ? encryptedStr
      : [...encryptedStr].reverse().join("");
  }

  decrypt(str, key) {
    str = str.toLowerCase();
    key = key.toLowerCase();
    let decryptedStr = "";
    let keyIndex = 0;

    for (let i = 0; i < str.length; i++) {
      if (this.alphabet.indexOf(str[i]) !== -1) {
        if (keyIndex > key.length - 1) keyIndex = 0;

        let indexDiff =
          this.alphabet.indexOf(str[i]) - this.alphabet.indexOf(key[keyIndex]);
        let index =
          (indexDiff + this.alphabetCharCount) % this.alphabetCharCount;

        decryptedStr += this.alphabet[index];
        keyIndex++;
      } else {
        decryptedStr += str[i];
      }
    }

    decryptedStr = decryptedStr.toUpperCase();
    return this.machineType
      ? decryptedStr
      : [...decryptedStr].reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
