const BaseCommand = require("./base");
const { setValues } = require("../services/utils");

class ThumbnailBaseCommand extends BaseCommand {
  build() {
    return `THUMBNAIL ${super.build()}`
  }
}

class LIST extends ThumbnailBaseCommand {
  static NAME = "LIST";
  constructor(options = {}) {
    super(setValues(options, {
      subdirectory: BaseCommand.OPTIONAL,
    }));
  }
}

class RETRIEVE extends ThumbnailBaseCommand {
  static NAME = "RETRIEVE";
  constructor(options = {}) {
    super(setValues(options, {
      path: BaseCommand.REQUIRED,
    }));
  }
}

class GENERATE extends ThumbnailBaseCommand {
  static NAME = "GENERATE";
  constructor(options = {}) {
    super(setValues(options, {
      path: BaseCommand.REQUIRED,
    }));
  }
}

class GENERATE_ALL extends ThumbnailBaseCommand {
  static NAME = "GENERATE_ALL";
}

module.exports = {
  LIST,
  RETRIEVE,
  GENERATE,
  GENERATE_ALL,
};
