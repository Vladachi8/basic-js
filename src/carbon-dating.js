const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const sample = parseFloat(sampleActivity);
  if ( sample <= 0 || sample > MODERN_ACTIVITY || !sample || typeof(sampleActivity) !== "string") {
    return false;
  } else {
    const k = 0.693 / HALF_LIFE_PERIOD;
    let age = Math.log(MODERN_ACTIVITY / sample) / k;
    age = Math.ceil(age);
    return age;
  }
};
