const BaseCommand = require("./base");
const { setValues } = require("../services/utils");

class BaseWithChannelLayer extends BaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      channel: BaseCommand.REQUIRED,
      layer: BaseCommand.OPTIONAL,
    }));
  }
}
    
class BaseLoadPlay extends BaseWithChannelLayer {
  constructor(options = {}) {
    super(setValues(options, {
      clip: BaseCommand.REQUIRED,
      loop: BaseCommand.OPTIONAL,
      transition: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
      direction: BaseCommand.OPTIONAL,
      seek: BaseCommand.OPTIONAL,
      length: BaseCommand.OPTIONAL,
      filterType: BaseCommand.OPTIONAL,
      auto: BaseCommand.OPTIONAL,
    }));
  }
}

class LOADBG extends BaseLoadPlay {
  static NAME = "LOADBG";
}

class LOAD extends BaseLoadPlay {
  static NAME = "LOAD";
}

class PLAY extends BaseLoadPlay {
  static NAME = "PLAY";
}

class PAUSE extends BaseWithChannelLayer {
  static NAME = "PAUSE";
}

class RESUME extends BaseWithChannelLayer {
  static NAME = "RESUME";
}

class STOP extends BaseWithChannelLayer {
  static NAME = "STOP";
}

class CLEAR extends BaseWithChannelLayer {
  static NAME = "CLEAR";
}

class CALL extends BaseWithChannelLayer {
  static NAME = "CALL";
  
  constructor(options = {}) {
    super(setValues(options, {
      parameters: BaseCommand.OPTIONAL,
    }));
  }
}

class SWAP extends BaseCommand {
  static NAME = "SWAP";
  
  constructor(options = {}) {
    super(setValues(options, {
      firstChannel: BaseCommand.REQUIRED,
      firstLayer: BaseCommand.OPTIONAL,
      secondChannel: BaseCommand.REQUIRED,
      secondLayer: BaseCommand.OPTIONAL,
      transforms: BaseCommand.OPTIONAL,
    }));
  }
}

class ADD extends BaseWithChannelLayer {
  static NAME = "ADD";
  
  constructor(options = {}) {
    super(setValues(options, {
      consumerIndex: BaseCommand.OPTIONAL,
      consumer: BaseCommand.REQUIRED,
      parameters: BaseCommand.REQUIRED,
    }));
  }
}

class REMOVE extends BaseWithChannelLayer {
  static NAME = "REMOVE";
  
  constructor(options = {}) {
    super(setValues(options, {
      consumerIndex: BaseCommand.OPTIONAL,
      parameters: BaseCommand.OPTIONAL,
    }));
  }
}

class PRINT extends BaseWithChannelLayer {
  static NAME = "PRINT";
}

class LOG_LEVEL extends BaseCommand {
  static NAME = "LOG LEVEL";
  
  constructor(options = {}) {
    super(setValues(options, {
      level: BaseCommand.REQUIRED,
    }));
  }
}

class LOG_CATEGORY extends BaseCommand {
  static NAME = "LOG CATEGORY";
  
  constructor(options = {}) {
    super(setValues(options, {
      category: BaseCommand.REQUIRED,
      enable: BaseCommand.REQUIRED,
    }));
  }
}

class SET extends BaseCommand {
  static NAME = "SET";
  
  constructor(options = {}) {
    super(setValues(options, {
      channel: BaseCommand.REQUIRED,
      variable: BaseCommand.REQUIRED,
      value: BaseCommand.REQUIRED,
    }));
  }
}

class LOCK extends BaseCommand {
  static NAME = "LOCK";
  
  constructor(options = {}) {
    super(setValues(options, {
      channel: BaseCommand.REQUIRED,
      action: BaseCommand.REQUIRED,
      lockPhrase: BaseCommand.OPTIONAL,
    }));
  }
}

module.exports = {
  LOADBG,
  LOAD,
  PLAY,
  PAUSE, 
  RESUME,
  STOP,
  CLEAR, 
  CALL,
  SWAP,
  ADD, 
  REMOVE,
  PRINT, 
  LOG_LEVEL,
  LOG_CATEGORY, 
  SET, 
  LOCK,
};
