const Response = require("./response");

class Resolver {
  constructor() {
    this._resolve = null;
    this._queued = [];
  }

  get expecting() {
    return this._queued.length > 0;
  }

  async(data) {
    this._queued.push(data);
    return new Promise((resolve, reject) => {
      this._resolve = resolve;
    });
  }

  get resolve() {
    return data => {
      this._resolve(Response.parse(data));
      this._queued.shift();
    };
  }

  set resolve(resolver) {
    this._resolve = resolver;
  }
}

module.exports = Resolver;
