"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PointsWalletBusinessDetail = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactHookForm = require("react-hook-form");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
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
var PointsWalletBusinessDetailUI = function PointsWalletBusinessDetailUI(props) {
  var _formState$changes5, _formState$changes6, _walletData$redemptio, _formState$changes7, _formState$changes8, _walletData$accumulat, _ref, _formState$changes$ma, _formState$changes9;
  var walletData = props.walletData,
    formState = props.formState,
    handleChangeInput = props.handleChangeInput,
    handleClickSubmit = props.handleClickSubmit,
    isBusiness = props.isBusiness,
    selectedBusinessList = props.selectedBusinessList,
    handleChangeItem = props.handleChangeItem;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit;
  // const [paymentRules, setPaymentRules] = useState('no_limit')
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    expiration = _useState4[0],
    setExpiration = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isMaximum = _useState6[0],
    setIsMaximum = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    maxValue = _useState8[0],
    setMaxValue = _useState8[1];

  // const ruleList = [
  //   { key: 'no_limit', description: t('NO_LIMIT', 'No limit') },
  //   { key: 'maximum_redemption_type', description: `${t('MAXIMUM_POINTS_REDEEMED_PER_ORDER', 'Maximum amount of points that can be redeemed per order')} (${t('FIXED', 'fixed')})` },
  //   { key: 'maximum_redemption_rate', description: `${t('MAXIMUM_POINTS_REDEEMED_PER_ORDER', 'Maximum amount of points that can be redeemed per order')} (%)` }
  // ]

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleChangeExpirtation = function handleChangeExpirtation(index) {
    if (index) {
      setExpiration(index);
      return;
    }
    setExpiration(null);
    handleChangeItem({
      expire_after_minutes: null
    });
    setMaxValue('');
  };
  var handleClickSwitch = function handleClickSwitch(value) {
    setIsMaximum(value);
    if (!value) handleChangeItem({
      maximum_accumulation: null
    });
  };
  var handleChangeMaxValue = function handleChangeMaxValue(e) {
    var value = e.target.value;
    setMaxValue(value);
    if (value) handleChangeItem({
      expire_after_minutes: value * 24 * 60
    });else handleChangeItem({
      expire_after_minutes: null
    });
  };
  var onSubmit = function onSubmit() {
    if (!walletData) {
      var findBusiness = selectedBusinessList.find(function (business) {
        return business.wallet_enabled;
      });
      if (!findBusiness) {
        setAlertState({
          open: true,
          content: t('SELECT_LEAST_ONE_BUSINESS', 'Select at least one business.')
        });
        return;
      }
    }
    if (Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 0) {
      var _formState$changes, _formState$changes2;
      if ((formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.redemption_rate) === '') {
        setAlertState({
          open: true,
          content: t('VALIDATION_ERROR_REQUIRED', 'Value is required').replace('_attribute_', 'redemption_rate')
        });
        return;
      }
      if ((formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.accumulation_rate) === '') {
        setAlertState({
          open: true,
          content: t('VALIDATION_ERROR_REQUIRED', 'Value is required').replace('_attribute_', 'accumulation_rate')
        });
        return;
      }
      handleClickSubmit && handleClickSubmit();
    }
  };

  // useEffect(() => {
  //   if (paymentRules === 'no_limit') {
  //     const changes = { ...formState.changes, maximum_redemption_type: null }
  //     setFormState({ ...formState, changes: changes })
  //   }
  // }, [paymentRules])

  (0, _react.useEffect)(function () {
    if (!formState.error) return;
    setAlertState({
      open: true,
      content: formState.error
    });
  }, [formState === null || formState === void 0 ? void 0 : formState.error]);
  (0, _react.useEffect)(function () {
    var _formState$changes3, _formState$changes4;
    if (formState !== null && formState !== void 0 && (_formState$changes3 = formState.changes) !== null && _formState$changes3 !== void 0 && _formState$changes3.maximum_accumulation ? formState === null || formState === void 0 || (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.maximum_accumulation : walletData === null || walletData === void 0 ? void 0 : walletData.maximum_accumulation) {
      setIsMaximum(true);
    } else {
      setIsMaximum(false);
    }
  }, [walletData === null || walletData === void 0 ? void 0 : walletData.maximum_accumulation]);
  (0, _react.useEffect)(function () {
    if (walletData !== null && walletData !== void 0 && walletData.expire_after_minutes) {
      setMaxValue((walletData === null || walletData === void 0 ? void 0 : walletData.expire_after_minutes) / (24 * 60));
      setExpiration('days');
    } else {
      setExpiration(null);
      setMaxValue('');
    }
  }, [walletData === null || walletData === void 0 ? void 0 : walletData.expire_after_minutes]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    isBusiness: isBusiness,
    onSubmit: handleSubmit(onSubmit)
  }, (walletData === null || walletData === void 0 ? void 0 : walletData.name) && /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, walletData === null || walletData === void 0 ? void 0 : walletData.name)), /*#__PURE__*/_react.default.createElement(_styles2.DetailContent, null, /*#__PURE__*/_react.default.createElement(_styles2.PointsRedemptionWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('POINTS_REDEMPTION', 'Points redemption')), /*#__PURE__*/_react.default.createElement("p", null, t('VALUE', 'Value')), /*#__PURE__*/_react.default.createElement(_styles2.PointsInputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: "00 points",
    name: "redemption_rate",
    autoComplete: "off",
    value: typeof (formState === null || formState === void 0 || (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.redemption_rate) !== 'undefined' ? formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.redemption_rate : (_walletData$redemptio = walletData === null || walletData === void 0 ? void 0 : walletData.redemption_rate) !== null && _walletData$redemptio !== void 0 ? _walletData$redemptio : '',
    onChange: handleChangeInput,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, "="), /*#__PURE__*/_react.default.createElement("span", null, parsePrice(1)))), /*#__PURE__*/_react.default.createElement(_styles2.PointsAccumulationContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('POINTS_ACCUMULATION', 'Points accumulation')), /*#__PURE__*/_react.default.createElement("p", null, t('AMOUNT_POINTS_ASSIGN_TO_ORDER_SUBTOTAL', 'Amount of points to assign in relation to the order subtotal')), /*#__PURE__*/_react.default.createElement("span", null, t('VALUE', 'Value')), /*#__PURE__*/_react.default.createElement(_styles2.AccumulationInputWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(1)), /*#__PURE__*/_react.default.createElement("span", {
    className: "equal"
  }, "="), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: "00 points",
    name: "accumulation_rate",
    autoComplete: "off",
    value: typeof (formState === null || formState === void 0 || (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.accumulation_rate) !== 'undefined' ? formState === null || formState === void 0 || (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.accumulation_rate : (_walletData$accumulat = walletData === null || walletData === void 0 ? void 0 : walletData.accumulation_rate) !== null && _walletData$accumulat !== void 0 ? _walletData$accumulat : '',
    onChange: handleChangeInput,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), isBusiness && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.ToggleWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('MAXIMUM_OF_POINTS', 'Maximum of points')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: isMaximum,
    onChange: function onChange(val) {
      return handleClickSwitch(val);
    }
  })), isMaximum && /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: "00 points",
    name: "maximum_accumulation",
    value: (_ref = (_formState$changes$ma = formState === null || formState === void 0 || (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.maximum_accumulation) !== null && _formState$changes$ma !== void 0 ? _formState$changes$ma : walletData === null || walletData === void 0 ? void 0 : walletData.maximum_accumulation) !== null && _ref !== void 0 ? _ref : '',
    onChange: handleChangeInput,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }))), isBusiness && /*#__PURE__*/_react.default.createElement(_styles2.ExPirationWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('EXPIRATION', 'Expiration')), /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
    onClick: function onClick() {
      return handleChangeExpirtation(null);
    }
  }, !expiration ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "active"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("p", null, t('NO', 'No'))), /*#__PURE__*/_react.default.createElement(_styles2.CheckBoxWrapper, {
    onClick: function onClick() {
      return handleChangeExpirtation('days');
    }
  }, expiration ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "active"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("p", null, t('EXPIRATION_IN_DAYS', 'Expiration in days'))), expiration && /*#__PURE__*/_react.default.createElement(_styles2.OptionInputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: "0 ".concat(t('DAYS', 'days')),
    name: "expire_after_minutes",
    value: maxValue,
    onChange: handleChangeMaxValue,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    type: "submit",
    disabled: Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0
  }, walletData ? ('SAVE', 'Save') : ('ADD', 'Add'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('POINTS_WALLET', 'Points wallet'),
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
var PointsWalletBusinessDetail = exports.PointsWalletBusinessDetail = function PointsWalletBusinessDetail(props) {
  var pointsWalletBusinessDetailProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PointsWalletBusinessDetailUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.PointsWalletBusinessDetail, pointsWalletBusinessDetailProps);
};