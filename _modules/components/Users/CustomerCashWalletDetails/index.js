"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerCashWalletDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var CustomerCashWalletDetails = exports.CustomerCashWalletDetails = function CustomerCashWalletDetails(props) {
  var _walletState$wallet;
  var walletState = props.walletState,
    addWalletState = props.addWalletState,
    reduceWalletState = props.reduceWalletState,
    actionState = props.actionState,
    handleChangeInput = props.handleChangeInput,
    handleAddWalletMoney = props.handleAddWalletMoney,
    handleReduceWalletMoney = props.handleReduceWalletMoney;
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var onAddWalletMoney = function onAddWalletMoney() {
    if (!(addWalletState !== null && addWalletState !== void 0 && addWalletState.amount)) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_REQUIRED', 'The amount is required').replace('_attribute_', t('AMOUNT', 'Amount'))]
      });
      return;
    }
    handleAddWalletMoney();
  };
  var onReduceWalletMoney = function onReduceWalletMoney() {
    if (!(reduceWalletState !== null && reduceWalletState !== void 0 && reduceWalletState.amount)) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_REQUIRED', 'The amount is required').replace('_attribute_', t('AMOUNT', 'Amount'))]
      });
      return;
    }
    handleReduceWalletMoney();
  };
  (0, _react.useEffect)(function () {
    if (actionState.loading || !actionState.error) return;
    setAlertState({
      open: true,
      content: actionState.error
    });
  }, [actionState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.WalletBalaceContainer, null, /*#__PURE__*/_react.default.createElement("span", null, walletState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 24,
    width: 100
  }) : parsePrice((_walletState$wallet = walletState.wallet) === null || _walletState$wallet === void 0 ? void 0 : _walletState$wallet.balance)), /*#__PURE__*/_react.default.createElement("span", null, t('WALLET_MONEY', 'Wallet money'))), /*#__PURE__*/_react.default.createElement(_styles2.SectionContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('ADD_WALLET_MONEY', 'Add wallet money')), /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('INDICATE_THE_AMOUNT_TO_ADD', 'Indicate the amount to add')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "number",
    name: "amount",
    placeholder: "".concat(parsePrice(0)),
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    value: (addWalletState === null || addWalletState === void 0 ? void 0 : addWalletState.amount) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e, true);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('COMMENT', 'Comment')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    name: "description",
    rows: 3,
    value: (addWalletState === null || addWalletState === void 0 ? void 0 : addWalletState.description) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e, true);
    },
    placeholder: t('WRITE_SHORT_COMMENT', 'Write a short comment')
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return onAddWalletMoney();
    },
    disabled: actionState.loading || Object.keys(addWalletState).length === 0
  }, t('ADD', 'Add'))), /*#__PURE__*/_react.default.createElement(_styles2.SectionContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('REDUCE_WALLET_MONEY', 'Reduce wallet money')), /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('INDICATE_THE_AMOUNT_TO_REDUCE', 'Indicate the amount to reduce')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "number",
    name: "amount",
    placeholder: "".concat(parsePrice(0)),
    value: (reduceWalletState === null || reduceWalletState === void 0 ? void 0 : reduceWalletState.amount) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e, false);
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement("label", null, t('COMMENT', 'Comment')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    rows: 3,
    name: "description",
    value: (reduceWalletState === null || reduceWalletState === void 0 ? void 0 : reduceWalletState.description) || '',
    onChange: function onChange(e) {
      return handleChangeInput(e, false);
    },
    placeholder: t('WRITE_SHORT_COMMENT', 'Write a short comment')
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "black",
    onClick: function onClick() {
      return onReduceWalletMoney();
    },
    disabled: actionState.loading || Object.keys(reduceWalletState).length === 0
  }, t('REDUCE', 'Reduce'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    width: "800px",
    title: t('LOGIN'),
    content: alertState.content,
    acceptText: t('ACCEPT'),
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
  }));
};