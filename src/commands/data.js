const BaseCommand = require("./base");
const { setValues } = require("../services/utils");

class DataBaseCommand extends BaseCommand {
  build() {
    return `DATA ${super.build()}`
  }
}

class STORE extends DataBaseCommand {
  static NAME = "STORE";
  
  constructor(options = {}) {
    super(setValues(options, {
      path: BaseCommand.REQUIRED,
      data: BaseCommand.REQUIRED,
    }));
  }
}

class RETRIEVE extends DataBaseCommand {
  static NAME = "RETRIEVE";
  
  constructor(options = {}) {
    super(setValues(options, {
      path: BaseCommand.REQUIRED,
    }));
  }
}

class LIST extends DataBaseCommand {
  static NAME = "LIST";
  
  constructor(options = {}) {
    super(setValues(options, {
      subdirectory: BaseCommand.OPTIONAL,
    }));
  }
}

class REMOVE extends DataBaseCommand {
  static NAME = "REMOVE";
  
  constructor(options = {}) {
    super(setValues(options, {
      path: BaseCommand.REQUIRED,
    }));
  }
}

module.exports = {
  STORE,
  RETRIEVE,
  LIST,
  REMOVE,
};
