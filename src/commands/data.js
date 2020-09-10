const BaseCommand = require("./_base");
const { setValues } = require("../services/utils");

class DataBaseCommand extends BaseCommand {
  build() {
    return `DATA ${super.build()}`
  }
}

class STORE extends DataBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      path: BaseCommand.REQUIRED,
      data: BaseCommand.REQUIRED,
    }));
  }
}

class RETRIEVE extends DataBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      path: BaseCommand.REQUIRED,
    }));
  }
}

class LIST extends DataBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      subdirectory: BaseCommand.OPTIONAL,
    }));
  }
}

class REMOVE extends DataBaseCommand {
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
