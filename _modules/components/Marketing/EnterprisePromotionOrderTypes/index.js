"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterprisePromotionOrderTypes = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
var EnterprisePromotionOrderTypes = exports.EnterprisePromotionOrderTypes = function EnterprisePromotionOrderTypes(props) {
  var _configState$configs;
  var promotionState = props.promotionState,
    formState = props.formState,
    handleChangeItem = props.handleChangeItem,
    onClickDone = props.onClickDone;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var configTypes = (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.order_types_allowed) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var orderTypes = [{
    value: 1,
    content: t('DELIVERY', 'Delivery')
  }, {
    value: 2,
    content: t('PICKUP', 'Pickup')
  }, {
    value: 3,
    content: t('EAT_IN', 'Eat in')
  }, {
    value: 4,
    content: t('CURBSIDE', 'Curbside')
  }, {
    value: 5,
    content: t('DRIVE_THRU', 'Drive thru')
  }];
  var handleChangeOrderTypes = function handleChangeOrderTypes(checked, orderType) {
    var _formState$changes;
    var orderTypes = [];
    if ((_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.order_types_allowed) {
      var _formState$changes2;
      orderTypes = _toConsumableArray((_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.order_types_allowed);
    } else {
      var _promotionState$promo;
      if (Array.isArray((_promotionState$promo = promotionState.promotion) === null || _promotionState$promo === void 0 ? void 0 : _promotionState$promo.order_types_allowed)) {
        var _promotionState$promo2;
        orderTypes = _toConsumableArray((_promotionState$promo2 = promotionState.promotion) === null || _promotionState$promo2 === void 0 ? void 0 : _promotionState$promo2.order_types_allowed);
      }
    }
    if (checked) {
      orderTypes.push(orderType);
    } else {
      orderTypes = orderTypes.filter(function (value) {
        return value !== orderType;
      });
    }
    handleChangeItem({
      order_types_allowed: orderTypes
    });
  };
  var isDefaultChecked = function isDefaultChecked(orderType) {
    var _promotionState$promo3;
    if (Array.isArray((_promotionState$promo3 = promotionState.promotion) === null || _promotionState$promo3 === void 0 ? void 0 : _promotionState$promo3.order_types_allowed)) {
      var _promotionState$promo4;
      if ((_promotionState$promo4 = promotionState.promotion) !== null && _promotionState$promo4 !== void 0 && _promotionState$promo4.order_types_allowed.includes(orderType)) return true;else return false;
    } else return false;
  };
  var isChangesChecked = function isChangesChecked(orderType) {
    var _formState$changes3;
    var found = (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.order_types_allowed.find(function (value) {
      return value === orderType;
    });
    if (found) return true;else return false;
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.OrderTypesContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('FRONT_MAIN_EMAIL_ORDER_TYPE', 'Order Type')), orderTypes.filter(function (type) {
    return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
  }).map(function (orderType) {
    var _formState$changes4;
    return /*#__PURE__*/_react.default.createElement(_styles2.OrderTypeItem, {
      key: orderType.value
    }, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      checked: (_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.order_types_allowed ? isChangesChecked(orderType.value) : isDefaultChecked(orderType.value),
      onChange: function onChange(e) {
        return handleChangeOrderTypes(e.target.checked, orderType.value);
      }
    }), /*#__PURE__*/_react.default.createElement("span", null, orderType.content));
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return onClickDone();
    }
  }, t('DONE', 'Done')));
};