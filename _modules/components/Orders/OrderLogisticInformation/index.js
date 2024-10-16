"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderLogisticInformation = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var LogisticInformationUI = function LogisticInformationUI(props) {
  var _logisticInformation$;
  var logisticInformation = props.logisticInformation,
    getLogistics = props.getLogistics;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    parseNumber = _useUtils2$.parseNumber;
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var getOrderStatus = function getOrderStatus(status) {
    var orderStatus = [{
      key: 0,
      value: t('PENDING', 'Pending')
    }, {
      key: 1,
      value: t('COMPLETED_BY_ADMIN', 'Completed by admin')
    }, {
      key: 2,
      value: t('REJECTED_BY_ADMIN', 'Rejected by admin')
    }, {
      key: 3,
      value: t('ORDER_STATUS_IN_BUSINESS', 'Driver arrived to business')
    }, {
      key: 4,
      value: t('PREPARATION_COMPLETED', 'Preparation Completed')
    }, {
      key: 5,
      value: t('REJECTED_BY_BUSINESS', 'Rejected by business')
    }, {
      key: 6,
      value: t('REJECTED_BY_DRIVER', 'Rejected by driver')
    }, {
      key: 7,
      value: t('ACCEPTED_BY_BUSINESS', 'Accepted by business')
    }, {
      key: 8,
      value: t('ACCEPTED_BY_DRIVER', 'Accepted by driver')
    }, {
      key: 9,
      value: t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver')
    }, {
      key: 10,
      value: t('PICK_UP_FAILED_BY_DRIVER', 'Pick up Failed by driver')
    }, {
      key: 11,
      value: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver')
    }, {
      key: 12,
      value: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by driver')
    }, {
      key: 13,
      value: t('PREORDER', 'Preorder')
    }, {
      key: 14,
      value: t('ORDER_NOT_READY', 'Order not ready')
    }, {
      key: 15,
      value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', 'Pickup completed by customer')
    }, {
      key: 16,
      value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', 'Cancelled by customer')
    }, {
      key: 17,
      value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', 'Not picked by customer')
    }, {
      key: 18,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', 'Driver almost arrived to business')
    }, {
      key: 19,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', 'Driver almost arrived to customer')
    }, {
      key: 20,
      value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', 'Customer almost arrived to business')
    }, {
      key: 21,
      value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', 'Customer arrived to business')
    }, {
      key: 22,
      value: t('ORDER_LOOKING_FOR_DRIVER', 'Looking for driver')
    }, {
      key: 23,
      value: t('ORDER_DRIVER_ON_WAY', 'Driver on way')
    }, {
      key: 24,
      value: t('ORDER_STATUS_DRIVER_WAITING_FOR_ORDER', 'Driver waiting for order')
    }, {
      key: 25,
      value: t('ORDER_STATUS_ACCEPTED_BY_DRIVER_COMPANY', 'Accepted by driver company')
    }, {
      key: 26,
      value: t('ORDER_DRIVER_ARRIVED_CUSTOMER', 'Driver arrived to customer')
    }];
    var objectStatus = orderStatus.find(function (o) {
      return o.key === status;
    });
    return objectStatus && objectStatus;
  };
  var calculateDistanceParse = function calculateDistanceParse(distance) {
    var _configState$configs$, _configState$configs$2;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    distance = parseFloat(distance) || 0;
    var unit = (options === null || options === void 0 ? void 0 : options.unit) || 'KM';
    if (((_configState$configs$ = configState.configs.distance_unit_km) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value) === '1') {
      unit = 'KM';
    }
    if ((_configState$configs$2 = configState.configs.distance_unit) !== null && _configState$configs$2 !== void 0 && _configState$configs$2.value) {
      var _configState$configs$3;
      unit = (_configState$configs$3 = configState.configs.distance_unit) === null || _configState$configs$3 === void 0 ? void 0 : _configState$configs$3.value;
    }
    if (unit.toUpperCase() === 'MI') {
      var dist = distance * 0.621371 / 1000;
      return "".concat(parseNumber(dist, options), " ").concat(t('MI', 'mi'));
    } else {
      return "".concat(parseNumber(distance / 1000, options), " ").concat(t('KM', 'km'));
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, logisticInformation.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(3)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SkeletonHitory, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 400,
      height: 40
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 300,
      height: 40
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 380,
      height: 40
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 200,
      height: 40
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 450,
      height: 40
    }));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, logisticInformation.error === null ? /*#__PURE__*/_react.default.createElement(_styles2.WraaperLogs, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    rectangle: true,
    color: "primary",
    onClick: function onClick() {
      return getLogistics();
    }
  }, t('RELOAD', 'Reload')), /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_styles2.UppercaseText, null, /*#__PURE__*/_react.default.createElement("strong", null, t('DISTANCE_CUSTOMER_FROM_BUSINESS', 'DISTANCE FROM CUSTOMER TO BUSINESS'))), ": ", calculateDistanceParse(logisticInformation === null || logisticInformation === void 0 || (_logisticInformation$ = logisticInformation.data) === null || _logisticInformation$ === void 0 ? void 0 : _logisticInformation$.distance_customer_from_business)), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_styles2.UppercaseText, {
    title: "title"
  }, t('QUEUES', 'Queues'))), logisticInformation.data.queues.length > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, logisticInformation.data.queues.map(function (queue, i) {
    var _getOrderStatus;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: queue.id
    }, (queue === null || queue === void 0 ? void 0 : queue.name) && /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, /*#__PURE__*/_react.default.createElement("span", null, i + 1, ". ", queue.name)), /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, /*#__PURE__*/_react.default.createElement("strong", null, t('AVAILABLE_DRIVERS', 'Available drivers'), ": "), /*#__PURE__*/_react.default.createElement("span", null, queue.drivers.length)), /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, /*#__PURE__*/_react.default.createElement("strong", null, t('PRIORITY', 'Priority'), ": "), /*#__PURE__*/_react.default.createElement("span", null, queue.priority)), /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, /*#__PURE__*/_react.default.createElement("strong", null, t('START_IN', 'Start in'), ": "), /*#__PURE__*/_react.default.createElement("span", null, (_getOrderStatus = getOrderStatus(queue.orders_group_start_in_status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value)), queue.orders.length > 0 ? /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, queue.orders.map(function (order, i) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: order.id
      }, i + 1, ". ", order.id, " ", (order === null || order === void 0 ? void 0 : order.waiting_for_preorder) && /*#__PURE__*/_react.default.createElement("span", null, "(", t('WAITING_FOR_PREORDER', 'waiting for preorder'), ")"));
    })) : /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, t('WITHOUT_ORDERS', 'without orders')));
  })) : /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_styles2.UppercaseText, null, t('WITHOUT_QUEUES', 'Without Queues')))), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_styles2.UppercaseText, {
    title: "title"
  }, t('HISTORY_ATTEMPTS', 'Attempts history'))), logisticInformation.data.logistic_attempts.length > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, logisticInformation.data.logistic_attempts.map(function (attempt) {
    return /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, {
      key: attempt.id
    }, /*#__PURE__*/_react.default.createElement("strong", null, t('DRIVER_GROUP', 'Driver group')), ": ", /*#__PURE__*/_react.default.createElement("strong", null, attempt === null || attempt === void 0 ? void 0 : attempt.driver_group_id), " ", t('AT', 'at'), " ", parseDate(attempt === null || attempt === void 0 ? void 0 : attempt.created_at));
  })) : /*#__PURE__*/_react.default.createElement(_styles2.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_styles2.UppercaseText, null, t('WITHOUT_HISTORY_ATTEMPTS', 'without history attempts'))))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, logisticInformation.error)));
};
var OrderLogisticInformation = exports.OrderLogisticInformation = function OrderLogisticInformation(props) {
  var logisticsProps = _objectSpread(_objectSpread({}, props), {}, {
    orderId: props.orderId,
    UIComponent: LogisticInformationUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.LogisticInformation, logisticsProps);
};