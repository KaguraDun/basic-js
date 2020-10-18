const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    isNaN(parseFloat(sampleActivity)) ||
    parseFloat(sampleActivity) <= 0 ||
    parseFloat(sampleActivity) > 15
  )
    return false;

  const APPROX_LOG = 0.693;
  let k = APPROX_LOG / HALF_LIFE_PERIOD;
  let t = Math.log(sampleActivity / MODERN_ACTIVITY) / k;

  return Math.ceil(t * -1);
};
