"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSelectHeader = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
var _Shared = require("../../Shared");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var BusinessessListingUI = function BusinessessListingUI(props) {
  var businessList = props.businessList,
    pagination = props.pagination,
    searchValue = props.searchValue,
    onSearch = props.onSearch,
    getPageBusinesses = props.getPageBusinesses,
    isOpen = props.isOpen,
    close = props.close,
    changeBusinessState = props.changeBusinessState,
    handleOpenAddBusiness = props.handleOpenAddBusiness;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var dropdownReference = (0, _react.useRef)();
  var handleChangePage = function handleChangePage(page) {
    getPageBusinesses(pagination.pageSize, page);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(pagination.from / pageSize);
    getPageBusinesses(pageSize, expectedPage);
  };
  var closeSelect = function closeSelect(e) {
    if (isOpen) {
      var _dropdownReference$cu;
      var outsideDropdown = !((_dropdownReference$cu = dropdownReference.current) !== null && _dropdownReference$cu !== void 0 && _dropdownReference$cu.contains(e.target));
      if (outsideDropdown) {
        close();
      }
    }
  };
  (0, _react.useEffect)(function () {
    if (!isOpen) return;
    document.addEventListener('mouseup', closeSelect);
    return function () {
      return document.removeEventListener('mouseup', closeSelect);
    };
  }, [isOpen]);
  return /*#__PURE__*/_react.default.createElement(_styles2.PopMenuContatiner, {
    ref: dropdownReference
  }, /*#__PURE__*/_react.default.createElement(_styles2.SelectHeaderContent, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessSearch, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    isCustomLayout: true,
    lazyLoad: true,
    onSearch: onSearch,
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  })), /*#__PURE__*/_react.default.createElement(_styles2.BusinessList, null, businessList.loading ? _toConsumableArray(Array(pagination.pageSize).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.OptionItem, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 38,
      height: 38,
      style: {
        borderRadius: '7.6px'
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        marginLeft: '8px',
        marginRight: '8px'
      }
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 15,
      width: 140
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 12,
      width: 80,
      style: {
        marginTop: '7px'
      }
    })));
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, businessList.businesses.map(function (business) {
    var _business$city;
    return /*#__PURE__*/_react.default.createElement(_styles2.OptionItem, {
      key: business.id,
      onClick: function onClick() {
        return changeBusinessState(business);
      }
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: optimizeImage(business === null || business === void 0 ? void 0 : business.logo, 'h_50,c_limit'),
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("b", null, business === null || business === void 0 ? void 0 : business.name), /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 || (_business$city = business.city) === null || _business$city === void 0 ? void 0 : _business$city.name)));
  }))), pagination && (pagination === null || pagination === void 0 ? void 0 : pagination.total) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.WrapperPagination, {
    className: "pagination-container"
  }, (pagination === null || pagination === void 0 ? void 0 : pagination.total) && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: pagination.currentPage,
    totalPages: Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / pagination.pageSize),
    handleChangePage: handleChangePage,
    defaultPageSize: pagination.pageSize,
    handleChangePageSize: handleChangePageSize,
    isHidePagecontrol: true
  })), !businessList.loading && (pagination === null || pagination === void 0 ? void 0 : pagination.total) === 0 && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleOpenAddBusiness();
    }
  }, t('ADD_NEW_STORE', 'Add new store'))));
};
var BusinessSelectHeader = exports.BusinessSelectHeader = function BusinessSelectHeader(props) {
  var _props$defaultPageSiz, _props$defaultPageSiz2, _props$defaultPropsTo;
  var businessListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessessListingUI,
    asDashboard: true,
    loadMorePageSize: (_props$defaultPageSiz = props.defaultPageSize) !== null && _props$defaultPageSiz !== void 0 ? _props$defaultPageSiz : 6,
    paginationSettings: {
      pageSize: (_props$defaultPageSiz2 = props.defaultPageSize) !== null && _props$defaultPageSiz2 !== void 0 ? _props$defaultPageSiz2 : 6
    },
    isSearchByBusinessName: true,
    isSearchByBusinessEmail: true,
    isSearchByBusinessPhone: true,
    propsToFetch: (_props$defaultPropsTo = props.defaultPropsToFetch) !== null && _props$defaultPropsTo !== void 0 ? _props$defaultPropsTo : ['name', 'slug', 'logo', 'city']
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.DashboardBusinessList, businessListingProps);
};