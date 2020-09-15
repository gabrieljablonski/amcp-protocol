type Transition = "CUT" | "MIX" | "PUSH" | "WIPE" | "SLIDE";
type Direction = "LEFT" | "RIGHT" | "UP" | "DOWN";
type Blend = "Normal" | "Lighten" | "Darken" | "Multiply" | "Average" | "Add" | "Subtract" | "Difference" | "Negation" | "Exclusion" | "Screen" | "Overlay" | "Soft_Light" | "Hard_Light" | "Color_Dodge " | "Color_Burn" | "Linear_Dodge" | "Linear_Burn" | "Linear_Light" | "Vivid_Light" | "Pin_Light " | "Hard_Mix" | "Reflect" | "Glow" | "Phoenix" | "Contrast" | "Saturation" | "Color" | "Luminosity";
type Tween = "LINEAR" | "EASENONE" | "EASEINQUAD" | "EASEOUTQUAD" | "EASEINOUTQUAD" | "EASEOUTINQUAD" | "EASEINCUBIC" | "EASEOUTCUBIC" | "EASEINTOUTCUBIC" | "EASEOUTINTCUBIC" | "EASEINQUART" | "EASEOUTQUART" | "EASEINOUTQUART" | "EASEOUTINQUART" | "EASEINQUINT" | "EASEOUTQUINT" | "EASEINOUTQUINT" | "EASEOUTINQUINT" | "EASEINSINE" | "EASEOUTSINE" | "EASEINOUTSINE" | "EASEOUTINSINE" | "EASEINEXPO" | "EASEOUTEXPO" | "EASEINOUTEXPO" | "EASEOUTINEXPO" | "EASEINCIRC" | "EASEOUTCIRC" | "EASEINOUTCIRC" | "EASEOUTINCIRC" | "EASEINELASTIC" | "EASEOUTELASTIC" | "EASEINOUTELASTIC" | "EASEOUTINELASTIC" | "EASEINBACK" | "EASEOUTBACK" | "EASEINOUTBACK" | "EASEOUTINBACK" | "EASEOUTBOUNCE" | "EASEINBOUNCE" | "EASEINOUTBOUNCE" | "EASEOUTINBOUNCE";
type LogLevel = "TRACE" | "DEBUG" | "INFO" | "WARNING" | "ERROR" | "FATAL";
type LogCategory = "CALLTRACE" | "COMMUNICATION";
type ChannelVariable = "MODE" | "CHANNEL_LAYOUT";
type Action = "ACQUIRE" | "RELEASE" | "CLEAR";
type FFmpegFilter = "ADDROI" | "ALPHAEXTRACT" | "ALPHAMERGE" | "AMPLIFY" | "ASS" | "ATADENOISE" | "AVGBLUR" | "BBOX" | "BILATERAL" | "BITPLANENOISE" | "BLACKDETECT" | "BLACKFRAME" | "BLEND" | "BM3D" | "BOXBLUR" | "BWDIF" | "CAS" | "CHROMAHOLD" | "CHROMAKEY" | "CHROMANR" | "CHROMASHIFT" | "CIESCOPE" | "CODECVIEW" | "COLORBALANCE" | "COLORCHANNELMIXER" | "COLORKEY" | "COLORHOLD" | "COLORLEVELS" | "COLORMATRIX" | "COLORSPACE" | "CONVOLUTION" | "CONVOLVE" | "COPY" | "COREIMAGE" | "COVER_RECT" | "CROP" | "CROPDETECT" | "CUE" | "CURVES" | "DATASCOPE" | "DBLUR" | "DCTDNOIZ" | "DEBAND" | "DEBLOCK" | "DECIMATE" | "DECONVOLVE" | "DEDOT" | "DEFLATE" | "DEFLICKER" | "DEJUDDER" | "DELOGO" | "DERAIN" | "DESHAKE" | "DESPILL" | "DETELECINE" | "DILATION" | "DISPLACE" | "DNN_PROCESSING" | "DRAWBOX" | "DRAWGRAPH" | "DRAWGRID" | "DRAWTEXT" | "EDGEDETECT" | "ELBG" | "ENTROPY" | "EQ" | "EROSION" | "EXTRACTPLANES" | "FADE" | "FFTDNOIZ" | "FFTFILT" | "FIELD" | "FIELDHINT" | "FIELDMATCH" | "FIELDORDER" | "FIFO" | "FILLBORDERS" | "FIND_RECT" | "FLOODFILL" | "FORMAT" | "FPS" | "FRAMEPACK" | "FRAMERATE" | "FRAMESTEP" | "FREEZEDETECT" | "FREEZEFRAMES" | "FREI0R" | "FSPP" | "GBLUR" | "GEQ" | "GRADFUN" | "GRAPHMONITOR" | "GREYEDGE" | "HALDCLUT" | "HFLIP" | "HISTEQ" | "HISTOGRAM" | "HQDN3D" | "HWDOWNLOAD" | "HWMAP" | "HWUPLOAD" | "HWUPLOAD_CUDA" | "HQX" | "HSTACK" | "HUE" | "HYSTERESIS" | "IDET" | "IL" | "INFLATE" | "INTERLACE" | "KERNDEINT" | "LAGFUN" | "LENSCORRECTION" | "LENSFUN" | "LIBVMAF" | "LIMITER" | "LOOP" | "LUT1D" | "LUT3D" | "LUMAKEY" | "LUT" | "LUT2" | "MASKEDCLAMP" | "MASKEDMAX" | "MASKEDMERGE" | "MASKEDMIN" | "MASKEDTHRESHOLD" | "MASKFUN" | "MCDEINT" | "MEDIAN" | "MERGEPLANES" | "MESTIMATE" | "MIDEQUALIZER" | "MINTERPOLATE" | "MIX" | "MPDECIMATE" | "NEGATE" | "NLMEANS" | "NNEDI" | "NOFORMAT" | "NOISE" | "NORMALIZE" | "NULL" | "OCR" | "OCV" | "OSCILLOSCOPE" | "OVERLAY" | "OVERLAY_CUDA" | "OWDENOISE" | "PAD" | "PALETTEGEN" | "PALETTEUSE" | "PERSPECTIVE" | "PHASE" | "PHOTOSENSITIVITY" | "PIXDESCTEST" | "PIXSCOPE" | "PP" | "PP7" | "PREMULTIPLY" | "PREWITT" | "PSEUDOCOLOR" | "PSNR" | "PULLUP" | "QP" | "RANDOM" | "READEIA608" | "READVITC" | "REMAP" | "REMOVEGRAIN" | "REMOVELOGO" | "REPEATFIELDS" | "REVERSE" | "RGBASHIFT" | "ROBERTS" | "ROTATE" | "SAB" | "SCALE" | "SCALE_NPP" | "SCALE2REF" | "SCROLL" | "SCDET" | "SELECTIVECOLOR" | "SEPARATEFIELDS" | "SETDAR" | "SETFIELD" | "SETPARAMS" | "SHOWINFO" | "SHOWPALETTE" | "SHUFFLEFRAMES" | "SHUFFLEPLANES" | "SIGNALSTATS" | "SIGNATURE" | "SMARTBLUR" | "SOBEL" | "SPP" | "SR" | "SSIM" | "STEREO3D" | "STREAMSELECT" | "SUBTITLES" | "SUPER2XSAI" | "SWAPRECT" | "SWAPUV" | "TBLEND" | "TELECINE" | "THISTOGRAM" | "THRESHOLD" | "THUMBNAIL" | "TILE" | "TINTERLACE" | "TMEDIAN" | "TMIX" | "TONEMAP" | "TPAD" | "TRANSPOSE" | "TRANSPOSE_NPP" | "TRIM" | "UNPREMULTIPLY" | "UNSHARP" | "UNTILE" | "USPP" | "V360" | "VAGUEDENOISER" | "VECTORSCOPE" | "VIDSTABDETECT" | "VIDSTABTRANSFORM" | "VFLIP" | "VFRDET" | "VIBRANCE" | "VIGNETTE" | "VMAFMOTION" | "VSTACK" | "W3FDIF" | "WAVEFORM" | "WEAVE" | "XBR" | "XFADE" | "XMEDIAN" | "XSTACK" | "YADIF" | "YADIF_CUDA" | "YAEPBLUR" | "ZOOMPAN" | "ZSCALE" | "ADDROI" | "ALPHAEXTRACT" | "ALPHAMERGE" | "AMPLIFY" | "ASS" | "ATADENOISE" | "AVGBLUR" | "BBOX" | "BILATERAL" | "BITPLANENOISE" | "BLACKDETECT" | "BLACKFRAME" | "BLEND" | "BM3D" | "BOXBLUR" | "BWDIF" | "CAS" | "CHROMAHOLD" | "CHROMAKEY" | "CHROMANR" | "CHROMASHIFT" | "CIESCOPE" | "CODECVIEW" | "COLORBALANCE" | "COLORCHANNELMIXER" | "COLORKEY" | "COLORHOLD" | "COLORLEVELS" | "COLORMATRIX" | "COLORSPACE" | "CONVOLUTION" | "CONVOLVE" | "COPY" | "COREIMAGE" | "COVER_RECT" | "CROP" | "CROPDETECT" | "CUE" | "CURVES" | "DATASCOPE" | "DBLUR" | "DCTDNOIZ" | "DEBAND" | "DEBLOCK" | "DECIMATE" | "DECONVOLVE" | "DEDOT" | "DEFLATE" | "DEFLICKER" | "DEJUDDER" | "DELOGO" | "DERAIN" | "DESHAKE" | "DESPILL" | "DETELECINE" | "DILATION" | "DISPLACE" | "DNN_PROCESSING" | "DRAWBOX" | "DRAWGRAPH" | "DRAWGRID" | "DRAWTEXT" | "EDGEDETECT" | "ELBG" | "ENTROPY" | "EQ" | "EROSION" | "EXTRACTPLANES" | "FADE" | "FFTDNOIZ" | "FFTFILT" | "FIELD" | "FIELDHINT" | "FIELDMATCH" | "FIELDORDER" | "FIFO" | "FILLBORDERS" | "FIND_RECT" | "FLOODFILL" | "FORMAT" | "FPS" | "FRAMEPACK" | "FRAMERATE" | "FRAMESTEP" | "FREEZEDETECT" | "FREEZEFRAMES" | "FREI0R" | "FSPP" | "GBLUR" | "GEQ" | "GRADFUN" | "GRAPHMONITOR" | "GREYEDGE" | "HALDCLUT" | "HFLIP" | "HISTEQ" | "HISTOGRAM" | "HQDN3D" | "HWDOWNLOAD" | "HWMAP" | "HWUPLOAD" | "HWUPLOAD_CUDA" | "HQX" | "HSTACK" | "HUE" | "HYSTERESIS" | "IDET" | "IL" | "INFLATE" | "INTERLACE" | "KERNDEINT" | "LAGFUN" | "LENSCORRECTION" | "LENSFUN" | "LIBVMAF" | "LIMITER" | "LOOP" | "LUT1D" | "LUT3D" | "LUMAKEY" | "LUT" | "LUT2" | "MASKEDCLAMP" | "MASKEDMAX" | "MASKEDMERGE" | "MASKEDMIN" | "MASKEDTHRESHOLD" | "MASKFUN" | "MCDEINT" | "MEDIAN" | "MERGEPLANES" | "MESTIMATE" | "MIDEQUALIZER" | "MINTERPOLATE" | "MIX" | "MPDECIMATE" | "NEGATE" | "NLMEANS" | "NNEDI" | "NOFORMAT" | "NOISE" | "NORMALIZE" | "NULL" | "OCR" | "OCV" | "OSCILLOSCOPE" | "OVERLAY" | "OVERLAY_CUDA" | "OWDENOISE" | "PAD" | "PALETTEGEN" | "PALETTEUSE" | "PERSPECTIVE" | "PHASE" | "PHOTOSENSITIVITY" | "PIXDESCTEST" | "PIXSCOPE" | "PP" | "PP7" | "PREMULTIPLY" | "PREWITT" | "PSEUDOCOLOR" | "PSNR" | "PULLUP" | "QP" | "RANDOM" | "READEIA608" | "READVITC" | "REMAP" | "REMOVEGRAIN" | "REMOVELOGO" | "REPEATFIELDS" | "REVERSE" | "RGBASHIFT" | "ROBERTS" | "ROTATE" | "SAB" | "SCALE" | "SCALE_NPP" | "SCALE2REF" | "SCROLL" | "SCDET" | "SELECTIVECOLOR" | "SEPARATEFIELDS" | "SETDAR" | "SETFIELD" | "SETPARAMS" | "SHOWINFO" | "SHOWPALETTE" | "SHUFFLEFRAMES" | "SHUFFLEPLANES" | "SIGNALSTATS" | "SIGNATURE" | "SMARTBLUR" | "SOBEL" | "SPP" | "SR" | "SSIM" | "STEREO3D" | "STREAMSELECT" | "SUBTITLES" | "SUPER2XSAI" | "SWAPRECT" | "SWAPUV" | "TBLEND" | "TELECINE" | "THISTOGRAM" | "THRESHOLD" | "THUMBNAIL" | "TILE" | "TINTERLACE" | "TMEDIAN" | "TMIX" | "TONEMAP" | "TPAD" | "TRANSPOSE" | "TRANSPOSE_NPP" | "TRIM" | "UNPREMULTIPLY" | "UNSHARP" | "UNTILE" | "USPP" | "V360" | "VAGUEDENOISER" | "VECTORSCOPE" | "VIDSTABDETECT" | "VIDSTABTRANSFORM" | "VFLIP" | "VFRDET" | "VIBRANCE" | "VIGNETTE" | "VMAFMOTION" | "VSTACK" | "W3FDIF" | "WAVEFORM" | "WEAVE" | "XBR" | "XFADE" | "XMEDIAN" | "XSTACK" | "YADIF" | "YADIF_CUDA" | "YAEPBLUR" | "ZOOMPAN" | "ZSCALE";

