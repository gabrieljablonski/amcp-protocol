class Parser {
  static COMMANDS = [];

  static isCommandParser(command) {
    return this.COMMANDS.map(
      c => c.name.replace(/__/g, " ")
    ).includes(command);
  }
}

module.exports = Parser;
