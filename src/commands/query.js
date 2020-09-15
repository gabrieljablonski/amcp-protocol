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

class INFO_TEMPLATE extends BaseCommand {
  static NAME = "INFO TEMPLATE";
  
  constructor(options = {}) {
    super(setValues(options, {
      template: BaseCommand.REQUIRED,
    }));
  }
}

class INFO_CONFIG extends BaseCommand {
  static NAME = "INFO CONFIG";
}

class INFO_PATHS extends BaseCommand {
  static NAME = "INFO PATHS";
}

class INFO_SYSTEM extends BaseCommand {
  static NAME = "INFO SYSTEM";
}

class INFO_SERVER extends BaseCommand {
  static NAME = "INFO SERVER";
}

class INFO_QUEUES extends BaseCommand {
  static NAME = "INFO QUEUES";
}

class INFO_THREADS extends BaseCommand {
  static NAME = "INFO THREADS";
}

class INFO_DELAY extends BaseCommand {
  static NAME = "INFO DELAY";
  
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

class GL_INFO extends BaseCommand {
  static NAME = "GL INFO";
}

class GL_GC extends BaseCommand {
  static NAME = "GL GC";
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
  INFO_TEMPLATE,
  INFO_CONFIG,
  INFO_PATHS,
  INFO_SYSTEM,
  INFO_SERVER,
  INFO_QUEUES,
  INFO_THREADS,
  INFO_DELAY,
  DIAG,
  GL_INFO,
  GL_GC,
  BYE,
  KILL,
  RESTART,
  HELP,
};