type AMCPClientOptions = {
  host?: string | "localhost";
  port?: number | 52500;
  connectionTimeout?: number | 3000;
};

type OptionsWithChannelLayer = {
  channel: number;
  layer?: number;
};

type OptionsLoadPlay = OptionsWithChannelLayer & {
  clip: string;
  loop?: boolean;
  transition?: Transition;
  duration?: number;
  tween?: Tween;
  direction?: Direction;
  seek?: number;
  length?: number;
  filterType?: FFmpegFilter;
  auto?: boolean;
};

type OptionsCall = OptionsWithChannelLayer & {
  parameters?: string;
};

type OptionsSwap = {
  firstChannel: number;
  firstLayer?: number;
  secondChannel: number;
  secondLayer?: number;
  transforms?: boolean;
};

type OptionsAdd = OptionsWithChannelLayer & {
  consumerIndex?: number;
  consumer: string;
  parameters: string;
};

type OptionsRemove = OptionsWithChannelLayer & {
  consumerIndex?: number;
  parameters?: string;
};

type OptionsLogLevel = {
  level: LogLevel;
};

type OptionsLogCategory = {
  category: LogCategory;
  enable: boolean;
};

type OptionsSet = {
  channel: number;
  variable: ChannelVariable;
  value: string;
};

type OptionsLock = {
  channel: number;
  action: Action;
  lockPhrase?: string;
};

