const { Info } = require("./returnCodes");
const Parsers = require("./dataParsers/parsers")

class Response {
  static OK = "OK";
  static ERROR = "ERROR";
  static FAILED = "FAILED";

  constructor(response) {
    this._code = response.code;
    this._command = response.command;
    this._status = response.status;
    this._rawData = response.data;
    this._parsedData = Parsers.parse(response.command, response.data);
  }

  get code() {
    return this._code;
  }

  get command() {
    return this._command;
  }

  get status() {
    return this._status;
  }

  get rawData() {
    return this._rawData;
  }

  get parsedData() {
    return this._parsedData;
  }

  static parse(response) {
    const match = /(\d+) ([\w ]+)(?:\r?\n([\s\S]+))?/g.exec(response.trim());
    let code = match[1];
    let command = match[2];
    let status;
    let data = match[3];

    if (data) {
      data = data.replace(/\r\n/g, "\n");
    }

    if (code == Info.NO_DATA || code == Info.WITH_DATA) {
      return new Response({code, command, status, data});
    }

    const split = command.split(" ");
    status = split.pop();
    if ([Response.OK, Response.ERROR, Response.FAILED].includes(status)) {
      command = split.join(" ") || null;
      return new Response({code, command, status, data});
    }

    throw new Error(`failed to parse response: ${response}`)
  }
}

module.exports = Response;
