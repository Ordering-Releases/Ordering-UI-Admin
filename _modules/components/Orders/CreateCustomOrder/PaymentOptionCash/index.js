"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionCash = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("../../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var PaymentOptionCash = exports.PaymentOptionCash = function PaymentOptionCash(props) {
  var defaultValue = props.defaultValue,
    orderTotal = props.orderTotal,
    onChangeData = props.onChangeData,
    setErrorCash = props.setErrorCash;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useState = (0, _react.useState)(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setvalue = _useState2[1];
  var el = (0, _react.useRef)();
  var timeout = null;
  var onChangeCash = function onChangeCash(e) {
    var _e$target;
    if (!/^(?=.)([+-]?([0-9]*)(\.([0-9]+))?)$/.test(e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value)) return;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      var _e$target2;
      var cash = parseFloat(e === null || e === void 0 || (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value);
      cash = isNaN(cash) ? null : cash;
      setvalue(cash);
      if (cash >= orderTotal || !cash) {
        onChangeData && onChangeData({
          cash: cash
        });
      }
    }, 1000);
  };
  (0, _react.useEffect)(function () {
    el.current.onkeyup = onChangeCash;
  }, []);
  (0, _react.useEffect)(function () {
    el.current.value = value || '';
  }, [value]);
  (0, _react.useEffect)(function () {
    if (value && parseFloat(value) < orderTotal) {
      setErrorCash && setErrorCash(true);
    } else {
      setErrorCash && setErrorCash(false);
    }
  }, [value, orderTotal]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.PaymentCashContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.FormCash, null, /*#__PURE__*/_react.default.createElement(_styles2.WrapperInput, null, /*#__PURE__*/_react.default.createElement("label", null, t('NOT_EXACT_CASH_AMOUNT', 'Don\'t have exact amount? Let us know with how much will you pay')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    ref: el,
    name: "cash",
    type: "text",
    placeholder: "$0.00",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9 .]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), value && parseFloat(value) < orderTotal && /*#__PURE__*/_react.default.createElement(_styles2.ErrorText, null, t('VALUE_GREATER_THAN_TOTAL', 'This value must be greater than order total'), ": ", parsePrice(orderTotal)))));
};
PaymentOptionCash.defaultProps = {
  defaultValue: null
};