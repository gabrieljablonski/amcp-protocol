class Logger {
  static log(message) {
    if (process.env.DEBUG)
      console.log(message);
  }

  static warn(message) {
    if (process.env.DEBUG)
      console.warn(message);
  }

  static debug(message) {
    if (process.env.DEBUG)
      console.debug(message);
  }
}

module.exports = Logger;
