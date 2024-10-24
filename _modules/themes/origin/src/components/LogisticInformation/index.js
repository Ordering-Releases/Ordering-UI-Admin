"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogisticInformation = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Buttons = require("../../styles/Buttons");
var _styles = require("./styles");
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
    parseDistance = _useUtils2$.parseDistance;
  var getStatus = function getStatus(status) {
    switch (status) {
      case 0:
        return 'Pending order';
      case 1:
        return 'Completed by admin';
      case 2:
        return 'Reject by admin';
      case 3:
        return 'Driver arrived by business';
      case 4:
        return 'Ready for pickup';
      case 5:
        return 'Reject by business';
      case 6:
        return 'Reject by driver';
      case 7:
        return 'Accepted by business';
      case 8:
        return 'Accepted by driver';
      case 9:
        return 'Pickup completed by driver';
      case 10:
        return 'Pickup failed by driver';
      case 11:
        return 'Delivery completed by driver';
      case 12:
        return 'Delivery failed by driver';
      default:
        return status;
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, logisticInformation.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(3)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonHitory, {
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
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, logisticInformation.error === null ? /*#__PURE__*/_react.default.createElement(_styles.WraaperLogs, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "darkBlue",
    onClick: function onClick() {
      return getLogistics();
    }
  }, t('RELOAD', 'Reload')), /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_styles.UppercaseText, null, /*#__PURE__*/_react.default.createElement("strong", null, t('distance_customer_from_business', 'distance_customer_from_business'))), ": ", parseDistance(((logisticInformation === null || logisticInformation === void 0 || (_logisticInformation$ = logisticInformation.data) === null || _logisticInformation$ === void 0 ? void 0 : _logisticInformation$.distance_customer_from_business) / 1000).toFixed(2))), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_styles.UppercaseText, {
    title: "title"
  }, t('queues', 'queues'))), logisticInformation.data.queues.length > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, logisticInformation.data.queues.map(function (queue, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: queue.id
    }, (queue === null || queue === void 0 ? void 0 : queue.name) && /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, /*#__PURE__*/_react.default.createElement("span", null, i + 1, ". ", queue.name)), (queue === null || queue === void 0 ? void 0 : queue.drivers.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, /*#__PURE__*/_react.default.createElement("strong", null, t('AVAILABLE DRIVERS', 'Available drivers'), ": "), /*#__PURE__*/_react.default.createElement("span", null, queue.drivers.length)), (queue === null || queue === void 0 ? void 0 : queue.priority) && /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, /*#__PURE__*/_react.default.createElement("strong", null, t('PRIORITY', 'Priority'), ": "), /*#__PURE__*/_react.default.createElement("span", null, queue.priority)), (queue === null || queue === void 0 ? void 0 : queue.orders_group_start_in_status) && /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, /*#__PURE__*/_react.default.createElement("strong", null, t('START_IN', 'Start in'), ": "), /*#__PURE__*/_react.default.createElement("span", null, getStatus(queue.orders_group_start_in_status))), /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, queue.orders.length > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, queue.orders.map(function (order, i) {
      return /*#__PURE__*/_react.default.createElement("strong", {
        key: order.id
      }, i + 1, ". ", order.id, " ", (order === null || order === void 0 ? void 0 : order.waiting_for_preorder) && /*#__PURE__*/_react.default.createElement("span", null, "(", t('waiting_for_preorder', 'waiting_for_preorder'), ")"));
    })) : t('WITHOUT_ORDERS', 'without_orders')));
  })) : /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_styles.UppercaseText, null, t('WITHOUT_QUEUES', 'without_queues')))), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_styles.UppercaseText, {
    title: "title"
  }, t('HISTORY_ATTEMPTS', 'history_attempts'))), logisticInformation.data.logistic_attempts.length > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, logisticInformation.data.logistic_attempts.map(function (attempt) {
    return /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, {
      key: attempt.id
    }, /*#__PURE__*/_react.default.createElement("strong", null, t('DRIVER_GROUP', 'Driver group')), ": ", /*#__PURE__*/_react.default.createElement("strong", null, attempt === null || attempt === void 0 ? void 0 : attempt.driver_group_id), " ", t('AT', 'at'), " ", parseDate(attempt === null || attempt === void 0 ? void 0 : attempt.created_at, {
      utc: false
    }));
  })) : /*#__PURE__*/_react.default.createElement(_styles.BubbleConsole, null, /*#__PURE__*/_react.default.createElement(_styles.UppercaseText, null, t('WITHOUT_HISTORY_ATTEMPTS', 'without_history_attempts'))))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, logisticInformation.error)));
};
var LogisticInformation = exports.LogisticInformation = function LogisticInformation(props) {
  var logisticsProps = _objectSpread(_objectSpread({}, props), {}, {
    orderId: props.orderId,
    UIComponent: LogisticInformationUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.LogisticInformation, logisticsProps);
};