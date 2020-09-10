const BaseCommand = require("./base");
const { setValues } = require("../services/utils");

class ThumbnailBaseCommand extends BaseCommand {
  build() {
    return `THUMBNAIL ${super.build()}`
  }
}

class LIST extends ThumbnailBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      subdirectory: BaseCommand.OPTIONAL,
    }));
  }
}

class RETRIEVE extends ThumbnailBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      path: BaseCommand.REQUIRED,
    }));
  }
}

class GENERATE extends ThumbnailBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      path: BaseCommand.REQUIRED,
    }));
  }
}

class GENERATE_ALL extends ThumbnailBaseCommand {}

module.exports = {
  LIST,
  RETRIEVE,
  GENERATE,
  GENERATE_ALL,
};
