"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesListingHeader = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _MdcFilterOff = _interopRequireDefault(require("@meronex/icons/mdc/MdcFilterOff"));
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _reactBootstrap = require("react-bootstrap");
var _ImportersButton = require("../ImportersButton");
var _styles2 = require("./styles");
var _BusinessFilterGroup = require("../BusinessFilterGroup");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessesListingHeader = exports.BusinessesListingHeader = function BusinessesListingHeader(props) {
  var searchValue = props.searchValue,
    onSearch = props.onSearch,
    handleStartTutorial = props.handleStartTutorial,
    handleOpenSync = props.handleOpenSync,
    handleRefreshBusinesses = props.handleRefreshBusinesses,
    loading = props.loading,
    noBusinesses = props.noBusinesses,
    handleGotToAdd = props.handleGotToAdd,
    handleChangeFilterValues = props.handleChangeFilterValues,
    filterValues = props.filterValues,
    allowBusinessRegister = props.allowBusinessRegister;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    filterApplied = _useState2[0],
    setFilterApplied = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isFilterModal = _useState4[0],
    setIsFilterModal = _useState4[1];
  (0, _react.useEffect)(function () {
    setFilterApplied(Object.keys(filterValues).length > 0);
  }, [filterValues]);
  return /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('STORES_LIST', 'Stores list')), !noBusinesses && /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
    placement: "bottom",
    overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, t('START_TUTORIAL', 'Start tutorial'))
  }, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "dark",
    className: "tour_btn",
    onClick: function onClick() {
      return handleStartTutorial();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.LifePreserver, null)))), !noBusinesses && /*#__PURE__*/_react.default.createElement(_styles2.ActionsWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleRefreshBusinesses();
    },
    className: loading ? 'loading' : ''
  }, t('REFRESH', 'Refresh'), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowRepeat, {
    size: 16,
    style: {
      marginLeft: 5
    }
  })), /*#__PURE__*/_react.default.createElement(_ImportersButton.ImportersButton, {
    customClass: "importerGroup"
  }), allowBusinessRegister && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleGotToAdd();
    }
  }, t('ADD_NEW_STORE', 'Add new store')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleOpenSync();
    }
  }, t('SYNC', 'Sync')), /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: onSearch,
    search: searchValue,
    placeholder: t('SEARCH', 'Search'),
    customClass: "searchBar"
  }), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return setIsFilterModal(true);
    },
    name: "filter-btn"
  }, filterApplied ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Funnel, null) : /*#__PURE__*/_react.default.createElement(_MdcFilterOff.default, null))), /*#__PURE__*/_react.default.createElement(_BusinessFilterGroup.BusinessFilterGroup, {
    handleChangeFilterValues: handleChangeFilterValues,
    onClose: function onClose() {
      return setIsFilterModal(false);
    },
    isFilterModal: isFilterModal
  }));
};