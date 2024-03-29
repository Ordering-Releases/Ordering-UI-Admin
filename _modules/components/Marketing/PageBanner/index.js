"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var PageBanners = function PageBanners(props) {
  var bannersProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PageBannersUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.AdBannersList, bannersProps);
};
exports.PageBanners = PageBanners;