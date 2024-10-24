"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageBanners = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Shared = require("../../Shared");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _BannerDetails = require("../BannerDetails");
var _utils = require("../../../utils");
var _styles2 = require("./styles");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
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
var PageBannersUI = function PageBannersUI(props) {
  var title = props.title,
    bannerInfo = props.bannerInfo,
    bannersListState = props.bannersListState,
    setMoveDistance = props.setMoveDistance,
    sitesState = props.sitesState,
    actionState = props.actionState,
    handleSuccessUpdate = props.handleSuccessUpdate,
    handleUpdateBanner = props.handleUpdateBanner,
    handleSuccessAdd = props.handleSuccessAdd,
    defaultPosition = props.defaultPosition,
    handleSuccessDelete = props.handleSuccessDelete,
    aspectRatio = props.aspectRatio,
    isSearhShow = props.isSearhShow;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openItemsDetail = _useState2[0],
    setOpenItemsDetail = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedBanner = _useState4[0],
    setSelectedBanner = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: [],
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    searchValue = _useState8[0],
    setSearchValue = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState10 = _slicedToArray(_useState9, 2),
    bannerMoveDistance = _useState10[0],
    setBannerMoveDistance = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isExpand = _useState12[0],
    setIsExpand = _useState12[1];
  var handleOpenBannerItemsDetail = function handleOpenBannerItemsDetail(e, banner, isInitialRender) {
    var _e$target;
    var isInvalid = e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.closest('.banner-enabled');
    if (isInvalid) return;
    setSelectedBanner(banner);
    setOpenItemsDetail(true);
    setMoveDistance(500);
    if (banner && !isInitialRender) {
      (0, _utils.addQueryToUrl)({
        banner: banner === null || banner === void 0 ? void 0 : banner.id
      });
    }
  };
  var handleCloseDetail = function handleCloseDetail() {
    setMoveDistance(0);
    setOpenItemsDetail(false);
    setSelectedBanner(null);
    (0, _utils.removeQueryToUrl)(['banner']);
  };
  var expandSidebar = function expandSidebar() {
    var element = document.getElementById('sideSlider');
    if (isExpand) element.style.width = '500px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  (0, _react.useEffect)(function () {
    if (!(actionState !== null && actionState !== void 0 && actionState.error) || actionState.loading) return;
    setAlertState({
      open: true,
      content: actionState === null || actionState === void 0 ? void 0 : actionState.error
    });
  }, [actionState]);
  (0, _react.useEffect)(function () {
    setSearchValue('');
    setMoveDistance(0);
    setOpenItemsDetail(false);
    setSelectedBanner(null);
  }, [defaultPosition]);
  (0, _react.useEffect)(function () {
    if (openItemsDetail) setIsExpand(false);
  }, [openItemsDetail]);
  (0, _react.useEffect)(function () {
    if (bannersListState.loading) return;
    var bannerId = query.get('banner');
    if (bannerId) {
      var initBanner = bannersListState.banners.find(function (banner) {
        return banner.id === Number(bannerId);
      });
      if (initBanner) {
        handleOpenBannerItemsDetail(null, initBanner, true);
      }
    }
  }, [bannersListState.loading]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, title), /*#__PURE__*/_react.default.createElement(_styles2.InfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, bannerInfo))), /*#__PURE__*/_react.default.createElement(_styles2.RightHeader, null, width > 576 && !openItemsDetail && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: expandSidebar
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)))), isSearhShow && /*#__PURE__*/_react.default.createElement(_styles2.SearchBarWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.SearchBar, {
    search: searchValue,
    isCustomLayout: true,
    onSearch: function onSearch(value) {
      return setSearchValue(value);
    },
    placeholder: t('SEARCH', 'Search')
  })), /*#__PURE__*/_react.default.createElement(_styles2.BannersHeader, null, t('BANNERS', 'Banners')), /*#__PURE__*/_react.default.createElement(_styles2.BannersListWrapper, null, bannersListState.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.BannerItemWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles2.BannerTitleConatiner, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_styles2.BannerActionsWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20
    })));
  }) : bannersListState.banners.filter(function (item) {
    return item.name.toUpperCase().includes(searchValue.toUpperCase());
  }).map(function (banner) {
    return /*#__PURE__*/_react.default.createElement(_styles2.BannerItemWrapper, {
      key: banner.id,
      active: (selectedBanner === null || selectedBanner === void 0 ? void 0 : selectedBanner.id) === banner.id,
      onClick: function onClick(e) {
        return handleOpenBannerItemsDetail(e, banner);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.BannerTitleConatiner, null, banner === null || banner === void 0 ? void 0 : banner.name), /*#__PURE__*/_react.default.createElement(_styles2.BannerActionsWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.EnableWrapper, {
      className: "banner-enabled"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
      defaultChecked: banner.enabled,
      onChange: function onChange(enabled) {
        return handleUpdateBanner({
          enabled: enabled
        }, banner.id);
      }
    })), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null)));
  })), !bannersListState.loading && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick(e) {
      return handleOpenBannerItemsDetail(e, {});
    }
  }, t('ADD_BANNER', 'Add banner'))), openItemsDetail && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    open: openItemsDetail,
    onClose: function onClose() {
      handleCloseDetail();
      setBannerMoveDistance(0);
    },
    moveDistance: bannerMoveDistance,
    defaultSideBarWidth: 500 + bannerMoveDistance
  }, /*#__PURE__*/_react.default.createElement(_BannerDetails.BannerDetails, {
    banner: selectedBanner,
    sitesState: sitesState,
    handleSuccessUpdate: handleSuccessUpdate,
    handleSuccessAdd: handleSuccessAdd,
    handleSuccessDelete: handleSuccessDelete,
    onClose: function onClose() {
      return handleCloseDetail();
    },
    defaultPosition: defaultPosition,
    aspectRatio: aspectRatio,
    setBannerMoveDistance: setBannerMoveDistance
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return alertState !== null && alertState !== void 0 && alertState.handleOnAccept ? alertState.handleOnAccept() : setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }));
};
var PageBanners = exports.PageBanners = function PageBanners(props) {
  var bannersProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PageBannersUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.AdBannersList, bannersProps);
};