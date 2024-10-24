"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderBill = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _RefundToWallet = require("./RefundToWallet");
var _utils = require("../../../utils");
var _Shared = require("../../Shared");
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
var OrderBill = exports.OrderBill = function OrderBill(props) {
  var _order$products, _order$metafields, _order$metafields$fin, _order$summary$subtot, _order$summary2, _ref, _order$summary3, _order$offers, _order$summary$discou, _order$summary4, _order$offers2, _order$offers3, _order$summary5, _order$summary6, _order$summary7, _ref2, _order$summary8, _order$summary$subtot2, _order$summary9, _order$taxes3, _order$summary$tax2, _order$summary10, _order$fees, _order$summary$servic, _order$summary11, _order$taxes4, _order$taxes5, _order$fees2, _order$fees3, _order$offers4, _order$offers5, _order$summary12, _order$summary13, _order$taxes6, _order$taxes7, _order$offers6, _order$offers7, _order$summary14, _order$summary15, _configs$driver_tip_t, _configs$driver_tip_u, _order$summary$driver, _order$summary16, _extraValueAdjustment, _order$summary$total, _order$summary17, _order$payment_events, _order$payment_events2, _order$payment_events3, _order$payment_events4, _order$delivery_optio, _order$vehicle, _order$vehicle2, _order$vehicle3, _order$vehicle4, _order$vehicle5, _order$paymethod, _order$payment_events5;
  var order = props.order,
    actionStatus = props.actionStatus,
    handleRefundPaymentsStripe = props.handleRefundPaymentsStripe,
    handleOrderRefund = props.handleOrderRefund,
    viewOnly = props.viewOnly;
  var isGiftCardOrder = (order === null || order === void 0 || (_order$products = order.products) === null || _order$products === void 0 || (_order$products = _order$products[0]) === null || _order$products === void 0 ? void 0 : _order$products.type) === 'gift_card';
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseNumber = _useUtils2$.parseNumber;
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
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
  var SPOT_DICTIONARY = {
    3: t('SPOT_NUMBER_EAT_IN', 'Table number'),
    4: t('SPOT_NUMBER_CURBSIDE', 'Spot number'),
    5: t('SPOT_NUMBER_DRIVE_THRU', 'Drive thru lane')
  };
  var isPickupOrder = (order === null || order === void 0 ? void 0 : order.delivery_type) === 2;
  var extraValueAdjustment = order === null || order === void 0 || (_order$metafields = order.metafields) === null || _order$metafields === void 0 || (_order$metafields$fin = _order$metafields.find) === null || _order$metafields$fin === void 0 ? void 0 : _order$metafields$fin.call(_order$metafields, function (meta) {
    return (meta === null || meta === void 0 ? void 0 : meta.key) === 'extra_value_adjustment_amount';
  });
  var walletName = {
    cash: {
      name: t('CASH_WALLET', 'Cash Wallet')
    },
    credit_point: {
      name: t('POINTS_WALLET', 'Points Wallet')
    }
  };
  var stripePaymethods = ['stripe', 'stripe_direct', 'stripe_connect', 'stripe_redirect'];
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var onClickRefund = function onClickRefund() {
    setConfirm({
      open: true,
      content: t('QUESTION_REFUND_ORDER', 'Do you want to reimburse this order? This action is irreversible.'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleRefundPaymentsStripe();
      }
    });
  };
  var getIncludedTaxes = function getIncludedTaxes(isDeliveryFee) {
    var _order$taxes;
    if (!(order !== null && order !== void 0 && order.taxes)) return 0;
    if ((order === null || order === void 0 || (_order$taxes = order.taxes) === null || _order$taxes === void 0 ? void 0 : _order$taxes.length) === 0) {
      var _order$summary$tax, _order$summary;
      return order.tax_type === 1 ? (_order$summary$tax = order === null || order === void 0 || (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.tax) !== null && _order$summary$tax !== void 0 ? _order$summary$tax : 0 : 0;
    } else {
      return order === null || order === void 0 ? void 0 : order.taxes.reduce(function (taxIncluded, tax) {
        var _tax$summary;
        return taxIncluded + (!isDeliveryFee && tax.type === 1 && tax.target === 'product' || isDeliveryFee && tax.type === 1 && tax.target === 'delivery_fee' ? (_tax$summary = tax.summary) === null || _tax$summary === void 0 ? void 0 : _tax$summary.tax : 0);
      }, 0);
    }
  };
  var getIncludedTaxesDiscounts = function getIncludedTaxesDiscounts() {
    var _order$taxes2;
    return order === null || order === void 0 || (_order$taxes2 = order.taxes) === null || _order$taxes2 === void 0 || (_order$taxes2 = _order$taxes2.filter(function (tax) {
      return (tax === null || tax === void 0 ? void 0 : tax.type) === 1 && (tax === null || tax === void 0 ? void 0 : tax.target) === 'product';
    })) === null || _order$taxes2 === void 0 ? void 0 : _order$taxes2.reduce(function (carry, tax) {
      var _tax$summary$tax_afte, _tax$summary2, _tax$summary3;
      return carry + ((_tax$summary$tax_afte = tax === null || tax === void 0 || (_tax$summary2 = tax.summary) === null || _tax$summary2 === void 0 ? void 0 : _tax$summary2.tax_after_discount) !== null && _tax$summary$tax_afte !== void 0 ? _tax$summary$tax_afte : tax === null || tax === void 0 || (_tax$summary3 = tax.summary) === null || _tax$summary3 === void 0 ? void 0 : _tax$summary3.tax);
    }, 0);
  };
  (0, _react.useEffect)(function () {
    if (!(actionStatus !== null && actionStatus !== void 0 && actionStatus.error)) return;
    if (Object.keys(actionStatus.error).length > 0) {
      setAlertState({
        open: true,
        content: actionStatus.error
      });
    }
  }, [actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.error]);
  return /*#__PURE__*/_react.default.createElement(_styles2.OrderBillContainer, null, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(((_order$summary$subtot = order === null || order === void 0 || (_order$summary2 = order.summary) === null || _order$summary2 === void 0 ? void 0 : _order$summary2.subtotal) !== null && _order$summary$subtot !== void 0 ? _order$summary$subtot : order === null || order === void 0 ? void 0 : order.subtotal) + getIncludedTaxes(), {
    currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
  }))), ((_ref = (order === null || order === void 0 || (_order$summary3 = order.summary) === null || _order$summary3 === void 0 ? void 0 : _order$summary3.discount) > 0) !== null && _ref !== void 0 ? _ref : (order === null || order === void 0 ? void 0 : order.discount) > 0) && (order === null || order === void 0 || (_order$offers = order.offers) === null || _order$offers === void 0 ? void 0 : _order$offers.length) === 0 && /*#__PURE__*/_react.default.createElement("tr", null, (order === null || order === void 0 ? void 0 : order.offer_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount'), ' ', /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.offer_rate, parsePrice), "%)"))) : /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount')), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice((_order$summary$discou = order === null || order === void 0 || (_order$summary4 = order.summary) === null || _order$summary4 === void 0 ? void 0 : _order$summary4.discount) !== null && _order$summary$discou !== void 0 ? _order$summary$discou : order === null || order === void 0 ? void 0 : order.discount, {
    currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
  }))), (order === null || order === void 0 || (_order$offers2 = order.offers) === null || _order$offers2 === void 0 ? void 0 : _order$offers2.length) > 0 && (order === null || order === void 0 || (_order$offers3 = order.offers) === null || _order$offers3 === void 0 || (_order$offers3 = _order$offers3.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 1;
  })) === null || _order$offers3 === void 0 ? void 0 : _order$offers3.map(function (offer) {
    var _offer$name, _offer$summary;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", null, t(offer === null || offer === void 0 || (_offer$name = offer.name) === null || _offer$name === void 0 || (_offer$name = _offer$name.toUpperCase()) === null || _offer$name === void 0 ? void 0 : _offer$name.replaceAll(' ', '_'), offer.name), offer.rate_type === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 || (_offer$summary = offer.summary) === null || _offer$summary === void 0 ? void 0 : _offer$summary.discount, {
      currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
    })));
  })), (order === null || order === void 0 || (_order$summary5 = order.summary) === null || _order$summary5 === void 0 ? void 0 : _order$summary5.subtotal_with_discount) > 0 && (order === null || order === void 0 || (_order$summary6 = order.summary) === null || _order$summary6 === void 0 ? void 0 : _order$summary6.discount) > 0 && (order === null || order === void 0 || (_order$summary7 = order.summary) === null || _order$summary7 === void 0 ? void 0 : _order$summary7.total) >= 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')), (order === null || order === void 0 ? void 0 : order.tax_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref2 = (order === null || order === void 0 || (_order$summary8 = order.summary) === null || _order$summary8 === void 0 ? void 0 : _order$summary8.subtotal_with_discount) + getIncludedTaxesDiscounts()) !== null && _ref2 !== void 0 ? _ref2 : 0, {
    currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
  })) : /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$subtot2 = order === null || order === void 0 || (_order$summary9 = order.summary) === null || _order$summary9 === void 0 ? void 0 : _order$summary9.subtotal_with_discount) !== null && _order$summary$subtot2 !== void 0 ? _order$summary$subtot2 : 0, {
    currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
  }))), (order === null || order === void 0 || (_order$taxes3 = order.taxes) === null || _order$taxes3 === void 0 ? void 0 : _order$taxes3.length) === 0 && (order === null || order === void 0 ? void 0 : order.tax_type) === 2 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TAX', 'Tax'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.tax, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$tax2 = order === null || order === void 0 || (_order$summary10 = order.summary) === null || _order$summary10 === void 0 ? void 0 : _order$summary10.tax) !== null && _order$summary$tax2 !== void 0 ? _order$summary$tax2 : 0, {
    currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
  }))), (order === null || order === void 0 || (_order$fees = order.fees) === null || _order$fees === void 0 ? void 0 : _order$fees.length) === 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SERVICE_FEE', 'Service fee'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.service_fee, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$servic = order === null || order === void 0 || (_order$summary11 = order.summary) === null || _order$summary11 === void 0 ? void 0 : _order$summary11.service_fee) !== null && _order$summary$servic !== void 0 ? _order$summary$servic : 0, {
    currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
  }))), (order === null || order === void 0 || (_order$taxes4 = order.taxes) === null || _order$taxes4 === void 0 ? void 0 : _order$taxes4.length) > 0 && (order === null || order === void 0 || (_order$taxes5 = order.taxes) === null || _order$taxes5 === void 0 ? void 0 : _order$taxes5.filter(function (tax) {
    return (tax === null || tax === void 0 ? void 0 : tax.type) === 2 && (tax === null || tax === void 0 ? void 0 : tax.rate) !== 0 && (tax === null || tax === void 0 ? void 0 : tax.target) === 'product';
  }).map(function (tax) {
    var _tax$name, _ref3, _tax$summary$tax_afte2, _tax$summary4, _tax$summary5;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: tax === null || tax === void 0 ? void 0 : tax.id
    }, /*#__PURE__*/_react.default.createElement("td", null, t(tax === null || tax === void 0 || (_tax$name = tax.name) === null || _tax$name === void 0 || (_tax$name = _tax$name.toUpperCase()) === null || _tax$name === void 0 ? void 0 : _tax$name.replaceAll(' ', '_'), tax === null || tax === void 0 ? void 0 : tax.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(tax === null || tax === void 0 ? void 0 : tax.rate, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref3 = (_tax$summary$tax_afte2 = tax === null || tax === void 0 || (_tax$summary4 = tax.summary) === null || _tax$summary4 === void 0 ? void 0 : _tax$summary4.tax_after_discount) !== null && _tax$summary$tax_afte2 !== void 0 ? _tax$summary$tax_afte2 : tax === null || tax === void 0 || (_tax$summary5 = tax.summary) === null || _tax$summary5 === void 0 ? void 0 : _tax$summary5.tax) !== null && _ref3 !== void 0 ? _ref3 : 0, {
      currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
    })));
  })), (order === null || order === void 0 || (_order$fees2 = order.fees) === null || _order$fees2 === void 0 ? void 0 : _order$fees2.length) > 0 && (order === null || order === void 0 || (_order$fees3 = order.fees) === null || _order$fees3 === void 0 || (_order$fees3 = _order$fees3.filter(function (fee) {
    return !((fee === null || fee === void 0 ? void 0 : fee.fixed) === 0 && (fee === null || fee === void 0 ? void 0 : fee.percentage) === 0);
  })) === null || _order$fees3 === void 0 ? void 0 : _order$fees3.map(function (fee) {
    var _fee$name, _ref4, _fee$summary, _fee$summary$percenta, _fee$summary2, _fee$summary3;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: fee.id
    }, /*#__PURE__*/_react.default.createElement("td", null, t(fee === null || fee === void 0 || (_fee$name = fee.name) === null || _fee$name === void 0 || (_fee$name = _fee$name.toUpperCase()) === null || _fee$name === void 0 ? void 0 : _fee$name.replaceAll(' ', '_'), fee === null || fee === void 0 ? void 0 : fee.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), "(", (fee === null || fee === void 0 ? void 0 : fee.fixed) > 0 && "".concat(parsePrice(fee === null || fee === void 0 ? void 0 : fee.fixed), " + "), fee.percentage, "%)"), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref4 = (fee === null || fee === void 0 || (_fee$summary = fee.summary) === null || _fee$summary === void 0 ? void 0 : _fee$summary.fixed) + ((_fee$summary$percenta = fee === null || fee === void 0 || (_fee$summary2 = fee.summary) === null || _fee$summary2 === void 0 ? void 0 : _fee$summary2.percentage_after_discount) !== null && _fee$summary$percenta !== void 0 ? _fee$summary$percenta : fee === null || fee === void 0 || (_fee$summary3 = fee.summary) === null || _fee$summary3 === void 0 ? void 0 : _fee$summary3.percentage)) !== null && _ref4 !== void 0 ? _ref4 : 0, {
      currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
    })));
  })), (order === null || order === void 0 || (_order$offers4 = order.offers) === null || _order$offers4 === void 0 ? void 0 : _order$offers4.length) > 0 && (order === null || order === void 0 || (_order$offers5 = order.offers) === null || _order$offers5 === void 0 || (_order$offers5 = _order$offers5.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 3;
  })) === null || _order$offers5 === void 0 ? void 0 : _order$offers5.map(function (offer) {
    var _offer$name2, _offer$summary2;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", null, t(offer === null || offer === void 0 || (_offer$name2 = offer.name) === null || _offer$name2 === void 0 || (_offer$name2 = _offer$name2.toUpperCase()) === null || _offer$name2 === void 0 ? void 0 : _offer$name2.replaceAll(' ', '_'), offer.name), offer.rate_type === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 || (_offer$summary2 = offer.summary) === null || _offer$summary2 === void 0 ? void 0 : _offer$summary2.discount, {
      currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
    })));
  })), typeof (order === null || order === void 0 || (_order$summary12 = order.summary) === null || _order$summary12 === void 0 ? void 0 : _order$summary12.delivery_price) === 'number' && !isPickupOrder && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DELIVERY_FEE', 'Delivery Fee')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 || (_order$summary13 = order.summary) === null || _order$summary13 === void 0 ? void 0 : _order$summary13.delivery_price) + getIncludedTaxes(true), {
    currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
  }))), (order === null || order === void 0 || (_order$taxes6 = order.taxes) === null || _order$taxes6 === void 0 ? void 0 : _order$taxes6.length) > 0 && (order === null || order === void 0 || (_order$taxes7 = order.taxes) === null || _order$taxes7 === void 0 ? void 0 : _order$taxes7.filter(function (tax) {
    return (tax === null || tax === void 0 ? void 0 : tax.type) === 2 && (tax === null || tax === void 0 ? void 0 : tax.rate) !== 0 && (tax === null || tax === void 0 ? void 0 : tax.target) === 'delivery_fee';
  }).map(function (tax) {
    var _tax$name2, _ref5, _tax$summary$tax_afte3, _tax$summary6, _tax$summary7;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: tax === null || tax === void 0 ? void 0 : tax.id
    }, /*#__PURE__*/_react.default.createElement("td", null, t(tax === null || tax === void 0 || (_tax$name2 = tax.name) === null || _tax$name2 === void 0 || (_tax$name2 = _tax$name2.toUpperCase()) === null || _tax$name2 === void 0 ? void 0 : _tax$name2.replace(/ /g, '_'), tax === null || tax === void 0 ? void 0 : tax.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(tax === null || tax === void 0 ? void 0 : tax.rate, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref5 = (_tax$summary$tax_afte3 = tax === null || tax === void 0 || (_tax$summary6 = tax.summary) === null || _tax$summary6 === void 0 ? void 0 : _tax$summary6.tax_after_discount) !== null && _tax$summary$tax_afte3 !== void 0 ? _tax$summary$tax_afte3 : tax === null || tax === void 0 || (_tax$summary7 = tax.summary) === null || _tax$summary7 === void 0 ? void 0 : _tax$summary7.tax) !== null && _ref5 !== void 0 ? _ref5 : 0)));
  })), (order === null || order === void 0 || (_order$offers6 = order.offers) === null || _order$offers6 === void 0 ? void 0 : _order$offers6.length) > 0 && (order === null || order === void 0 || (_order$offers7 = order.offers) === null || _order$offers7 === void 0 || (_order$offers7 = _order$offers7.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 2;
  })) === null || _order$offers7 === void 0 ? void 0 : _order$offers7.map(function (offer) {
    var _offer$name3, _offer$summary3;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", null, t(offer === null || offer === void 0 || (_offer$name3 = offer.name) === null || _offer$name3 === void 0 || (_offer$name3 = _offer$name3.toUpperCase()) === null || _offer$name3 === void 0 ? void 0 : _offer$name3.replaceAll(' ', '_'), offer.name), offer.rate_type === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 || (_offer$summary3 = offer.summary) === null || _offer$summary3 === void 0 ? void 0 : _offer$summary3.discount, {
      currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
    })));
  })), ((order === null || order === void 0 || (_order$summary14 = order.summary) === null || _order$summary14 === void 0 ? void 0 : _order$summary14.driver_tip) > 0 || (order === null || order === void 0 ? void 0 : order.driver_tip) > 0) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DRIVER_TIP', 'Driver tip'), ' ', ((order === null || order === void 0 || (_order$summary15 = order.summary) === null || _order$summary15 === void 0 ? void 0 : _order$summary15.driver_tip) > 0 || (order === null || order === void 0 ? void 0 : order.driver_tip) > 0) && parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 2 && !parseInt(configs === null || configs === void 0 || (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10) && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.driver_tip, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$driver = order === null || order === void 0 || (_order$summary16 = order.summary) === null || _order$summary16 === void 0 ? void 0 : _order$summary16.driver_tip) !== null && _order$summary$driver !== void 0 ? _order$summary$driver : order === null || order === void 0 ? void 0 : order.totalDriverTip, {
    currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
  }))), extraValueAdjustment && !!parseFloat(extraValueAdjustment === null || extraValueAdjustment === void 0 ? void 0 : extraValueAdjustment.value) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t(extraValueAdjustment === null || extraValueAdjustment === void 0 || (_extraValueAdjustment = extraValueAdjustment.key) === null || _extraValueAdjustment === void 0 ? void 0 : _extraValueAdjustment.toUpperCase(), extraValueAdjustment === null || extraValueAdjustment === void 0 ? void 0 : extraValueAdjustment.key), ' '), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(parseFloat(extraValueAdjustment === null || extraValueAdjustment === void 0 ? void 0 : extraValueAdjustment.value), {
    currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
  }))))), /*#__PURE__*/_react.default.createElement("table", {
    className: "total"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$total = order === null || order === void 0 || (_order$summary17 = order.summary) === null || _order$summary17 === void 0 ? void 0 : _order$summary17.total) !== null && _order$summary$total !== void 0 ? _order$summary$total : order === null || order === void 0 ? void 0 : order.total, {
    currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
  }))))), (order === null || order === void 0 || (_order$payment_events = order.payment_events) === null || _order$payment_events === void 0 ? void 0 : _order$payment_events.length) > 0 && /*#__PURE__*/_react.default.createElement("table", {
    className: "payments"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    colSpan: "2"
  }, t('PAYMENTS', 'Payments')))), /*#__PURE__*/_react.default.createElement("tbody", null, order === null || order === void 0 || (_order$payment_events2 = order.payment_events) === null || _order$payment_events2 === void 0 ? void 0 : _order$payment_events2.filter(function (item) {
    return item.event === 'payment';
  }).map(function (event, i) {
    var _walletName$event$wal, _event$wallet_event, _event$paymethod, _event$paymethod2, _event$data, _event$data2, _event$data3, _walletName$event$dat, _event$data4, _event$paymethod3;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("td", null, event !== null && event !== void 0 && event.wallet_event ? (_walletName$event$wal = walletName[event === null || event === void 0 || (_event$wallet_event = event.wallet_event) === null || _event$wallet_event === void 0 || (_event$wallet_event = _event$wallet_event.wallet) === null || _event$wallet_event === void 0 ? void 0 : _event$wallet_event.type]) === null || _walletName$event$wal === void 0 ? void 0 : _walletName$event$wal.name : event !== null && event !== void 0 && event.paymethod ? t(event === null || event === void 0 || (_event$paymethod = event.paymethod) === null || _event$paymethod === void 0 || (_event$paymethod = _event$paymethod.gateway) === null || _event$paymethod === void 0 ? void 0 : _event$paymethod.toUpperCase(), event === null || event === void 0 || (_event$paymethod2 = event.paymethod) === null || _event$paymethod2 === void 0 ? void 0 : _event$paymethod2.name) : event !== null && event !== void 0 && (_event$data = event.data) !== null && _event$data !== void 0 && _event$data.gateway ? t(event === null || event === void 0 || (_event$data2 = event.data) === null || _event$data2 === void 0 || (_event$data2 = _event$data2.gateway) === null || _event$data2 === void 0 ? void 0 : _event$data2.toUpperCase(), event === null || event === void 0 || (_event$data3 = event.data) === null || _event$data3 === void 0 || (_event$data3 = _event$data3.gateway) === null || _event$data3 === void 0 ? void 0 : _event$data3.replaceAll('_', ' ')) : (_walletName$event$dat = walletName[event === null || event === void 0 || (_event$data4 = event.data) === null || _event$data4 === void 0 ? void 0 : _event$data4.wallet_currency]) === null || _walletName$event$dat === void 0 ? void 0 : _walletName$event$dat.name), /*#__PURE__*/_react.default.createElement("td", null, (event === null || event === void 0 || (_event$paymethod3 = event.paymethod) === null || _event$paymethod3 === void 0 ? void 0 : _event$paymethod3.gateway) === 'cash' && order !== null && order !== void 0 && order.cash ? parsePrice(order === null || order === void 0 ? void 0 : order.cash, {
      currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
    }) : "-".concat(parsePrice(event === null || event === void 0 ? void 0 : event.amount, {
      currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
    }))));
  }))), !isGiftCardOrder && !viewOnly && /*#__PURE__*/_react.default.createElement(_RefundToWallet.RefundToWallet, {
    order: order,
    actionStatus: actionStatus,
    handleOrderRefund: handleOrderRefund,
    stripePaymethods: stripePaymethods
  }), (order === null || order === void 0 || (_order$payment_events3 = order.payment_events) === null || _order$payment_events3 === void 0 ? void 0 : _order$payment_events3.filter(function (item) {
    return item.event === 'refund';
  }).length) > 0 && /*#__PURE__*/_react.default.createElement("table", {
    className: "payments"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    colSpan: "2"
  }, t('REFUND', 'Refund')))), /*#__PURE__*/_react.default.createElement("tbody", null, order === null || order === void 0 || (_order$payment_events4 = order.payment_events) === null || _order$payment_events4 === void 0 ? void 0 : _order$payment_events4.filter(function (item) {
    return item.event === 'refund';
  }).map(function (event, i) {
    var _walletName$event$wal2, _event$wallet_event2, _event$paymethod4, _event$paymethod5, _event$data5, _event$data6, _event$data7, _walletName$event$dat2, _event$data8;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("td", null, event !== null && event !== void 0 && event.wallet_event ? (_walletName$event$wal2 = walletName[event === null || event === void 0 || (_event$wallet_event2 = event.wallet_event) === null || _event$wallet_event2 === void 0 || (_event$wallet_event2 = _event$wallet_event2.wallet) === null || _event$wallet_event2 === void 0 ? void 0 : _event$wallet_event2.type]) === null || _walletName$event$wal2 === void 0 ? void 0 : _walletName$event$wal2.name : event !== null && event !== void 0 && event.paymethod ? t(event === null || event === void 0 || (_event$paymethod4 = event.paymethod) === null || _event$paymethod4 === void 0 || (_event$paymethod4 = _event$paymethod4.gateway) === null || _event$paymethod4 === void 0 ? void 0 : _event$paymethod4.toUpperCase(), event === null || event === void 0 || (_event$paymethod5 = event.paymethod) === null || _event$paymethod5 === void 0 ? void 0 : _event$paymethod5.name) : event !== null && event !== void 0 && (_event$data5 = event.data) !== null && _event$data5 !== void 0 && _event$data5.gateway ? t(event === null || event === void 0 || (_event$data6 = event.data) === null || _event$data6 === void 0 || (_event$data6 = _event$data6.gateway) === null || _event$data6 === void 0 ? void 0 : _event$data6.toUpperCase(), event === null || event === void 0 || (_event$data7 = event.data) === null || _event$data7 === void 0 || (_event$data7 = _event$data7.gateway) === null || _event$data7 === void 0 ? void 0 : _event$data7.replaceAll('_', ' ')) : (_walletName$event$dat2 = walletName[event === null || event === void 0 || (_event$data8 = event.data) === null || _event$data8 === void 0 ? void 0 : _event$data8.wallet_currency]) === null || _walletName$event$dat2 === void 0 ? void 0 : _walletName$event$dat2.name), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(event === null || event === void 0 ? void 0 : event.amount, {
      currency: (0, _utils.getCurrenySymbol)(order === null || order === void 0 ? void 0 : order.currency)
    })));
  }))), /*#__PURE__*/_react.default.createElement("table", {
    className: "delivery_option"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    colSpan: "2"
  }, t('DELIVERY_PREFERENCE', 'Delivery Preference')))), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, order !== null && order !== void 0 && order.delivery_option ? order === null || order === void 0 || (_order$delivery_optio = order.delivery_option) === null || _order$delivery_optio === void 0 ? void 0 : _order$delivery_optio.name : t('EITHER_WAY', 'Either way'))))), (order === null || order === void 0 ? void 0 : order.comment) && /*#__PURE__*/_react.default.createElement("table", {
    className: "comments"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('COMMENT', 'Comment')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : order.comment)))), (order === null || order === void 0 ? void 0 : order.spot_number) && /*#__PURE__*/_react.default.createElement("table", {
    className: "spot_number"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, SPOT_DICTIONARY[order === null || order === void 0 ? void 0 : order.delivery_type]), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : order.spot_number)))), (order === null || order === void 0 ? void 0 : order.vehicle) && /*#__PURE__*/_react.default.createElement("table", {
    className: "vehicle"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    colSpan: "2"
  }, t('ORDER_VEHICLE', 'Vehicle')))), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('ORDER_VEHICLE_TYPE', 'Type')), /*#__PURE__*/_react.default.createElement("td", null, t(order === null || order === void 0 || (_order$vehicle = order.vehicle) === null || _order$vehicle === void 0 || (_order$vehicle = _order$vehicle.type) === null || _order$vehicle === void 0 ? void 0 : _order$vehicle.toUpperCase(), order === null || order === void 0 || (_order$vehicle2 = order.vehicle) === null || _order$vehicle2 === void 0 ? void 0 : _order$vehicle2.type))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('ORDER_VEHICLE_MODEL', 'Model')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 || (_order$vehicle3 = order.vehicle) === null || _order$vehicle3 === void 0 ? void 0 : _order$vehicle3.model)), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('ORDER_VEHICLE_CAR_REGISTRATION', 'Car registration')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 || (_order$vehicle4 = order.vehicle) === null || _order$vehicle4 === void 0 ? void 0 : _order$vehicle4.car_registration)), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('ORDER_VEHICLE_COLOR', 'Color')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 || (_order$vehicle5 = order.vehicle) === null || _order$vehicle5 === void 0 ? void 0 : _order$vehicle5.color)))), !isGiftCardOrder && !(order !== null && order !== void 0 && order.refund_data) && stripePaymethods.includes(order === null || order === void 0 || (_order$paymethod = order.paymethod) === null || _order$paymethod === void 0 ? void 0 : _order$paymethod.gateway) && !viewOnly && /*#__PURE__*/_react.default.createElement(_styles2.RefundButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    disabled: (actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.loading) || (order === null || order === void 0 || (_order$payment_events5 = order.payment_events) === null || _order$payment_events5 === void 0 ? void 0 : _order$payment_events5.find(function (item) {
      var _item$paymethod;
      return item.event === 'refund' && stripePaymethods.includes(item === null || item === void 0 || (_item$paymethod = item.paymethod) === null || _item$paymethod === void 0 ? void 0 : _item$paymethod.gateway);
    })),
    onClick: onClickRefund
  }, t('REFUND', 'Refund'))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    width: "700px",
    title: t('WEB_APPNAME', 'Ordering'),
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
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    width: "700px",
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