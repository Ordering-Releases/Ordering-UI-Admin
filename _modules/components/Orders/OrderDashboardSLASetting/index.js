"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusBlock = exports.OrderDashboardSLASettingUI = exports.OrderDashboardSLASetting = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactHookForm = require("react-hook-form");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _styledComponents = require("styled-components");
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
var OrderDashboardSLASettingUI = exports.OrderDashboardSLASettingUI = function OrderDashboardSLASettingUI(props) {
  var _theme$images$icons, _theme$images$icons2, _theme$images$icons3;
  var settingsState = props.settingsState,
    handleInputChange = props.handleInputChange,
    handleClickUpdate = props.handleClickUpdate,
    settingOptionOpen = props.settingOptionOpen,
    setSettingOptionOpen = props.setSettingOptionOpen;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(settingOptionOpen),
    _useState2 = _slicedToArray(_useState, 2),
    settingOpen = _useState2[0],
    setSettingOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(1),
    _useState4 = _slicedToArray(_useState3, 2),
    currentTabItem = _useState4[0],
    setCurrentTabItem = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedTabStatus = _useState6[0],
    setSelectedTabStatus = _useState6[1];
  var theme = (0, _styledComponents.useTheme)();
  var formMethods = (0, _reactHookForm.useForm)();
  var _useState7 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    alertState = _useState8[0],
    setAlertState = _useState8[1];
  var defaultOrderTypes = [{
    key: 1,
    name: t('DELIVERY', 'Delivery')
  }, {
    key: 2,
    name: t('PICKUP', 'Pickup')
  }, {
    key: 3,
    name: t('EAT_IN', 'Eat in')
  }, {
    key: 4,
    name: t('CURBSIDE', 'Curbside')
  }, {
    key: 5,
    name: t('DRIVE_THRU', 'Drive thru')
  }];
  var deliveryStatus = [{
    key: t('OK', 'Ok'),
    des: t('DELIVERY_OK_STATUS_DESC', 'Get delivery time from the businesses.'),
    timmer: false,
    icon: (_theme$images$icons = theme.images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.clock1,
    backColor: '#00D27A'
  }, {
    key: t('AT_RISK', 'At risk'),
    des: t('DELIVERY_ATRISK_STATUS_DESC', 'Is the time between delivery time of busines and the delayed time.'),
    timmer: false,
    icon: (_theme$images$icons2 = theme.images.icons) === null || _theme$images$icons2 === void 0 ? void 0 : _theme$images$icons2.clockRisk,
    backColor: '#FFC700'
  }, {
    key: t('DELAYED', 'Delayed'),
    des: t('DELIVERY_DELAYED_STATUS_DESC', 'If this time is exceeded, the order will be delayed.'),
    timmer: false,
    icon: (_theme$images$icons3 = theme.images.icons) === null || _theme$images$icons3 === void 0 ? void 0 : _theme$images$icons3.clockDelayed,
    backColor: '#E63757'
  }];
  var handleCloseSettings = function handleCloseSettings() {
    setSettingOpen(false);
    setSettingOptionOpen && setSettingOptionOpen(false);
  };
  var onSubmit = function onSubmit(data) {
    if (data && Object.keys(data).length > 0) {
      handleClickUpdate();
      setSettingOpen(false);
      setSettingOptionOpen && setSettingOptionOpen(false);
    }
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  (0, _react.useEffect)(function () {
    setSelectedTabStatus(deliveryStatus);
  }, []);
  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [formMethods.errors]);
  (0, _react.useEffect)(function () {
    var _settingsState$result;
    if (settingsState !== null && settingsState !== void 0 && (_settingsState$result = settingsState.result) !== null && _settingsState$result !== void 0 && _settingsState$result.error) {
      var _settingsState$result2;
      setAlertState({
        open: true,
        content: settingsState === null || settingsState === void 0 || (_settingsState$result2 = settingsState.result) === null || _settingsState$result2 === void 0 ? void 0 : _settingsState$result2.result
      });
    }
  }, [settingsState === null || settingsState === void 0 ? void 0 : settingsState.result]);
  return /*#__PURE__*/_react.default.createElement(_styles2.SettingContainer, null, !settingOptionOpen && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundary",
    onClick: function onClick() {
      return setSettingOpen(true);
    }
  }, t('SLA_SETTING', 'SLA’s settings')), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    open: settingOpen,
    onClose: function onClose() {
      return handleCloseSettings();
    },
    width: "fit-content"
  }, /*#__PURE__*/_react.default.createElement(_styles2.SettingControlPanel, {
    onSubmit: formMethods.handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles2.SettingHeader, null, t('SLA_SETTINGS', 'SLA’s settings')), /*#__PURE__*/_react.default.createElement(_styles2.TabsContainer, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, defaultOrderTypes.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      key: item.key,
      active: item.key === currentTabItem,
      onClick: function onClick() {
        return setCurrentTabItem(item.key);
      }
    }, item.name);
  }))), /*#__PURE__*/_react.default.createElement(_styles2.DeliveryStatusWrapper, null, selectedTabStatus && selectedTabStatus.length > 0 && selectedTabStatus.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(StatusBlock, {
      key: i,
      item: item,
      last: i + 1 === selectedTabStatus.length,
      formMethods: formMethods,
      handleInputChange: handleInputChange
    });
  })), /*#__PURE__*/_react.default.createElement(_styles2.Actions, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    type: "submit"
  }, t('ACCEPT', 'Accept'))))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('SLA_SETTING', 'SLA’s settings'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};
