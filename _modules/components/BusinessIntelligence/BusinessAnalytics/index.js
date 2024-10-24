"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessAnalytics = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _AnalyticsBusinessFilter = require("../AnalyticsBusinessFilter");
var _AnalyticsCalendar = require("../AnalyticsCalendar");
var _AnalyticsStatusFilterBar = require("../AnalyticsStatusFilterBar");
var _AnalyticsStatusSubFilter = require("../AnalyticsStatusSubFilter");
var _AnalyticsMap = require("../AnalyticsMap");
var _AnalyticsOrdersOrSales = require("../AnalyticsOrdersOrSales");
var _AnalyticsProductCategories = require("../AnalyticsProductCategories");
var _AnalyticsOrdersStatus = require("../AnalyticsOrdersStatus");
var _AnalyticsRegisterUsers = require("../AnalyticsRegisterUsers");
var _AnalyticsCustomerSatisfaction = require("../AnalyticsCustomerSatisfaction");
var _AnalyticsOrdersAcceptSpend = require("../AnalyticsOrdersAcceptSpend");
var _AnalyticsSpendList = require("../AnalyticsSpendList");
var _AnalyticsFilterTimeZone = require("../AnalyticsFilterTimeZone");
var _styles2 = require("./styles");
var _ReportsBrandFilter = require("../ReportsBrandFilter");
var _CountryFilter = require("../CountryFilter");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var BusinessAnalyticsUI = function BusinessAnalyticsUI(props) {
  var handleChangeFilterList = props.handleChangeFilterList,
    filterList = props.filterList,
    ordersList = props.ordersList,
    salesList = props.salesList,
    topProductList = props.topProductList,
    topCategoryList = props.topCategoryList,
    orderStatusList = props.orderStatusList,
    registerUsersList = props.registerUsersList,
    customerSatisfactionList = props.customerSatisfactionList,
    ordersAcceptSpendList = props.ordersAcceptSpendList,
    arrivedPickUpSpendList = props.arrivedPickUpSpendList,
    orderLocationList = props.orderLocationList,
    countryCode = props.countryCode;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    businessFilterModal = _useState2[0],
    setBusinessFilterModal = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isBrandFilter = _useState4[0],
    setIsBrandFilter = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    openCountryFilter = _useState6[0],
    setOpenCountryFilter = _useState6[1];
  var handleChangeDate = function handleChangeDate(date1, date2) {
    handleChangeFilterList(_objectSpread(_objectSpread({}, filterList), {}, {
      lapse: "".concat(date1, ",").concat(date2)
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.BusinessAnalyticsContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessAnalyticsHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('BUSINESS_ANALYTICS', 'Business Analytics'))), /*#__PURE__*/_react.default.createElement(_styles2.HeaderFilterContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessFilterWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setOpenCountryFilter(true);
    }
  }, t('COUNTRY', 'Country'))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessFilterWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setIsBrandFilter(true);
    }
  }, t('BRAND', 'Brand'), " (", filterList !== null && filterList !== void 0 && filterList.franchises_id ? filterList === null || filterList === void 0 ? void 0 : filterList.franchises_id.length : t('ALL', 'All'), ")")), /*#__PURE__*/_react.default.createElement(_styles2.BusinessFilterWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: function onClick() {
      return setBusinessFilterModal(true);
    }
  }, t('BUSINESS', 'Business'), " (", filterList !== null && filterList !== void 0 && filterList.businessIds ? filterList === null || filterList === void 0 ? void 0 : filterList.businessIds.length : t('ALL', 'All'), ")")), /*#__PURE__*/_react.default.createElement(_styles2.AnalyticsTimeZoneWrapper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsFilterTimeZone.AnalyticsFilterTimeZone, props)), /*#__PURE__*/_react.default.createElement(_styles2.BusinessCalendarWrapper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsCalendar.AnalyticsCalendar, _extends({}, props, {
    handleChangeDate: handleChangeDate
  }))))), /*#__PURE__*/_react.default.createElement(_AnalyticsStatusFilterBar.AnalyticsStatusFilterBar, props), /*#__PURE__*/_react.default.createElement(_AnalyticsStatusSubFilter.AnalyticsStatusSubFilter, props), /*#__PURE__*/_react.default.createElement(_styles2.MapWrraper, null, /*#__PURE__*/_react.default.createElement(_AnalyticsMap.AnalyticsMap, {
    locationList: orderLocationList
  })), /*#__PURE__*/_react.default.createElement(_styles2.AnalyticsContentWrapper, {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsOrdersOrSales.AnalyticsOrdersOrSales, {
    isOrders: true,
    filterList: filterList,
    chartDataList: ordersList,
    countryCode: countryCode
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsOrdersOrSales.AnalyticsOrdersOrSales, {
    filterList: filterList,
    chartDataList: salesList,
    countryCode: countryCode
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsProductCategories.AnalyticsProductCategories, {
    filterList: filterList,
    productCategoryList: topProductList,
    isProducts: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsProductCategories.AnalyticsProductCategories, {
    filterList: filterList,
    productCategoryList: topCategoryList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsOrdersStatus.AnalyticsOrdersStatus, {
    filterList: filterList,
    orderStatusList: orderStatusList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsRegisterUsers.AnalyticsRegisterUsers, {
    registerUsersList: registerUsersList,
    filterList: filterList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsCustomerSatisfaction.AnalyticsCustomerSatisfaction, {
    dataList: customerSatisfactionList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsOrdersAcceptSpend.AnalyticsOrdersAcceptSpend, {
    dataList: ordersAcceptSpendList
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-12 col-lg-6"
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsSpendList.AnalyticsSpendList, {
    dataList: arrivedPickUpSpendList,
    title: t('ORDER_ARRIVED_PICKUP_SPEND', 'TIME SPENT WAITING ON READY FOR PICKUP')
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "50%",
    height: "80vh",
    padding: "30px",
    title: t('BUSINESSES', 'Businesses'),
    open: businessFilterModal,
    onClose: function onClose() {
      return setBusinessFilterModal(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_AnalyticsBusinessFilter.AnalyticsBusinessFilter, _extends({}, props, {
    onClose: function onClose() {
      return setBusinessFilterModal(false);
    },
    isFranchise: true
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "50%",
    height: "80vh",
    padding: "30px",
    title: t('BRAND', 'Brand'),
    open: isBrandFilter,
    onClose: function onClose() {
      return setIsBrandFilter(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ReportsBrandFilter.ReportsBrandFilter, _extends({}, props, {
    onClose: function onClose() {
      return setIsBrandFilter(false);
    }
  }))), /*#__PURE__*/_react.default.createElement(_CountryFilter.CountryFilter, _extends({}, props, {
    openCountryFilter: openCountryFilter,
    setOpenCountryFilter: setOpenCountryFilter
  })));
};
var BusinessAnalytics = exports.BusinessAnalytics = function BusinessAnalytics(props) {
  var businessAnalyticsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessAnalyticsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.BusinessAnalytics, businessAnalyticsProps);
};