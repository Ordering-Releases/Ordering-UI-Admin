"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveryDashboard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _AiFillPlusCircle = _interopRequireDefault(require("@meronex/icons/ai/AiFillPlusCircle"));
var _FaRegTimesCircle = _interopRequireDefault(require("@meronex/icons/fa/FaRegTimesCircle"));
var _RiCheckboxBlankCircleLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankCircleLine"));
var _RiCheckboxCircleLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxCircleLine"));
var _DriversLocation = require("../DriversLocation");
var _DeliveryDashboardOrdersList = require("../DeliveryDashboardOrdersList");
var _DriversModal = require("../DriversModal");
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
var DeliveryDashboard = exports.DeliveryDashboard = function DeliveryDashboard(props) {
  var searchValue = props.searchValue,
    filterValues = props.filterValues,
    driversList = props.driversList,
    deletedOrderId = props.deletedOrderId,
    ordersStatusGroup = props.ordersStatusGroup,
    handleSelectedOrderIds = props.handleSelectedOrderIds,
    activeSwitch = props.activeSwitch,
    handleOpenOrderDetail = props.handleOpenOrderDetail;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    openOrderAndDriver = _useState2[0],
    setOpenOrderAndDriver = _useState2[1];
  var _useState3 = (0, _react.useState)({
      order: true,
      driver: false
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    openTab = _useState4[0],
    setOpenTab = _useState4[1];
  var _useState5 = (0, _react.useState)('all'),
    _useState6 = _slicedToArray(_useState5, 2),
    driverAvailable = _useState6[0],
    setDriverAvailable = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    interActionMapOrder = _useState8[0],
    setInterActionMapOrder = _useState8[1];
  var _useState9 = (0, _react.useState)(true),
    _useState10 = _slicedToArray(_useState9, 2),
    isOnlyDelivery = _useState10[0],
    setIsOnlyDelivery = _useState10[1];
  var handleChangeDriverAvailable = function handleChangeDriverAvailable(available) {
    setDriverAvailable(available);
  };
  var handleChangeOrderAndDriver = function handleChangeOrderAndDriver() {
    setOpenTab({
      order: true,
      driver: false
    });
    setDriverAvailable('all');
  };
  var handleUpdateDriverLocation = function handleUpdateDriverLocation(order) {
    setInterActionMapOrder(_objectSpread({}, order));
  };
  var handleLocation = function handleLocation(order) {
    if ((interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.id) === (order === null || order === void 0 ? void 0 : order.id)) {
      setInterActionMapOrder(null);
    } else {
      setInterActionMapOrder(_objectSpread({}, order));
    }
  };
  return /*#__PURE__*/_react.default.createElement(_styles.DeliveryDashboardContainer, null, /*#__PURE__*/_react.default.createElement(_DriversLocation.DriversLocation, {
    driversList: driversList,
    driverAvailable: driverAvailable,
    interActionMapOrder: interActionMapOrder
  }), !openOrderAndDriver ? /*#__PURE__*/_react.default.createElement(_styles.OrdersOpenButton, {
    onClick: function onClick() {
      return setOpenOrderAndDriver(true);
    },
    name: "order-open"
  }, /*#__PURE__*/_react.default.createElement(_AiFillPlusCircle.default, null)) : /*#__PURE__*/_react.default.createElement(_styles.OrdersCloseButton, {
    onClick: function onClick() {
      return setOpenOrderAndDriver(false);
    },
    name: "order-close"
  }, /*#__PURE__*/_react.default.createElement(_FaRegTimesCircle.default, null)), /*#__PURE__*/_react.default.createElement(_styles.WrapperOrdersAndDriver, {
    style: {
      display: "".concat(openOrderAndDriver ? 'block' : 'none')
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperTab, null, /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: openTab.order,
    onClick: function onClick() {
      return handleChangeOrderAndDriver();
    }
  }, t('ORDERS', 'Orders')), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: openTab.driver,
    onClick: function onClick() {
      return setOpenTab({
        order: false,
        driver: true
      });
    }
  }, t('DRIVERS', 'Drivers'))), /*#__PURE__*/_react.default.createElement(_styles.WrapperQuickShow, null, !isOnlyDelivery ? /*#__PURE__*/_react.default.createElement(_RiCheckboxCircleLine.default, {
    onClick: function onClick() {
      return setIsOnlyDelivery(!isOnlyDelivery);
    }
  }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankCircleLine.default, {
    onClick: function onClick() {
      return setIsOnlyDelivery(!isOnlyDelivery);
    }
  }), t('SHOW_ALL', 'Show all')), /*#__PURE__*/_react.default.createElement(_styles.OrderAndDriverListContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderlist, {
    style: {
      display: "".concat(openTab.order ? 'block' : 'none')
    }
  }, /*#__PURE__*/_react.default.createElement(_DeliveryDashboardOrdersList.DeliveryDashboardOrdersList, {
    orderListView: "small",
    searchValue: searchValue,
    filterValues: filterValues,
    deletedOrderId: deletedOrderId,
    driversList: driversList,
    ordersStatusGroup: ordersStatusGroup,
    activeSwitch: activeSwitch,
    isOnlyDelivery: isOnlyDelivery,
    interActionMapOrder: interActionMapOrder,
    handleOpenOrderDetail: handleOpenOrderDetail,
    handleLocation: handleLocation,
    handleUpdateDriverLocation: handleUpdateDriverLocation
  })), openTab.driver && /*#__PURE__*/_react.default.createElement(_DriversModal.DriversModal, {
    driversList: driversList,
    handleChangeDriverAvailable: handleChangeDriverAvailable,
    handleSelectedOrderIds: handleSelectedOrderIds,
    handleOpenOrderDetail: handleOpenOrderDetail
  }))));
};