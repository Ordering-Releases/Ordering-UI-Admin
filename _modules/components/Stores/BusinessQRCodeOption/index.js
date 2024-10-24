"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessQRCodeOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _useWindowSize2 = require("../../../hooks/useWindowSize");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactQrCode = _interopRequireDefault(require("react-qr-code"));
var _reactToPrint = _interopRequireDefault(require("react-to-print"));
var _Shared = require("../../Shared");
var _styles2 = require("./styles");
var _utils = require("../../../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessQRCodeOption = exports.BusinessQRCodeOption = function BusinessQRCodeOption(props) {
  var open = props.open,
    item = props.item,
    business = props.business,
    onClose = props.onClose,
    siteState = props.siteState;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useApi = (0, _orderingComponentsAdminExternal.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    code = _useState6[0],
    setCode = _useState6[1];
  var numberRef = (0, _react.useRef)(null);
  var printerRef = (0, _react.useRef)();
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var generateQRCode = function generateQRCode() {
    var _numberRef$current, _siteState$site, _siteState$site2, _siteState$site3, _configs$site_url, _configs$site_url2, _numberRef$current2, _numberRef$current3;
    var errors = [];
    if ((item === null || item === void 0 ? void 0 : item.key) !== 'pick_up' && !(numberRef !== null && numberRef !== void 0 && (_numberRef$current = numberRef.current) !== null && _numberRef$current !== void 0 && _numberRef$current.value)) {
      errors.push((item === null || item === void 0 ? void 0 : item.key) === 'eat_in' ? t('VALIDATION_ERROR_REQUIRED', 'Table number is required').replace('_attribute_', t('TABLE_NUMBER', 'Table number')) : t('VALIDATION_ERROR_REQUIRED', 'Spot number is required').replace('_attribute_', t('SPOT_NUMBER', 'Spot number')));
    }
    if (errors.length > 0) {
      setAlertState({
        open: true,
        content: errors
      });
      return;
    }
    var storeUrl = siteState !== null && siteState !== void 0 && (_siteState$site = siteState.site) !== null && _siteState$site !== void 0 && _siteState$site.domain && (siteState === null || siteState === void 0 || (_siteState$site2 = siteState.site) === null || _siteState$site2 === void 0 ? void 0 : _siteState$site2.ssl_process_status) === 'ended' ? "https://".concat(siteState === null || siteState === void 0 || (_siteState$site3 = siteState.site) === null || _siteState$site3 === void 0 ? void 0 : _siteState$site3.domain, "/store/").concat(business === null || business === void 0 ? void 0 : business.slug) : configs !== null && configs !== void 0 && (_configs$site_url = configs.site_url) !== null && _configs$site_url !== void 0 && _configs$site_url.value ? "".concat((0, _utils.checkSiteUrl)(configs === null || configs === void 0 || (_configs$site_url2 = configs.site_url) === null || _configs$site_url2 === void 0 ? void 0 : _configs$site_url2.value), "store/").concat(business === null || business === void 0 ? void 0 : business.slug) : "https://".concat(ordering.project, ".tryordering.com/store/").concat(business === null || business === void 0 ? void 0 : business.slug);
    var tsNumber = (item === null || item === void 0 ? void 0 : item.key) !== 'pick_up' ? (item === null || item === void 0 ? void 0 : item.key) === 'eat_in' ? "&table_number=".concat(numberRef === null || numberRef === void 0 || (_numberRef$current2 = numberRef.current) === null || _numberRef$current2 === void 0 ? void 0 : _numberRef$current2.value) : "&spot_number=".concat(numberRef === null || numberRef === void 0 || (_numberRef$current3 = numberRef.current) === null || _numberRef$current3 === void 0 ? void 0 : _numberRef$current3.value) : '';
    var compltedUrl = "".concat(storeUrl, "?order_type=").concat(item.value).concat(tsNumber);
    setCode(compltedUrl);
  };
  var actionSidebar = function actionSidebar(value) {
    if (!value) {
      onClose && onClose();
    }
    setIsMenuOpen(value);
    document.getElementById('qrOption').style.width = value ? width > 1000 ? '500px' : '100%' : '0';
  };
  (0, _react.useEffect)(function () {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('qrOption').style.width = '100%';
      } else {
        document.getElementById('qrOption').style.width = '500px';
      }
    }
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    setCode(null);
    if (numberRef !== null && numberRef !== void 0 && numberRef.current) {
      numberRef.current.value = '';
    }
  }, [item]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, {
    id: "qrOption"
  }, /*#__PURE__*/_react.default.createElement(_styles2.Header, null, (item === null || item === void 0 ? void 0 : item.title) && /*#__PURE__*/_react.default.createElement("h1", null, item === null || item === void 0 ? void 0 : item.title), /*#__PURE__*/_react.default.createElement(_styles2.CloseButton, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.X, {
    onClick: function onClick() {
      return onClose && onClose();
    }
  }))), code && /*#__PURE__*/_react.default.createElement(_styles2.QRCodeLayout, {
    ref: printerRef
  }, /*#__PURE__*/_react.default.createElement(_reactQrCode.default, {
    size: 256,
    style: {
      height: 'auto',
      maxWidth: '100%',
      width: '100%'
    },
    value: code,
    viewBox: "0 0 256 256"
  })), (item === null || item === void 0 ? void 0 : item.key) === 'pick_up' ? /*#__PURE__*/_react.default.createElement("h4", null, t('GENERATE_QR_CODE', 'Generate QR Code')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (item === null || item === void 0 ? void 0 : item.key) === 'eat_in' && code && /*#__PURE__*/_react.default.createElement(_styles2.TableNumberHintText, null, t('TO_GENERATE_NEW_QR_CODE_UPDATE_TABLE_NUMBER', 'To generate new QR codes, update the table number and regenerate the code.')), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, (item === null || item === void 0 ? void 0 : item.key) === 'eat_in' ? t('TABLE_NUMBER', 'Table number') : t('SPOT_NUMBER', 'Spot number')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: "0",
    ref: numberRef,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9.]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    outline: true,
    onClick: generateQRCode
  }, t('GENERATE_CODE', 'Generate Code')), /*#__PURE__*/_react.default.createElement(_reactToPrint.default, {
    trigger: function trigger() {
      return /*#__PURE__*/_react.default.createElement(_styles.Button, {
        color: "primary",
        disabled: !code
      }, t('PRINT', 'Print'));
    },
    content: function content() {
      return printerRef.current;
    },
    removeAfterPrint: true
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ORDERING', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};