const Response = require("./response");

class Resolver {
  static DEFAULT_RESPONSE_TIMEOUT = 3000;

  constructor() {
    this._queued = [];
    this._responseTimeout = 0;
  }

  get expecting() {
    return this._queued.length > 0;
  }

  async(data) {
    return new Promise((resolve, reject) => {
      this._queued.push({ data, resolve });
      this._responseTimeout = setTimeout(() => {
        reject("command timed out");
      }, Resolver.DEFAULT_RESPONSE_TIMEOUT);
    });
  }

  get resolve() {
    return data => {
      if (this._responseTimeout) {
        clearTimeout(this._responseTimeout);
        this._responseTimeout = 0;
      }
      let resolve = this._queued.shift().resolve;
      resolve(Response.parse(data));
    };
  }
}

module.exports = Resolver;
