class Parser {
  static COMMAND_PREFIX = "";
  static COMMANDS = [];

  static isCommandParser(command) {
    return this.COMMANDS.map( c => {
      const name = c.name.replace(/__/g, " ");
      if (this.COMMAND_PREFIX)
        return `${this.COMMAND_PREFIX} ${name}`;
        
      return name;
    }
    ).includes(command);
  }
}

module.exports = Parser;
