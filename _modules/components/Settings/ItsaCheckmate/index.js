"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItsaCheckmate = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _BsArrowRight = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRight"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ItsaCheckmate = function ItsaCheckmate(props) {
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
      href: "https://share.hsforms.com/1vuXwaFtfTTeZf362zJgqSg3neff",
      target: "_blank",
      rel: "noopener noreferrer"
    }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
      color: "primary"
    }, t('SEND_FORM', 'Send Form')))), /*#__PURE__*/_react.default.createElement(_styles2.YoutubeVideoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.YoutubeVideoInner, null, /*#__PURE__*/_react.default.createElement("iframe", {
      title: "youtube",
      src: "https://www.youtube.com/embed/_caZDl4ZFp0?feature=oembed"
    })))));
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    id: "catDescription"
  }, /*#__PURE__*/_react.default.createElement(_styles2.ItsaCheckmateContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.DescriptionHeader, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderIcons, null, width > 576 && !settingsOpen && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: expandSidebar
  }, isExpand ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleContract, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowsAngleExpand, null)), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)))), /*#__PURE__*/_react.default.createElement(_styles2.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('ITSACHECKMATE', 'ItsaCheckmate')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "lightPrimary"
  }, t('NEW', 'New'))), /*#__PURE__*/_react.default.createElement(_styles2.Description, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "sub-header",
    dangerouslySetInnerHTML: {
      __html: t('ITSACHECKMATE_SUB_HEADER', 'Take control of all your <strong>Ordering Platform Menus</strong> in one place!')
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "menu-item"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Check2Circle, null), /*#__PURE__*/_react.default.createElement("p", null, t('ITSACHECKMATE_MENU_1', '86 items & modifiers'))), /*#__PURE__*/_react.default.createElement("div", {
    className: "menu-item"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Check2Circle, null), /*#__PURE__*/_react.default.createElement("p", null, t('ITSACHECKMATE_MENU_2', 'Turn on or off ordering platforms'))), /*#__PURE__*/_react.default.createElement("div", {
    className: "menu-item"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Check2Circle, null), /*#__PURE__*/_react.default.createElement("p", null, t('ITSACHECKMATE_MENU_3', 'Manage delivery hours'))), /*#__PURE__*/_react.default.createElement("div", {
    className: "menu-item"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Check2Circle, null), /*#__PURE__*/_react.default.createElement("p", null, t('ITSACHECKMATE_MENU_4', 'Add, edit, or delete items ')))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
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
exports.ItsaCheckmate = ItsaCheckmate;