type OptionsDataStore = {
  path: string;
  data: string | object;
};

type OptionsDataRetrieve = {
  path: string;
};

type OptionsDataList = {
  subdirectory?: string;
};

type OptionsDataRemove = {
  path: string;
};

type OptionsMixerKeyer = OptionsWithChannelLayer & {
  keyer?: boolean;
};

type OptionsMixerChroma = OptionsWithChannelLayer & {
  enable?: boolean;
  targetHue?: number;
  hueWidth?: number;
  minSaturation?: number;
  minBrightness?: number;
  softness?: number;
  spillSuppress?: number;
  spillSuppressSaturation?: number;
  showMask?: boolean;
  duration?: number;
  tween?: Tween;
};

type OptionsMixerBlend = OptionsWithChannelLayer & {
  blend?: Blend;
};

type OptionsMixerInvert = OptionsWithChannelLayer & {
  invert?: boolean;
};

type OptionsValueDurationTween = {
  value?: number;
  duration?: number;
  tween?: Tween;
};

type OptionsMixerOpacity = OptionsWithChannelLayer & OptionsValueDurationTween;

type OptionsMixerBrightness = OptionsWithChannelLayer & OptionsValueDurationTween;

type OptionsMixerSaturation = OptionsWithChannelLayer & OptionsValueDurationTween;

