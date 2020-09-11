const sanitize = str => 
  str.trim()
     .replace(/"/g, '\\"')
     .replace(/\n/g, "\\n");

const setValues = (obj, values) => {
  return {
    ...values,
    ...obj,
  };
};

const swapWordPositions = (str, first, second) => {
  let args = str.split(" ");
  if (args.length > 1)
    [args[first], args[second]] = [args[second], args[first]];
  return args.join(" ");
}

module.exports = {
  sanitize,
  setValues,
  swapWordPositions,
};
