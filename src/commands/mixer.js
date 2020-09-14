const BaseCommand = require("./base");
const { setValues, swapWordPositions } = require("../services/utils");

class MixerBaseCommand extends BaseCommand {
  constructor(options = {}) {
    super(setValues(options, {
      channel: BaseCommand.REQUIRED,
      layer: BaseCommand.OPTIONAL,
    }));
  }

  build() {
    return `MIXER ${swapWordPositions(super.build(), 0, 1)}`;
  }
}

class KEYER extends MixerBaseCommand {
  static NAME = "KEYER";

  constructor(options = {}) {
    super(setValues(options, {
      keyer: BaseCommand.OPTIONAL,
    }));
  }
}

class CHROMA extends MixerBaseCommand {
  static NAME = "CHROMA";

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
  static NAME = "BLEND";

  constructor(options = {}) {
    super(setValues(options, {
      blend: BaseCommand.OPTIONAL,
    }));
  }
}

class INVERT extends MixerBaseCommand {
  static NAME = "INVERT";

  constructor(options = {}) {
    super(setValues(options, {
      invert: BaseCommand.OPTIONAL,
    }));
  }
}

class OPACITY extends MixerBaseCommand {
  static NAME = "OPACITY";

  constructor(options = {}) {
    super(setValues(options, {
      value: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class BRIGHTNESS extends MixerBaseCommand {
  static NAME = "BRIGHTNESS";

  constructor(options = {}) {
    super(setValues(options, {
      value: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}
class SATURATION extends MixerBaseCommand {
  static NAME = "SATURATION";

  constructor(options = {}) {
    super(setValues(options, {
      value: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class CONTRAST extends MixerBaseCommand {
  static NAME = "CONTRAST";

  constructor(options = {}) {
    super(setValues(options, {
      value: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class LEVELS extends MixerBaseCommand {
  static NAME = "LEVELS";

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
  static NAME = "FILL";

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
  static NAME = "CLIP";

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
  static NAME = "ANCHOR";

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
  static NAME = "CROP";

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
  static NAME = "ROTATION";

  constructor(options = {}) {
    super(setValues(options, {
      angle: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class PERSPECTIVE extends MixerBaseCommand {
  static NAME = "PERSPECTIVE";

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
  static NAME = "MIPMAP";

  constructor(options = {}) {
    super(setValues(options, {
      enable: BaseCommand.OPTIONAL,
    }));
  }
}

class VOLUME extends MixerBaseCommand {
  static NAME = "VOLUME";

  constructor(options = {}) {
    super(setValues(options, {
      value: BaseCommand.OPTIONAL,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class MASTERVOLUME extends MixerBaseCommand {
  static NAME = "MASTERVOLUME";

  constructor(options = {}) {
    super(setValues(options, {
      value: BaseCommand.OPTIONAL,
    }));
  }
}

class STRAIGHT_ALPHA_OUTPUT extends MixerBaseCommand {
  static NAME = "STRAIGHT_ALPHA_OUTPUT";

  constructor(options = {}) {
    super(setValues(options, {
      enable: BaseCommand.OPTIONAL,
    }));
  }
}

class GRID extends MixerBaseCommand {
  static NAME = "GRID";

  constructor(options = {}) {
    super(setValues(options, {
      resolution: BaseCommand.REQUIRED,
      duration: BaseCommand.OPTIONAL,
      tween: BaseCommand.OPTIONAL,
    }));
  }
}

class COMMIT extends MixerBaseCommand {
  static NAME = "COMMIT";
}

class CLEAR extends MixerBaseCommand {
  static NAME = "CLEAR";
}

class CHANNEL_GRID extends BaseCommand {
  static NAME = "CHANNEL_GRID";
  // although it appears under "MIXER" in the protocol definition,
  // the command does not share the prefix
}

module.exports = {
  KEYER,
  CHROMA,
  BLEND,
  INVERT,
  OPACITY,
  BRIGHTNESS,
  SATURATION,
  CONTRAST,
  LEVELS,
  FILL,
  CLIP,
  ANCHOR,
  CROP,
  ROTATION,
  PERSPECTIVE,
  MIPMAP,
  VOLUME,
  MASTERVOLUME,
  STRAIGHT_ALPHA_OUTPUT,
  GRID,
  COMMIT,
  CLEAR,
  CHANNEL_GRID,
};