type OptionsMixerContrast = OptionsWithChannelLayer & OptionsValueDurationTween;

type OptionsMixerLevels = OptionsWithChannelLayer & {
  minInput?: number;
  maxInput?: number;
  gamma?: number;
  minOutput?: number;
  maxOutput?: number;
  duration?: number;
  tween?: Tween;
};

type OptionsMixerFill = OptionsWithChannelLayer & {
  x?: number;
  y?: number;
  xScale?: number;
  yScale?: number;
  duration?: number;
  tween?: Tween;
};

type OptionsMixerClip = OptionsWithChannelLayer & {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  duration?: number;
  tween?: Tween;
};

type OptionsMixerAnchor = OptionsWithChannelLayer & {
  x?: number;
  y?: number;
  duration?: number;
  tween?: Tween;
};

type OptionsMixerCrop = OptionsWithChannelLayer & {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  duration?: number;
  tween?: Tween;
};

type OptionsMixerRotation = OptionsWithChannelLayer & {
  angle?: number;
  duration?: number;
  tween?: Tween;
};

type OptionsMixerPerspective = OptionsWithChannelLayer & {
  topLeftX?: number;
  topLeftY?: number;
  topRightX?: number;
  topRightY?: number;
  bottomRightX?: number;
  bottomRightY?: number;
  bottomLeftX?: number;
  bottomLeftY?: number;
  duration?: number;
  tween?: Tween;
};

