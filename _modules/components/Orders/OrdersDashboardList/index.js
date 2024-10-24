"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersDashboardList = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _OrdersListing = require("../OrdersListing");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
var OrdersDashboardList = exports.OrdersDashboardList = function OrdersDashboardList(props) {
  var _configState$configs, _configState$configs2;
  var selectedSubOrderStatus = props.selectedSubOrderStatus,
    isMessagesView = props.isMessagesView,
    orderByOption = props.orderByOption,
    setOrdersAmountByStatus = props.setOrdersAmountByStatus,
    isUseQuery = props.isUseQuery;
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var isShowSearchFilters = !(configState !== null && configState !== void 0 && (_configState$configs = configState.configs) !== null && _configState$configs !== void 0 && _configState$configs.search_box_enabled) || (configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.search_box_enabled) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value) === '1';
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var defaultStatus = query.get('status');
  var defaultPage = query.get('page') || 1;
  var defaultPageSize = query.get('pageSize') || 10;
  var OrdersCommonControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: _OrdersListing.OrdersListing,
    useDefualtSessionManager: true,
    orderBy: isMessagesView ? orderByOption : 'id',
    orderDirection: isMessagesView ? orderByOption === 'id' ? 'desc' : 'asc' : 'desc',
    asDashboard: true,
    isSearchByOrderId: isShowSearchFilters,
    isSearchByCustomerName: isShowSearchFilters,
    isSearchByCustomerEmail: isShowSearchFilters,
    isSearchByCustomerPhone: isShowSearchFilters,
    isSearchByDriverName: isShowSearchFilters,
    isSearchByBusinessName: true,
    driverId: props.driverId,
    getDriversByControls: true
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isMessagesView ? /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.DashboardOrdersList, _extends({
    isMessagesView: true
  }, OrdersCommonControlProps, {
    paginationSettings: {
      initialPage: isUseQuery && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: isUseQuery && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    },
    orderStatus: selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.all
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.DashboardOrdersList, _extends({}, OrdersCommonControlProps, {
    paginationSettings: {
      initialPage: isUseQuery && defaultStatus === 'pending' && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: isUseQuery && defaultStatus === 'pending' && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    },
    groupStatus: "pending",
    orderStatus: selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.pending,
    setOrdersTotalAmount: function setOrdersTotalAmount(total) {
      return setOrdersAmountByStatus(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          pending: total
        });
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.DashboardOrdersList, _extends({
    groupStatus: "inProgress"
  }, OrdersCommonControlProps, {
    paginationSettings: {
      initialPage: isUseQuery && defaultStatus === 'inProgress' && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: isUseQuery && defaultStatus === 'inProgress' && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    },
    orderStatus: selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.inProgress,
    setOrdersTotalAmount: function setOrdersTotalAmount(total) {
      return setOrdersAmountByStatus(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          inProgress: total
        });
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.DashboardOrdersList, _extends({
    groupStatus: "completed"
  }, OrdersCommonControlProps, {
    paginationSettings: {
      initialPage: isUseQuery && defaultStatus === 'completed' && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: isUseQuery && defaultStatus === 'completed' && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    },
    orderStatus: selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.completed,
    setOrdersTotalAmount: function setOrdersTotalAmount(total) {
      return setOrdersAmountByStatus(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          completed: total
        });
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.DashboardOrdersList, _extends({
    groupStatus: "cancelled"
  }, OrdersCommonControlProps, {
    paginationSettings: {
      initialPage: isUseQuery && defaultStatus === 'cancelled' && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: isUseQuery && defaultStatus === 'cancelled' && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    },
    orderStatus: selectedSubOrderStatus === null || selectedSubOrderStatus === void 0 ? void 0 : selectedSubOrderStatus.cancelled,
    setOrdersTotalAmount: function setOrdersTotalAmount(total) {
      return setOrdersAmountByStatus(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          cancelled: total
        });
      });
    }
  }))));
};