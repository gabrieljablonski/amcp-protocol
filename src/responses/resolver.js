const Response = require("./response");

class Resolver {
  constructor() {
    this._resolve = null;
  }

  get resolve() {
    return data => {
      this._resolve(Response.parse(data));
    };
  }

  set resolve(resolver) {
    this._resolve = resolver;
  }
}

module.exports = Resolver;
