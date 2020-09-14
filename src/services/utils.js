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
};

const camelToKebab = str => 
  str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

const kebabToCamel = str => str.replace(/-./g, s=>s.toUpperCase()[1])

module.exports = {
  sanitize,
  setValues,
  swapWordPositions,
  camelToKebab,
  kebabToCamel,
};
