"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartBill = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _BsInfoCircle = _interopRequireDefault(require("@meronex/icons/bs/BsInfoCircle"));
var _MdCloseCircle = _interopRequireDefault(require("@meronex/icons/ios/MdCloseCircle"));
var _styledComponents = require("styled-components");
var _utils = require("../../../../utils");
var _CouponControl = require("../CouponControl");
var _Shared = require("../../../Shared");
var _TaxInformation = require("../TaxInformation");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
var CartBill = exports.CartBill = function CartBill(props) {
  var _validationFields$fie, _cart$metafields, _cart$metafields$find, _cart$offers, _cart$offers2, _cart$offers3, _cart$offers4, _cart$business, _ref, _cart$subtotal_with_d, _cart$taxes2, _cart$taxes3, _cart$fees, _cart$fees2, _cart$offers5, _cart$offers6, _orderState$options, _cart$taxes4, _cart$taxes5, _cart$offers7, _cart$offers8, _configs$driver_tip_t, _configs$driver_tip_u, _extraValueAdjustment, _openTaxModal$data, _openTaxModal$data2, _openTaxModal$data3, _openTaxModal$data4, _openTaxModal$data$fi, _openTaxModal$data5, _openTaxModal$data6;
  var cart = props.cart;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseNumber = _useUtils2$.parseNumber;
  var _useOrder = (0, _orderingComponentsAdminExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    removeOffer = _useOrder2[1].removeOffer;
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useValidationFields = (0, _orderingComponentsAdminExternal.useValidationFields)(),
    _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
    validationFields = _useValidationFields2[0];
  var _useCustomer = (0, _orderingComponentsAdminExternal.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 1),
    user = _useCustomer2[0].user;
  var _useState = (0, _react.useState)({
      open: false,
      tax: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    openTaxModal = _useState2[0],
    setOpenTaxModal = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    confirm = _useState4[0],
    setConfirm = _useState4[1];
  var isCouponEnabled = validationFields === null || validationFields === void 0 || (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 || (_validationFields$fie = _validationFields$fie.checkout) === null || _validationFields$fie === void 0 || (_validationFields$fie = _validationFields$fie.coupon) === null || _validationFields$fie === void 0 ? void 0 : _validationFields$fie.enabled;
  var extraValueAdjustment = cart === null || cart === void 0 || (_cart$metafields = cart.metafields) === null || _cart$metafields === void 0 || (_cart$metafields$find = _cart$metafields.find) === null || _cart$metafields$find === void 0 ? void 0 : _cart$metafields$find.call(_cart$metafields, function (meta) {
    return (meta === null || meta === void 0 ? void 0 : meta.key) === 'extra_value_adjustment_amount';
  });
  var getIncludedTaxes = function getIncludedTaxes(isDeliveryFee) {
    if ((cart === null || cart === void 0 ? void 0 : cart.taxes) === null) {
      return (cart === null || cart === void 0 ? void 0 : cart.business.tax_type) === 1 ? cart === null || cart === void 0 ? void 0 : cart.tax : 0;
    } else {
      return cart === null || cart === void 0 ? void 0 : cart.taxes.reduce(function (taxIncluded, tax) {
        var _tax$summary;
        return taxIncluded + (!isDeliveryFee && tax.type === 1 && tax.target === 'product' || isDeliveryFee && tax.type === 1 && tax.target === 'delivery_fee' ? (_tax$summary = tax.summary) === null || _tax$summary === void 0 ? void 0 : _tax$summary.tax : 0);
      }, 0);
    }
  };
  var getIncludedTaxesDiscounts = function getIncludedTaxesDiscounts() {
    var _cart$taxes;
    return cart === null || cart === void 0 || (_cart$taxes = cart.taxes) === null || _cart$taxes === void 0 || (_cart$taxes = _cart$taxes.filter(function (tax) {
      return (tax === null || tax === void 0 ? void 0 : tax.type) === 1 && (tax === null || tax === void 0 ? void 0 : tax.target) === 'product';
    })) === null || _cart$taxes === void 0 ? void 0 : _cart$taxes.reduce(function (carry, tax) {
      var _tax$summary$tax_afte, _tax$summary2, _tax$summary3;
      return carry + ((_tax$summary$tax_afte = tax === null || tax === void 0 || (_tax$summary2 = tax.summary) === null || _tax$summary2 === void 0 ? void 0 : _tax$summary2.tax_after_discount) !== null && _tax$summary$tax_afte !== void 0 ? _tax$summary$tax_afte : tax === null || tax === void 0 || (_tax$summary3 = tax.summary) === null || _tax$summary3 === void 0 ? void 0 : _tax$summary3.tax);
    }, 0);
  };
  var handleRemoveOfferClick = function handleRemoveOfferClick(id, userId) {
    var dataOffer = {
      business_id: cart === null || cart === void 0 ? void 0 : cart.business_id,
      offer_id: id
    };
    if (userId) dataOffer.user_id = userId;
    removeOffer(dataOffer);
  };
  var onRemoveOffer = function onRemoveOffer(id) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_OFFER', 'Are you sure that you want to delete the offer?'),
      title: t('OFFER', 'Offer'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleRemoveOfferClick(id, user === null || user === void 0 ? void 0 : user.id);
      }
    });
  };
  return /*#__PURE__*/_react.default.createElement(_styles.CartBillContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('SUMMARY', '')), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((cart === null || cart === void 0 ? void 0 : cart.subtotal) + getIncludedTaxes()))), (cart === null || cart === void 0 ? void 0 : cart.discount) > 0 && (cart === null || cart === void 0 ? void 0 : cart.total) >= 0 && (cart === null || cart === void 0 || (_cart$offers = cart.offers) === null || _cart$offers === void 0 ? void 0 : _cart$offers.length) === 0 && /*#__PURE__*/_react.default.createElement("tr", null, (cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount'), ' ', /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(cart === null || cart === void 0 ? void 0 : cart.discount_rate, parsePrice), "%)"))) : /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount')), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice((cart === null || cart === void 0 ? void 0 : cart.discount) || 0))), (cart === null || cart === void 0 || (_cart$offers2 = cart.offers) === null || _cart$offers2 === void 0 ? void 0 : _cart$offers2.length) > 0 && (cart === null || cart === void 0 || (_cart$offers3 = cart.offers) === null || _cart$offers3 === void 0 || (_cart$offers3 = _cart$offers3.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 1;
  })) === null || _cart$offers3 === void 0 ? void 0 : _cart$offers3.map(function (offer) {
    var _offer$summary;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "icon"
    }, offer.name, offer.rate_type === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)")), /*#__PURE__*/_react.default.createElement(_styles.IconContainer, null, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: theme.colors.primary,
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: offer,
          type: 'offer_target_1'
        });
      }
    }), !!(offer !== null && offer !== void 0 && offer.id) && /*#__PURE__*/_react.default.createElement(_MdCloseCircle.default, {
      size: "24",
      color: theme.colors.primary,
      onClick: function onClick() {
        return onRemoveOffer(offer === null || offer === void 0 ? void 0 : offer.id);
      }
    }))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 || (_offer$summary = offer.summary) === null || _offer$summary === void 0 ? void 0 : _offer$summary.discount)));
  })), (cart === null || cart === void 0 || (_cart$offers4 = cart.offers) === null || _cart$offers4 === void 0 || (_cart$offers4 = _cart$offers4.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 1;
  })) === null || _cart$offers4 === void 0 ? void 0 : _cart$offers4.length) > 0 && (cart === null || cart === void 0 ? void 0 : cart.subtotal_with_discount) > 0 && (cart === null || cart === void 0 ? void 0 : cart.discount) > 0 && (cart === null || cart === void 0 ? void 0 : cart.total) >= 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')), (cart === null || cart === void 0 || (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.tax_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref = (cart === null || cart === void 0 ? void 0 : cart.subtotal_with_discount) + getIncludedTaxesDiscounts()) !== null && _ref !== void 0 ? _ref : 0)) : /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_cart$subtotal_with_d = cart === null || cart === void 0 ? void 0 : cart.subtotal_with_discount) !== null && _cart$subtotal_with_d !== void 0 ? _cart$subtotal_with_d : 0))), (cart === null || cart === void 0 || (_cart$taxes2 = cart.taxes) === null || _cart$taxes2 === void 0 ? void 0 : _cart$taxes2.length) > 0 && (cart === null || cart === void 0 || (_cart$taxes3 = cart.taxes) === null || _cart$taxes3 === void 0 ? void 0 : _cart$taxes3.filter(function (tax) {
    return (tax === null || tax === void 0 ? void 0 : tax.type) === 2 && (tax === null || tax === void 0 ? void 0 : tax.rate) !== 0 && (tax === null || tax === void 0 ? void 0 : tax.target) === 'product';
  }).map(function (tax) {
    var _ref2, _tax$summary$tax_afte2, _tax$summary4, _tax$summary5;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: tax === null || tax === void 0 ? void 0 : tax.id
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "icon"
    }, tax.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(tax === null || tax === void 0 ? void 0 : tax.rate, parseNumber), "%)")), /*#__PURE__*/_react.default.createElement(_styles.IconContainer, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: tax,
          type: 'tax'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref2 = (_tax$summary$tax_afte2 = tax === null || tax === void 0 || (_tax$summary4 = tax.summary) === null || _tax$summary4 === void 0 ? void 0 : _tax$summary4.tax_after_discount) !== null && _tax$summary$tax_afte2 !== void 0 ? _tax$summary$tax_afte2 : tax === null || tax === void 0 || (_tax$summary5 = tax.summary) === null || _tax$summary5 === void 0 ? void 0 : _tax$summary5.tax) !== null && _ref2 !== void 0 ? _ref2 : 0)));
  })), (cart === null || cart === void 0 || (_cart$fees = cart.fees) === null || _cart$fees === void 0 ? void 0 : _cart$fees.length) > 0 && (cart === null || cart === void 0 || (_cart$fees2 = cart.fees) === null || _cart$fees2 === void 0 ? void 0 : _cart$fees2.filter(function (fee) {
    return !(fee.fixed === 0 && fee.percentage === 0);
  }).map(function (fee, i) {
    var _fee$id, _ref3, _fee$summary, _fee$summary$percenta, _fee$summary2, _fee$summary3;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: (_fee$id = fee.id) !== null && _fee$id !== void 0 ? _fee$id : i
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "icon"
    }, fee.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), "(", (fee === null || fee === void 0 ? void 0 : fee.fixed) > 0 && "".concat(parsePrice(fee === null || fee === void 0 ? void 0 : fee.fixed)).concat(fee.percentage > 0 ? ' + ' : ''), fee.percentage > 0 && "".concat(fee.percentage, "%"), ")", /*#__PURE__*/_react.default.createElement(_styles.IconContainer, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: fee,
          type: 'fee'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref3 = (fee === null || fee === void 0 || (_fee$summary = fee.summary) === null || _fee$summary === void 0 ? void 0 : _fee$summary.fixed) + ((_fee$summary$percenta = fee === null || fee === void 0 || (_fee$summary2 = fee.summary) === null || _fee$summary2 === void 0 ? void 0 : _fee$summary2.percentage_after_discount) !== null && _fee$summary$percenta !== void 0 ? _fee$summary$percenta : fee === null || fee === void 0 || (_fee$summary3 = fee.summary) === null || _fee$summary3 === void 0 ? void 0 : _fee$summary3.percentage)) !== null && _ref3 !== void 0 ? _ref3 : 0)));
  })), (cart === null || cart === void 0 || (_cart$offers5 = cart.offers) === null || _cart$offers5 === void 0 ? void 0 : _cart$offers5.length) > 0 && (cart === null || cart === void 0 || (_cart$offers6 = cart.offers) === null || _cart$offers6 === void 0 || (_cart$offers6 = _cart$offers6.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 3;
  })) === null || _cart$offers6 === void 0 ? void 0 : _cart$offers6.map(function (offer) {
    var _offer$summary2;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "icon"
    }, offer.name, (offer === null || offer === void 0 ? void 0 : offer.rate_type) === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)")), /*#__PURE__*/_react.default.createElement(_styles.IconContainer, null, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: theme.colors.primary,
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: offer,
          type: 'offer_target_3'
        });
      }
    }), !!(offer !== null && offer !== void 0 && offer.id) && /*#__PURE__*/_react.default.createElement(_MdCloseCircle.default, {
      size: "24",
      color: theme.colors.primary,
      onClick: function onClick() {
        return onRemoveOffer(offer === null || offer === void 0 ? void 0 : offer.id);
      }
    }))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 || (_offer$summary2 = offer.summary) === null || _offer$summary2 === void 0 ? void 0 : _offer$summary2.discount)));
  })), (orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DELIVERY_FEE', 'Delivery Fee')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((cart === null || cart === void 0 ? void 0 : cart.delivery_price_with_discount) + getIncludedTaxes(true)))), (cart === null || cart === void 0 || (_cart$taxes4 = cart.taxes) === null || _cart$taxes4 === void 0 ? void 0 : _cart$taxes4.length) > 0 && (cart === null || cart === void 0 || (_cart$taxes5 = cart.taxes) === null || _cart$taxes5 === void 0 ? void 0 : _cart$taxes5.filter(function (tax) {
    return (tax === null || tax === void 0 ? void 0 : tax.type) === 2 && (tax === null || tax === void 0 ? void 0 : tax.rate) !== 0 && (tax === null || tax === void 0 ? void 0 : tax.target) === 'delivery_fee';
  }).map(function (tax) {
    var _ref4, _tax$summary$tax_afte3, _tax$summary6, _tax$summary7;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: tax === null || tax === void 0 ? void 0 : tax.id
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "icon"
    }, tax.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(tax === null || tax === void 0 ? void 0 : tax.rate, parseNumber), "%)")), /*#__PURE__*/_react.default.createElement(_styles.IconContainer, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: tax,
          type: 'tax'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref4 = (_tax$summary$tax_afte3 = tax === null || tax === void 0 || (_tax$summary6 = tax.summary) === null || _tax$summary6 === void 0 ? void 0 : _tax$summary6.tax_after_discount) !== null && _tax$summary$tax_afte3 !== void 0 ? _tax$summary$tax_afte3 : tax === null || tax === void 0 || (_tax$summary7 = tax.summary) === null || _tax$summary7 === void 0 ? void 0 : _tax$summary7.tax) !== null && _ref4 !== void 0 ? _ref4 : 0)));
  })), (cart === null || cart === void 0 || (_cart$offers7 = cart.offers) === null || _cart$offers7 === void 0 ? void 0 : _cart$offers7.length) > 0 && (cart === null || cart === void 0 || (_cart$offers8 = cart.offers) === null || _cart$offers8 === void 0 || (_cart$offers8 = _cart$offers8.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 2;
  })) === null || _cart$offers8 === void 0 ? void 0 : _cart$offers8.map(function (offer) {
    var _offer$summary3;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "icon"
    }, offer.name, (offer === null || offer === void 0 ? void 0 : offer.rate_type) === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)")), /*#__PURE__*/_react.default.createElement(_styles.IconContainer, null, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: theme.colors.primary,
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: offer,
          type: 'offer_target_2'
        });
      }
    }), !!(offer !== null && offer !== void 0 && offer.id) && /*#__PURE__*/_react.default.createElement(_MdCloseCircle.default, {
      size: "24",
      color: theme.colors.primary,
      onClick: function onClick() {
        return onRemoveOffer(offer === null || offer === void 0 ? void 0 : offer.id);
      }
    }))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 || (_offer$summary3 = offer.summary) === null || _offer$summary3 === void 0 ? void 0 : _offer$summary3.discount)));
  })), (cart === null || cart === void 0 ? void 0 : cart.driver_tip) > 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DRIVER_TIP', 'Driver tip'), ' ', (cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate) > 0 && parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 2 && !parseInt(configs === null || configs === void 0 || (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10) && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.driver_tip))), extraValueAdjustment && !!parseFloat(extraValueAdjustment === null || extraValueAdjustment === void 0 ? void 0 : extraValueAdjustment.value) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t(extraValueAdjustment === null || extraValueAdjustment === void 0 || (_extraValueAdjustment = extraValueAdjustment.key) === null || _extraValueAdjustment === void 0 ? void 0 : _extraValueAdjustment.toUpperCase(), extraValueAdjustment === null || extraValueAdjustment === void 0 ? void 0 : extraValueAdjustment.key), ' '), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(parseFloat(extraValueAdjustment === null || extraValueAdjustment === void 0 ? void 0 : extraValueAdjustment.value)))))), isCouponEnabled && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.CouponContainer, null, /*#__PURE__*/_react.default.createElement(_CouponControl.CouponControl, {
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    price: cart === null || cart === void 0 ? void 0 : cart.total
  })), /*#__PURE__*/_react.default.createElement("table", {
    className: "total"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((cart === null || cart === void 0 ? void 0 : cart.total) >= 0 ? cart === null || cart === void 0 ? void 0 : cart.total : 0))))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    open: openTaxModal.open,
    padding: "20px",
    closeOnBackdrop: true,
    title: "".concat(((_openTaxModal$data = openTaxModal.data) === null || _openTaxModal$data === void 0 ? void 0 : _openTaxModal$data.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), " ").concat(((_openTaxModal$data2 = openTaxModal.data) === null || _openTaxModal$data2 === void 0 ? void 0 : _openTaxModal$data2.rate_type) !== 2 ? "(".concat(typeof ((_openTaxModal$data3 = openTaxModal.data) === null || _openTaxModal$data3 === void 0 ? void 0 : _openTaxModal$data3.rate) === 'number' ? "".concat((_openTaxModal$data4 = openTaxModal.data) === null || _openTaxModal$data4 === void 0 ? void 0 : _openTaxModal$data4.rate, "%") : "".concat(parsePrice((_openTaxModal$data$fi = (_openTaxModal$data5 = openTaxModal.data) === null || _openTaxModal$data5 === void 0 ? void 0 : _openTaxModal$data5.fixed) !== null && _openTaxModal$data$fi !== void 0 ? _openTaxModal$data$fi : 0), " + ").concat((_openTaxModal$data6 = openTaxModal.data) === null || _openTaxModal$data6 === void 0 ? void 0 : _openTaxModal$data6.percentage, "%"), ")") : '', "  "),
    onClose: function onClose() {
      return setOpenTaxModal({
        open: false,
        data: null,
        type: ''
      });
    },
    modalTitleStyle: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_TaxInformation.TaxInformation, {
    type: openTaxModal.type,
    data: openTaxModal.data,
    products: cart === null || cart === void 0 ? void 0 : cart.products
  })), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('PRODUCT', 'Product'),
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