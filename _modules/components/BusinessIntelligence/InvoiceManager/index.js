"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvoiceManager = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _InfoShareContext = require("../../../contexts/InfoShareContext");
var _styles = require("../../../styles");
var _InvoiceDetails = require("../InvoiceDetails");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var InvoiceManager = exports.InvoiceManager = function InvoiceManager(props) {
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useInfoShare = (0, _InfoShareContext.useInfoShare)(),
    _useInfoShare2 = _slicedToArray(_useInfoShare, 2),
    isCollapse = _useInfoShare2[0].isCollapse,
    handleMenuCollapse = _useInfoShare2[1].handleMenuCollapse;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openInvoiceDetail = _useState2[0],
    setOpenInvoiceDetail = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedInvoice = _useState4[0],
    setSelectedInvoice = _useState4[1];
  var InvoiceList = [{
    id: 1,
    key: 'business',
    name: t('BUSINESS_INVOICE', 'Business invoice'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ShopWindow, null),
    description: t('BUSINESS_INVOICE_DESCRIPTION', 'Business invoice description')
  }, {
    id: 2,
    key: 'driver',
    name: t('DRIVER_INVOICE', 'Driver invoice'),
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Truck, null),
    description: t('DRIVER_INVOICE_DESCRIPTION', 'Driver invoice description')
  }];
  var handleOpenInvoiceDetail = function handleOpenInvoiceDetail(index, isInitialRender) {
    setOpenInvoiceDetail(true);
    setSelectedInvoice(index);
    if (!isInitialRender) {
      (0, _utils.addQueryToUrl)({
        invoice: index
      });
    }
  };
  var handleCloseInvoiceDetail = function handleCloseInvoiceDetail() {
    setOpenInvoiceDetail(false);
    setSelectedInvoice(null);
    (0, _utils.removeQueryToUrl)(['invoice', 'tab']);
  };
  (0, _react.useEffect)(function () {
    var invoice = query.get('invoice');
    if (invoice) {
      handleOpenInvoiceDetail(invoice, true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.InvoiceManagerContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.HeaderContainer, null, isCollapse && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return handleMenuCollapse(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement("h1", null, t('INVOICE_MANAGER', 'Invoice manager'))), /*#__PURE__*/_react.default.createElement(_styles2.InvoiceListContainer, null, InvoiceList.map(function (invoice, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.InvoiceItemContainer, {
      key: i,
      onClick: function onClick() {
        return handleOpenInvoiceDetail(invoice.key);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.IconWrapper, null, invoice === null || invoice === void 0 ? void 0 : invoice.icon), /*#__PURE__*/_react.default.createElement(_styles2.InvoiceListDetailsWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, invoice === null || invoice === void 0 ? void 0 : invoice.name), /*#__PURE__*/_react.default.createElement("p", null, invoice === null || invoice === void 0 ? void 0 : invoice.description)));
  }))), openInvoiceDetail && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    sidebarId: "invoice_details",
    open: openInvoiceDetail,
    onClose: handleCloseInvoiceDetail,
    showExpandIcon: true
  }, /*#__PURE__*/_react.default.createElement(_InvoiceDetails.InvoiceDetails, {
    selectedInvoice: selectedInvoice
  })));
};