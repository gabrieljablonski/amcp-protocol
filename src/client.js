require("log-timestamp");
const io = require("socket.io-client");

const ResponseResolver = require("./responses/resolver");
const Commands = require("./commands");
const { resolve } = require("path");

class AMCPClient {
  // TODO: handle async events
  static DEFAULT_HOST = "localhost";
  static DEFAULT_PORT = 52500;
  static CONNECTION_TIMEOUT = 3000;
  
  constructor(options = {}) {
    this._host = options.host || AMCPClient.DEFAULT_HOST;
    this._port = options.port || AMCPClient.DEFAULT_PORT;
    this._connectionTimeout = options.connectionTimeout || AMCPClient.CONNECTION_TIMEOUT;

    this._connected = false;
    this._responseResolver = new ResponseResolver();
  }

  connect() {
    this._socket = io(`http://${this._host}:${this._port}`);

    return new Promise((resolve, reject) => {
      let connectionTimeout = setTimeout(() => {
        reject("connnection timed out");
      }, this._connectionTimeout);

      this._socket.on("connect", () => {
        this._responseResolver = new ResponseResolver();
        this._connected = true;
        clearTimeout(connectionTimeout);
        resolve();
        console.log(`Connection established to http://${this._host}:${this._port}.`)
      });

      this._socket.on("disconnect", () => {
        this._connected = false;
        console.log("Connection lost.");
      });
  
      this._socket.on("amcp_response", data => {
        if (this._responseResolver.expecting)
          return this._responseResolver.resolve(data);
        console.log("received: " + data);
      });
    });
  }

  disconnect() {
    if (!this._connected)
      throw new Error("socket is not connected");
    this._socket.disconnect();
  }

  sendCommand(command) {
    if (!this._connected)
      throw new Error("socket is not connected");
    const data = command.build() + "\r\n";
    console.log(`Sending command: ${JSON.stringify(data)}`);
    this._socket.emit("amcp", data);

    return this._responseResolver.async(data);
  }

  loadBG(options) {
    return this.sendCommand(new Commands.Basic.LOADBG(options));
  }

  load(options) {
    return this.sendCommand(new Commands.Basic.LOAD(options));
  }

  play(options) {
    return this.sendCommand(new Commands.Basic.PLAY(options));
  }

  pause(options) {
    return this.sendCommand(new Commands.Basic.PAUSE(options));
  }

  resume(options) {
    return this.sendCommand(new Commands.Basic.RESUME(options));
  }

  stop(options) {
    return this.sendCommand(new Commands.Basic.STOP(options));
  }

  clear(options) {
    return this.sendCommand(new Commands.Basic.CLEAR(options));
  }

  call(options) {
    return this.sendCommand(new Commands.Basic.CALL(options));
  }

  swap(options) {
    return this.sendCommand(new Commands.Basic.SWAP(options));
  }

  add(options) {
    return this.sendCommand(new Commands.Basic.ADD(options));
  }

  remove(options) {
    return this.sendCommand(new Commands.Basic.REMOVE(options));
  }

  print(options) {
    return this.sendCommand(new Commands.Basic.PRINT(options));
  }

  logLevel(options) {
    return this.sendCommand(new Commands.Basic.LOG__LEVEL(options));
  }

  logCategory(options) {
    return this.sendCommand(new Commands.Basic.LOG__CATEGORY(options));
  }

  set(options) {
    return this.sendCommand(new Commands.Basic.SET(options));
  }

  lock(options) {
    return this.sendCommand(new Commands.Basic.LOCK(options));
  }

  dataStore(options) {
    return this.sendCommand(new Commands.Data.STORE(options));
  }

  dataRetrieve(options) {
    return this.sendCommand(new Commands.Data.RETRIEVE(options));
  }

  dataList(options) {
    return this.sendCommand(new Commands.Data.LIST(options));
  }

  dataRemove(options) {
    return this.sendCommand(new Commands.Data.REMOVE(options));
  }

  mixerKeyer(options) {
    return this.sendCommand(new Commands.Mixer.KEYER(options));
  }

  mixerChroma(options) {
    return this.sendCommand(new Commands.Mixer.CHROMA(options));
  }

  mixerBlend(options) {
    return this.sendCommand(new Commands.Mixer.BLEND(options));
  }

  mixerInvert(options) {
    return this.sendCommand(new Commands.Mixer.INVERT(options));
  }

  mixerOpacity(options) {
    return this.sendCommand(new Commands.Mixer.OPACITY(options));
  }

  mixerBrightness(options) {
    return this.sendCommand(new Commands.Mixer.BRIGHTNESS(options));
  }

  mixerSaturation(options) {
    return this.sendCommand(new Commands.Mixer.SATURATION(options));
  }

  mixerContrast(options) {
    return this.sendCommand(new Commands.Mixer.CONTRAST(options));
  }

  mixerLevels(options) {
    return this.sendCommand(new Commands.Mixer.LEVELS(options));
  }

  mixerFill(options) {
    return this.sendCommand(new Commands.Mixer.FILL(options));
  }

