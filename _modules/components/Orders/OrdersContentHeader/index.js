"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrdersContentHeader = function OrdersContentHeader(props) {
  var _configState$configs, _configState$configs2, _configState$configs3;
  var isLateralBar = props.isLateralBar,
    isDisableTitle = props.isDisableTitle,
    isSelectedOrders = props.isSelectedOrders,
    title = props.title,
    handleChangeSearch = props.handleChangeSearch,
    searchValue = props.searchValue,
    driverGroupList = props.driverGroupList,
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
exports.OrdersContentHeader = OrdersContentHeader;