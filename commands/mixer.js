const BaseCommand = require("./_base");
const { setValues, swapWordPositions } = require("../services/utils");
const { Tween } = require("./argTypes");

class MixerBaseCommand extends BaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      channel: BaseCommand.REQUIRED,
      layer: 0,
    }));
  }

  build() {
    return `MIXER ${swapWordPositions(super.build(), 0, 1)}`;
  }
}

class KEYER extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      keyer: false,
    }));
  }
}

class CHROMA extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      enable: BaseCommand.OPTIONAL,
      targetHue: BaseCommand.OPTIONAL,
      hueWidth: BaseCommand.OPTIONAL,
      minSaturation: BaseCommand.OPTIONAL,
      minBrightness: BaseCommand.OPTIONAL,
      softness: BaseCommand.OPTIONAL,
      spillSuppress: BaseCommand.OPTIONAL,
      spillSuppressSaturation: BaseCommand.OPTIONAL,
      showMask: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class BLEND extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      blend: BaseCommand.OPTIONAL,
    }));
  }
}

class INVERT extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      invert: BaseCommand.OPTIONAL,
    }));
  }
}

class OPACITY extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      value: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class BRIGHTNESS extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      value: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}
class SATURATION extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      value: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class CONTRAST extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      value: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class LEVELS extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      minInput: BaseCommand.OPTIONAL,
      maxInput: BaseCommand.OPTIONAL,
      gamma: BaseCommand.OPTIONAL,
      minOutput: BaseCommand.OPTIONAL,
      maxOutput: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class FILL extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      x: BaseCommand.OPTIONAL,
      y: BaseCommand.OPTIONAL,
      xScale: BaseCommand.OPTIONAL,
      yScale: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class CLIP extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      x: BaseCommand.OPTIONAL,
      y: BaseCommand.OPTIONAL,
      width: BaseCommand.OPTIONAL,
      height: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class ANCHOR extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      x: BaseCommand.OPTIONAL,
      y: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class CROP extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      left: BaseCommand.OPTIONAL,
      top: BaseCommand.OPTIONAL,
      right: BaseCommand.OPTIONAL,
      bottom: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class ROTATION extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      angle: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class PERSPECTIVE extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      topLeftX: BaseCommand.OPTIONAL,
      topLeftY: BaseCommand.OPTIONAL,
      topRightX: BaseCommand.OPTIONAL,
      topRightY: BaseCommand.OPTIONAL,
      bottomRightX: BaseCommand.OPTIONAL,
      bottomRightY: BaseCommand.OPTIONAL,
      bottomLeftX: BaseCommand.OPTIONAL,
      bottomLeftY: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class MIPMAP extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      enable: BaseCommand.OPTIONAL,
    }));
  }
}

class VOLUME extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      value: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class MASTERVOLUME extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      value: BaseCommand.OPTIONAL,
    }));
  }
}

class STRAIGHT_ALPHA_OUTPUT extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      enable: BaseCommand.OPTIONAL,
    }));
  }
}

class GRID extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      resolution: BaseCommand.REQUIRED,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class COMMIT extends MixerBaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      layer: BaseCommand.OPTIONAL,
    }));
  }
}

class CLEAR extends MixerBaseCommand {}

class CHANNEL_GRID extends BaseCommand {
  // although it appears under 'MIXER' in the protocol definition,
  // the command does not share the prefix
}
