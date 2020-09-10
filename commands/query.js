const BaseCommand = require("./baseCommand");
const { setValues, swapWordPositions } = require("../services/utils");

class CINF extends BaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      path: BaseCommand.REQUIRED,
    }));
  }
}

class CLS extends BaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      subdirectory: BaseCommand.OPTIONAL,
    }));
  }
}

class FLS extends BaseCommand {}

class TLS extends BaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      subdirectory: BaseCommand.OPTIONAL,
    }));
  }
}

class VERSION extends BaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      component: BaseCommand.OPTIONAL,
    }));
  }
}

class INFO extends BaseCommand {
  constructor(options = {}) {
    if (options.layer && !options.channel)
      throw new Error("channel is required");
    super(setValues(options, {
      channel: BaseCommand.OPTIONAL,
      layer: BaseCommand.OPTIONAL,
    }));
  }
}

class INFO__TEMPLATE extends BaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      template: BaseCommand.REQUIRED,
    }));
  }
}

class INFO__CONFIG extends BaseCommand {}

class INFO__PATHS extends BaseCommand {}

class INFO__SYSTEM extends BaseCommand {}

class INFO__SERVER extends BaseCommand {}

class INFO__QUEUES extends BaseCommand {}

class INFO__THREADS extends BaseCommand {}

class INFO__DELAY extends BaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      channel: BaseCommand.REQUIRED,
      layer: BaseCommand.OPTIONAL,
    }));
  }

  build() {
    return swapWordPositions(super.build(), 1, 2);
  }
}

class DIAG extends BaseCommand {}

class GL__INFO extends BaseCommand {}

class GL__GC extends BaseCommand {}

class BYE extends BaseCommand {}

class KILL extends BaseCommand {}

class RESTART extends BaseCommand {}

class HELP extends BaseCommand {
  static PRODUCER = "PRODUCER";
  static CONSUMER = "CONSUMER";

  constructor(options = {}) {
    super(setValues(options, {
      producerOrConsumer: BaseCommand.OPTIONAL,
      reference: BaseCommand.OPTIONAL,
    }));
  }
}

module.exports = {
  CINF,
  CLS,
  FLS,
  TLS,
  VERSION,
  INFO,
  INFO__TEMPLATE,
  INFO__CONFIG,
  INFO__PATHS,
  INFO__SYSTEM,
  INFO__SERVER,
  INFO__QUEUES,
  INFO__THREADS,
  INFO__DELAY,
  DIAG,
  GL__INFO,
  GL__GC,
  BYE,
  KILL,
  RESTART,
  HELP,
};
