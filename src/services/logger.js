class Logger {
  static _enabled = false;

  static enable() {
    require("log-timestamp");
    Logger._enabled = true;
  }

  static disable() {
    Logger._enabled = false;
  }

  static log(message) {
    if (Logger._enabled)
      console.log(message);
  }

  static warn(message) {
    if (Logger._enabled)
      console.warn(message);
  }

  static debug(message) {
    if (Logger._enabled)
      console.debug(message);
  }
}

module.exports = Logger;
