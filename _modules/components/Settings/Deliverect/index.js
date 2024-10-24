"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Deliverect = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _BsArrowRight = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRight"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Deliverect = exports.Deliverect = function Deliverect(props) {
  var onClose = props.onClose;
  var history = (0, _reactRouterDom.useHistory)();
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    settingsOpen = _useState2[0],
    setSettingsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isExpand = _useState4[0],
    setIsExpand = _useState4[1];
  var toggleMainContent = function toggleMainContent() {
    if (width <= 500) {
      document.getElementById('catDescription').style.width = '100vw';
    } else {
      if (settingsOpen && width >= 1000) {
        document.getElementById('catDescription').style.width = '1000px';
      } else {
        document.getElementById('catDescription').style.width = '500px';
      }
    }
  };
  var expandSidebar = function expandSidebar() {
    var element = document.getElementById('catDescription');
    if (isExpand) element.style.width = '500px';else element.style.width = '100vw';
    setIsExpand(function (prev) {
      return !prev;
    });
  };
  (0, _react.useEffect)(function () {
    if (width < 1000) return;
    if (settingsOpen) {
      document.getElementById('catDescription').style.width = '1000px';
    } else {
      toggleMainContent();
    }
  }, [settingsOpen]);
  (0, _react.useEffect)(function () {
    toggleMainContent();
  }, [width]);
  var handleOpenMore = function handleOpenMore(isInitialRender) {
    setSettingsOpen(true);
    if (!isInitialRender) {
      var id = query.get('id');
      history.replace("".concat(location.pathname, "?id=").concat(id, "&more=settings"));
    }
  };
  var handleCloseDescription = function handleCloseDescription() {
    setSettingsOpen(false);
    var id = query.get('id');
    history.replace("".concat(location.pathname, "?id=").concat(id));
  };
  (0, _react.useEffect)(function () {
    var more = query.get('more');
    if (more === 'settings') {
      handleOpenMore(true);
    }
  }, []);
  var LalaMoveConnectDescription = function LalaMoveConnectDescription() {
    return /*#__PURE__*/_react.default.createElement(_styles2.CategoryExtraContent, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
      color: "black",
      onClick: function onClick() {
        return handleCloseDescription();
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MORE_INFO', 'More Info'))), /*#__PURE__*/_react.default.createElement(_styles2.SettingListConatiner, null, /*#__PURE__*/_react.default.createElement(_Shared.DragScroll, null, /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
      active: true
    }, t('GENERAL', 'General')))), /*#__PURE__*/_react.default.createElement(_styles2.GetStarted, null, /*#__PURE__*/_react.default.createElement("h2", null, t('GET_STARTED_RIGHT_HERE', 'Get started right here')), /*#__PURE__*/_react.default.createElement("p", null, t('FILL_UP_THIS_FORM_TO_REQUEST_INFORMATION', 'Fill up this form to request more information')), /*#__PURE__*/_react.default.createElement("a", {
      href: "https://share.hsforms.com/1uGzNQ71IS2KXCAFC0mTBCg3neff",
      target: "_blank",
      rel: "noopener noreferrer"
    }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
      color: "primary"
    }, t('SEND_FORM', 'Send Form')))), /*#__PURE__*/_react.default.createElement(_styles2.YoutubeVideoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.YoutubeVideoInner, null, /*#__PURE__*/_react.default.createElement("iframe", {
      title: "youtube",
      src: "https://www.youtube.com/embed/_v8nPmW_E-0?playlist=_v8nPmW_E-0&loop=1"
    })))));
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    id: "catDescription"
  }, /*#__PURE__*/_react.default.createElement(_styles2.DeliverectContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.DescriptionHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderIcons, null, width > 576 && !settingsOpen && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: expandSidebar
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DELIVERECT', 'Deliverect')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary"
  }, t('NEW', 'New'))), /*#__PURE__*/_react.default.createElement(_styles2.Description, {
    dangerouslySetInnerHTML: {
      __html: t('SYNC_DEC_SECOND', 'Deliverect integrates all your <span>online orders</span> to your <span>existing POS</span> or our <span>Delivery Manger app.</span> Restaurants large and small rely on Deliverect to reduce failures and order mistakes while speeding up order preparation.')
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    className: "all-setting",
    onClick: function onClick() {
      return handleOpenMore();
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, t('SETTINGS', 'All settings')), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null))), settingsOpen && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, width >= 1000 ? /*#__PURE__*/_react.default.createElement(LalaMoveConnectDescription, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "70%",
    height: "90vh",
    open: true,
    padding: "0px",
    onClose: function onClose() {
      return setSettingsOpen(false);
    },
    hideCloseDefault: true
  }, /*#__PURE__*/_react.default.createElement(LalaMoveConnectDescription, null)))));
};