type OptionsMixerMipmap = OptionsWithChannelLayer & {
  enable?: boolean;
};

type OptionsMixerVolume = OptionsWithChannelLayer & OptionsValueDurationTween;

type OptionsMixerMasterVolume = OptionsWithChannelLayer & {
  value?: number;
};

type OptionsMixerStraightAlphaOutput = OptionsWithChannelLayer & {
  enable?: boolean;
};

type OptionsMixerGrid = OptionsWithChannelLayer & {
  resolution: number;
  duration?: number;
  tween?: Tween;
};

type OptionsMixerCommit = OptionsWithChannelLayer;

type OptionsMixerClear = OptionsWithChannelLayer;

type OptionsCINF = {
  filePath: string;
};

type OptionsCLS = {
  subdirectory?: string;
};

type OptionsTLS = {
  subdirectory?: string;
};

type OptionsVersion = {
  component?: string;
};

type OptionsInfo = {
  channel?: number;
  layer?: number;
};

type OptionsInfoTemplate = {
  template: string;
};

type OptionsInfoDelay = OptionsWithChannelLayer;

type OptionsHelp = {
  producerOrConsumer?: string;
  reference?: string;
};

type OptionsTemplateBase = OptionsWithChannelLayer & {
  cgLayer: number;
};

type OptionsTemplateAdd = OptionsTemplateBase & {
  template: string;
  playOnLoad: boolean;
  data?: string;
};

type OptionsTemplatePlay = OptionsTemplateBase;

type OptionsTemplateStop = OptionsTemplateBase;

type OptionsTemplateNext = OptionsTemplateBase;

type OptionsTemplateRemove = OptionsTemplateBase;

