const Logger = require("./services/logger");

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

  static parse(command, data) {
    try {
      let parser = this.find(command);
      return parser ? parser.parse(data) : data;
    } catch (err) {
      Logger.warn("failed to parse data", err);
      return data;
    }
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
