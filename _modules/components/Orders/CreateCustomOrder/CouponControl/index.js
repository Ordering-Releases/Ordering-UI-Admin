"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CouponControl = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("../../../../styles");
var _Shared = require("../../../Shared");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var CouponControlUI = function CouponControlUI(props) {
  var couponDefault = props.couponDefault,
    couponInput = props.couponInput,
    handleButtonApplyClick = props.handleButtonApplyClick,
    handleRemoveCouponClick = props.handleRemoveCouponClick,
    onChangeInputCoupon = props.onChangeInputCoupon,
    confirm = props.confirm,
    setConfirm = props.setConfirm;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponentsAdminExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var onRemoveCoupon = function onRemoveCoupon() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_COUPON', 'Are you sure that you want to delete the coupon?')
    });
  };
  var handleOnAccept = function handleOnAccept() {
    if (!confirm.error) {
      handleRemoveCouponClick && handleRemoveCouponClick();
    }
    setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
      open: false,
      error: false
    }));
    onChangeInputCoupon('');
  };
  var handleClose = function handleClose() {
    setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
      open: false,
      error: false
    }));
    onChangeInputCoupon('');
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.CouponContainer, null, couponDefault ? /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return onRemoveCoupon();
    }
  }, t('REMOVE_COUPON', 'Remove Coupon'), " ", couponDefault) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: couponInput !== null && couponInput !== void 0 ? couponInput : '',
    placeholder: t('DISCOUNT_COUPON', 'Discount coupon'),
    onChange: function onChange(e) {
      return onChangeInputCoupon(e.target.value);
    },
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    disabled: !couponInput || orderState.loading,
    onClick: handleButtonApplyClick
  }, t('APPLY', 'Apply'))), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('COUPON', 'Coupon'),
    content: confirm === null || confirm === void 0 ? void 0 : confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm === null || confirm === void 0 ? void 0 : confirm.open,
    onClose: handleClose,
    onCancel: !(confirm !== null && confirm !== void 0 && confirm.error) ? function () {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false,
        error: false
      }));
    } : null,
    onAccept: handleOnAccept,
    closeOnBackdrop: false
  }));
};
var CouponControl = exports.CouponControl = function CouponControl(props) {
  var couponProp = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CouponControlUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.CouponControl, couponProp);
};