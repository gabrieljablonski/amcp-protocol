const xmlParser = require("fast-xml-parser");

const Parser = require("./base");
const { INFO } = require("../../commands/query");

class ChannelStatus {
  constructor(channel) {
    this._number = channel.number;
    this._format = channel.format;
    this._status = channel.status;
  }

  get number() {
    return this._number;
  }

  get format() {
    return this._format;
  }

  get status() {
    return this._status;
  }
}

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

    if (parsed && parsed.channel) {
      return new Channel(parsed.channel);
    }

    // <CHANNEL> <FORMAT> <STATUS>\n
    return data.split("\n").map(c => {
      const split = c.split(" ");
      return new ChannelStatus({
        number: split[0],
        format: split[1],
        status: split[2],
      });
    });
  }
}

module.exports = {
  Channel
};
