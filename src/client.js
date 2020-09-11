const net = require("net");

const ResponseResolver = require("./responses/resolver");

class AMCPClient {
  // TODO: handle async events
  static DEFAULT_HOST = "127.0.0.1";
  static DEFAULT_PORT = 5250;
  
  constructor(options) {
    this._host = options.host || AMCPClient.DEFAULT_HOST;
    this._port = options.port || AMCPClient.DEFAULT_PORT;

    this._connected = false;
    this._responseResolver = new ResponseResolver();

    this._socket = new net.Socket();
    this._setupSocket();
  }

  _setupSocket() {
    this._socket.setEncoding("utf-8");
    this._socket.on("connect", () => {
      this._responseResolver = new ResponseResolver();
      this._connected = true;
      console.log(`Connection established to ${this._socket.remoteAddress}:${this._socket.remotePort}.`)
    });

    this._socket.on("close", () => {
      this._connected = false;
      console.log("Connection lost.");
    });

    this._socket.on("data", data => {
      if (this._responseResolver.expecting)
        return this._responseResolver.resolve(data);
      console.log("received: " + data);
    });
  }

  connect() {
    if (this._connected)
      throw new Error("socket is already connected");
    this._socket.connect({
      host: this._host,
      port: this._port,
    });
  }

  disconnect() {
    if (!this._connected)
      throw new Error("socket is not connected");
    this._socket.end();
  }

  sendCommand(command) {
    if (!this._connected)
      throw new Error("socket is not connected");
    const data = command.build() + "\r\n";
    console.log(`Sending command: '${data}'`);
    this._socket.write(data, () => {
      this._waitingResponse = true;
    });

    return this._responseResolver.async(data);
  }
}

module.exports = AMCPClient;
