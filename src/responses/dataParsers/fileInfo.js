const Parser = require("./base");

const { CINF, CLS } = require("../../commands/query");

class MediaFile extends Parser {
  static COMMANDS = [
    CINF, CLS
  ];

  static STILL = "STILL";
  static MOVIE = "MOVIE";
  static AUDIO = "AUDIO";

  constructor(data) {
    super();

    this._name = data.name;
    this._type = data.type;
    this._size = data.size;
    this._lastModified = data.lastModified;
    this._frameCount = data.frameCount;
    this._frameRate = data.frameRate;
  }

  get name() {
    return this._name;
  }
  get type() {
    return this._type;
  }
  get size() {
    return this._size;
  }
  get lastModified() {
    return this._lastModified;
  }
  get frameCount() {
    return this._frameCount;
  }
  get frameRate() {
    return this._frameRate;
  }

  static parse(data) {
    const files = data.split("\n");

    return files.map(file => {
      const match = /"([ \S]+)" +(\w+) +(\d+) +(\d+) +(\d+) +(\d+)\/(\d+)/.exec(file);

      const dateMatch = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/.exec(match[4]);
      const lastModified = new Date(dateMatch[1], dateMatch[2], dateMatch[3], dateMatch[4], dateMatch[5], dateMatch[6]);

      return new MediaFile({
        name: match[1],
        type: match[2],
        size: parseInt(match[3]),
        lastModified,
        frameCount: parseInt(match[5]),
        frameRate: [match[7], match[6]],
      });
    });
  }
}

module.exports = {
  MediaFile
};
