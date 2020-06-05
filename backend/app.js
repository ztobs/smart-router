let obj = {};

obj.multiply = (x, y) => {
  if (!Number.isInteger(x) && !Number.isInteger(y)) return undefined;
  return x * y;
};

const cToF = (celsius) => {
  if (!Number.isInteger(celsius)) return undefined;
  return (celsius * 9) / 5 + 32;
};

const fToC = (feh) => {
  if (!Number.isInteger(feh)) return undefined;
  return ((feh - 32) * 5) / 9;
};

module.exports = { obj, cToF, fToC };