  mixerClip(options) {
    return this.sendCommand(new Commands.Mixer.CLIP(options));
  }

  mixerAnchor(options) {
    return this.sendCommand(new Commands.Mixer.ANCHOR(options));
  }

  mixerCrop(options) {
    return this.sendCommand(new Commands.Mixer.CROP(options));
  }

  mixerRotation(options) {
    return this.sendCommand(new Commands.Mixer.ROTATION(options));
  }

  mixerPerspective(options) {
    return this.sendCommand(new Commands.Mixer.PERSPECTIVE(options));
  }

  mixerMipmap(options) {
    return this.sendCommand(new Commands.Mixer.MIPMAP(options));
  }

  mixerVolume(options) {
    return this.sendCommand(new Commands.Mixer.VOLUME(options));
  }

  mixerMasterVolume(options) {
    return this.sendCommand(new Commands.Mixer.MASTERVOLUME(options));
  }

  mixerStraightAlphaOutput(options) {
    return this.sendCommand(new Commands.Mixer.STRAIGHT_ALPHA_OUTPUT(options));
  }

  mixerGrid(options) {
    return this.sendCommand(new Commands.Mixer.GRID(options));
  }

  mixerCommit(options) {
    return this.sendCommand(new Commands.Mixer.COMMIT(options));
  }

  mixerClear(options) {
    return this.sendCommand(new Commands.Mixer.CLEAR(options));
  }

  mixerChannelGrid(options) {
    return this.sendCommand(new Commands.Mixer.CHANNEL_GRID(options));
  }

  cinf(options) {
    return this.sendCommand(new Commands.Query.CINF(options));
  }

  cls(options) {
    return this.sendCommand(new Commands.Query.CLS(options));
  }

  fls(options) {
    return this.sendCommand(new Commands.Query.FLS(options));
  }

  tls(options) {
    return this.sendCommand(new Commands.Query.TLS(options));
  }

  version(options) {
    return this.sendCommand(new Commands.Query.VERSION(options));
  }

  info(options) {
    return this.sendCommand(new Commands.Query.INFO(options));
  }

  infoTemplate(options) {
    return this.sendCommand(new Commands.Query.INFO__TEMPLATE(options));
  }

  infoConfig(options) {
    return this.sendCommand(new Commands.Query.INFO__CONFIG(options));
  }

  infoPaths(options) {
    return this.sendCommand(new Commands.Query.INFO__PATHS(options));
  }

  infoSystem(options) {
    return this.sendCommand(new Commands.Query.INFO__SYSTEM(options));
  }

  infoServer(options) {
    return this.sendCommand(new Commands.Query.INFO__SERVER(options));
  }

  infoQueues(options) {
    return this.sendCommand(new Commands.Query.INFO__QUEUES(options));
  }

  infoThreads(options) {
    return this.sendCommand(new Commands.Query.INFO__THREADS(options));
  }

  infoDelay(options) {
    return this.sendCommand(new Commands.Query.INFO__DELAY(options));
  }

  diag(options) {
    return this.sendCommand(new Commands.Query.DIAG(options));
  }

  glInfo(options) {
    return this.sendCommand(new Commands.Query.GL__INFO(options));
  }

  glGC(options) {
    return this.sendCommand(new Commands.Query.GL__GC(options));
  }

  bye(options) {
    return this.sendCommand(new Commands.Query.BYE(options));
  }

  kill(options) {
    return this.sendCommand(new Commands.Query.KILL(options));
  }

  restart(options) {
    return this.sendCommand(new Commands.Query.RESTART(options));
  }

  help(options) {
    return this.sendCommand(new Commands.Query.HELP(options));
  }

  templateAdd(options) {
    return this.sendCommand(new Commands.Template.ADD(options));
  }

  templatePlay(options) {
    return this.sendCommand(new Commands.Template.PLAY(options));
  }

  templateStop(options) {
    return this.sendCommand(new Commands.Template.STOP(options));
  }

  templateNext(options) {
    return this.sendCommand(new Commands.Template.NEXT(options));
  }

  templateRemove(options) {
    return this.sendCommand(new Commands.Template.REMOVE(options));
  }

  templateClear(options) {
    return this.sendCommand(new Commands.Template.CLEAR(options));
  }

  templateUpdate(options) {
    return this.sendCommand(new Commands.Template.UPDATE(options));
  }

  templateInvoke(options) {
    return this.sendCommand(new Commands.Template.INVOKE(options));
  }

  templateInfo(options) {
    return this.sendCommand(new Commands.Template.INFO(options));
  }

  thumbnailList(options) {
    return this.sendCommand(new Commands.Thumbnail.LIST(options));
  }

  thumbnailRetrieve(options) {
    return this.sendCommand(new Commands.Thumbnail.RETRIEVE(options));
  }

  thumbnailGenerate(options) {
    return this.sendCommand(new Commands.Thumbnail.GENERATE(options));
  }

  thumbnailGenerateAll(options) {
    return this.sendCommand(new Commands.Thumbnail.GENERATE_ALL(options));
  }
}

module.exports = { 
  AMCPClient
};
