"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessReviewList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Shared = require("../../Shared");
var _BusinessReviewDetails = require("../BusinessReviewDetails");
var _utils = require("../../../utils");
var _styles = require("./styles");
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
var BusinessReviewsListingUI = function BusinessReviewsListingUI(props) {
  var _curBusiness$reviews;
  var businessList = props.businessList,
    pagination = props.pagination,
    parentSearchValue = props.parentSearchValue,
    getPageBusinesses = props.getPageBusinesses,
    handleUpdateReview = props.handleUpdateReview,
    onSearch = props.onSearch,
    handleOpenProducts = props.handleOpenProducts,
    isUseQuery = props.isUseQuery;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useState = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    confirm = _useState2[0],
    setConfirm = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openReview = _useState4[0],
    setOpenReview = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    curBusiness = _useState6[0],
    setCurBusiness = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    curBusinessId = _useState8[0],
    setCurBusinessId = _useState8[1];
  var handleChangePage = function handleChangePage(page) {
    getPageBusinesses(pagination.pageSize, page);
  };
  var handleChangePageSize = function handleChangePageSize(pageSize) {
    var expectedPage = Math.ceil(pagination.from / pageSize);
    getPageBusinesses(pageSize, expectedPage);
  };
  var handleOpenReview = function handleOpenReview(business, isInitialRender) {
    setCurBusiness(business);
    setCurBusinessId(business.id);
    setOpenReview(true);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        id: business.id
      });
    }
  };
  (0, _react.useEffect)(function () {
    if (parentSearchValue === null) return;
    onSearch(parentSearchValue);
  }, [parentSearchValue]);
  var handleCloseReviewDetails = function handleCloseReviewDetails() {
    setCurBusiness(null);
    setOpenReview(false);
    (0, _utils.removeQueryToUrl)(['id']);
  };
  (0, _react.useEffect)(function () {
    var tab = query.get('tab');
    var id = query.get('id');
    if (tab === 'business' && id) {
      setCurBusinessId(Number(id));
      setOpenReview(true);
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (!isUseQuery || !(pagination !== null && pagination !== void 0 && pagination.currentPage) || !(pagination !== null && pagination !== void 0 && pagination.pageSize) || !(pagination !== null && pagination !== void 0 && pagination.total)) return;
    (0, _utils.addQueryToUrl)({
      page: pagination.currentPage,
      pageSize: pagination.pageSize
    });
  }, [pagination === null || pagination === void 0 ? void 0 : pagination.currentPage, pagination === null || pagination === void 0 ? void 0 : pagination.pageSize, pagination === null || pagination === void 0 ? void 0 : pagination.total]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewsTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles.ReviewObject, {
    isHeader: true
  }, t('BUSINESS', 'Business'))), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_styles.ReviewMarkerWrapper, {
    isHeader: true
  }, t('REVIEWS', 'Reviews'))))), businessList.loading ? _toConsumableArray(Array(pagination.pageSize).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ReviewTbody, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.ReviewObject, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    })), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.ReviewMarkerWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20
    })))));
  }) : businessList.businesses.map(function (business) {
    var _theme$images, _business$reviews, _business$reviews2;
    return /*#__PURE__*/_react.default.createElement(_styles.ReviewTbody, {
      key: business.id,
      active: business.id === (curBusiness === null || curBusiness === void 0 ? void 0 : curBusiness.id),
      onClick: function onClick() {
        return handleOpenReview(business);
      }
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.ReviewObject, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_50,c_limit')
    })), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, business === null || business === void 0 ? void 0 : business.name), /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 ? void 0 : business.address)))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.ReviewMarkerWrapper, null, (business === null || business === void 0 || (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.StarFill, null), /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 || (_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.total)))))));
  })), pagination && /*#__PURE__*/_react.default.createElement(_styles.PagesBottomContainer, null, (pagination === null || pagination === void 0 ? void 0 : pagination.total) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.Pagination, {
    currentPage: pagination.currentPage,
    totalPages: Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / pagination.pageSize),
    handleChangePage: handleChangePage,
    handleChangePageSize: handleChangePageSize,
    defaultPageSize: pagination === null || pagination === void 0 ? void 0 : pagination.pageSize
  })), openReview && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    defaultSideBarWidth: 550,
    open: openReview,
    onClose: function onClose() {
      return handleCloseReviewDetails();
    },
    showExpandIcon: true
  }, /*#__PURE__*/_react.default.createElement(_BusinessReviewDetails.BusinessReviewDetails, {
    business: curBusiness,
    businessId: curBusinessId,
    reviews: curBusiness === null || curBusiness === void 0 || (_curBusiness$reviews = curBusiness.reviews) === null || _curBusiness$reviews === void 0 ? void 0 : _curBusiness$reviews.reviews,
    handleUpdateReview: handleUpdateReview,
    handleOpenProducts: handleOpenProducts
  })), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }));
};
var BusinessReviewList = exports.BusinessReviewList = function BusinessReviewList(props) {
  var reviewsProps = _objectSpread(_objectSpread({}, props), {}, {
    noActiveStatusCondition: true,
    asDashboard: true,
    isSearchByBusinessName: true,
    isSearchByBusinessEmail: true,
    isSearchByBusinessPhone: true,
    propsToFetch: ['name', 'logo', 'address', 'reviews', 'slug'],
    UIComponent: BusinessReviewsListingUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.DashboardBusinessList, reviewsProps);
};