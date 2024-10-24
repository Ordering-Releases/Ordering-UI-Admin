"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPickupDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var BusinessPickupDetailsUI = function BusinessPickupDetailsUI(props) {
  var _business$minimum;
  var business = props.business,
    formState = props.formState,
    handleChangeForm = props.handleChangeForm,
    handlePickupStateSave = props.handlePickupStateSave;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    hours = _useState2[0],
    setHours = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    minutes = _useState4[0],
    setMinutes = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    curPickupTime = _useState6[0],
    setCurPickupTime = _useState6[1];
  var setTimeList = function setTimeList() {
    var _hours = [];
    var _minutes = [];
    for (var i = 0; i < 24; i++) {
      var text = (i < 10 ? '0' : ' ') + i;
      _hours.push({
        text: text,
        hour: i
      });
    }
    for (var _i = 0; _i < 60; _i++) {
      var _text = (_i < 10 ? '0' : '') + _i;
      _minutes.push({
        text: _text,
        minute: _i
      });
    }
    setHours(_hours);
    setMinutes(_minutes);
  };
  var handleChangePickupTime = function handleChangePickupTime(evt) {
    var type = evt.target.name;
    var value = evt.target.value;
    setCurPickupTime(_objectSpread(_objectSpread({}, curPickupTime), {}, _defineProperty({}, type, value)));
    var pickupTime = '';
    if (type === 'hour') pickupTime = value + ':' + (curPickupTime === null || curPickupTime === void 0 ? void 0 : curPickupTime.minute);else pickupTime = (curPickupTime === null || curPickupTime === void 0 ? void 0 : curPickupTime.hour) + ':' + value;
    handleChangeForm({
      pickup_time: pickupTime
    });
  };
  (0, _react.useEffect)(function () {
    var _business$pickup_time, _business$pickup_time2;
    setTimeList();
    setCurPickupTime({
      hour: business !== null && business !== void 0 && business.pickup_time ? (business === null || business === void 0 || (_business$pickup_time = business.pickup_time) === null || _business$pickup_time === void 0 ? void 0 : _business$pickup_time.split(':')[0]) * 1 + '' : '0',
      minute: business !== null && business !== void 0 && business.pickup_time ? (business === null || business === void 0 || (_business$pickup_time2 = business.pickup_time) === null || _business$pickup_time2 === void 0 ? void 0 : _business$pickup_time2.split(':')[1]) * 1 + '' : '0'
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.SectionTitle, null, t('PREORDER_STEP_2_TIME', 'Order time')), /*#__PURE__*/_react.default.createElement(_styles2.TimeSelectContainer, null, /*#__PURE__*/_react.default.createElement("label", null, t('ESTIMATED_PICKUP_TIME', 'Pickup Time')), /*#__PURE__*/_react.default.createElement(_styles2.TimeBlock, null, /*#__PURE__*/_react.default.createElement("select", {
    value: curPickupTime === null || curPickupTime === void 0 ? void 0 : curPickupTime.hour,
    name: "hour",
    onChange: handleChangePickupTime
  }, hours === null || hours === void 0 ? void 0 : hours.map(function (hour, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: hour.hour,
      key: i
    }, hour.text);
  })), ":", /*#__PURE__*/_react.default.createElement("select", {
    value: curPickupTime === null || curPickupTime === void 0 ? void 0 : curPickupTime.minute,
    name: "minute",
    onChange: handleChangePickupTime
  }, minutes === null || minutes === void 0 ? void 0 : minutes.map(function (minute, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: minute.minute,
      key: i
    }, minute.text);
  })))), /*#__PURE__*/_react.default.createElement(_styles2.SectionTitle, null, t('PURCHASE', 'Purchase')), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('MINIMUN_PURCHASED', 'Minimum purchase')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    defaultValue: (_business$minimum = business === null || business === void 0 ? void 0 : business.minimum) !== null && _business$minimum !== void 0 ? _business$minimum : '',
    placeholder: "$0.00",
    onChange: function onChange(e) {
      return handleChangeForm({
        minimum: e.target.value
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    disabled: formState.loading || Object.keys(formState.changes).length === 0,
    onClick: function onClick() {
      return handlePickupStateSave();
    }
  }, t('SAVE', 'Save')));
};
var BusinessPickupDetails = exports.BusinessPickupDetails = function BusinessPickupDetails(props) {
  var pickupDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessPickupDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.BusinessPickupDetails, pickupDetailsProps);
};