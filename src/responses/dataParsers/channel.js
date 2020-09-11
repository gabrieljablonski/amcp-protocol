const xmlParser = require("fast-xml-parser");

const Parser = require("./base");
const { INFO } = require("../../commands/query");

class Channel extends Parser {
  static COMMANDS = [
    INFO,
  ];

  constructor(channel) {
    super();

    this._framerate = channel.framerate;
    this._mixer = channel.mixer;
    this._stage = channel.stage;
  }

  get framerate() {
    return this._framerate;
  }

  get mixer() {
    return this._mixer;
  }

  get stage() {
    return this._stage;
  }

  static parse(data) {
    const parsed = xmlParser.parse(data);
    return new Channel(parsed.channel);
  }
}

module.exports = {
  Channel
};
