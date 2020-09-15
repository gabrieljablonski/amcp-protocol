const jsonToXML = require("fast-xml-parser").j2xParser;

const rename = require("deep-rename-keys");
const { camelToKebab } = require("../services/utils");

class Paths {
  constructor(paths = {}) {
    this.mediaPath = paths.mediaPath || "media/";
    this.logPath = paths.logPath || "log/";
    this.dataPath = paths.dataPath || "data/";
    this.templatePath = paths.templatePath || "template/";
  }
}

class Decklink {
  static LATENCIES = ["normal", "low", "default"];
  static KEYERS = ["external", "external_separate_device", "internal", "default"];

  constructor(decklink = {}) {
    this.device = decklink.device || 1;
    this.keyDevice = decklink.keyDevice || "device + 1";
    this.embeddedAudio = decklink.embeddedAudio || false;
    this.latency = decklink.latency || "normal";
    this.keyer = decklink.keyer || "external";
    this.keyOnly = decklink.keyOnly || false;
    this.bufferDepth = decklink.bufferDepth || 3;
  }

  get latency() {
    return this._latency;
  }

  set latency(latency) {
    if (!Decklink.LATENCIES.includes(latency))
      throw new Error(`invalid latency '${latency}'`);
    this._latency = latency;
  }

  get keyer() {
    return this._keyer;
  }

  set keyer(keyer) {
    if (!Decklink.KEYERS.includes(keyer))
      throw new Error(`invalid keyer '${keyer}'`);
    this._keyer = keyer;
  }
}

class Channel {
  static VIDEO_MODES = ["PAL", "NTSC", "576p2500", "720p2398", "720p2400", "720p2500", "720p5000", "720p2997", "720p5994", "720p3000", "720p6000", "1080p2398", "1080p2400", "1080i5000", "1080i5994", "1080i6000", "1080p2500", "1080p2997", "1080p3000", "1080p5000", "1080p5994", "1080p6000", "1556p2398", "1556p2400", "1556p2500", "dci1080p2398", "dci1080p2400", "dci1080p2500", "2160p2398", "2160p2400", "2160p2500", "2160p2997", "2160p3000", "2160p5000", "2160p5994", "2160p6000", "dci2160p2398", "dci2160p2400", "dci2160p2500"]

  constructor(channel = {}) {
    this.videoMode = channel.videoMode || "PAL";
    this.consumers = channel.consumers || [];
  }

  get videoMode() {
    return this._videoMode;
  }

  set videoMode(mode) {
    if (!Channel.VIDEO_MODES.includes(mode))
      throw new Error(`invalid video mode '${mode}'`);
    this._videoMode = mode;
  }
}

class Controller {
  static NET_PROTOCOLS = ["tcp", "udp"];
  static PROTOCOLS = ["AMCP"];

  constructor(controller) {
    this.netProtocol = controller.netProtocol || "tcp";
    this.protocol = controller.protocol || "AMCP";
    this.port = controller.port || 5250;
  }

  get netProtocol() {
    return this._netProtocol;
  }

  set netProtocol(protocol) {
    if (!Controller.NET_PROTOCOLS.includes(protocol))
      throw new Error(`invalid net protocol '${protocol}'`);
    this._netProtocol = protocol;
  }

  get protocol() {
    return this._protocol;
  }

  set protocol(protocol) {
    if (!Controller.PROTOCOLS.includes(protocol))
      throw new Error(`invalid protocol '${protocol}'`);
    this._protocol = protocol;
  }
}

class AMCP {
  constructor(amcp = {}) {
    this.mediaServer = amcp.mediaServer || { host: "localhost", port: 8000 };
  }
}

class Config {
  static LOG_LEVELS = ["trace", "debug", "info", "warning", "error", "fatal"];

  constructor(configuration = {}) {
    this.paths = new Paths(configuration.paths || {});
    this.lockClearPhrase = configuration.lockClearPhrase || "secret";
    this.channels = configuration.channels ? configuration.channels.map(c => new Channel(c)) : [];
    this.controllers = configuration.controllers ? configuration.controllers.map(c => new Controller(c)) : [];
    this.amcp = new AMCP(configuration.amcp || {});
    this.logLevel = configuration.logLevel || "info";
  }

  get logLevel() {
    return this._logLevel;
  }

  set logLevel(level) {
    if (!Config.LOG_LEVELS.includes(level))
      throw new Error(`invalid log level '${level}'`);
    this._logLevel = level;
  }

  get xml() {
    const obj = rename(this, key => {
      if (key.startsWith("_"))
        key = key.substring(1);
      return camelToKebab(key);
    });

    let controllers = {};
    this.controllers.forEach(c => {
      if (!controllers[c.netProtocol])
        controllers[c.netProtocol] = [];
      controllers[c.netProtocol].push({
        port: c.port,
        protocol: c.protocol,
      });
    });

    obj.controllers = controllers;
    obj.channels = {
      channel: obj.channels,
    };

    const xml = new jsonToXML({ indentBy: "    ", format: true })
      .parse({ configuration: obj });
    return `<?xml version="1.0" encoding="utf-8"?>\n${xml}`;
  }
}

module.exports = Config;
