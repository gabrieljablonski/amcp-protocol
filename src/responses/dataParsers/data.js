const Parser = require("./base");
const { RETRIEVE } = require("../../commands/data");

class Data extends Parser {
  static COMMAND_PREFIX = "DATA";
  
  static COMMANDS = [
    RETRIEVE,
  ];

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
    if (!data) 
      return data;
    try {
      return JSON.parse(data);
    } catch(err) {
      console.log("failed to parse ", err);
      return data;
    }
  }
}

module.exports = {
  Data
};
