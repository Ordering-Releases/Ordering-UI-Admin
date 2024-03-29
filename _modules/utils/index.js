"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.widgetURL = exports.verifyDecimals = exports.stringToSlug = exports.sortInputFields = exports.shape = exports.setStorageItem = exports.scrollTo = exports.ribbonValues = exports.reviewCommentList = exports.removeStorageItem = exports.removeQueryToUrl = exports.queryStringToObject = exports.orderStatus = exports.orderRejectCommentList = exports.optimizeImage = exports.getUniqueId = exports.getStorageItem = exports.getStarWidth = exports.getSeconds = exports.getOrderStatus = exports.getOrderStatuPickUp = exports.getMinutes = exports.getLocale = exports.getIconCard = exports.getHours = exports.getCurrenySymbol = exports.getCurrentDiffDays = exports.getAttributeName = exports.getAgoMinutes = exports.formatUrlVideo = exports.formatSeconds = exports.firstLetterCapital = exports.findExitingCountryPhoneCode = exports.findExitingCode = exports.fieldsToSort = exports.disableReasons = exports.convertHoursToMinutes = exports.convertHMS = exports.checkValidUrlFormat = exports.checkSiteUrl = exports.checkPreSiteUrl = exports.capitalize = exports.bytesConverter = exports.addQueryToUrl = exports.TwentyFourHours = exports.TwelveHours = exports.DriverTipsOptions = void 0;
var _react = _interopRequireDefault(require("react"));
var _FaCcMastercard = _interopRequireDefault(require("@meronex/icons/fa/FaCcMastercard"));
var _FaCcVisa = _interopRequireDefault(require("@meronex/icons/fa/FaCcVisa"));
var _FaCreditCard = _interopRequireDefault(require("@meronex/icons/fa/FaCreditCard"));
var _moment = _interopRequireDefault(require("moment"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _currency = require("../config/currency.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var optimizeImage = function optimizeImage(url, params, fallback) {
  if (!url && fallback) return fallback;
  params = params && params.length > 0 ? ",".concat(params) : '';
  if (url != null && url.indexOf('res.cloudinary.com') !== -1) {
    var parts = url.split('upload');
    url = "".concat(parts[0], "upload/f_auto,q_auto").concat(params).concat(parts[1]);
  }
  return url;
};
exports.optimizeImage = optimizeImage;
var getIconCard = function getIconCard() {
  var brand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var value = brand === null || brand === void 0 ? void 0 : brand.toLowerCase();
  switch (value) {
    case 'visa':
      return /*#__PURE__*/_react.default.createElement(_FaCcVisa.default, null);
    case 'mastercard':
      return /*#__PURE__*/_react.default.createElement(_FaCcMastercard.default, null);
    default:
      return /*#__PURE__*/_react.default.createElement(_FaCreditCard.default, null);
  }
};
/**
 * Function to get unique id
 */
exports.getIconCard = getIconCard;
var getUniqueId = function getUniqueId() {
  var dateString = Date.now().toString(36);
  var randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

/**
 * Function to convert a string in string capitalized
 * @param {string} str string to capitalize
 */
exports.getUniqueId = getUniqueId;
var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.capitalize = capitalize;
var DriverTipsOptions = [0, 10, 15, 20, 25];

/**
 * Function to calculate time to scroll element
 * @param {*} t = current time
 * @param {*} b = start value
 * @param {*} c = change in value
 * @param {*} d = duration
 */
exports.DriverTipsOptions = DriverTipsOptions;
var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

/**
 * Function to do scroll of one element to another
 * @param {*} element = parent element
 * @param {*} to = position Top of child element
 * @param {*} duration = time to animation
 */
var scrollTo = function scrollTo(element, to, duration) {
  var start = element.scrollTop;
  var change = to - start;
  var currentTime = 0;
  var increment = 20;
  var animateScroll = function animateScroll() {
    currentTime += increment;
    var val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration && val > 0) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
};

/**
 * Function to get formatted link to include in iframes
 * @param {string} url = youtube - vimeo link video
 */
exports.scrollTo = scrollTo;
var formatUrlVideo = function formatUrlVideo(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  var id = match && match[7].length === 11 ? match[7] : false;
  return "https://www.youtube-nocookie.com/embed/".concat(id);
};

/**
 * Function to convert delivery time in minutes
 * @param {string} time business delivery time
 */
exports.formatUrlVideo = formatUrlVideo;
var convertHoursToMinutes = function convertHoursToMinutes(time) {
  if (!time) return '0min';
  var _time$split = time.split(':'),
    _time$split2 = _slicedToArray(_time$split, 2),
    hour = _time$split2[0],
    minute = _time$split2[1];
  var result = parseInt(hour, 10) * 60 + parseInt(minute, 10);
  return "".concat(result, "min");
};

/**
 * Function to convert star rate in width to display
 * @param {int} qualification star rate or qualification
 */
exports.convertHoursToMinutes = convertHoursToMinutes;
var getStarWidth = function getStarWidth(qualification) {
  if (qualification) {
    return qualification / 5 * 100 + '%';
  } else {
    return '0%';
  }
};

/**
 * Function to calculate differnece with current time in minutes
 * @param {string} time past time
 */
exports.getStarWidth = getStarWidth;
var getAgoMinutes = function getAgoMinutes(time) {
  var totalMinutes = (((0, _moment.default)().utc() - (0, _moment.default)(time)) / 1000 / 60).toFixed(0);
  var totalHours = Math.floor(totalMinutes / 60);
  var minutes = totalMinutes - totalHours * 60;
  var days = Math.floor(totalHours / 24);
  var hours = totalHours - days * 24;
  if (days > 0) {
    return "-".concat(days, " days ").concat(hours, ":").concat(minutes, " hrs");
  } else if (hours > 0) {
    return "-".concat(hours, ":").concat(minutes, " hrs");
  } else return "-00:".concat(minutes, " hrs");
};

/**
 * Function to transform bytes to kb
 * @param {number} bytes for transform
 *
 */
exports.getAgoMinutes = getAgoMinutes;
var bytesConverter = function bytesConverter(bytes) {
  return Math.floor(bytes / 1024);
};

/**
 * Function to get language settins by language code
 * @param {string} code // language code
 * @param {any} locales // language settings
 */
exports.bytesConverter = bytesConverter;
var getLocale = function getLocale(code, locales) {
  var locale = locales === null || locales === void 0 ? void 0 : locales[code];
  if (code === 'es-419-1' || code === 'es-419-2') locale = locales === null || locales === void 0 ? void 0 : locales.es;
  if (code === 'zh-CN') locale = locales === null || locales === void 0 ? void 0 : locales.zhCN;
  if (code === 'ar') locale = locales === null || locales === void 0 ? void 0 : locales.arSA;
  if (code === 'kn') locale = locales === null || locales === void 0 ? void 0 : locales.ta;
  if (code === 'km') locale = locales === null || locales === void 0 ? void 0 : locales.th;
  if (!locale) return locales === null || locales === void 0 ? void 0 : locales.enUS;
  return locale;
};

/**
 * List of fields with correct order
 */
exports.getLocale = getLocale;
var fieldsToSort = ['name', 'middle_name', 'lastname', 'second_lastname', 'email'];

/**
  * Function to return a array sorted by certain fields
  * @param fields Array with right order
  * @param array Array to sort
  */
exports.fieldsToSort = fieldsToSort;
var sortInputFields = function sortInputFields(_ref) {
  var fields = _ref.fields,
    values = _ref.values;
  var fieldsBase = fields;
  var fieldsSorted = [];
  var fieldsArray = Array.isArray(values) ? values : Object.values(values);
  if (!fieldsBase) {
    fieldsBase = fieldsToSort;
  }
  fieldsBase.forEach(function (f) {
    fieldsArray.forEach(function (field) {
      if (f === field.code) {
        fieldsSorted.push(field);
      }
    });
  });
  return fieldsSorted;
};

/**
 * Function to covert seconds into remain hours
 * @param {Number} seconds
 */
exports.sortInputFields = sortInputFields;
var getHours = function getHours(seconds) {
  return seconds * 1 / 3600 > 1 ? Math.floor(seconds * 1 / 3600) : 0;
};

/**
 * Function to covert seconds into remain Minutes
 * @param {Number} seconds
 */
exports.getHours = getHours;
var getMinutes = function getMinutes(seconds) {
  return Math.floor((seconds - Math.floor(seconds / 3600) * 3600) / 60);
};

/**
 * Function to covert seconds into remain Seconds
 * @param {Number} seconds
 */
exports.getMinutes = getMinutes;
var getSeconds = function getSeconds(seconds) {
  var remain = seconds - Math.floor(seconds / 3600) * 3600;
  return Math.floor(remain - Math.floor(remain / 60) * 60);
};
exports.getSeconds = getSeconds;
var findExitingCode = function findExitingCode(countryCode) {
  var code = _orderingComponentsAdminExternal.CODES.find(function (code) {
    return code.countryCode === (countryCode || '').toUpperCase();
  });
  return code === null || code === void 0 ? void 0 : code.countryCode;
};
exports.findExitingCode = findExitingCode;
var findExitingCountryPhoneCode = function findExitingCountryPhoneCode(countryCode) {
  var code = _orderingComponentsAdminExternal.CODES.find(function (code) {
    return code.countryCode === (countryCode || '').toUpperCase();
  });
  return code === null || code === void 0 ? void 0 : code.phoneCode;
};

/**
 * Function to check if a number is decimal or not
 * @param {*} value number to check if decimal or not
 * @param {*} parser function fallback when is decimal
 * @returns string
 */
exports.findExitingCountryPhoneCode = findExitingCountryPhoneCode;
var verifyDecimals = function verifyDecimals(value, parser) {
  if (value % 1 === 0) {
    return value;
  } else {
    return parser(value);
  }
};

/**
 * Fuctions to control the local storage
 */
exports.verifyDecimals = verifyDecimals;
var getStorageItem = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(storageKey, isJson) {
    var value;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return window.localStorage.getItem(storageKey);
        case 2:
          value = _context.sent;
          if (!(isJson && _typeof(value) !== 'object')) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", JSON.parse(value));
        case 5:
          return _context.abrupt("return", value);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getStorageItem(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getStorageItem = getStorageItem;
var setStorageItem = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(key, val, isJson) {
    var value;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          value = isJson ? JSON.stringify(val) : val;
          _context2.next = 3;
          return window.localStorage.setItem(key, value);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function setStorageItem(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.setStorageItem = setStorageItem;
var removeStorageItem = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(key) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return window.localStorage.removeItem(key);
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function removeStorageItem(_x7) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * Fuctions to convert formatted time from seconds
 */
exports.removeStorageItem = removeStorageItem;
var convertHMS = function convertHMS(value) {
  var sec = parseInt(value, 10); // convert value to number if it's string
  var absSec = Math.abs(sec);
  var hours = Math.floor(absSec / 3600); // get hours
  var minutes = Math.floor((absSec - hours * 3600) / 60); // get minutes
  var seconds = absSec - hours * 3600 - minutes * 60; //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return sec < 0 ? '-' : '' + (hours === '00' ? '' : hours + ':') + minutes + ':' + seconds; // Return is HH : MM : SS
};

/**
 * List shape for ribbon
 */
exports.convertHMS = convertHMS;
var shape = {
  rectangle: 'rectangle',
  rectangleRound: 'rectangle_round',
  capsuleShape: 'capsule_shape'
};

/**
 * Function to check URL
 * @param {string} url URL of page
 * @param {string} fallback default URL
 */
exports.shape = shape;
var checkPreSiteUrl = function checkPreSiteUrl(url, fallback) {
  if (!url) return fallback;
  return url[0] === '/' ? url : "/".concat(url);
};

/**
 * Function to validate URL
 * @param {string} url URL of page
 */
exports.checkPreSiteUrl = checkPreSiteUrl;
var checkValidUrlFormat = function checkValidUrlFormat(url) {
  if (!url) return;
  var pattern = new RegExp('^(https?:\\/\\/)?' +
  // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
  // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' +
  // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
  // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' +
  // query string
  '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

  return pattern.test(url);
};

/**
 * default value for bitton
 */
exports.checkValidUrlFormat = checkValidUrlFormat;
var ribbonValues = {
  color: '#0083FE',
  text: 'ribbon',
  shape: 'rectangle',
  enabled: false
};
/**
 * Format seconds to hh:mm:ss
 * @param {number} seconds
 */
exports.ribbonValues = ribbonValues;
var formatSeconds = function formatSeconds(seconds) {
  // Hours, minutes and seconds
  var hrs = Math.floor(seconds / 3600);
  var mins = Math.floor(seconds % 3600 / 60);
  var secs = Math.floor(seconds % 60);

  // Output like '1:01' or '4:03:59' or '123:03:59'
  var ret = '';
  if (hrs > 0) {
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
  }
  ret += '' + mins + ':' + (secs < 10 ? '0' : '');
  ret += '' + secs;
  return ret;
};

/**
 * Function to check URL
 * @param {string} url URL of page
 * @param {string} fallback default URL
 */
exports.formatSeconds = formatSeconds;
var checkSiteUrl = function checkSiteUrl(url, fallback) {
  if (!url) return fallback;
  return url[(url === null || url === void 0 ? void 0 : url.length) - 1] === '/' ? url : "".concat(url, "/");
};

/**
 * function to manage review comment list
 * @param {number} param0 type of reviews to return
 * @returns object with reviews dictionary
 */
exports.checkSiteUrl = checkSiteUrl;
var reviewCommentList = function reviewCommentList(type) {
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var reviews = {
    1: {
      1: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_1', 'What went wrong?'),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_1_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_1_1', 'Poor communication')
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_1_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('CUSTOMER_QUICK_COMMENT_1_3', "Didn't follow instructions")
        }, {
          key: 4,
          content: t('CUSTOMER_QUICK_COMMENT_1_4', 'Rude')
        }, {
          key: 5,
          content: t('CUSTOMER_QUICK_COMMENT_1_5', 'Not on-time')
        }]
      },
      2: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_2', 'What went wrong?'),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_2_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_2_1', 'Poor communication')
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_2_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('CUSTOMER_QUICK_COMMENT_2_3', "Didn't follow instructions")
        }, {
          key: 4,
          content: t('CUSTOMER_QUICK_COMMENT_2_4', 'Rude')
        }, {
          key: 5,
          content: t('CUSTOMER_QUICK_COMMENT_2_5', 'Not on-time')
        }]
      },
      3: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_3', 'What could have been better?'),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_3_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_3_1', 'Poor communication')
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_3_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('CUSTOMER_QUICK_COMMENT_3_3', "Didn't follow instructions")
        }, {
          key: 4,
          content: t('CUSTOMER_QUICK_COMMENT_3_4', 'Rude')
        }, {
          key: 5,
          content: t('CUSTOMER_QUICK_COMMENT_3_5', 'Not on-time')
        }]
      },
      4: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_4', ' Tell us more'),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_4_0', 'Not handled with care')
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_4_1', 'Poor communication')
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_4_2', 'COVID-19 issue')
        }, {
          key: 3,
          content: t('CUSTOMER_QUICK_COMMENT_4_3', "Didn't follow instructions")
        }, {
          key: 4,
          content: t('CUSTOMER_QUICK_COMMENT_4_4', 'Rude')
        }, {
          key: 5,
          content: t('CUSTOMER_QUICK_COMMENT_4_5', 'Not on-time')
        }]
      },
      5: {
        title: t('CUSTOMER_QUICK_COMMENT_TITLE_5', 'What went well?'),
        list: [{
          key: 0,
          content: t('CUSTOMER_QUICK_COMMENT_5_0', 'Good communication')
        }, {
          key: 1,
          content: t('CUSTOMER_QUICK_COMMENT_5_1', 'Friendly')
        }, {
          key: 2,
          content: t('CUSTOMER_QUICK_COMMENT_5_2', 'Above and beyond')
        }]
      }
    }
  };
  return reviews[type];
};
exports.reviewCommentList = reviewCommentList;
var orderStatus = [{
  key: 0,
  value: 'Pending Order',
  slug: 'PENDING_ORDER',
  percentage: 10
}, {
  key: 1,
  value: 'Completed by admin',
  slug: 'COMPLETED_BY_ADMIN',
  percentage: 100
}, {
  key: 2,
  value: 'Reject by admin',
  slug: 'REJECT_BY_ADMIN',
  percentage: 0
}, {
  key: 3,
  value: 'Driver arrived by business',
  slug: 'DRIVER_IN_BUSINESS',
  percentage: 60
}, {
  key: 4,
  value: 'Preparation Completed',
  slug: 'PREPARATION_COMPLETED',
  percentage: 20
}, {
  key: 5,
  value: 'Reject by business',
  slug: 'REJECT_BY_BUSINESS',
  percentage: 0
}, {
  key: 6,
  value: 'Reject by driver',
  slug: 'REJECT_BY_DRIVER',
  percentage: 0
}, {
  key: 7,
  value: 'Accepted by business',
  slug: 'ACCEPTED_BY_BUSINESS',
  percentage: 15
}, {
  key: 8,
  value: 'Accepted by driver',
  slug: 'ACCEPTED_BY_DRIVER',
  percentage: 40
}, {
  key: 9,
  value: 'Pick up completed by driver',
  slug: 'PICK_UP_COMPLETED_BY_DRIVER',
  percentage: 70
}, {
  key: 10,
  value: 'Pick up Failed by driver',
  slug: 'PICK_UP_FAILED_BY_DRIVER',
  percentage: 0
}, {
  key: 11,
  value: 'Delivery completed by driver',
  slug: 'DELIVERY_COMPLETED_BY_DRIVER',
  percentage: 100
}, {
  key: 12,
  value: 'Delivery Failed by driver',
  slug: 'DELIVERY_FAILED_BY_DRIVER',
  percentage: 0
}, {
  key: 13,
  value: 'Preorder',
  slug: 'PREORDER',
  percentage: 0
}, {
  key: 14,
  value: 'Order not ready',
  slug: 'ORDER_NOT_READY',
  percentage: 15
}, {
  key: 15,
  value: 'Pickup completed by customer',
  slug: 'PICKUP_COMPLETED_BY_CUSTOMER',
  percentage: 100
}, {
  key: 16,
  value: 'Canceled by customer',
  slug: 'CANCELED_BY_CUSTOMER',
  percentage: 0
}, {
  key: 17,
  value: 'Not picked by customer',
  slug: 'NOT_PICKED_BY_CUSTOMER',
  percentage: 0
}, {
  key: 18,
  value: 'Driver almost arrived to business',
  slug: 'DRIVER_ALMOST_ARRIVED_TO_BUSINESS',
  percentage: 50
}, {
  key: 19,
  value: 'Driver almost arrived to customer',
  slug: 'DRIVER_ALMOST_ARRIVED_TO_CUSTOMER',
  percentage: 90
}, {
  key: 20,
  value: 'Customer almost arrived to business',
  slug: 'CUSTOMER_ALMOST_ARRIVED_TO_BUSINESS',
  percentage: 90
}, {
  key: 21,
  value: 'Customer arrived to business',
  slug: 'CUSTOMER_ARRIVED_TO_BUSINESS',
  percentage: 90
}, {
  key: 22,
  value: 'Looking for driver',
  slug: 'ORDER_LOOKING_FOR_DRIVER',
  percentage: 30
}, {
  key: 23,
  value: 'Driver on way',
  slug: 'ORDER_DRIVER_ON_WAY',
  percentage: 80
}, {
  key: 24,
  value: 'Driver waiting for order',
  slug: 'ORDER_STATUS_DRIVER_WAITING_FOR_ORDER',
  percentage: 25
}, {
  key: 25,
  value: 'Accepted by driver company',
  slug: 'ORDER_STATUS_ACCEPTED_BY_DRIVER_COMPANY',
  percentage: 15
}, {
  key: 26,
  value: 'Driver arrived to customer',
  slug: 'ORDER_DRIVER_ARRIVED_CUSTOMER',
  percentage: 80
}];
exports.orderStatus = orderStatus;
var getOrderStatus = function getOrderStatus(status) {
  var objectStatus = orderStatus.find(function (o) {
    return o.key === status;
  });
  return objectStatus && objectStatus;
};
exports.getOrderStatus = getOrderStatus;
var getOrderStatuPickUp = function getOrderStatuPickUp(status) {
  var orderStatus = [{
    key: 0,
    value: 'Pending Order',
    slug: 'PENDING_ORDER',
    percentage: 10
  }, {
    key: 1,
    value: 'Completed by admin',
    slug: 'COMPLETED_BY_ADMIN',
    percentage: 100
  }, {
    key: 2,
    value: 'Reject by admin',
    slug: 'REJECT_BY_ADMIN',
    percentage: 0
  }, {
    key: 4,
    value: 'Preparation Completed',
    slug: 'PREPARATION_COMPLETED',
    percentage: 50
  }, {
    key: 5,
    value: 'Reject by business',
    slug: 'REJECT_BY_BUSINESS',
    percentage: 0
  }, {
    key: 7,
    value: 'Accepted by business',
    slug: 'ACCEPTED_BY_BUSINESS',
    percentage: 30
  }, {
    key: 13,
    value: 'Preorder',
    slug: 'PREORDER',
    percentage: 0
  }, {
    key: 14,
    value: 'Order not ready',
    slug: 'ORDER_NOT_READY',
    percentage: 30
  }, {
    key: 15,
    value: 'Pickup completed by customer',
    slug: 'PICKUP_COMPLETED_BY_CUSTOMER',
    percentage: 100
  }, {
    key: 16,
    value: 'Canceled by customer',
    slug: 'CANCELED_BY_CUSTOMER',
    percentage: 0
  }, {
    key: 17,
    value: 'Not picked by customer',
    slug: 'NOT_PICKED_BY_CUSTOMER',
    percentage: 0
  }, {
    key: 20,
    value: 'Customer almost arrived to business',
    slug: 'CUSTOMER_ALMOST_ARRIVED_TO_BUSINESS',
    percentage: 70
  }, {
    key: 21,
    value: 'Customer arrived to business',
    slug: 'CUSTOMER_ARRIVED_TO_BUSINESS',
    percentage: 90
  }];
  var objectStatus = orderStatus.find(function (o) {
    return o.key === status;
  });
  return objectStatus && objectStatus;
};

