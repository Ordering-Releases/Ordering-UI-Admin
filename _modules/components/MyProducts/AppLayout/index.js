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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var AppLayout = exports.AppLayout = function AppLayout(props) {
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