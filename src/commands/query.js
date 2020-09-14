const BaseCommand = require("./base");
const { setValues, swapWordPositions } = require("../services/utils");

class CINF extends BaseCommand {
  static NAME = "CINF";
  
  constructor(options = {}) {
    super(setValues(options, {
      filePath: BaseCommand.REQUIRED,
    }));
  }
}

class CLS extends BaseCommand {
  static NAME = "CLS";
  
  constructor(options = {}) {
    super(setValues(options, {
      subdirectory: BaseCommand.OPTIONAL,
    }));
  }
}

class FLS extends BaseCommand {
  static NAME = "FLS";
}

class TLS extends BaseCommand {
  static NAME = "TLS";
  
  constructor(options = {}) {
    super(setValues(options, {
      subdirectory: BaseCommand.OPTIONAL,
    }));
  }
}

class VERSION extends BaseCommand {
  static NAME = "VERSION";
  
  constructor(options = {}) {
    super(setValues(options, {
      component: BaseCommand.OPTIONAL,
    }));
  }
}

class INFO extends BaseCommand {
  static NAME = "INFO";
  
  constructor(options = {}) {
    if (options.layer && !options.channel)
      options.channel = BaseCommand.REQUIRED;
    super(setValues(options, {
      channel: BaseCommand.OPTIONAL,
      layer: BaseCommand.OPTIONAL,
    }));
  }
}

class INFO__TEMPLATE extends BaseCommand {
  static NAME = "INFO__TEMPLATE";
  
  constructor(options = {}) {
    super(setValues(options, {
      template: BaseCommand.REQUIRED,
    }));
  }
}

class INFO__CONFIG extends BaseCommand {
  static NAME = "INFO__CONFIG";
}

class INFO__PATHS extends BaseCommand {
  static NAME = "INFO__PATHS";
}

class INFO__SYSTEM extends BaseCommand {
  static NAME = "INFO__SYSTEM";
}

class INFO__SERVER extends BaseCommand {
  static NAME = "INFO__SERVER";
}

class INFO__QUEUES extends BaseCommand {
  static NAME = "INFO__QUEUES";
}

class INFO__THREADS extends BaseCommand {
  static NAME = "INFO__THREADS";
}

class INFO__DELAY extends BaseCommand {
  static NAME = "INFO__DELAY";
  
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

class DIAG extends BaseCommand {
  static NAME = "DIAG";
}

class GL__INFO extends BaseCommand {
  static NAME = "GL__INFO";
}

class GL__GC extends BaseCommand {
  static NAME = "GL__GC";
}

class BYE extends BaseCommand {
  static NAME = "BYE";
}

class KILL extends BaseCommand {
  static NAME = "KILL";
}

class RESTART extends BaseCommand {
  static NAME = "RESTART";
}

class HELP extends BaseCommand {
  static NAME = "HELP";
  
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
