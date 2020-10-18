const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if(matrix.length == 0) return 0;
  let ears = matrix.reduce((acc, curr) => acc.concat(curr).filter(ears => ears == "^^"));
  return ears.length;
};
