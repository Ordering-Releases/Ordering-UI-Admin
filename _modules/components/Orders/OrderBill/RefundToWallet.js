"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefundToWallet = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactHookForm = require("react-hook-form");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _FirstSelect = require("../../../styles/Select/FirstSelect");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var RefundToWallet = exports.RefundToWallet = function RefundToWallet(props) {
  var _configs$refund_cash_, _configs$refund_credi, _configs$refund_strip, _configs$refund_other;
  var order = props.order,
    actionStatus = props.actionStatus,
    handleOrderRefund = props.handleOrderRefund,
    stripePaymethods = props.stripePaymethods;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var isAllowCashWalletRefund = (configs === null || configs === void 0 || (_configs$refund_cash_ = configs.refund_cash_wallet_allow_when_order_cancelled) === null || _configs$refund_cash_ === void 0 ? void 0 : _configs$refund_cash_.value) === '1';
  var isAllowCreditPointRefund = (configs === null || configs === void 0 || (_configs$refund_credi = configs.refund_credit_point_allow_when_order_cancelled) === null || _configs$refund_credi === void 0 ? void 0 : _configs$refund_credi.value) === '1';
  var isAllowStripeRefund = (configs === null || configs === void 0 || (_configs$refund_strip = configs.refund_stripe_allow_when_order_cancelled) === null || _configs$refund_strip === void 0 ? void 0 : _configs$refund_strip.value) === '1';
  var isAllowOtherRefund = (configs === null || configs === void 0 || (_configs$refund_other = configs.refund_other_allow_when_order_cancelled) === null || _configs$refund_other === void 0 ? void 0 : _configs$refund_other.value) === '1';
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors,
    control = _useForm.control;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openModal = _useState2[0],
    setOpenModal = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isRefundAll = _useState6[0],
    setIsRefundAll = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    refundDisabled = _useState8[0],
    setRefundDisabled = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    refundAllDisabled = _useState10[0],
    setRefundAllDisabled = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedRefundOption = _useState12[0],
    setSelectedRefundOption = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    refundOptions = _useState14[0],
    setRefundOptions = _useState14[1];
  var onSubmit = function onSubmit(formData) {
    var _order$summary$total, _order$summary;
    if (!selectedRefundOption) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_FILLED', 'The _attribute_ field is required.').replace('_attribute_', t('TYPE', 'Type'))
      });
      return;
    }
    var data = {};
    if (selectedRefundOption !== 'cash_wallet') {
      data.order_payment_event_id = selectedRefundOption;
    }
    if (formData.description) data.description = formData.description;
    data.amount = isRefundAll ? (_order$summary$total = order === null || order === void 0 || (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.total) !== null && _order$summary$total !== void 0 ? _order$summary$total : order === null || order === void 0 ? void 0 : order.total : formData.amount;
    data.transfer_to = selectedRefundOption !== 'cash_wallet' ? 'source' : 'cash_wallet';
    handleOrderRefund(data);
  };
  (0, _react.useEffect)(function () {
    var _Object$keys;
    if ((Object === null || Object === void 0 || (_Object$keys = Object.keys(errors)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0) {
      var _Object$values;
      setAlertState({
        open: true,
        content: Object === null || Object === void 0 || (_Object$values = Object.values(errors)) === null || _Object$values === void 0 ? void 0 : _Object$values.map(function (error) {
          return error === null || error === void 0 ? void 0 : error.message;
        })
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    var _order$paymethod, _order$payment_events, _order$summary$total2, _order$summary2, _order$payment_events2;
    setSelectedRefundOption(null);
    setRefundDisabled(false);
    setRefundAllDisabled(false);
    setIsRefundAll(true);
    if (order !== null && order !== void 0 && order.refund_data && stripePaymethods.includes(order === null || order === void 0 || (_order$paymethod = order.paymethod) === null || _order$paymethod === void 0 ? void 0 : _order$paymethod.gateway)) {
      setRefundDisabled(true);
    }
    if (!(order !== null && order !== void 0 && order.payment_events)) return;
    var totalRefundAmount = (order === null || order === void 0 || (_order$payment_events = order.payment_events) === null || _order$payment_events === void 0 ? void 0 : _order$payment_events.filter(function (item) {
      return item.event === 'refund';
    }).reduce(function (total, event) {
      return total + ((event === null || event === void 0 ? void 0 : event.amount) || 0);
    }, 0)) || 0;
    if (totalRefundAmount === ((_order$summary$total2 = order === null || order === void 0 || (_order$summary2 = order.summary) === null || _order$summary2 === void 0 ? void 0 : _order$summary2.total) !== null && _order$summary$total2 !== void 0 ? _order$summary$total2 : order === null || order === void 0 ? void 0 : order.total)) {
      setRefundDisabled(true);
    }
    if (totalRefundAmount) {
      setRefundAllDisabled(true);
      setIsRefundAll(false);
    }
    var _refundOptions = [];
    var paymentEvents = (order === null || order === void 0 || (_order$payment_events2 = order.payment_events) === null || _order$payment_events2 === void 0 ? void 0 : _order$payment_events2.filter(function (item) {
      return item.event === 'payment';
    })) || [];
    paymentEvents.forEach(function (event) {
      var _event$wallet_event, _event$wallet_event2, _event$paymethod, _event$data;
      if ((event === null || event === void 0 || (_event$wallet_event = event.wallet_event) === null || _event$wallet_event === void 0 || (_event$wallet_event = _event$wallet_event.wallet) === null || _event$wallet_event === void 0 ? void 0 : _event$wallet_event.type) === 'cash') {
        if (isAllowCashWalletRefund) {
          _refundOptions.push({
            value: 'cash_wallet',
            content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('CASH_WALLET', 'Cash Wallet'))
          });
        }
      } else if ((event === null || event === void 0 || (_event$wallet_event2 = event.wallet_event) === null || _event$wallet_event2 === void 0 || (_event$wallet_event2 = _event$wallet_event2.wallet) === null || _event$wallet_event2 === void 0 ? void 0 : _event$wallet_event2.type) === 'credit_point') {
        if (isAllowCreditPointRefund) {
          _refundOptions.push({
            value: event.id,
            content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('POINTS_WALLET', 'Points Wallet'))
          });
        }
      } else if ((event === null || event === void 0 || (_event$paymethod = event.paymethod) === null || _event$paymethod === void 0 ? void 0 : _event$paymethod.gateway) === 'stripe' || (event === null || event === void 0 || (_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.gateway) === 'stripe') {
        if (isAllowStripeRefund) {
          _refundOptions.push({
            value: event.id,
            content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('STRIPE', 'Stripe'))
          });
        }
      } else {
        if (isAllowOtherRefund) {
          if (!_refundOptions.find(function (item) {
            return item.value === 'cash_wallet';
          })) {
            _refundOptions.push({
              value: 'cash_wallet',
              content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('CASH_WALLET', 'Cash Wallet'))
            });
          }
        }
      }
    });
    setRefundOptions(_refundOptions);
  }, [JSON.stringify(order === null || order === void 0 ? void 0 : order.payment_events)], order === null || order === void 0 ? void 0 : order.id);
  (0, _react.useEffect)(function () {
    if (!(actionStatus !== null && actionStatus !== void 0 && actionStatus.loading)) {
      setOpenModal(false);
    }
  }, [actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.loading]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (isAllowCashWalletRefund || isAllowCreditPointRefund || isAllowStripeRefund || isAllowOtherRefund) && /*#__PURE__*/_react.default.createElement(_styles2.RefundWalletButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    disabled: (actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.loading) || refundDisabled,
    onClick: function onClick() {
      return setOpenModal(true);
    }
  }, t('REFUND_TO_WALLET', 'Refund to Wallet'))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    open: openModal,
    onClose: function onClose() {
      return setOpenModal(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.RefundContainer, {
    onSubmit: handleSubmit(onSubmit),
    autoComplete: "off"
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('REFUND_TO_WALLET', 'Refund to Wallet')), refundOptions.length > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.SelectWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('REFUND_TYPES', 'Refund types')), /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: selectedRefundOption,
    options: refundOptions,
    placeholder: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('SELECT_TYPE', 'Select type')),
    onChange: function onChange(val) {
      return setSelectedRefundOption(val);
    }
  })), /*#__PURE__*/_react.default.createElement("p", null, t('QUESTION_REFUND_AMOUNT', 'How do you want to refund?')), /*#__PURE__*/_react.default.createElement(_styles2.RadioItemContainer, {
    active: isRefundAll,
    disabled: refundAllDisabled,
    onClick: function onClick() {
      return setIsRefundAll(true);
    }
  }, isRefundAll ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('REFUND_ALL', 'Refund all'))), /*#__PURE__*/_react.default.createElement(_styles2.RadioItemContainer, {
    active: !isRefundAll,
    onClick: function onClick() {
      return setIsRefundAll(false);
    }
  }, !isRefundAll ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('REFUND_ONLY_AN_AMOUNT', 'Refund only an amount'))), !isRefundAll && /*#__PURE__*/_react.default.createElement(_styles2.RefundAmountWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    name: "amount",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    ref: register({
      required: t('VALIDATION_ERROR_FILLED', 'The _attribute_ field is required.').replace('_attribute_', t('AMOUNT', 'Amount'))
    })
  })), /*#__PURE__*/_react.default.createElement(_styles2.RefundReasonContainer, null, /*#__PURE__*/_react.default.createElement("label", null, t('COMMENTS', 'Comments')), /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "description",
    control: control,
    render: function render(_ref) {
      var _onChange = _ref.onChange,
        value = _ref.value;
      return /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
        rows: 3,
        value: value,
        onChange: function onChange(e) {
          _onChange(e.target.value);
        }
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    type: "submit",
    color: "primary",
    borderRadius: "8px"
  }, t('REFUND', 'Refund'))) : /*#__PURE__*/_react.default.createElement(_styles2.ErrorText, null, t('REFUND_NOT_ALLOWED', 'The refund is not allowed.')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState === null || alertState === void 0 ? void 0 : alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState === null || alertState === void 0 ? void 0 : alertState.open,
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