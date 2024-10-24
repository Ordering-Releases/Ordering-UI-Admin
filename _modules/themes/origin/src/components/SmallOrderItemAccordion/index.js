"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmallOrderItemAccordion = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styledComponents = require("styled-components");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _OrderStatusTypeSelector = require("../OrderStatusTypeSelector");
var _DriverSelector = require("../DriverSelector");
var _AiFillShop = _interopRequireDefault(require("@meronex/icons/ai/AiFillShop"));
var _GiFoodTruck = _interopRequireDefault(require("@meronex/icons/gi/GiFoodTruck"));
var _FaCarSide = _interopRequireDefault(require("@meronex/icons/fa/FaCarSide"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SmallOrderItemAccordion = exports.SmallOrderItemAccordion = function SmallOrderItemAccordion(props) {
  var _theme$colors, _theme$colors2, _theme$colors3, _order$business, _order$business2, _theme$images, _theme$images2, _order$customer, _order$customer2, _order$customer3, _order$customer4;
  var isOrdersListView = props.isOrdersListView,
    order = props.order,
    drivers = props.drivers,
    pendingOrder = props.pendingOrder,
    preOrder = props.preOrder,
    activeSwitch = props.activeSwitch,
    messageOrder = props.messageOrder,
    interActionMapOrder = props.interActionMapOrder,
    handleUpdateOrderStatus = props.handleUpdateOrderStatus,
    handleOpenOrderDetail = props.handleOpenOrderDetail,
    handleOpenMessage = props.handleOpenMessage,
    handleLocation = props.handleLocation,
    handleUpdateDriverLocation = props.handleUpdateDriverLocation;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var history = (0, _reactRouterDom.useHistory)();
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    getTimeAgo = _useUtils2$.getTimeAgo;
  var driverSelectorRef = (0, _react.useRef)(null);
  var orderStatusRef = (0, _react.useRef)(null);
  var businessRef = (0, _react.useRef)(null);
  var customerRef = (0, _react.useRef)(null);
  var driverRef = (0, _react.useRef)(null);
  var moreDetailRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(getTimeAgo(order === null || order === void 0 ? void 0 : order.delivery_datetime)),
    _useState2 = _slicedToArray(_useState, 2),
    diffTime = _useState2[0],
    setDiffTime = _useState2[1];
  var handleLocationAndMessage = function handleLocationAndMessage(e) {
    if (isOrdersListView) return;
    if (activeSwitch !== null && activeSwitch !== void 0 && activeSwitch.messages) {
      handleOpenMessage(order, '');
    } else {
      var _driverSelectorRef$cu, _orderStatusRef$curre;
      var isActionClick = ((_driverSelectorRef$cu = driverSelectorRef.current) === null || _driverSelectorRef$cu === void 0 ? void 0 : _driverSelectorRef$cu.contains(e.target)) || ((_orderStatusRef$curre = orderStatusRef.current) === null || _orderStatusRef$curre === void 0 ? void 0 : _orderStatusRef$curre.contains(e.target));
      if (!isActionClick) {
        history.push("/orders-deliveries?id=".concat(order.id));
        handleOpenOrderDetail(order.id);
      }
    }
  };
  var openOrderDetail = function openOrderDetail() {
    if (!isOrdersListView) return;
    history.push("/orders-deliveries?id=".concat(order.id));
    handleOpenOrderDetail(order.id);
  };
  var getLogisticTag = function getLogisticTag(status) {
    switch (parseInt(status)) {
      case 0:
        return t('PENDING', 'Pending');
      case 1:
        return t('IN_PROGRESS', 'In progress');
      case 2:
        return t('IN_QUEUE', 'In queue');
      case 3:
        return t('EXPIRED', 'Expired');
      case 4:
        return t('RESOLVED', 'Resolved');
      default:
        return t('UNKNOWN', 'Unknown');
    }
  };
  var getPriorityTag = function getPriorityTag(priority) {
    switch (parseInt(priority)) {
      case -1:
        return t('LOW', 'Low');
      case 0:
        return t('NORMAL', 'Normal');
      case 1:
        return t('HIGH', 'High');
      case 2:
        return t('URGENT', 'Urgent');
      default:
        return t('UNKNOWN', 'Unknown');
    }
  };
  (0, _react.useEffect)(function () {
    if (!(activeSwitch !== null && activeSwitch !== void 0 && activeSwitch.deliveries) || interActionMapOrder === null || (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.id) !== (order === null || order === void 0 ? void 0 : order.id)) return;
    handleUpdateDriverLocation && handleUpdateDriverLocation(order);
  }, [order === null || order === void 0 ? void 0 : order.driver]);
  (0, _react.useEffect)(function () {
    var deActive = (order === null || order === void 0 ? void 0 : order.status) === 1 || (order === null || order === void 0 ? void 0 : order.status) === 11 || (order === null || order === void 0 ? void 0 : order.status) === 2 || (order === null || order === void 0 ? void 0 : order.status) === 5 || (order === null || order === void 0 ? void 0 : order.status) === 6 || (order === null || order === void 0 ? void 0 : order.status) === 10 || order.status === 12;
    if (deActive) return;
    var timer = setInterval(function () {
      setDiffTime(getTimeAgo(order === null || order === void 0 ? void 0 : order.delivery_datetime));
    }, 60 * 1000);
    return function () {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.OrderItemContainer, {
    filterColor: (order === null || order === void 0 ? void 0 : order.logistic_status) === -1 || (order === null || order === void 0 ? void 0 : order.logistic_status) === 0 ? theme === null || theme === void 0 || (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.deadlineOk : order.logistic_status === 1 ? theme === null || theme === void 0 || (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.deadlineDelayed : theme === null || theme === void 0 || (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.deadlineRisk,
    onClick: function onClick(e) {
      return handleLocationAndMessage(e);
    },
    messageUI: activeSwitch === null || activeSwitch === void 0 ? void 0 : activeSwitch.messages,
    messageUIActive: (messageOrder === null || messageOrder === void 0 ? void 0 : messageOrder.id) === order.id,
    deliveryUI: activeSwitch === null || activeSwitch === void 0 ? void 0 : activeSwitch.deliveries,
    deliveryUIActive: (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.id) === order.id,
    isOrdersListView: isOrdersListView
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapIndicator, null, (activeSwitch === null || activeSwitch === void 0 ? void 0 : activeSwitch.messages) && (order === null || order === void 0 ? void 0 : order.unread_count) > 0 && /*#__PURE__*/_react.default.createElement(_styles.UnreadMessageIndicator, null, order === null || order === void 0 ? void 0 : order.unread_count)), /*#__PURE__*/_react.default.createElement(_styles.WrapperInfo, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, {
    className: "order-item-business",
    ref: businessRef
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperAccordionImage, null, /*#__PURE__*/_react.default.createElement(_styles.AccordionImage, {
    bgimage: order === null || order === void 0 || (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement("h1", null, t('INVOICE_ORDER_NO', 'Order No'), " ", order === null || order === void 0 ? void 0 : order.id), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.name), ((activeSwitch === null || activeSwitch === void 0 ? void 0 : activeSwitch.deliveries) || isOrdersListView) && /*#__PURE__*/_react.default.createElement(_styles.MoreDetailsButton, {
    ref: moreDetailRef,
    onClick: function onClick() {
      return openOrderDetail();
    }
  }, t('MORE_DETAIL', 'More detail')))), /*#__PURE__*/_react.default.createElement(_styles.DeliveryInfo, null, /*#__PURE__*/_react.default.createElement("p", null, parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  })), /*#__PURE__*/_react.default.createElement(_styles.DeliveryType, null, /*#__PURE__*/_react.default.createElement(_styles.DeliveryIcon, null, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.icons) === null || _theme$images === void 0 ? void 0 : _theme$images.driverDelivery,
    alt: "Delivery"
  }), (order === null || order === void 0 ? void 0 : order.delivery_type) === 2 && /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.icons) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.pickUp,
    alt: "pick up"
  }), (order === null || order === void 0 ? void 0 : order.delivery_type) === 3 && /*#__PURE__*/_react.default.createElement(_AiFillShop.default, null), (order === null || order === void 0 ? void 0 : order.delivery_type) === 4 && /*#__PURE__*/_react.default.createElement(_GiFoodTruck.default, null), (order === null || order === void 0 ? void 0 : order.delivery_type) === 5 && /*#__PURE__*/_react.default.createElement(_FaCarSide.default, null)), /*#__PURE__*/_react.default.createElement(_styles.DeliveryName, null, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && t('DELIVERY', 'Delivery'), (order === null || order === void 0 ? void 0 : order.delivery_type) === 2 && t('PICKUP', 'Pickup'), (order === null || order === void 0 ? void 0 : order.delivery_type) === 3 && t('EAT_IN', 'Eat in'), (order === null || order === void 0 ? void 0 : order.delivery_type) === 4 && t('CURBSIDE', 'Curbside'), (order === null || order === void 0 ? void 0 : order.delivery_type) === 5 && t('DRIVE_THRU', 'Drive thru'))), !((order === null || order === void 0 ? void 0 : order.status) === 1 || (order === null || order === void 0 ? void 0 : order.status) === 11 || (order === null || order === void 0 ? void 0 : order.status) === 2 || (order === null || order === void 0 ? void 0 : order.status) === 5 || (order === null || order === void 0 ? void 0 : order.status) === 6 || (order === null || order === void 0 ? void 0 : order.status) === 10 || order.status === 12) && /*#__PURE__*/_react.default.createElement(_styles.TimeAgo, null, diffTime))), /*#__PURE__*/_react.default.createElement(_styles.WrapperInfo, {
    border: true
  }, /*#__PURE__*/_react.default.createElement(_styles.OrderLabelItem, null, /*#__PURE__*/_react.default.createElement("strong", null, t('LOGISTIC', 'Logistic'), ":"), /*#__PURE__*/_react.default.createElement("span", null, getLogisticTag(order === null || order === void 0 ? void 0 : order.logistic_status))), /*#__PURE__*/_react.default.createElement(_styles.OrderLabelItem, null, /*#__PURE__*/_react.default.createElement("strong", null, t('PRIORITY', 'Priority'), ":"), /*#__PURE__*/_react.default.createElement("span", null, getPriorityTag(order === null || order === void 0 ? void 0 : order.priority))), /*#__PURE__*/_react.default.createElement(_styles.OrderLabelItem, null, /*#__PURE__*/_react.default.createElement("strong", null, t('ATTEMPTS', 'Attempts'), ":"), /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 ? void 0 : order.logistic_attemps))), /*#__PURE__*/_react.default.createElement(_styles.WrapperInfo, null, /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, {
    ref: customerRef
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperAccordionImage, {
    small: true
  }, order !== null && order !== void 0 && (_order$customer = order.customer) !== null && _order$customer !== void 0 && _order$customer.photo ? /*#__PURE__*/_react.default.createElement(_styles.AccordionImage, {
    bgimage: order === null || order === void 0 || (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.CustomerContent, null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.name, " ", order === null || order === void 0 || (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.lastname), /*#__PURE__*/_react.default.createElement("p", null, t('CUSTOMER', 'Customer')))), /*#__PURE__*/_react.default.createElement(_styles.DriverInfo, {
    ref: driverRef
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriverSelector, {
    ref: driverSelectorRef
  }, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement(_DriverSelector.DriverSelector, {
    small: true,
    orderView: true,
    padding: "5px 0",
    defaultValue: order !== null && order !== void 0 && order.driver_id ? order.driver_id : 'default',
    drivers: drivers,
    order: order
  })))), /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderStatus, {
    ref: orderStatusRef
  }, /*#__PURE__*/_react.default.createElement(_OrderStatusTypeSelector.OrderStatusTypeSelector, {
    defaultValue: parseInt(order === null || order === void 0 ? void 0 : order.status),
    orderId: order.id,
    deliveryType: order === null || order === void 0 ? void 0 : order.delivery_type,
    pendingOrder: pendingOrder,
    preOrder: preOrder,
    noPadding: true,
    handleUpdateOrderStatus: handleUpdateOrderStatus
  })));
};