type OptionsTemplateClear = OptionsWithChannelLayer & {
  cgLayer?: number;
};

type OptionsTemplateUpdate = OptionsTemplateBase & {
  data: string;
};

type OptionsTemplateInvoke = OptionsTemplateBase & {
  method: string;
};

type OptionsTemplateInfo = OptionsWithChannelLayer & {
  cgLayer?: number;
};

type OptionsThumbnailList = {
  subdirectory?: string;
};

type OptionsThumbnailRetrieve = {
  path: string;
};

type OptionsThumbnailGenerate = {
  path: string;
};

type Paths = {
  mediaPath: string;
  logPath: string;
  dataPath: string;
  templatePath: string;
};

type Channel = {
  videoMode: "PAL" | "NTSC" | "576p2500" | "720p2398" | "720p2400" | "720p2500" | "720p5000" | "720p2997" | "720p5994" | "720p3000" | "720p6000" | "1080p2398" | "1080p2400" | "1080i5000" | "1080i5994" | "1080i6000" | "1080p2500" | "1080p2997" | "1080p3000" | "1080p5000" | "1080p5994" | "1080p6000" | "1556p2398" | "1556p2400" | "1556p2500" | "dci1080p2398" | "dci1080p2400" | "dci1080p2500" | "2160p2398" | "2160p2400" | "2160p2500" | "2160p2997" | "2160p3000" | "2160p5000" | "2160p5994" | "2160p6000" | "dci2160p2398" | "dci2160p2400" | "dci2160p2500";
  consumers: [Consumer];
};

type CasparConfig = {
  paths: Paths;
  lockClearPhrase: string;
  channels: [Channel];
  xml: string;
};

type ChannelInfo = {
  framerate: object;
  mixer: object;
  stage: object;
};

type MediaInfo = {
  name: string;
  type: "STILL" | "MOVIE" | "AUDIO";
  size: number;
  lastModified: Date;
  frameCount: number;
  frameRate: string;
};

type Response = {
  code: number;
  command: string;
  status: "OK" | "ERROR" | "FAILED";
  rawData: string;
};

type ResponseDataRetrieve = Response & {
  parsedData: object;
};

type ResponseInfo = Response & {
  parsedData: ChannelInfo;
};

type ResponseInfoConfig = Response & {
  parsedData: CasparConfig;
};

type ResponseCINF = Response & {
  parsedData: MediaInfo;
};

type ResponseCLS = Response & {
  parsedData: [MediaInfo];
};

export class AMCPClient {
  constructor(options: AMCPClientOptions);

  connect(): Promise;
  disconnect(): void;
  sendCommand(command: Command): Promise<Response>;
  saveConfig(config: CasparConfig): Promise<Response>;