/**
 * function to manage order reject comment list
 * @param {string} param0 type of orders to return
 * @returns object with orders dictionary
 */
exports.getOrderStatuPickUp = getOrderStatuPickUp;
var orderRejectCommentList = function orderRejectCommentList(status) {
  var messages = {
    6: [
    // on reject order
    'very_far_away', 'driver_vehicle_incident', 'destination_unreacheable', 'unavailable_driver', 'other'],
    9: [
    // on force pickup status
    'forgot_complete_location', 'not_internet_conection', 'other'],
    10: [
    // on pickup failed by driver
    'very_far_away', 'driver_vehicle_incident', 'destination_unreacheable', 'store_closed', 'unavailable_driver', 'other'],
    11: [
    // on force delivery status
    'forgot_complete_location', 'not_internet_conection', 'other'],
    12: [
    // on delivery failed by driver
    'very_far_away', 'driver_vehicle_incident', 'destination_unreacheable', 'recipient_unavailable', 'incorrect_missing_items', 'refused_damage', 'other'],
    14: [
    // on order not ready
    'store_recieve_order_late', 'store_busy', 'other']
  };
  if (!messages[parseInt(status)]) return [];
  var list = messages[status].map(function (val, i) {
    return {
      key: i,
      value: val,
      content: val
    };
  });
  return list;
};
exports.orderRejectCommentList = orderRejectCommentList;
var widgetURL = 'https://orderingweb.ordering.co/';
exports.widgetURL = widgetURL;
var getCurrentDiffDays = function getCurrentDiffDays(time) {
  var current = (0, _moment.default)().utc();
  var compared = (0, _moment.default)(time);
  return compared.diff(current, 'days');
};
exports.getCurrentDiffDays = getCurrentDiffDays;
var firstLetterCapital = function firstLetterCapital(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
exports.firstLetterCapital = firstLetterCapital;
var stringToSlug = function stringToSlug(str) {
  var _str;
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = (_str = str) === null || _str === void 0 ? void 0 : _str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
  var to = 'aaaaaaeeeeiiiioooouuuunc------';
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }
  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
  .replace(/\s+/g, '_') // collapse whitespace and replace by -
  .replace(/-+/g, '_') // collapse dashes
  .replace(/^-+/, '') // trim - from start of text
  .replace(/-+$/, ''); // trim - from end of text

  return str;
};
exports.stringToSlug = stringToSlug;
var getCurrenySymbol = function getCurrenySymbol(code) {
  var _CURRENCY$code$symbol, _CURRENCY$code;
  return (_CURRENCY$code$symbol = _currency.CURRENCY === null || _currency.CURRENCY === void 0 || (_CURRENCY$code = _currency.CURRENCY[code]) === null || _CURRENCY$code === void 0 ? void 0 : _CURRENCY$code.symbol) !== null && _CURRENCY$code$symbol !== void 0 ? _CURRENCY$code$symbol : code;
};
exports.getCurrenySymbol = getCurrenySymbol;
var queryStringToObject = function queryStringToObject(url) {
  var params = new URLSearchParams(url.split('?')[1]);
  return Object.fromEntries(params);
};
exports.queryStringToObject = queryStringToObject;
var addQueryToUrl = function addQueryToUrl(newObj) {
  var queryObj = queryStringToObject(location.href);
  for (var key in newObj) {
    queryObj[key] = newObj[key];
  }
  var query = new URLSearchParams(queryObj);
  history.replaceState(null, '', "".concat(location.pathname, "?").concat(query));
};
exports.addQueryToUrl = addQueryToUrl;
var removeQueryToUrl = function removeQueryToUrl(removeKeys) {
  var queryObj = queryStringToObject(location.href);
  var _iterator = _createForOfIteratorHelper(removeKeys),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      delete queryObj[key];
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (Object.keys(queryObj).length) {
    var query = new URLSearchParams(queryObj);
    history.replaceState(null, '', "".concat(location.pathname, "?").concat(query));
  } else {
    history.replaceState(null, '', "".concat(location.pathname));
  }
};
exports.removeQueryToUrl = removeQueryToUrl;
var disableReasons = function disableReasons() {
  var _useLanguage3 = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var disableReasonDictionary = {
    SALE_DIVIATION: t('SALE_DIVIATION', 'Sale Diviation'),
    MOTORCYCLE_FAILURE: t('MOTORCYCLE_FAILURE', 'Motorcycle failure'),
    NO_DRIVERS: t('NO_DRIVERS', 'No drivers'),
    OVEN_FAILURE: t('OVEN_FAILURE', 'Oven failure'),
    EXCESS_ORDERS: t('EXCESS_ORDERS', 'Excess orders'),
    NO_ELECTRIC_POWER: t('NO_ELECTRIC_POWER', 'No electric power'),
    NO_GAS: t('NO_GAS', 'No gas'),
    CONECTION_FAILURE: t('CONECTION_FAILURE', 'Conection failure'),
    NO_WATER: t('NO_WATER', 'No water'),
    SYSTEM_FAILURE: t('SYSTEM_FAILURE', 'System failure'),
    STREETS_CLOSED: t('STREETS_CLOSED', 'Streets closed'),
    NO_SERVICE: t('NO_SERVICE', 'No service'),
    UNSAFETY: t('UNSAFETY', 'Unsafety'),
    MAINTENANCE_IN_STORE: t('MAINTENANCE_IN_STORE', 'Maintenance in store'),
    RAINING: t('RAINING', 'Raining'),
    STORE_EVENT: t('STORE_EVENT', 'Store event'),
    PROBLEM_WITH_POWER: t('PROBLEM_WITH_POWER', 'Problem with power'),
    DRIVER_ACCIDENT: t('DRIVER_ACCIDENT', 'Driver accident'),
    MAINTENANCE_SYSTEM_IN_STORE: t('MAINTENANCE_SYSTEM_IN_STORE', 'Maintenance system in store'),
    PROBLEM_WITH_GAS: t('PROBLEM_WITH_GAS', 'Problem with gas'),
    ROLLER_FAILURE: t('ROLLER_FAILURE', 'Roller failure'),
    WEATHER: t('WEATHER', 'Weather'),
    GAS_LEAK: t('GAS_LEAK', 'Gas leak'),
    MANIFESTATION: t('MANIFESTATION', 'Manifestation'),
    LACK_OF_STAFF: t('LACK_OF_STAFF', 'Lack of Staff'),
    MIXER_FAILURE: t('MIXER_FAILURE', 'Mixer failure'),
    AUTOMATICS: t('AUTOMATICS', 'Automatics'),
    PRODUCT_SHORTAGE: t('PRODUCT_SHORTAGE', 'Product shortage'),
    TERMINAL_FAILURES: t('TERMINAL_FAILURES', 'Terminal failures')
  };
  return disableReasonDictionary;
};
exports.disableReasons = disableReasons;
var TwelveHours = ['12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM'];
exports.TwelveHours = TwelveHours;
var TwentyFourHours = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
exports.TwentyFourHours = TwentyFourHours;
var getAttributeName = function getAttributeName(key) {
  var _useLanguage5 = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage6 = _slicedToArray(_useLanguage5, 2),
    t = _useLanguage6[1];
  var attributes = [{
    key: 'autoassign_amount_drivers',
    content: t('AUTO_ASSIGN_GROUP_ORDERS_TO_DRIVERS', 'Auto assign the order of group to this amount of drivers')
  }, {
    key: 'orders_group_max_orders',
    content: t('MAX_NUMBER_ORDERS', 'Maximum Number of Orders')
  }, {
    key: 'autoassign_autoaccept_by_driver',
    content: t('ORDER_CONFIRMED_ACCEPTED_BY_DRIVER', 'Accepted by Driver')
  }, {
    key: 'orders_group_max_time_between',
    content: t('MAX_ORDER_TIME_BETWEEN', 'Maximum time between orders in seconds')
  }, {
    key: 'orders_group_max_distance_between_pickup',
    content: t('MAX_DISTANCE_BETWEEN_BUSINESS', 'Maximum distance between businesses in meters')
  }, {
    key: 'orders_group_max_distance_between_delivery',
    content: t('MAX_DISTANCE_BETWEEN_DELIVERY', 'Maximum distance between deliveries in meters')
  }, {
    key: 'orders_group_use_maps_api',
    content: t('USE_MAPS_API', 'Use maps api')
  }, {
    key: 'orders_group_max_time_between_pickup',
    content: t('MAX_DISTANCE_BETWEEN_BUSINESS', 'Maximum distance between businesses in meters')
  }, {
    key: 'orders_group_max_time_between_delivery',
    content: t('MAX_DISTANCE_BETWEEN_DELIVERY', 'Maximum distance between deliveries in meters')
  }, {
    key: 'autoassign_forced_assignment',
    content: t('AUTO_ASSIGN_FORCED_ASSIGNMENT', 'Forced assignment')
  }, {
    key: 'autoassign_customer_max_distance_from_business',
    content: t('MAX_CUSTOMER_DISTANCE_FROM_BUSINESS', 'Max distance between customer and business')
  }, {
    key: 'autoassign_initial_radius',
    content: t('INITIAL_RADIUS', 'Initial radius in meters')
  }, {
    key: 'autoassign_increment_radius',
    content: t('INCREMENT_RADIUS', 'Radius increase in meters')
  }, {
    key: 'autoassign_max_radius',
    content: t('MAX_RADIUS', 'Maximum radius in meters')
  }, {
    key: 'autoassign_autoreject_time',
    content: t('AUTO_REJECT_ORDER_GROUP_AFTER', 'Auto reject Orders After')
  }, {
    key: 'autoassign_max_orders',
    content: t('MAX_AMOUNT_ORDERS_PER_DRIVER', 'Maximum amount of orders per drivers')
  }, {
    key: 'autoassign_max_in_pending',
    content: t('ORDER_PENDING', 'Pending')
  }, {
    key: 'available',
    content: t('AVAILABLE', 'Available')
  }, {
    key: 'enabled',
    content: t('ENABLED', 'Enabled')
  }, {
    key: 'last_available_at',
    content: t('LAST_AVAILABLE_AT', 'Last available at')
  }, {
    key: 'busy',
    content: t('BUSY', 'Busy')
  }];
  var found = attributes.find(function (attribute) {
    return attribute.key === key;
  });
  if (found) {
    return found.content;
  } else {
    return key;
  }
};
exports.getAttributeName = getAttributeName;