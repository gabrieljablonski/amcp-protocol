const BaseCommand = require("./_base");
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

class LOADBG extends BaseLoadPlay {}

class LOAD extends BaseLoadPlay {}

class PLAY extends BaseLoadPlay {}

class PAUSE extends BaseWithChannelLayer {}

class RESUME extends BaseWithChannelLayer {}

class STOP extends BaseWithChannelLayer {}

class CLEAR extends BaseWithChannelLayer {}

class CALL extends BaseWithChannelLayer {
  constructor(options = {}) {
    super(setValues(options, {
      parameters: BaseCommand.OPTIONAL,
    }));
  }
}

class SWAP extends BaseCommand {
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
  constructor(options = {}) {
    super(setValues(options, {
      consumerIndex: BaseCommand.OPTIONAL,
      consumer: BaseCommand.REQUIRED,
      parameters: BaseCommand.REQUIRED,
    }));
  }
}

class REMOVE extends BaseWithChannelLayer {
  constructor(options = {}) {
    super(setValues(options, {
      consumerIndex: BaseCommand.OPTIONAL,
      parameters: BaseCommand.OPTIONAL,
    }));
  }
}

class PRINT extends BaseWithChannelLayer {}

class LOG__LEVEL extends BaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      level: BaseCommand.REQUIRED,
    }));
  }
}

class LOG__CATEGORY extends BaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      category: BaseCommand.REQUIRED,
      enable: BaseCommand.REQUIRED,
    }));
  }
}

class SET extends BaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      channel: BaseCommand.REQUIRED,
      variable: BaseCommand.REQUIRED,
      value: BaseCommand.REQUIRED,
    }));
  }
}

class LOCK extends BaseCommand {
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
  LOG__LEVEL,
  LOG__CATEGORY, 
  SET, 
  LOCK,
};
