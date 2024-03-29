"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppLayout = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AppLayout = function AppLayout(props) {
  var appInfo = props.appInfo,
    isDriver = props.isDriver;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var location = (0, _reactRouterDom.useLocation)();
  var LeftContent = function LeftContent() {
    return /*#__PURE__*/_react.default.createElement(_styles2.AppInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ImageWrapper, {
      isDriver: isDriver
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: appInfo.images.live,
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("h2", null, appInfo.live_title), (appInfo === null || appInfo === void 0 ? void 0 : appInfo.downloads) && /*#__PURE__*/_react.default.createElement(_styles2.DownLoadWrapper, null, appInfo.downloads.map(function (item) {
      return /*#__PURE__*/_react.default.createElement("img", {
        src: item.icon,
        alt: "",
        key: item.id,
        onClick: function onClick() {
          return window.open(item.link, '_blank');
        }
      });
    })), (appInfo === null || appInfo === void 0 ? void 0 : appInfo.web_url) && /*#__PURE__*/_react.default.createElement(_styles2.DownloadLink, {
      href: appInfo.web_url,
      target: "_blank",
      isSingle: true,
      className: "download-link"
    }, appInfo.web_link_title), /*#__PURE__*/_react.default.createElement("p", null, appInfo.live_description), (appInfo === null || appInfo === void 0 ? void 0 : appInfo.purchase_message) && /*#__PURE__*/_react.default.createElement(_styles2.ButtonWRapper, null, (appInfo === null || appInfo === void 0 ? void 0 : appInfo.purchase_link) && /*#__PURE__*/_react.default.createElement(_styles.Button, {
      color: "primary",
      borderRadius: "8px",
      onClick: function onClick() {
        return window.open(appInfo === null || appInfo === void 0 ? void 0 : appInfo.purchase_link, '_blank');
      }
    }, t('PURCHASE_NOW', 'Purchase Now')), (appInfo === null || appInfo === void 0 ? void 0 : appInfo.demo_link) && /*#__PURE__*/_react.default.createElement(_styles.Button, {
      color: "primary",
      outline: true,
      borderRadius: "8px",
      onClick: function onClick() {
        return window.open(appInfo === null || appInfo === void 0 ? void 0 : appInfo.demo_link, '_blank');
      }
    }, t('BOOK_A_DEMO', 'Book a demo'))));
  };
  var RightContent = function RightContent() {
    return /*#__PURE__*/_react.default.createElement(_styles2.AppInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.ImageWrapper, {
      isDriver: isDriver
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: appInfo.images.brand,
      alt: ""
    })), /*#__PURE__*/_react.default.createElement("h2", null, appInfo.brand_title), /*#__PURE__*/_react.default.createElement("p", null, appInfo.brand_description), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWRapper, null, (appInfo === null || appInfo === void 0 ? void 0 : appInfo.purchase_link) && /*#__PURE__*/_react.default.createElement(_styles.Button, {
      color: "primary",
      borderRadius: "8px",
      onClick: function onClick() {
        return window.open(appInfo === null || appInfo === void 0 ? void 0 : appInfo.purchase_link, '_blank');
      }
    }, t('PURCHASE_NOW', 'Purchase Now')), !(appInfo !== null && appInfo !== void 0 && appInfo.purchase_link) && (appInfo === null || appInfo === void 0 ? void 0 : appInfo.demo_link) && /*#__PURE__*/_react.default.createElement(_styles.Button, {
      color: "primary",
      outline: true,
      borderRadius: "8px",
      onClick: function onClick() {
        return window.open(appInfo === null || appInfo === void 0 ? void 0 : appInfo.demo_link, '_blank');
      }
    }, t('BOOK_A_DEMO', 'Book a demo'))));
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderTitleContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('MY_PRODUCTS', 'My products')), (location.pathname === '/my-products/ordering-website' || location.pathname === '/my-products/customer-app') && /*#__PURE__*/_react.default.createElement(_styles2.HeaderInfoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.InfoCircle, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, t('MY_PRODUCTS_INFO', 'Use the advanced configurations below to customize your products changing the images, colors, available options and others with a few clicks. If you have doubts, please contact our team here:'), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.ordering.co/support",
    rel: "noopener noreferrer",
    target: "_blank"
  }, "https://www.ordering.co/support")))), /*#__PURE__*/_react.default.createElement(_styles2.ContentWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, appInfo.title), /*#__PURE__*/_react.default.createElement("p", null, appInfo.description), /*#__PURE__*/_react.default.createElement(_styles2.BoxWrapper, null, (appInfo === null || appInfo === void 0 ? void 0 : appInfo.live_title) && /*#__PURE__*/_react.default.createElement(LeftContent, null), /*#__PURE__*/_react.default.createElement(RightContent, null))));
};
exports.AppLayout = AppLayout;