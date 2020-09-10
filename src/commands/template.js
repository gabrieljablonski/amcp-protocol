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
  constructor(options = {}) {
    super(setValues(options, {
      template: BaseCommand.REQUIRED,
      playOnLoad: BaseCommand.REQUIRED,
      data: BaseCommand.OPTIONAL,
    }));
  }
}

class PLAY extends TemplateBaseCommand {}

class STOP extends TemplateBaseCommand {}

class NEXT extends TemplateBaseCommand {}

class REMOVE extends TemplateBaseCommand {}

class CLEAR extends TemplateBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      // ignored if set
      cgLayer: BaseCommand.OPTIONAL,
    }));
  }
}

class UPDATE extends TemplateBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      data: BaseCommand.REQUIRED,
    }));
  }
}

class INVOKE extends TemplateBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      method: BaseCommand.REQUIRED,
    }));
  }
}

class INFO extends TemplateBaseCommand {
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
