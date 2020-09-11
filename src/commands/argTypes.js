class TransitionType {
  static CUT = "CUT";
  static MIX = "MIX";
  static PUSH = "PUSH";
  static WIPE = "WIPE";
  static SLIDE = "SLIDE";
}
  
class Direction {
  static LEFT = "LEFT";
  static RIGHT = "RIGHT";
  static UP = "UP";
  static DOWN = "DOWN";
}

class Blend {
  static NORMAL = "Normal";
  static LIGHTEN = "Lighten";
  static DARKEN = "Darken";
  static MULTIPLY = "Multiply";
  static AVERAGE = "Average";
  static ADD = "Add";
  static SUBTRACT = "Subtract";
  static DIFFERENCE = "Difference";
  static NEGATION = "Negation";
  static EXCLUSION = "Exclusion";
  static SCREEN = "Screen";
  static OVERLAY = "Overlay";
  static SOFT_LIGHT = "Soft_Light";
  static HARD_LIGHT = "Hard_Light";
  static COLOR_DODGE  = "Color_Dodge ";
  static COLOR_BURN = "Color_Burn";
  static LINEAR_DODGE = "Linear_Dodge";
  static LINEAR_BURN = "Linear_Burn";
  static LINEAR_LIGHT = "Linear_Light";
  static VIVID_LIGHT = "Vivid_Light";
  static PIN_LIGHT  = "Pin_Light ";
  static HARD_MIX = "Hard_Mix";
  static REFLECT = "Reflect";
  static GLOW = "Glow";
  static PHOENIX = "Phoenix";
  static CONTRAST = "Contrast";
  static SATURATION = "Saturation";
  static COLOR = "Color";
  static LUMINOSITY = "Luminosity";
}
  
class Tween {
  static LINEAR = "LINEAR";
  static EASE_NONE = "EASENONE";
  static EASE_IN_QUAD = "EASEINQUAD";
  static EASE_OUT_QUAD = "EASEOUTQUAD";
  static EASE_IN_OUT_QUAD = "EASEINOUTQUAD";
  static EASE_OUT_IN_QUAD = "EASEOUTINQUAD";
  static EASE_IN_CUBIC = "EASEINCUBIC";
  static EASE_OUT_CUBIC = "EASEOUTCUBIC";
  static EASE_INT_OUT_CUBIC = "EASEINTOUTCUBIC";
  static EASE_OUT_INT_CUBIC = "EASEOUTINTCUBIC";
  static EASE_IN_QUART = "EASEINQUART";
  static EASE_OUT_QUART = "EASEOUTQUART";
  static EASE_IN_OUT_QUART = "EASEINOUTQUART";
  static EASE_OUT_IN_QUART = "EASEOUTINQUART";
  static EASE_IN_QUINT = "EASEINQUINT";
  static EASE_OUT_QUINT = "EASEOUTQUINT";
  static EASE_IN_OUTQUINT = "EASEINOUTQUINT";
  static EASE_OUT_INQUINT = "EASEOUTINQUINT";
  static EASE_IN_SINE = "EASEINSINE";
  static EASE_OUT_SINE = "EASEOUTSINE";
  static EASE_IN_OUT_SINE = "EASEINOUTSINE";
  static EASE_OUT_IN_SINE = "EASEOUTINSINE";
  static EASE_IN_EXPO = "EASEINEXPO";
  static EASE_OUT_EXPO = "EASEOUTEXPO";
  static EASE_IN_OUT_EXPO = "EASEINOUTEXPO";
  static EASE_OUT_IN_EXPO = "EASEOUTINEXPO";
  static EASE_IN_CIRC = "EASEINCIRC";
  static EASE_OUT_CIRC = "EASEOUTCIRC";
  static EASE_IN_OUT_CIRC = "EASEINOUTCIRC";
  static EASE_OUT_IN_CIRC = "EASEOUTINCIRC";
  static EASE_IN_ELASTIC = "EASEINELASTIC";
  static EASE_OUT_ELASTIC = "EASEOUTELASTIC";
  static EASE_IN_OUT_ELASTIC = "EASEINOUTELASTIC";
  static EASE_OUT_IN_ELASTIC = "EASEOUTINELASTIC";
  static EASE_IN_BACK = "EASEINBACK";
  static EASE_OUT_BACK = "EASEOUTBACK";
  static EASE_IN_OUT_BACK = "EASEINOUTBACK";
  static EASE_OUT_IN_BACK = "EASEOUTINBACK";
  static EASE_OUT_BOUNCE = "EASEOUTBOUNCE";
  static EASE_IN_BOUNCE = "EASEINBOUNCE";
  static EASE_IN_OUT_BOUNCE = "EASEINOUTBOUNCE";
  static EASE_OUT_IN_BOUNCE = "EASEOUTINBOUNCE";
}

class LogLevel {
  // TODO: check case sensitivity (specification shows as lowercase)
  static TRACE = "TRACE";
  static DEBUG = "DEBUG";
  static INFO = "INFO";
  static WARNING = "WARNING";
  static ERROR = "ERROR";
  static FATAL = "FATAL";
}

class LogCategory {
  // TODO: check case sensitivity (specification shows as lowercase)
  static CALLTRACE = "CALLTRACE";
  static COMMUNICATION = "COMMUNICATION";
}
  
class ChannelVariable {
  static MODE = "MODE";
  static CHANNEL_LAYOUT = "CHANNEL_LAYOUT";
}

class Action {
  static ACQUIRE = "ACQUIRE";
  static RELEASE = "RELEASE";
  static CLEAR = "CLEAR";
}

module.exports = {
  TransitionType,
  Direction,
  Blend,
  Tween,
  LogLevel,
  LogCategory,
  ChannelVariable,
  Action,
};
