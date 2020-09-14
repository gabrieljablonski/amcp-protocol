const BaseCommand = require("./base");
const { setValues, swapWordPositions } = require("../services/utils");

class TemplateBaseCommand extends BaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      channel: BaseCommand.REQUIRED,
      layer: BaseCommand.OPTIONAL,
      cgLayer: BaseCommand.REQUIRED,
    }));
  }

  build() {
    return `CG ${swapWordPositions(super.build(), 0, 1)}`;
  }
}

class ADD extends TemplateBaseCommand {
  static NAME = "ADD";

  constructor(options = {}) {
    super(setValues(options, {
      template: BaseCommand.REQUIRED,
      playOnLoad: BaseCommand.REQUIRED,
      data: BaseCommand.OPTIONAL,
    }));
  }
}

class PLAY extends TemplateBaseCommand {
  static NAME = "PLAY";
}

class STOP extends TemplateBaseCommand {
  static NAME = "STOP";
}

class NEXT extends TemplateBaseCommand {
  static NAME = "NEXT";
}

class REMOVE extends TemplateBaseCommand {
  static NAME = "REMOVE";
}

class CLEAR extends TemplateBaseCommand {
  static NAME = "CLEAR";

  constructor(options = {}) {
    super(setValues(options, {
      // ignored if set
      cgLayer: BaseCommand.OPTIONAL,
    }));
  }
}

class UPDATE extends TemplateBaseCommand {
  static NAME = "UPDATE";

  constructor(options = {}) {
    super(setValues(options, {
      data: BaseCommand.REQUIRED,
    }));
  }
}

class INVOKE extends TemplateBaseCommand {
  static NAME = "INVOKE";

  constructor(options = {}) {
    super(setValues(options, {
      method: BaseCommand.REQUIRED,
    }));
  }
}

class INFO extends TemplateBaseCommand {
  static NAME = "INFO";

  constructor(options = {}) {
    super(setValues(options, {
      cgLayer: BaseCommand.OPTIONAL,
    }));
  }
}

module.exports = {
  ADD,
  PLAY,
  STOP,
  NEXT,
  REMOVE,
  CLEAR,
  UPDATE,
  INVOKE,
  INFO,
};
