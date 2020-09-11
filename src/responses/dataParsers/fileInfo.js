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
      const split = file.split(" ");
      return new MediaFile({
        name: split[0].substring(1, split[0].length-1),
        type: split[1],
        size: split[2],
        lastModified: split[3],
        frameCount: split[4],
        frameRate: split[5],
      });
    }
      
    );
  }
}

module.exports = {
  MediaFile
};
