class Info {
  static NO_DATA = 100
  static WITH_DATA = 101
}
    

class Successful {
  static WITH_DATA_MULTILINE = 200;
  static WITH_DATA = 201;
  static NO_DATA = 202;
}
    

class ClientError {
  static DEFAULT_WITH_DATA = 400;
  static ILLEGAL_VIDEO_CHANNEL = 401;
  static PARAMETER_MISSING = 402;
  static ILLEGAL_PARAMETER = 403;
  static MEDIA_FILE_NOT_FOUND = 404;
}
    

class ServerError {
  static DEFAULT_INTERNAL_SERVER_ERROR = 500;
  static INTERNAL_SERVER_ERROR = 501;
  static MEDIA_FILE_UNREADABLE = 502;
  static ACCESS_ERROR = 503;
}

module.exports = {
  Info,
  Successful,
  ClientError,
  ServerError,
};
