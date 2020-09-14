class Parsers {
  static _registered = [];

  static register(parser) {
    if (Array.isArray(parser)) {
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
const { Channel } = require("./channel");
const { Data } = require("./data");
const { Config } = require("./config");

Parsers.register([
  MediaFile,
  Channel,
  Data,
  Config,
]);

module.exports = Parsers;
