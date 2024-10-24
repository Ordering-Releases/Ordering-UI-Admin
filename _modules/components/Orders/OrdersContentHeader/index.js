"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersContentHeader = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _Shared = require("../../Shared");
var _OrdersFilterGroup = require("../OrdersFilterGroup");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _OrdersDashboardSLAControls = require("../OrdersDashboardSLAControls");
var _styles = require("../../../styles");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _reactBootstrap = require("react-bootstrap");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _GoogleMapsApiKeySettingButton = require("../GoogleMapsApiKeySettingButton");
var _WebsocketStatus = require("../WebsocketStatus");
var _OrdersHeaderFilterGroup = require("../OrdersHeaderFilterGroup");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrdersContentHeader = exports.OrdersContentHeader = function OrdersContentHeader(props) {
  var _configState$configs, _configState$configs2, _configState$configs3;
  var isLateralBar = props.isLateralBar,
    isDisableTitle = props.isDisableTitle,
    isSelectedOrders = props.isSelectedOrders,
    title = props.title,
    handleChangeSearch = props.handleChangeSearch,
    searchValue = props.searchValue,
    driverGroupList = props.driverGroupList,
    assignableDriverGroupList = props.assignableDriverGroupList,
    driversList = props.driversList,
    citiesList = props.citiesList,
    paymethodsList = props.paymethodsList,
    businessesList = props.businessesList,
    selectedOrderIds = props.selectedOrderIds,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleOpenTour = props.handleOpenTour,
    filterModalOpen = props.filterModalOpen,
    setFilterModalOpen = props.setFilterModalOpen,
    setTimeStatus = props.setTimeStatus,
    setSlaSettingTime = props.setSlaSettingTime,
    isShowMapsKeySettingButton = props.isShowMapsKeySettingButton,
    adminsList = props.adminsList;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var isShowSearchFilters = !(configState !== null && configState !== void 0 && (_configState$configs = configState.configs) !== null && _configState$configs !== void 0 && _configState$configs.search_box_enabled) || (configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.search_box_enabled) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value) === '1';
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.OrderContentHeaderContainer, {
    isDisableControl: isSelectedOrders
  }, !isDisableTitle && /*#__PURE__*/_react.default.createElement(_styles2.HeaderSection, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitle, null, title), selectedOrderIds && width > 768 && /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
    placement: "bottom",
    overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, t('START_TUTORIAL', 'Start tutorial'))
  }, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "dark",
    className: "tour_btn",
    onClick: function onClick() {
      return handleOpenTour();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.LifePreserver, null)))), /*#__PURE__*/_react.default.createElement(_styles2.TopRightSection, {
    isCustomLayout: isSelectedOrders,
    isCollapse: isCollapse
  }, /*#__PURE__*/_react.default.createElement(_styles2.WrapperHeaderFilterGroup, null, /*#__PURE__*/_react.default.createElement(_OrdersHeaderFilterGroup.OrdersHeaderFilterGroup, {
    isSelectedOrders: isSelectedOrders,
    driverGroupList: driverGroupList,
    assignableDriverGroupList: assignableDriverGroupList,
    driversList: driversList,
    searchValue: searchValue,
    handleChangeFilterValues: handleChangeFilterValues,
    handleChangeSearch: handleChangeSearch
  })), /*#__PURE__*/_react.default.createElement(_WebsocketStatus.WebsocketStatus, null), isShowMapsKeySettingButton && /*#__PURE__*/_react.default.createElement(_GoogleMapsApiKeySettingButton.GoogleMapsApiKeySettingButton, null), (configState === null || configState === void 0 || (_configState$configs3 = configState.configs) === null || _configState$configs3 === void 0 || (_configState$configs3 = _configState$configs3.order_deadlines_enabled) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value) === '1' && /*#__PURE__*/_react.default.createElement(_styles2.SLAControlsWrapper, null, /*#__PURE__*/_react.default.createElement(_OrdersDashboardSLAControls.OrdersDashboardSLAControls, {
    setTimeStatus: setTimeStatus,
    setSlaSettingTime: setSlaSettingTime
  })), /*#__PURE__*/_react.default.createElement(_styles2.WrapperSearchAndFilter, {
    fullWidth: isDisableTitle
  }, isShowSearchFilters && /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: handleChangeSearch,
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  }), /*#__PURE__*/_react.default.createElement(_OrdersFilterGroup.OrdersFilterGroup, {
    isLateralBar: isLateralBar,
    filterModalOpen: filterModalOpen,
    setFilterModalOpen: setFilterModalOpen,
    driverGroupList: driverGroupList,
    driversList: driversList,
    paymethodsList: paymethodsList,
    businessesList: businessesList,
    citiesList: citiesList,
    adminsList: adminsList,
    handleChangeFilterValues: handleChangeFilterValues,
    searchValue: searchValue,
    handleChangeSearch: handleChangeSearch
  })))));
};