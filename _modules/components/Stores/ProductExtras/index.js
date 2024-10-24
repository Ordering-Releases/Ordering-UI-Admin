"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductExtras = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _ProductExtraOptions = require("../ProductExtraOptions");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _utils = require("../../../utils");
var _SnoozeComponent = require("../SnoozeComponent");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ProductExtrasUI = function ProductExtrasUI(props) {
  var _extrasState$extras4;
  var productState = props.productState,
    extrasState = props.extrasState,
    isAddMode = props.isAddMode,
    handleOpenAddForm = props.handleOpenAddForm,
    handleChangeExtraInput = props.handleChangeExtraInput,
    handleAddExtra = props.handleAddExtra,
    setIsExtendExtraOpen = props.setIsExtendExtraOpen,
    business = props.business,
    handleUpdateBusinessState = props.handleUpdateBusinessState,
    handleProductExtraState = props.handleProductExtraState,
    dragoverExtaId = props.dragoverExtaId,
    isExtrasBottom = props.isExtrasBottom,
    handleDragStart = props.handleDragStart,
    hanldeDragOver = props.hanldeDragOver,
    handleDrop = props.handleDrop,
    handleDragEnd = props.handleDragEnd,
    handleUpdateExtraState = props.handleUpdateExtraState,
    setExtrasState = props.setExtrasState;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var conatinerRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    confirm = _useState4[0],
    setConfirm = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    openExtraDetails = _useState6[0],
    setOpenExtraDetails = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openExtraEdit = _useState8[0],
    setOpenExtraEdit = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    currentExtra = _useState10[0],
    setCurrentExtra = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    extraIds = _useState12[0],
    setExtraIds = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isCheckboxClicked = _useState14[0],
    setIsCheckboxClicked = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    timer = _useState16[0],
    setTimer = _useState16[1];
  var _useState17 = (0, _react.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    extraSelected = _useState18[0],
    setExtraSelected = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isProductExtraSnooze = _useState20[0],
    setProductExtraSnooze = _useState20[1];
  var extraInputRef = (0, _react.useRef)();
  var handleOpenExtraDetails = function handleOpenExtraDetails(e, extra, isInitialRender) {
    var _e$target, _e$target2;
    if (e !== null && e !== void 0 && (_e$target = e.target) !== null && _e$target !== void 0 && _e$target.closest('.extra-checkbox') || e !== null && e !== void 0 && (_e$target2 = e.target) !== null && _e$target2 !== void 0 && _e$target2.closest('.draggable-dots')) return;
    setIsExtendExtraOpen(true);
    setCurrentExtra(extra);
    setOpenExtraDetails(true);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        extra: extra.id
      });
    }
  };
  var handleCloseExtraDetails = function handleCloseExtraDetails() {
    setOpenExtraDetails(false);
    setIsExtendExtraOpen(false);
    setCurrentExtra(null);
    (0, _utils.removeQueryToUrl)(['extra']);
  };
  var handleExtraState = function handleExtraState(id, checked) {
    if (checked) {
      setExtraIds(function (prevState) {
        return [].concat(_toConsumableArray(prevState), [id]);
      });
    } else {
      setExtraIds(function (prevState) {
        return prevState.filter(function (extraId) {
          return extraId !== id;
        });
      });
    }
    setIsCheckboxClicked(true);
  };
  var handleOpenEdit = function handleOpenEdit(event, extra) {
    event.stopPropagation();
    setExtraSelected(extra);
    setOpenExtraEdit(true);
  };
  var handleCloseEdit = function handleCloseEdit() {
    setOpenExtraEdit(false);
    setExtraSelected(null);
  };
  var onChangeAddExtraInput = function onChangeAddExtraInput(e) {
    e.persist();
    clearTimeout(timer);
    var _timer = setTimeout(function () {
      if (e.target.value) {
        handleAddExtra({
          name: e.target.value
        });
      }
    }, 750);
    setTimer(_timer);
  };
  var handleChangeExtra = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(id, changes) {
      var _extraInputRef$curren;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (extraInputRef !== null && extraInputRef !== void 0 && (_extraInputRef$curren = extraInputRef.current) !== null && _extraInputRef$curren !== void 0 && _extraInputRef$curren.value) {
              _context.next = 3;
              break;
            }
            setAlertState({
              open: true,
              content: [t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('NAME', 'Name'))]
            });
            return _context.abrupt("return");
          case 3:
            _context.next = 5;
            return handleUpdateExtraState(id, changes);
          case 5:
            handleCloseEdit();
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleChangeExtra(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var _productState$product;
    var _extraIds = [];
    if ((_productState$product = productState.product) !== null && _productState$product !== void 0 && _productState$product.extras) {
      var _productState$product2;
      _extraIds = (_productState$product2 = productState.product.extras) === null || _productState$product2 === void 0 ? void 0 : _productState$product2.reduce(function (ids, extra) {
        return [].concat(_toConsumableArray(ids), [extra.id]);
      }, []);
    }
    setExtraIds(_extraIds);
  }, []);
  (0, _react.useEffect)(function () {
    if (!isCheckboxClicked) return;
    setIsCheckboxClicked(false);
    handleProductExtraState(extraIds);
  }, [isCheckboxClicked, extraIds]);
  (0, _react.useEffect)(function () {
    var _productState$product3, _extrasState$extras;
    if (productState !== null && productState !== void 0 && (_productState$product3 = productState.product) !== null && _productState$product3 !== void 0 && _productState$product3.error || extrasState !== null && extrasState !== void 0 && (_extrasState$extras = extrasState.extras) !== null && _extrasState$extras !== void 0 && _extrasState$extras.error) {
      var _productState$product4, _extrasState$extras2;
      setAlertState({
        open: true,
        content: (productState === null || productState === void 0 || (_productState$product4 = productState.product) === null || _productState$product4 === void 0 ? void 0 : _productState$product4.error) || (extrasState === null || extrasState === void 0 || (_extrasState$extras2 = extrasState.extras) === null || _extrasState$extras2 === void 0 ? void 0 : _extrasState$extras2.error)
      });
    }
  }, [productState, extrasState]);
  (0, _react.useEffect)(function () {
    var extraId = query.get('extra');
    if (extraId) {
      var _extrasState$extras3;
      var initExtra = extrasState === null || extrasState === void 0 || (_extrasState$extras3 = extrasState.extras) === null || _extrasState$extras3 === void 0 ? void 0 : _extrasState$extras3.find(function (extra) {
        return extra.id === Number(extraId);
      });
      initExtra && handleOpenExtraDetails(null, initExtra, true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles2.MainContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ProductExtrasContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PRODUCT_OPTIONS', 'Product options')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "lightPrimary",
    onClick: function onClick() {
      return handleOpenAddForm();
    }
  }, t('ADD_PRODUCT_OPTION', 'Add product option'))), (extrasState === null || extrasState === void 0 ? void 0 : extrasState.extras) && (extrasState === null || extrasState === void 0 || (_extrasState$extras4 = extrasState.extras) === null || _extrasState$extras4 === void 0 ? void 0 : _extrasState$extras4.sort(function (a, b) {
    return a.rank - b.rank;
  }).map(function (extra, index) {
    var _theme$images$icons, _extraIds$includes;
    var isLastExtra = index === extrasState.extras.length - 1;
    return /*#__PURE__*/_react.default.createElement(_styles2.ExtraOption, {
      key: extra.id,
      active: extra.id === (currentExtra === null || currentExtra === void 0 ? void 0 : currentExtra.id),
      onClick: function onClick(e) {
        return handleOpenExtraDetails(e, extra);
      },
      isDragOver: dragoverExtaId === extra.id,
      isBorderBottom: isExtrasBottom && isLastExtra,
      onDragOver: function onDragOver(e) {
        return hanldeDragOver(e, extra, isLastExtra);
      },
      onDrop: function onDrop(e) {
        return handleDrop(e, extra);
      },
      onDragEnd: handleDragEnd,
      className: "draggable-extra"
    }, /*#__PURE__*/_react.default.createElement(_styles2.DragImageWrapper, {
      className: "draggable-dots"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.sixDots,
      alt: "six dots",
      draggable: !(extrasState !== null && extrasState !== void 0 && extrasState.loading),
      onDragStart: function onDragStart(e) {
        return handleDragStart(e, extra);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.CheckboxContainer, {
      className: "extra-checkbox"
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: (_extraIds$includes = extraIds.includes(extra.id)) !== null && _extraIds$includes !== void 0 ? _extraIds$includes : false,
      onChange: function onChange(e) {
        return handleExtraState(extra.id, e.target.checked);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles2.MoreContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.OptionNameWrapper, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "name"
    }, extra.name), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
      onClick: function onClick(e) {
        return handleOpenEdit(e, extra);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Pencil, null))), /*#__PURE__*/_react.default.createElement(_styles2.Details, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null))));
  })), isAddMode && /*#__PURE__*/_react.default.createElement(_styles2.ExtraAddForm, {
    ref: conatinerRef,
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      handleAddExtra();
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "name",
    placeholder: t('WRITE_A_NAME', 'Write a name'),
    onChange: function onChange(e) {
      return onChangeAddExtraInput(e);
    },
    autoComplete: "off",
    readOnly: extrasState === null || extrasState === void 0 ? void 0 : extrasState.loading
  })), /*#__PURE__*/_react.default.createElement(_styles2.AddButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleOpenAddForm();
    }
  }, t('ADD_PRODUCT_OPTION', 'Add product option')))), width >= 1000 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openExtraDetails && /*#__PURE__*/_react.default.createElement(_ProductExtraOptions.ProductExtraOptions, {
    open: openExtraDetails,
    onClose: function onClose() {
      return handleCloseExtraDetails();
    },
    business: business,
    extra: currentExtra,
    handleChangeExtraName: handleChangeExtraInput,
    handleUpdateBusinessState: handleUpdateBusinessState,
    handleUpdateExtraState: handleUpdateExtraState,
    extrasState: extrasState,
    setExtrasState: setExtrasState
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openExtraDetails && /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "80%",
    open: openExtraDetails,
    onClose: function onClose() {
      return handleCloseExtraDetails();
    },
    padding: "20px 0 0 0"
  }, /*#__PURE__*/_react.default.createElement(_ProductExtraOptions.ProductExtraOptions, {
    open: openExtraDetails,
    onClose: function onClose() {
      return handleCloseExtraDetails();
    },
    business: business,
    extra: currentExtra,
    handleChangeExtraName: handleChangeExtraInput,
    handleUpdateBusinessState: handleUpdateBusinessState,
    handleUpdateExtraState: handleUpdateExtraState,
    extrasState: extrasState,
    setExtrasState: setExtrasState
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "760px",
    open: openExtraEdit,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    padding: "20px"
  }, /*#__PURE__*/_react.default.createElement(_styles2.ExtraOptionEditContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PRODUCT_OPTION', 'Product option')), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('NAME', 'Name'),
    defaultValue: extraSelected === null || extraSelected === void 0 ? void 0 : extraSelected.name,
    ref: extraInputRef
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "buttons-container"
  }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    className: "snooze",
    color: "lightGreen",
    borderRadius: "8px",
    onClick: function onClick() {
      return setProductExtraSnooze(true);
    }
  }, t('SNOOZE', 'Snooze')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: function onClick() {
      var _extraInputRef$curren2;
      return handleChangeExtra(extraSelected === null || extraSelected === void 0 ? void 0 : extraSelected.id, {
        name: extraInputRef === null || extraInputRef === void 0 || (_extraInputRef$curren2 = extraInputRef.current) === null || _extraInputRef$curren2 === void 0 ? void 0 : _extraInputRef$curren2.value
      });
    }
  }, t('SAVE', 'Save'))))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "85%",
    maxWidth: "1000px",
    open: isProductExtraSnooze,
    onClose: function onClose() {
      return setProductExtraSnooze(false);
    },
    closeOnBackdrop: false
  }, /*#__PURE__*/_react.default.createElement(_SnoozeComponent.SnoozeComponent, {
    isAutomaticUpdate: true,
    dataState: extraSelected,
    handleUpdate: function handleUpdate(data) {
      return handleChangeExtra(extraSelected === null || extraSelected === void 0 ? void 0 : extraSelected.id, {
        snooze_until: data.snooze_until
      });
    },
    setFormState: setExtrasState,
    formState: extrasState,
    onClose: function onClose() {
      return setProductExtraSnooze(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }));
};
var ProductExtras = exports.ProductExtras = function ProductExtras(props) {
  var productExtrasProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductExtrasUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.ProductExtras, productExtrasProps);
};