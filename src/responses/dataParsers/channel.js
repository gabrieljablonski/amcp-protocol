const xmlParser = require("fast-xml-parser");

const Parser = require("./base");
const { INFO } = require("../../commands/query");

class ChannelStatus {
  constructor(channel) {
    this.number = channel.number;
    this.format = channel.format;
    this.status = channel.status;
  }
}

class Stage {
  constructor(stage) {
    this.layers = {};

    let layers = stage.layer || {};
    Object.entries(layers).forEach(([n, layer]) => {
      n = parseInt(n.split("_")[1]);
      this.layers[n] = layer;
    });
  }
}

class Channel extends Parser {
  static COMMANDS = [
    INFO,
  ];

  constructor(channel) {
    super();

    this.frameRate = channel.framerate;

    if (Array.isArray(this.frameRate)) {
      this.frameRate = this.frameRate.map(n => parseInt(n));
    }
    this.mixer = channel.mixer;
    this.stage = new Stage(channel.stage || {});
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
