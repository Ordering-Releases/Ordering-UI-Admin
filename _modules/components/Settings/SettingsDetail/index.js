"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsDetail = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _MdcPlayCircle = _interopRequireDefault(require("@meronex/icons/mdc/MdcPlayCircle"));
var _BsArrowRight = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRight"));
var _EmailSetting = require("../EmailSetting");
var _NotificationSetting = require("../NotificationSetting");
var _SettingsList = require("../SettingsList");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SettingsDetail = exports.SettingsDetail = function SettingsDetail(props) {
  var open = props.open,
    onClose = props.onClose,
    onBasicSettingsRedirect = props.onBasicSettingsRedirect,
    category = props.category,
    isUpdateConfig = props.isUpdateConfig;
  var history = (0, _reactRouterDom.useHistory)();
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    extraInfoOpen = _useState4[0],
    setExtraInfoOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    extraSubCatOpen = _useState6[0],
    setExtraSubCatOpen = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isExpand = _useState8[0],
    setIsExpand = _useState8[1];
  var actionSidebar = function actionSidebar(value) {
    setIsMenuOpen(value);
    if (!value) {
      props.onClose();
    }
  };
  var expandSidebar = function expandSidebar() {
    var element = document.getElementById('catDescription');
    if (isExpand) element.style.width = '500px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  var toggleMainContent = function toggleMainContent() {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('catDescription').style.width = '100vw';
      } else {
        if ((extraInfoOpen || extraSubCatOpen) && width >= 1000) {
          document.getElementById('catDescription').style.width = '1000px';
        } else {
          document.getElementById('catDescription').style.width = '500px';
        }
      }
    }
  };
  (0, _react.useEffect)(function () {
    toggleMainContent();
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    if (width < 1000) return;
    if (extraInfoOpen || extraSubCatOpen) {
      document.getElementById('catDescription').style.width = '1000px';
    } else {
      toggleMainContent();
    }
  }, [extraInfoOpen, extraSubCatOpen]);
  var handleClose = function handleClose() {
    onClose();
    setIsMenuOpen(false);
    var vid = document.getElementById('categoryVideo');
    if (vid) vid.pause();
  };
  var playVideo = function playVideo() {
    var vid = document.getElementById('categoryVideo');
    vid.play();
  };
  var handleExtraOpen = function handleExtraOpen(isMoreInfo, isInitialRender) {
    if (isMoreInfo) {
      setExtraInfoOpen(true);
      setExtraSubCatOpen(false);
    } else {
      setExtraInfoOpen(false);
      setExtraSubCatOpen(true);
      if (!isInitialRender) {
        var _category = query.get('category');
        history.replace("".concat(location.pathname, "?category=").concat(_category, "&more=settings"));
      }
    }
  };
  var onCloseSettingsList = function onCloseSettingsList() {
    setExtraSubCatOpen(false);
    onBasicSettingsRedirect({
      category: category.id
    });
  };
  (0, _react.useEffect)(function () {
    if (category && !isUpdateConfig) {
      setExtraInfoOpen(false);
      setExtraSubCatOpen(false);
    }
  }, [category]);
  var onCloseSidebar = function onCloseSidebar(e) {
    if (e.code === 'Escape' && width >= 1000) {
      props.onClose() && props.onClose();
    }
  };
  (0, _react.useEffect)(function () {
    if (!open) return;
    document.addEventListener('keydown', onCloseSidebar);
    return function () {
      return document.removeEventListener('keydown', onCloseSidebar);
    };
  }, [open]);
  (0, _react.useEffect)(function () {
    var more = query.get('more');
    if (more === 'settings') {
      handleExtraOpen(false, true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    id: "catDescription"
  }, /*#__PURE__*/_react.default.createElement(_styles2.DescriptionContent, null, /*#__PURE__*/_react.default.createElement(_styles2.DescriptionHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderIcons, null, (category === null || category === void 0 ? void 0 : category.support_url) && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    onClick: function onClick() {
      return handleExtraOpen(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.LifePreserver, null)), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), !category && /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 30
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 150
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20
  })), category && Object.keys(category).length > 0 && /*#__PURE__*/_react.default.createElement(_styles2.Content, null, /*#__PURE__*/_react.default.createElement(_styles2.CategoryName, null, /*#__PURE__*/_react.default.createElement("p", null, category.name), width > 576 && !extraInfoOpen && !extraSubCatOpen && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: expandSidebar
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null))), /*#__PURE__*/_react.default.createElement(_styles2.Description, null, category === null || category === void 0 ? void 0 : category.description), (category === null || category === void 0 ? void 0 : category.more_info) && /*#__PURE__*/_react.default.createElement(_styles2.MoreInfo, null, t('MORE_INFO', 'More info')), (category === null || category === void 0 ? void 0 : category.video) && /*#__PURE__*/_react.default.createElement(_styles2.VideoContainer, null, /*#__PURE__*/_react.default.createElement(_MdcPlayCircle.default, {
    onClick: playVideo
  }), /*#__PURE__*/_react.default.createElement("video", {
    muted: true,
    id: "categoryVideo",
    className: "w-100 custom-video",
    playsInline: true
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: category.video,
    type: "video/mp4"
  }), /*#__PURE__*/_react.default.createElement("source", {
    src: category.video,
    type: "video/webm"
  }))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    className: "all-setting",
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleExtraOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, t('SETTINGS', 'All settings')), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null)))), extraInfoOpen && category.support_url && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, width >= 1000 ? /*#__PURE__*/_react.default.createElement(_styles2.CategoryExtraContent, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return setExtraInfoOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)), /*#__PURE__*/_react.default.createElement(_styles2.IframeWrapper, {
    dangerouslySetInnerHTML: {
      __html: "<iframe src=".concat(category.support_url, " style=\"width: 100%; height: 100%;\" />")
    }
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "90vh",
    open: true,
    onClose: function onClose() {
      return setExtraInfoOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.IframeWrapper, {
    dangerouslySetInnerHTML: {
      __html: "<iframe src=".concat(category.support_url, " style=\"width: 100%; height: 100%;\" />")
    }
  })))), extraSubCatOpen && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, width >= 1000 ? /*#__PURE__*/_react.default.createElement(_styles2.CategoryExtraContent, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: onCloseSettingsList
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)), /*#__PURE__*/_react.default.createElement(_styles2.SubCategoryWrapper, null, (category === null || category === void 0 ? void 0 : category.key) === 'email_configs' && /*#__PURE__*/_react.default.createElement(_EmailSetting.EmailSetting, _extends({}, props, {
    category: category,
    onCloseSettingsList: onCloseSettingsList
  })), (category === null || category === void 0 ? void 0 : category.key) === 'notification' && /*#__PURE__*/_react.default.createElement(_NotificationSetting.NotificationSetting, _extends({}, props, {
    category: category,
    onCloseSettingsList: onCloseSettingsList
  })), (category === null || category === void 0 ? void 0 : category.key) !== 'email_configs' && (category === null || category === void 0 ? void 0 : category.key) !== 'notification' && /*#__PURE__*/_react.default.createElement(_SettingsList.SettingsList, _extends({}, props, {
    category: category,
    onCloseSettingsList: onCloseSettingsList
  })))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "90vh",
    open: true,
    onClose: onCloseSettingsList
  }, /*#__PURE__*/_react.default.createElement(_styles2.SubCategoryWrapper, null, (category === null || category === void 0 ? void 0 : category.key) === 'email_configs' && /*#__PURE__*/_react.default.createElement(_EmailSetting.EmailSetting, _extends({}, props, {
    category: category,
    onCloseSettingsList: onCloseSettingsList
  })), (category === null || category === void 0 ? void 0 : category.key) === 'notification' && /*#__PURE__*/_react.default.createElement(_NotificationSetting.NotificationSetting, _extends({}, props, {
    category: category,
    onCloseSettingsList: onCloseSettingsList
  })), (category === null || category === void 0 ? void 0 : category.key) !== 'email_configs' && (category === null || category === void 0 ? void 0 : category.key) !== 'notification' && /*#__PURE__*/_react.default.createElement(_SettingsList.SettingsList, _extends({}, props, {
    category: category,
    onCloseSettingsList: onCloseSettingsList
  })))))), extraInfoOpen && !category.support_url && /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, {
    content: t('NOT_FOUND_SUPPORTURL', 'Sorry, we couldn\'t find the support url.'),
    btnTitle: t('PROFILE_CATEGORY_REDIRECT', 'Go to Category'),
    onClickButton: handleClose
  }));
};