var StatusBlock = exports.StatusBlock = function StatusBlock(props) {
  var _configs$order_deadli2;
  var item = props.item,
    last = props.last,
    formMethods = props.formMethods,
    handleInputChange = props.handleInputChange;
  var _useLanguage3 = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState9 = (0, _react.useState)(38),
    _useState10 = _slicedToArray(_useState9, 2),
    inputWidth = _useState10[0],
    setInputWidth = _useState10[1];
  var handleMiuteChange = function handleMiuteChange(e) {
    var _configs$order_deadli;
    setInputWidth((e.target.value.length + 1) * 8.5);
    handleInputChange(e.target.value, configs === null || configs === void 0 || (_configs$order_deadli = configs.order_deadlines_delayed_time) === null || _configs$order_deadli === void 0 ? void 0 : _configs$order_deadli.id);
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.StatusItems, null, /*#__PURE__*/_react.default.createElement(_styles2.ItemHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.IconWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: item === null || item === void 0 ? void 0 : item.icon,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles2.ItemStatus, {
    backColor: item === null || item === void 0 ? void 0 : item.backColor
  }), /*#__PURE__*/_react.default.createElement("span", null, item === null || item === void 0 ? void 0 : item.key)), /*#__PURE__*/_react.default.createElement(_styles2.ItemContent, null, /*#__PURE__*/_react.default.createElement("p", null, item === null || item === void 0 ? void 0 : item.des)), last && /*#__PURE__*/_react.default.createElement(_styles2.TimerInputWrapper, null, /*#__PURE__*/_react.default.createElement("input", {
    name: "minute",
    type: "text",
    placeholder: "MM",
    defaultValue: configs === null || configs === void 0 || (_configs$order_deadli2 = configs.order_deadlines_delayed_time) === null || _configs$order_deadli2 === void 0 ? void 0 : _configs$order_deadli2.value,
    ref: formMethods.register({
      required: t('VALIDATION_ERROR_MINUTE_REQUIRED', 'The field minute is required').replace('_attribute_', t('MINUTE', 'Minute'))
    }),
    style: {
      width: inputWidth
    },
    onChange: function onChange(e) {
      return handleMiuteChange(e);
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^-?\d*$/.test(e.target.value)) {
        e.preventDefault();
      }
    }
  })), last && /*#__PURE__*/_react.default.createElement(_styles2.OverLine, null));
};
var OrderDashboardSLASetting = exports.OrderDashboardSLASetting = function OrderDashboardSLASetting(props) {
  var _useConfig3 = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig4 = _slicedToArray(_useConfig3, 1),
    configs = _useConfig4[0].configs;
  var settingsListProps = _objectSpread(_objectSpread({}, props), {}, {
    category: {
      configs: [_objectSpread({}, configs === null || configs === void 0 ? void 0 : configs.order_deadlines_delayed_time)]
    },
    UIComponent: OrderDashboardSLASettingUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.SettingsList, settingsListProps);
};