"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersManager = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _OrderStatusFilterBar = require("../OrderStatusFilterBar");
var _OrdersContentHeader = require("../OrdersContentHeader");
var _OrderDetails = require("../OrderDetails");
var _OrdersDashboardControls = require("../OrdersDashboardControls");
var _Shared = require("../../Shared");
var _styles = require("./styles");
var _OrdersDashboard = require("../OrdersDashboard");
var _OrderStatusSubFilter = require("../OrderStatusSubFilter");
var _OrderNotification = require("../OrderNotification");
var _WizardOrders = require("../WizardOrders");
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
var OrdersManagerUI = function OrdersManagerUI(props) {
  var isLateralBar = props.isLateralBar,
    isSelectedOrders = props.isSelectedOrders,
    searchValue = props.searchValue,
    driverGroupList = props.driverGroupList,
    assignableDriverGroupList = props.assignableDriverGroupList,
    driversList = props.driversList,
    paymethodsList = props.paymethodsList,
    businessesList = props.businessesList,
    citiesList = props.citiesList,
    adminsList = props.adminsList,
    ordersStatusGroup = props.ordersStatusGroup,
    filterValues = props.filterValues,
    deletedOrderIds = props.deletedOrderIds,
    startMulitOrderStatusChange = props.startMulitOrderStatusChange,
    handleChangeSearch = props.handleChangeSearch,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleOrdersStatusGroupFilter = props.handleOrdersStatusGroupFilter,
    handleChangeMultiOrdersStatus = props.handleChangeMultiOrdersStatus,
    handleDeleteMultiOrders = props.handleDeleteMultiOrders,
    handleSelectedOrderIds = props.handleSelectedOrderIds,
    selectedOrderIds = props.selectedOrderIds,
    onOrderRedirect = props.onOrderRedirect,
    selectedSubOrderStatus = props.selectedSubOrderStatus,
    handleSelectedSubOrderStatus = props.handleSelectedSubOrderStatus,
    handleCustomOrderDetail = props.handleCustomOrderDetail,
    setSelectedOrderIds = props.setSelectedOrderIds,
    allowColumns = props.allowColumns,
    setAllowColumns = props.setAllowColumns,
    timeStatus = props.timeStatus,
    setTimeStatus = props.setTimeStatus,
    isUseQuery = props.isUseQuery,
    disableDriverLocationsSockets = props.disableDriverLocationsSockets;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponentsAdminExternal.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpenOrderDetail = _useState2[0],
    setIsOpenOrderDetail = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    orderDetailId = _useState4[0],
    setOrderDetailId = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    detailsOrder = _useState6[0],
    setDetailsOrder = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    filterModalOpen = _useState8[0],
    setFilterModalOpen = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isTourOpen = _useState10[0],
    setIsTourOpen = _useState10[1];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    currentTourStep = _useState12[0],
    setCurrentTourStep = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isTourFlag = _useState14[0],
    setIsTourFlag = _useState14[1];
  var _useState15 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    alertState = _useState16[0],
    setAlertState = _useState16[1];
  var _useState17 = (0, _react.useState)(60000),
    _useState18 = _slicedToArray(_useState17, 2),
    slaSettingTime = _useState18[0],
    setSlaSettingTime = _useState18[1];
  var _useState19 = (0, _react.useState)({
      pending: null,
      inProgress: null,
      completed: null,
      cancelled: null
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    ordersAmountByStatus = _useState20[0],
    setOrdersAmountByStatus = _useState20[1];
  var _useState21 = (0, _react.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    totalSelectedOrder = _useState22[0],
    setTotalSelectedOrder = _useState22[1];
  var handleBackRedirect = function handleBackRedirect() {
    setIsOpenOrderDetail(false);
    setDetailsOrder(null);
    setOrderDetailId(null);
    if (!isSelectedOrders) {
      onOrderRedirect();
    } else {
      handleCustomOrderDetail && handleCustomOrderDetail(false);
    }
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleOpenOrderDetail = function handleOpenOrderDetail(order) {
    var _configs$optimize_ord;
    var isKeydown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (isTourOpen && currentTourStep === 4 && !isKeydown) {
      setIsTourOpen(false);
      return;
    }
    (!(configs !== null && configs !== void 0 && configs.optimize_order_data) || (configs === null || configs === void 0 || (_configs$optimize_ord = configs.optimize_order_data) === null || _configs$optimize_ord === void 0 ? void 0 : _configs$optimize_ord.value) === '0') && setDetailsOrder(order);
    setOrderDetailId(order.id);
    setIsOpenOrderDetail(true);
    if (!isSelectedOrders) {
      onOrderRedirect(order.id);
    } else {
      handleCustomOrderDetail && handleCustomOrderDetail(true);
    }
    if (isTourOpen && currentTourStep === 4) {
      setIsTourFlag(true);
    }
    if (isTourOpen && currentTourStep === 0) {
      setTimeout(function () {
        setCurrentTourStep(1);
      }, 1);
    }
  };
  var _handleOpenTour = function handleOpenTour() {
    var tourElement = document.querySelector('[data-tour="tour_start"]');
    if (!tourElement) {
      setAlertState({
        open: true,
        content: t('ONE_ORDER_IS_REQUIRED', 'One order is required')
      });
      return;
    }
    var orderElement = document.getElementById('orderTable');
    if (orderElement) orderElement.scrollTo(0, 0);
    setCurrentTourStep(0);
    setIsTourOpen(true);
    handleBackRedirect();
  };
  (0, _react.useEffect)(function () {
    if (startMulitOrderStatusChange) {
      setTotalSelectedOrder(selectedOrderIds.length);
    }
  }, [startMulitOrderStatusChange]);
  (0, _react.useEffect)(function () {
    if (selectedOrderIds.length === 0) {
      setTimeout(function () {
        setTotalSelectedOrder(0);
      }, 500);
    }
  }, [selectedOrderIds]);
  (0, _react.useEffect)(function () {
    if (isSelectedOrders) return;
    var id = query.get('id');
    if (id === null) setIsOpenOrderDetail(false);else {
      if ((user === null || user === void 0 ? void 0 : user.level) === 5) {
        handleBackRedirect();
      } else {
        setOrderDetailId(id);
        setIsOpenOrderDetail(true);
      }
    }
  }, [user]);
  (0, _react.useEffect)(function () {
    if (isTourOpen) return;
    setIsTourFlag(false);
  }, [isTourOpen]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrdersListContainer, {
    isSelectedOrders: isSelectedOrders
  }, /*#__PURE__*/_react.default.createElement(_OrdersContentHeader.OrdersContentHeader, {
    isDisableTitle: isSelectedOrders,
    isSelectedOrders: isSelectedOrders,
    title: t('ORDERS_LIST', 'Orders list'),
    searchValue: searchValue,
    assignableDriverGroupList: assignableDriverGroupList,
    driverGroupList: driverGroupList,
    driversList: driversList,
    citiesList: citiesList,
    paymethodsList: paymethodsList,
    businessesList: businessesList,
    adminsList: adminsList,
    handleChangeSearch: handleChangeSearch,
    handleChangeFilterValues: handleChangeFilterValues,
    selectedOrderIds: selectedOrderIds,
    handleDeleteMultiOrders: handleDeleteMultiOrders,
    handleChangeMultiOrdersStatus: handleChangeMultiOrdersStatus,
    handleOpenTour: function handleOpenTour() {
      return _handleOpenTour();
    },
    filterModalOpen: filterModalOpen,
    setFilterModalOpen: setFilterModalOpen,
    setTimeStatus: setTimeStatus,
    setSlaSettingTime: setSlaSettingTime,
    isLateralBar: isLateralBar,
    disableDriverLocationsSockets: disableDriverLocationsSockets
  }), /*#__PURE__*/_react.default.createElement(_OrderStatusFilterBar.OrderStatusFilterBar, {
    isUseQuery: isUseQuery,
    selectedOrderStatus: ordersStatusGroup,
    changeOrderStatus: handleOrdersStatusGroupFilter,
    ordersAmountByStatus: ordersAmountByStatus
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderSubFilterControls, null, /*#__PURE__*/_react.default.createElement(_styles.OrderStatusSubFilterWrapper, {
    isColumn: selectedOrderIds === null || selectedOrderIds === void 0 ? void 0 : selectedOrderIds.length
  }, /*#__PURE__*/_react.default.createElement(_OrderStatusSubFilter.OrderStatusSubFilter, {
    ordersStatusGroup: ordersStatusGroup,
    selectedSubOrderStatus: selectedSubOrderStatus,
    handleSelectedSubOrderStatus: handleSelectedSubOrderStatus
  })), !isSelectedOrders && /*#__PURE__*/_react.default.createElement(_OrdersDashboardControls.OrdersDashboardControls, {
    selectedOrderNumber: selectedOrderIds === null || selectedOrderIds === void 0 ? void 0 : selectedOrderIds.length,
    filterValues: filterValues,
    franchiseId: props.franchiseId,
    handleChangeMultiOrdersStatus: handleChangeMultiOrdersStatus,
    handleDeleteMultiOrders: handleDeleteMultiOrders,
    handleOpenCustomOrderDetail: function handleOpenCustomOrderDetail(id) {
      setOrderDetailId(id);
      setIsOpenOrderDetail(true);
    },
    handleOpenOrderDetail: handleOpenOrderDetail,
    ordersStatusGroup: ordersStatusGroup,
    selectedSubOrderStatus: selectedSubOrderStatus
  })), /*#__PURE__*/_react.default.createElement(_styles.OrdersContent, null, /*#__PURE__*/_react.default.createElement(_styles.OrdersInnerContent, {
    className: "order-content"
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapItemView, null, /*#__PURE__*/_react.default.createElement(_OrdersDashboard.OrdersDashboard, {
    isUseQuery: isUseQuery,
    isSelectedOrders: isSelectedOrders,
    driverId: props.driverId,
    customerId: props.customerId,
    businessId: props.businessId,
    franchiseId: props.franchiseId,
    searchValue: searchValue,
    filterValues: filterValues,
    selectedOrderIds: selectedOrderIds,
    deletedOrderIds: deletedOrderIds,
    driversList: driversList,
    ordersStatusGroup: ordersStatusGroup,
    selectedSubOrderStatus: selectedSubOrderStatus,
    handleSelectedOrderIds: handleSelectedOrderIds,
    orderDetailId: orderDetailId,
    handleOpenOrderDetail: handleOpenOrderDetail,
    setSelectedOrderIds: setSelectedOrderIds,
    currentTourStep: currentTourStep,
    handleOpenTour: _handleOpenTour,
    isTourOpen: isTourOpen,
    setIsTourOpen: setIsTourOpen,
    setFilterModalOpen: setFilterModalOpen,
    timeStatus: timeStatus,
    slaSettingTime: slaSettingTime,
    allowColumns: allowColumns,
    setAllowColumns: setAllowColumns,
    ordersAmountByStatus: ordersAmountByStatus,
    setOrdersAmountByStatus: setOrdersAmountByStatus,
    franchisesList: props.franchisesList
  }))))), isOpenOrderDetail && /*#__PURE__*/_react.default.createElement(_OrderDetails.OrderDetails, {
    isSelectedOrders: isSelectedOrders,
    open: isOpenOrderDetail,
    order: detailsOrder,
    orderId: orderDetailId,
    isTourOpen: isTourOpen,
    onClose: function onClose() {
      return handleBackRedirect();
    },
    setCurrentTourStep: setCurrentTourStep,
    currentTourStep: currentTourStep,
    isTourFlag: isTourFlag,
    setIsTourFlag: setIsTourFlag,
    setIsTourOpen: setIsTourOpen,
    drivers: driversList.drivers
  }), !isSelectedOrders && /*#__PURE__*/_react.default.createElement(_OrderNotification.OrderNotification, {
    customerId: props.customerId
  }), totalSelectedOrder > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperIndicator, null, selectedOrderIds.length, "/", totalSelectedOrder), /*#__PURE__*/_react.default.createElement(_WizardOrders.WizardOrders, {
    isTourOpen: isTourOpen,
    setIsTourOpen: setIsTourOpen,
    currentStep: currentTourStep,
    detailsOrder: detailsOrder
  }), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ORDERS_MANAGER', 'Orders manager'),
    content: alertState.content,
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ORDERS_MANAGER', 'Orders manager'),
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
var OrdersManager = exports.OrdersManager = function OrdersManager(props) {
  var OrdersListControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrdersManagerUI,
    driversPropsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification']
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.OrdersManage, OrdersListControlProps);
};