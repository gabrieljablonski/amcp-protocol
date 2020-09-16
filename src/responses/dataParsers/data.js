const Parser = require("./base");
const { RETRIEVE } = require("../../commands/data");

class Data extends Parser {
  static COMMAND_PREFIX = "DATA";
  
  static COMMANDS = [
    RETRIEVE,
  ];
  
  static parse(data) {
    if (!data) 
      return data;
    try {
      return JSON.parse(data);
    } catch(err) {
      Logger.warn("file is not a valid json");
      return data;
    }
  }
}

module.exports = {
  Data
};
