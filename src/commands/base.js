const { sanitize } = require("../services/utils");
const Logger = require("./services/logger");

class Command {
  static NAME = "";
  static REQUIRED = "__REQUIRED";
  static OPTIONAL = "__OPTIONAL";
  static HYPHENATED_PROPS = ["layer", "firstLayer", "secondLayer", "consumerIndex"]
    // these appear as the attr name in the output, instead of 0/1
  static NON_BINARY_BOOL_ATTRS = ["loop", "auto", "transforms"]
  static NO_SPACE_BETWEEN_ARGS = ["parameters"];

  constructor(options = {}) {
    Object.entries(options).forEach(([prop, val]) => {
      this[prop] = val;
    });
    this._validateAttributes();
  }

  _validateAttributes() {
    Object.getOwnPropertyNames(this).forEach(prop => {
      const val = this[prop];
      if (val == Command.REQUIRED)
        throw new Error(`property "${prop}" is required`)

      if (val != Command.OPTIONAL && Command.HYPHENATED_PROPS.includes(prop))
        this[prop] = `-${val}`;
    });
  }

  build() {
    const command = this.constructor.NAME;

    let out = command;

    Object.entries(this).forEach(([prop, val]) => {
      if (val == Command.OPTIONAL)
        return;

      if (typeof val === "object")
        val = JSON.stringify(val);

      if (typeof val === "number") 
        val = val.toString();

      if (typeof val == "boolean") {
        if (Command.NON_BINARY_BOOL_ATTRS.includes(prop))
          val = prop.toUpperCase();
        else
          val = val ? "1" : "0";
      }

      if (Command.HYPHENATED_PROPS.includes(prop)) {
        out += val;
        return;
      }

      if (val.includes('"') || val.includes("\n") || (val.includes(" ") && !Command.NO_SPACE_BETWEEN_ARGS.includes(prop)))
        val = `"${sanitize(val)}"`;

      if (val.startsWith("http"))
        val = `[HTML] "${val}"`

      out += ` ${val}`;
    });

    return out;
  }
}

module.exports = Command;
