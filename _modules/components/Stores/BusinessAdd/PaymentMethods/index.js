"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentMethods = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var PaymentMethods = exports.PaymentMethods = function PaymentMethods(props) {
  var paymethodsList = props.paymethodsList,
    handleChangePaymethodIds = props.handleChangePaymethodIds,
    paymethodIds = props.paymethodIds;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var handleChangeIds = function handleChangeIds(id) {
    var updateIds = [];
    if (paymethodIds.includes(id)) updateIds = paymethodIds.filter(function (paymethodId) {
      return paymethodId !== id;
    });else updateIds = [].concat(_toConsumableArray(paymethodIds), [id]);
    handleChangePaymethodIds(updateIds);
  };
  (0, _react.useEffect)(function () {
    var _paymethodsList$payme;
    if (!(paymethodsList !== null && paymethodsList !== void 0 && paymethodsList.loading) && (paymethodsList === null || paymethodsList === void 0 || (_paymethodsList$payme = paymethodsList.paymethods) === null || _paymethodsList$payme === void 0 ? void 0 : _paymethodsList$payme.length) > 0) {
      handleChangeIds(paymethodsList === null || paymethodsList === void 0 ? void 0 : paymethodsList.paymethods[0].id);
    }
  }, [paymethodsList]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PAYMENT_METHODS', 'Payment methods'), /*#__PURE__*/_react.default.createElement("sup", null, "*")), /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, null, !(paymethodsList !== null && paymethodsList !== void 0 && paymethodsList.loading) && (paymethodsList === null || paymethodsList === void 0 ? void 0 : paymethodsList.paymethods.map(function (paymethod, idx) {
    var _paymethod$gateway;
    return /*#__PURE__*/_react.default.createElement(_styles.PaymethodItem, {
      key: paymethod === null || paymethod === void 0 ? void 0 : paymethod.id,
      isBorderTop: idx === 0,
      onClick: function onClick() {
        return handleChangeIds(paymethod.id);
      }
    }, paymethodIds.includes(paymethod === null || paymethod === void 0 ? void 0 : paymethod.id) ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckSquareFill, {
      className: "enabled"
    }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Square, null), /*#__PURE__*/_react.default.createElement("span", null, t(paymethod === null || paymethod === void 0 || (_paymethod$gateway = paymethod.gateway) === null || _paymethod$gateway === void 0 ? void 0 : _paymethod$gateway.toUpperCase(), paymethod === null || paymethod === void 0 ? void 0 : paymethod.name)));
  }))));
};