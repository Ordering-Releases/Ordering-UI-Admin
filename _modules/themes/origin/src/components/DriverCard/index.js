"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriverCard = function DriverCard(props) {
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
exports.DriverCard = DriverCard;