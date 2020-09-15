const xmlParser = require("fast-xml-parser");

const Parser = require("./base");
const { INFO__CONFIG } = require("../../commands/query");
const CasparConfig = require("../../services/casparConfig");
const { kebabToCamel } = require("../../services/utils");

class Config extends Parser {
  static COMMANDS = [
    INFO__CONFIG,
  ];

  static parse(data) {
    const parsed = xmlParser.parse(kebabToCamel(data));

    if (!parsed) {
      console.warn("failed to parse config data");
      return data;
    }

    const config = parsed.configuration;

    config.channels = config.channels.channel;
    if (!Array.isArray(config.channels)) 
      config.channels = [config.channels];

    config.controllers = Object.entries(config.controllers).map(([prop, val]) => {
      return {
        netProtocol: prop,
        ...val,
      }
    });

    return new CasparConfig(config);
  }
}

module.exports = {
  Config
};