  loadBG(options?: OptionsLoadPlay): Promise<Response>;
  load(options?: OptionsLoadPlay): Promise<Response>;
  play(options?: OptionsLoadPlay): Promise<Response>;
  pause(options?: OptionsWithChannelLayer): Promise<Response>;
  resume(options?: OptionsWithChannelLayer): Promise<Response>;
  stop(options?: OptionsWithChannelLayer): Promise<Response>;
  clear(options?: OptionsWithChannelLayer): Promise<Response>;
  call(options?: OptionsCall): Promise<Response>;
  swap(options?: OptionsSwap): Promise<Response>;
  add(options?: OptionsAdd): Promise<Response>;
  remove(options?: OptionsRemove): Promise<Response>;
  print(options?: OptionsWithChannelLayer): Promise<Response>;
  logLevel(options?: OptionsLogLevel): Promise<Response>;
  logCategory(options?: OptionsLogCategory): Promise<Response>;
  set(options?: OptionsSet): Promise<Response>;
  lock(options?: OptionsLock): Promise<Response>;
  dataStore(options?: OptionsDataStore): Promise<Response>;
  dataRetrieve(options?: OptionsDataRetrieve): Promise<ResponseDataRetrieve>;
  dataList(options?: OptionsDataList): Promise<Response>;
  dataRemove(options?: OptionsDataRemove): Promise<Response>;
  mixerKeyer(options?: OptionsMixerKeyer): Promise<Response>;
  mixerChroma(options?: OptionsMixerChroma): Promise<Response>;
  mixerBlend(options?: OptionsMixerBlend): Promise<Response>;
  mixerInvert(options?: OptionsMixerInvert): Promise<Response>;
  mixerOpacity(options?: OptionsMixerOpacity): Promise<Response>;
  mixerBrightness(options?: OptionsMixerBrightness): Promise<Response>;
  mixerSaturation(options?: OptionsMixerSaturation): Promise<Response>;
  mixerContrast(options?: OptionsMixerContrast): Promise<Response>;
  mixerLevels(options?: OptionsMixerLevels): Promise<Response>;
  mixerFill(options?: OptionsMixerFill): Promise<Response>;
  mixerClip(options?: OptionsMixerClip): Promise<Response>;
  mixerAnchor(options?: OptionsMixerAnchor): Promise<Response>;
  mixerCrop(options?: OptionsMixerCrop): Promise<Response>;
  mixerRotation(options?: OptionsMixerRotation): Promise<Response>;
  mixerPerspective(options?: OptionsMixerPerspective): Promise<Response>;
  mixerMipmap(options?: OptionsMixerMipmap): Promise<Response>;
  mixerVolume(options?: OptionsMixerVolume): Promise<Response>;
  mixerMasterVolume(options?: OptionsMixerMasterVolume): Promise<Response>;
  mixerStraightAlphaOutput(options?: OptionsMixerStraightAlphaOutput): Promise<Response>;
  mixerGrid(options?: OptionsMixerGrid): Promise<Response>;
  mixerCommit(options?: OptionsMixerCommit): Promise<Response>;
  mixerClear(options?: OptionsMixerClear): Promise<Response>;
  mixerChannelGrid(): Promise<Response>;
  cinf(options?: OptionsCINF): Promise<ResponseCINF>;
  cls(options?: OptionsCLS): Promise<ResponseCLS>;
  fls(): Promise<Response>;
  tls(options?: OptionsTLS): Promise<Response>;
  version(options?: OptionsVersion): Promise<Response>;
  info(options?: OptionsInfo): Promise<ResponseInfo>;
  infoTemplate(options?: OptionsInfoTemplate): Promise<Response>;
  infoConfig(): Promise<ResponseInfoConfig>;
  infoPaths(): Promise<Response>;
  infoSystem(): Promise<Response>;
  infoServer(): Promise<Response>;
  infoQueues(): Promise<Response>;
  infoThreads(): Promise<Response>;
  infoDelay(options?: OptionsInfoDelay): Promise<Response>;
  diag(): Promise<Response>;
  glInfo(): Promise<Response>;
  glGC(): Promise<Response>;
  bye(): Promise<Response>;
  kill(): Promise<Response>;
  restart(): Promise<Response>;
  help(options?: OptionsHelp): Promise<Response>;
  templateAdd(options?: OptionsTemplateAdd): Promise<Response>;
  templatePlay(options?: OptionsTemplatePlay): Promise<Response>;
  templateStop(options?: OptionsTemplateStop): Promise<Response>;
  templateNext(options?: OptionsTemplateNext): Promise<Response>;
  templateRemove(options?: OptionsTemplateRemove): Promise<Response>;
  templateClear(options?: OptionsTemplateClear): Promise<Response>;
  templateUpdate(options?: OptionsTemplateUpdate): Promise<Response>;
  templateInvoke(options?: OptionsTemplateInvoke): Promise<Response>;
  templateInfo(options?: OptionsTemplateInfo): Promise<Response>;
  thumbnailList(options?: OptionsThumbnailList): Promise<Response>;
  thumbnailRetrieve(options?: OptionsThumbnailRetrieve): Promise<Response>;
  thumbnailGenerate(options?: OptionsThumbnailGenerate): Promise<Response>;
  thumbnailGenerateAll(): Promise<Response>;
};
