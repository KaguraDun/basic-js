const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let separator = options.separator || "+";
  let additionSeparator = options.additionSeparator || "|";
  let finalStr = "";
  let firstPart = str;

  //make first part
  if (options.additionRepeatTimes == undefined) firstPart = str;
  else {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      if (i !== options.additionRepeatTimes - 1) {
        firstPart += options.addition + additionSeparator;
      } else firstPart += options.addition;
    }
  }

  //repeat
  if (options.repeatTimes == undefined) finalStr = firstPart + options.addition;
  else {
    for (let i = 0; i < options.repeatTimes; i++) {
      if (i !== options.repeatTimes - 1) {
        finalStr += firstPart + separator;
      } else finalStr += firstPart;
    }
  }

  return finalStr;
};
