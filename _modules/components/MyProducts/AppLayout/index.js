"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppLayout = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AppLayout = function AppLayout(props) {
  var appInfo = props.appInfo;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('MY_PRODUCTS', 'My products'))), /*#__PURE__*/_react.default.createElement(_styles2.ContentWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, appInfo.title), /*#__PURE__*/_react.default.createElement("p", null, appInfo.description), /*#__PURE__*/_react.default.createElement(_styles2.BoxWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.AppInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ImageWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: appInfo.images.live,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("h2", null, appInfo.live_title), /*#__PURE__*/_react.default.createElement("p", null, appInfo.live_description), appInfo !== null && appInfo !== void 0 && appInfo.live_purchase_link ? /*#__PURE__*/_react.default.createElement(_styles2.ButtonWRapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return window.open("".concat(appInfo.live_purchase_link), '_blank');
    }
  }, t('PURCHASE_NOW', 'Purchase Now'))) : /*#__PURE__*/_react.default.createElement(_styles2.AppStoreLinksWrapper, null, appInfo.web_url ? /*#__PURE__*/_react.default.createElement(_styles2.DownloadLink, {
    href: appInfo.web_url,
    target: "_blank",
    isSingle: true,
    className: "download-link"
  }, appInfo.web_link_title) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DownloadLink, {
    href: appInfo.apple_store_link,
    target: "_blank",
    className: "download-link"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.appStore,
    alt: "App store"
  })), /*#__PURE__*/_react.default.createElement(_styles2.DownloadLink, {
    href: appInfo.google_play_link,
    target: "_blank",
    className: "download-link"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme.images.general.googlePlay,
    alt: "Google play"
  }))))), /*#__PURE__*/_react.default.createElement(_styles2.AppInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ImageWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    src: appInfo.images.brand,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("h2", null, appInfo.brand_title), /*#__PURE__*/_react.default.createElement("p", null, appInfo.brand_description), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWRapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return window.open("".concat(appInfo.purchase_link), '_blank');
    }
  }, t('PURCHASE_NOW', 'Purchase Now')))))));
};
exports.AppLayout = AppLayout;