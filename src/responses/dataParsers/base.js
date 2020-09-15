class Parser {
  static COMMAND_PREFIX = "";
  static COMMANDS = [];

  static isCommandParser(command) {
    return this.COMMANDS.map(c => {
      if (this.COMMAND_PREFIX)
        return `${this.COMMAND_PREFIX} ${c.NAME}`;
      return c.NAME;
    }).includes(command);
  }
}

module.exports = Parser;
