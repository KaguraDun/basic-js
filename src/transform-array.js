const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-next") {
      if (arr.includes(arr[i + 1])) {
        i++;
      }
      continue;
    }

    if (arr[i] == "--discard-prev") {
      if (arr.includes(arr[i - 1]) &&  arr[i - 2] !== "--discard-next") {
        result.pop();
      }
      continue;
    }

    if (arr[i] == "--double-next") {
      if (arr.includes(arr[i + 1])) {
        result.push(arr[i + 1]);
      }
      continue;
    }

    if (arr[i] == "--double-prev") {
      if (arr.includes(arr[i - 1]) &&  arr[i - 2] !== "--discard-next") {
        result.push(result[result.length-1]);
      }
      continue;
    }

    result.push(arr[i]);
  }

  return result;
};
