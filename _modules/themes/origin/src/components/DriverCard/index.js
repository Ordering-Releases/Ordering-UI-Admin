"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriverCard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _utils = require("../../utils");
var _useWindowSize2 = require("../../../../../hooks/useWindowSize");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _styles = require("./styles");
var _Modal = require("../Modal");
var _DriverOrders = require("../DriverOrders");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DriverCard = exports.DriverCard = function DriverCard(props) {
  var offline = props.offline,
    driver = props.driver,
    driversList = props.driversList,
    handleSelectedOrderIds = props.handleSelectedOrderIds,
    handleOpenOrderDetail = props.handleOpenOrderDetail;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    getTimeAgo = _useUtils2[0].getTimeAgo;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    ordersAndDriverModalOpen = _useState2[0],
    setOrdersAndDriverModalOpen = _useState2[1];
  var handleOpenDriverOrders = function handleOpenDriverOrders() {
    if (!offline) {
      setOrdersAndDriverModalOpen(true);
    }
  };
  var closeModal = function closeModal(e) {
    if (e.code === 'Escape' && width >= 1000) setOrdersAndDriverModalOpen(false);
  };
  (0, _react.useEffect)(function () {
    if (!ordersAndDriverModalOpen) return;
    document.addEventListener('keydown', closeModal);
    return function () {
      return document.removeEventListener('keydown', closeModal);
    };
  }, [ordersAndDriverModalOpen]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.DrirverInfo, {
    offline: offline
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriverImage, null, driver.photo ? /*#__PURE__*/_react.default.createElement(_styles.DriverImage, {
    bgimage: driver.photo
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.DriverInfoContent, null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("h2", null, driver.name, " ", driver.lastname), /*#__PURE__*/_react.default.createElement("h2", {
    onClick: function onClick() {
      return handleOpenDriverOrders();
    }
  }, driver.assigned_orders_count, " ", t('ORDERS', 'Orders'))), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement(_styles.InfoCell, null, /*#__PURE__*/_react.default.createElement("p", null, getTimeAgo(driver.last_order_assigned_at)), /*#__PURE__*/_react.default.createElement(_styles.WrapperStar, {
    width: (0, _utils.getStarWidth)(driver.qualification)
  }))))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "80%",
    height: "80vh",
    padding: "30px",
    open: ordersAndDriverModalOpen,
    onClose: function onClose() {
      return setOrdersAndDriverModalOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_DriverOrders.DriverOrders, {
    driver: driver,
    driversList: driversList,
    handleSelectedOrderIds: handleSelectedOrderIds,
    handleOpenOrderDetail: handleOpenOrderDetail
  })));
};