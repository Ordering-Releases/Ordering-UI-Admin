"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _OrderItemAccordion = require("../OrderItemAccordion");
var _SmallOrderItemAccordion = require("../SmallOrderItemAccordion");
var _OrdersPagination = require("../OrdersPagination");
var _GoTriangleDown = _interopRequireDefault(require("@meronex/icons/go/GoTriangleDown"));
var _useWindowSize = require("../../hooks/useWindowSize");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var OrderListing = exports.OrderListing = function OrderListing(props) {
  var _theme$images;
  var orderList = props.orderList,
    driversList = props.driversList,
    selectedOrderIds = props.selectedOrderIds,
    orderListView = props.orderListView,
    orderStatusTitle = props.orderStatusTitle,
    handleUpdateOrderStatus = props.handleUpdateOrderStatus,
    handleSelectedOrderIds = props.handleSelectedOrderIds,
    pagination = props.pagination,
    preOrder = props.preOrder,
    pendingOrder = props.pendingOrder,
    handleOpenOrderDetail = props.handleOpenOrderDetail,
    activeSwitch = props.activeSwitch,
    isCheckedQuickShow = props.isCheckedQuickShow,
    handleOpenMessage = props.handleOpenMessage,
    handleLocation = props.handleLocation,
    handleUpdateDriverLocation = props.handleUpdateDriverLocation,
    messageOrder = props.messageOrder,
    interActionMapOrder = props.interActionMapOrder,
    messageListView = props.messageListView,
    messageType = props.messageType,
    loadMoreOrders = props.loadMoreOrders;
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    setActive = _useState2[0],
    setActiveState = _useState2[1];
  var _useState3 = (0, _react.useState)('collapse_icon'),
    _useState4 = _slicedToArray(_useState3, 2),
    setRotate = _useState4[0],
    setRotateState = _useState4[1];
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isShow = _useState6[0],
    setIsShow = _useState6[1];

  // Change page
  var _useState7 = (0, _react.useState)(1),
    _useState8 = _slicedToArray(_useState7, 2),
    currentPage = _useState8[0],
    setCurrentPage = _useState8[1];
  var _useState9 = (0, _react.useState)(10),
    _useState10 = _slicedToArray(_useState9, 1),
    ordersPerPage = _useState10[0];

  // Get current orders
  var indexOfLastPost = currentPage * ordersPerPage;
  var indexOfFirstPost = indexOfLastPost - ordersPerPage;
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    currentOrders = _useState12[0],
    setCurrentOrders = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    totalPages = _useState14[0],
    setTotalPages = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    totalOrders = _useState16[0],
    setTotalOrders = _useState16[1];

  // Change page
  var prevPaginate = function prevPaginate() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  var nextPaginate = function nextPaginate() {
    if (currentPage !== totalPages) {
      if (orderList.orders.length < ordersPerPage * currentPage + 1) {
        loadMoreOrders();
      }
      setCurrentPage(currentPage + 1);
    }
  };
  (0, _react.useEffect)(function () {
    if (orderList.loading) return;
    var _totalPages;
    if (pagination !== null && pagination !== void 0 && pagination.total) {
      _totalPages = Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / ordersPerPage);
    } else if (orderList.orders.length > 0) {
      _totalPages = Math.ceil(orderList.orders.length / ordersPerPage);
    }
    var _currentOrders = orderList.orders.slice(indexOfFirstPost, indexOfLastPost);
    setTotalOrders(pagination === null || pagination === void 0 ? void 0 : pagination.total);
    setTotalPages(_totalPages);
    setCurrentOrders(_currentOrders);
  }, [orderList, currentPage, activeSwitch, isCheckedQuickShow, pagination]);
  var toggleOrderList = function toggleOrderList() {
    setActiveState(setActive === '' ? 'active' : '');
    if (setActive === 'active') {
      setIsShow(true);
    } else setIsShow(false);
    setRotateState(setActive === 'active' ? 'collapse_icon' : 'collapse_icon rotate');
  };
  (0, _react.useEffect)(function () {
    if (orderList.loading || !messageListView) return;
    if (orderList.orders.length === 0 || messageOrder) return;
    handleOpenMessage && handleOpenMessage(orderList.orders[0], messageType);
  }, [orderList.loading, activeSwitch, messageListView]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, orderStatusTitle && /*#__PURE__*/_react.default.createElement(_styles.OrderStatusTitle, null, /*#__PURE__*/_react.default.createElement(_GoTriangleDown.default, {
    className: "".concat(setRotate),
    onClick: function onClick() {
      return toggleOrderList();
    }
  }), orderStatusTitle), !(orderList.loading || driversList.loading) && orderList.orders.length === 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isShow && /*#__PURE__*/_react.default.createElement(_styles.WrapperNoneOrders, {
    small: orderListView === 'small'
  }, /*#__PURE__*/_react.default.createElement(_styles.InnerNoneOrdersContainer, null, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.nonOrders,
    alt: "none"
  })))) : /*#__PURE__*/_react.default.createElement(_styles.WrapperOrderListContent, null, isShow && /*#__PURE__*/_react.default.createElement(_styles.InnerOrderListContent, {
    small: orderListView === 'small'
  }, orderListView === 'big' && !(orderList.loading || driversList.loading) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentOrders.map(function (order) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: order.id
    }, orderListView === 'big' && windowSize.width > 992 && /*#__PURE__*/_react.default.createElement(_OrderItemAccordion.OrderItemAccordion, {
      order: order,
      drivers: driversList.drivers,
      pendingOrder: pendingOrder,
      preOrder: preOrder,
      selectedOrderIds: selectedOrderIds,
      handleUpdateOrderStatus: handleUpdateOrderStatus,
      handleSelectedOrderIds: handleSelectedOrderIds,
      handleOpenOrderDetail: handleOpenOrderDetail
    }));
  })) : /*#__PURE__*/_react.default.createElement(_styles.SkeletonOrder, {
    className: "skeleton-loading"
  }, orderListView === 'big' && windowSize.width > 992 && _toConsumableArray(Array(10)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonCard, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.SkeletonCell, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 10,
      height: 10
    }), /*#__PURE__*/_react.default.createElement(_styles.SkeletonText, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))), /*#__PURE__*/_react.default.createElement(_styles.WrapSkeltonCell, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonCell, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_styles.SkeletonText, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }))), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    })), /*#__PURE__*/_react.default.createElement(_styles.WrapSkeltonCell, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonCell, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_styles.SkeletonText, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }))), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    })), /*#__PURE__*/_react.default.createElement(_styles.WrapSkeltonCell, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonCell, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_styles.SkeletonText, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }))), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    })), /*#__PURE__*/_react.default.createElement(_styles.SkeletonCell, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 40,
      height: 40
    })), /*#__PURE__*/_react.default.createElement(_styles.SkeletonCell, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 30
    })), /*#__PURE__*/_react.default.createElement(_styles.SkeletonCell, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60,
      height: 20
    })));
  })), (orderListView === 'small' || windowSize.width <= 992) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !(orderList.loading || driversList.loading) ? currentOrders.map(function (order) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: order.id
    }, /*#__PURE__*/_react.default.createElement(_SmallOrderItemAccordion.SmallOrderItemAccordion, {
      order: order,
      messageOrder: messageOrder,
      interActionMapOrder: interActionMapOrder,
      activeSwitch: activeSwitch,
      drivers: driversList.drivers,
      pendingOrder: pendingOrder,
      preOrder: preOrder,
      handleOpenMessage: handleOpenMessage,
      handleUpdateOrderStatus: handleUpdateOrderStatus,
      handleOpenOrderDetail: handleOpenOrderDetail,
      handleLocation: handleLocation,
      handleUpdateDriverLocation: handleUpdateDriverLocation
    }));
  }) : /*#__PURE__*/_react.default.createElement(_styles.SkeletonOrder, null, _toConsumableArray(Array(4)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonCard, {
      small: true,
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlock, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonCell, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_styles.SkeletonText, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }))), /*#__PURE__*/_react.default.createElement(_styles.SkeletonCell, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonText, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    })))), /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlock, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150,
      height: 40
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150,
      height: 40
    })), /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlock, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 320,
      height: 30
    })));
  }))), pagination && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !orderList.loading && totalPages > 0 && /*#__PURE__*/_react.default.createElement(_OrdersPagination.OrdersPagination, {
    ordersPerPage: ordersPerPage,
    totalOrders: totalOrders,
    currentPage: currentPage,
    totalPages: totalPages,
    prevPaginate: prevPaginate,
    nextPaginate: nextPaginate
  })))));
};