const setValues = (obj, values) => {
  // let newObj = {};
  // Object.entries(defaultValues).forEach(([prop, defaultValue]) => {
  //   newObj[prop] = obj[prop] !== undefined ? obj[prop] : defaultValue;
  //   delete obj[prop];
  // });

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
  setValues,
  swapWordPositions,
};
