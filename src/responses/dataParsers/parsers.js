class Parsers {
  static _registered = [];

  static register(parser) {
    if (typeof parser === "list") {
      parser.forEach(p => {
        Parsers._registered.push(p);
      });
      return;
    }
    Parsers._registered.push(parser);
  }

  static find(command) {
    return Parsers._registered.find(p => p.isCommandParser(command));
  }
}

const { MediaFile } = require("./fileInfo");

Parsers.register(MediaFile);

module.exports = Parsers;
