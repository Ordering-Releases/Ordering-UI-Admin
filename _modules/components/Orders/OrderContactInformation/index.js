"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderContactInformation = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));

var _BisBusiness = _interopRequireDefault(require("@meronex/icons/bi/BisBusiness"));

var _DriverSelector = require("../DriverSelector");

var _styles = require("../../../styles");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _reactBootstrap = require("react-bootstrap");

var _ReviewCustomer = require("../ReviewCustomer");

var _Shared = require("../../Shared");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderContactInformation = function OrderContactInformation(props) {
  var _order$business, _order$business2, _order$business3, _order$business4, _order$business5, _order$business6, _order$business7, _order$business8, _order$business9, _order$business10, _order$business11, _order$business12, _order$business13, _order$business14, _order$business15, _order$customer, _order$customer2, _order$customer3, _order$customer4, _order$customer5, _order$customer6, _order$customer7, _order$customer9, _order$customer10, _order$customer11, _order$customer12, _order$customer13, _order$customer14, _order$customer15, _order$customer16, _order$customer17, _order$customer18, _order$customer19, _order$customer20, _order$customer21, _order$customer22, _order$customer23, _order$driver, _order$driver2, _order$driver3, _order$driver4, _order$driver5, _order$driver6, _order$driver7, _order$driver8;

  var order = props.order,
      driversList = props.driversList,
      isTourOpen = props.isTourOpen,
      setCurrentTourStep = props.setCurrentTourStep,
      handleOpenMessages = props.handleOpenMessages;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      user = _useSession2[0].user;

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      optimizeImage = _useUtils2[0].optimizeImage;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isModalOpen = _useState2[0],
      setIsModalOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      currentCustomer = _useState4[0],
      setCurrentCustomer = _useState4[1];

  var pastOrderStatuses = [1, 2, 5, 6, 10, 11, 12, 15, 16, 17];

  var handleReviewCustomer = function handleReviewCustomer(customer) {
    setCurrentCustomer(customer);
    setIsModalOpen(true);
  };

  var handleCustomerReviewed = function handleCustomerReviewed() {
    setIsModalOpen(false);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, (user === null || user === void 0 ? void 0 : user.level) !== 2 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_styles2.BusinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.PhotoWrapper, null, order !== null && order !== void 0 && (_order$business = order.business) !== null && _order$business !== void 0 && _order$business.logo ? /*#__PURE__*/_react.default.createElement(_styles2.Photo, {
    bgimage: optimizeImage(order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo, 'h_50,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_BisBusiness.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "name"
  }, order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.name), (order === null || order === void 0 ? void 0 : (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.phone) && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    onClick: function onClick() {
      return window.open("tel:".concat(order.business.phone));
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Telephone, null))), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.phone)), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronDown, {
    className: "down-arrow"
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_styles2.CutsomerDetail, null, /*#__PURE__*/_react.default.createElement(_styles2.CustomerInfoTable, null, /*#__PURE__*/_react.default.createElement("tbody", null, (order === null || order === void 0 ? void 0 : (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.email) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('EMAIL', 'Email')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto: ".concat(order === null || order === void 0 ? void 0 : (_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.email)
  }, order === null || order === void 0 ? void 0 : (_order$business8 = order.business) === null || _order$business8 === void 0 ? void 0 : _order$business8.email))), (order === null || order === void 0 ? void 0 : (_order$business9 = order.business) === null || _order$business9 === void 0 ? void 0 : _order$business9.address) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('CHECKOUT_FULL_ADDRESS', 'Full address')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "http://maps.google.com/?q=".concat(order === null || order === void 0 ? void 0 : (_order$business10 = order.business) === null || _order$business10 === void 0 ? void 0 : _order$business10.address),
    rel: "noopener noreferrer",
    target: "_blank"
  }, order === null || order === void 0 ? void 0 : (_order$business11 = order.business) === null || _order$business11 === void 0 ? void 0 : _order$business11.address))), (order === null || order === void 0 ? void 0 : (_order$business12 = order.business) === null || _order$business12 === void 0 ? void 0 : _order$business12.address_notes) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('NOTES', 'Notes')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : (_order$business13 = order.business) === null || _order$business13 === void 0 ? void 0 : _order$business13.address_notes)), (order === null || order === void 0 ? void 0 : (_order$business14 = order.business) === null || _order$business14 === void 0 ? void 0 : _order$business14.zipcode) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('ZIPCODE', 'Zipcode')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : (_order$business15 = order.business) === null || _order$business15 === void 0 ? void 0 : _order$business15.zipcode))))))), /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles2.CustomerInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.PhotoWrapper, null, order !== null && order !== void 0 && (_order$customer = order.customer) !== null && _order$customer !== void 0 && _order$customer.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Photo, {
    bgimage: optimizeImage(order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo, 'h_50,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "name"
  }, order === null || order === void 0 ? void 0 : (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.name, " ", order === null || order === void 0 ? void 0 : (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.middle_name, " ", order === null || order === void 0 ? void 0 : (_order$customer5 = order.customer) === null || _order$customer5 === void 0 ? void 0 : _order$customer5.lastname, " ", order === null || order === void 0 ? void 0 : (_order$customer6 = order.customer) === null || _order$customer6 === void 0 ? void 0 : _order$customer6.second_lastname), (order === null || order === void 0 ? void 0 : (_order$customer7 = order.customer) === null || _order$customer7 === void 0 ? void 0 : _order$customer7.cellphone) && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    onClick: function onClick() {
      var _order$customer8;

      return window.open("tel:".concat(order === null || order === void 0 ? void 0 : (_order$customer8 = order.customer) === null || _order$customer8 === void 0 ? void 0 : _order$customer8.cellphone));
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Telephone, null))), !(order !== null && order !== void 0 && order.user_review) && pastOrderStatuses.includes(order === null || order === void 0 ? void 0 : order.status) && /*#__PURE__*/_react.default.createElement(_styles2.ReviewButton, {
    onClick: function onClick() {
      return handleReviewCustomer(order === null || order === void 0 ? void 0 : order.customer);
    }
  }, t('REVIEW', 'Review'))), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronDown, {
    className: "down-arrow"
  }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles2.CutsomerDetail, null, /*#__PURE__*/_react.default.createElement(_styles2.CustomerInfoTable, null, /*#__PURE__*/_react.default.createElement("tbody", null, (order === null || order === void 0 ? void 0 : (_order$customer9 = order.customer) === null || _order$customer9 === void 0 ? void 0 : _order$customer9.cellphone) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('CELLPHONE', 'Phone / Mobile')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "tel:".concat(order === null || order === void 0 ? void 0 : (_order$customer10 = order.customer) === null || _order$customer10 === void 0 ? void 0 : _order$customer10.cellphone)
  }, order === null || order === void 0 ? void 0 : (_order$customer11 = order.customer) === null || _order$customer11 === void 0 ? void 0 : _order$customer11.cellphone))), (order === null || order === void 0 ? void 0 : (_order$customer12 = order.customer) === null || _order$customer12 === void 0 ? void 0 : _order$customer12.email) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('EMAIL', 'Email')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto: ".concat(order === null || order === void 0 ? void 0 : (_order$customer13 = order.customer) === null || _order$customer13 === void 0 ? void 0 : _order$customer13.email)
  }, order === null || order === void 0 ? void 0 : (_order$customer14 = order.customer) === null || _order$customer14 === void 0 ? void 0 : _order$customer14.email))), !!(order !== null && order !== void 0 && (_order$customer15 = order.customer) !== null && _order$customer15 !== void 0 && _order$customer15.address) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('CHECKOUT_FULL_ADDRESS', 'Full address')), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "http://maps.google.com/?q=".concat(order === null || order === void 0 ? void 0 : (_order$customer16 = order.customer) === null || _order$customer16 === void 0 ? void 0 : _order$customer16.address),
    rel: "noopener noreferrer",
    target: "_blank"
  }, order === null || order === void 0 ? void 0 : (_order$customer17 = order.customer) === null || _order$customer17 === void 0 ? void 0 : _order$customer17.address))), !!(order !== null && order !== void 0 && (_order$customer18 = order.customer) !== null && _order$customer18 !== void 0 && _order$customer18.internal_number) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('INTERNAL_NUMBER', 'Internal number')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : (_order$customer19 = order.customer) === null || _order$customer19 === void 0 ? void 0 : _order$customer19.internal_number)), !!(order !== null && order !== void 0 && (_order$customer20 = order.customer) !== null && _order$customer20 !== void 0 && _order$customer20.address_notes) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('NOTES', 'Notes')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : (_order$customer21 = order.customer) === null || _order$customer21 === void 0 ? void 0 : _order$customer21.address_notes)), !!(order !== null && order !== void 0 && (_order$customer22 = order.customer) !== null && _order$customer22 !== void 0 && _order$customer22.zipcode) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('ZIPCODE', 'Zipcode')), /*#__PURE__*/_react.default.createElement("td", null, order === null || order === void 0 ? void 0 : (_order$customer23 = order.customer) === null || _order$customer23 === void 0 ? void 0 : _order$customer23.zipcode))))))), (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DriverSelectorContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER_ASSIGN', 'Driver assign')), /*#__PURE__*/_react.default.createElement(_DriverSelector.DriverSelector, {
    isFirstSelect: true,
    small: true,
    drivers: driversList.drivers,
    isPhoneView: true,
    defaultValue: order !== null && order !== void 0 && (_order$driver = order.driver) !== null && _order$driver !== void 0 && _order$driver.id ? order.driver.id : 'default',
    order: order,
    isTourOpen: isTourOpen,
    setCurrentTourStep: setCurrentTourStep,
    handleOpenMessages: handleOpenMessages
  })), /*#__PURE__*/_react.default.createElement(_styles2.DriverInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.DriverInfo, null, /*#__PURE__*/_react.default.createElement(_styles2.PhotoWrapper, null, order !== null && order !== void 0 && (_order$driver2 = order.driver) !== null && _order$driver2 !== void 0 && _order$driver2.photo ? /*#__PURE__*/_react.default.createElement(_styles2.Photo, {
    bgimage: optimizeImage(order === null || order === void 0 ? void 0 : (_order$driver3 = order.driver) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.photo, 'h_50,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), order.driver_id ? /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.name, " ", order === null || order === void 0 ? void 0 : (_order$driver5 = order.driver) === null || _order$driver5 === void 0 ? void 0 : _order$driver5.middle_name, " ", order === null || order === void 0 ? void 0 : (_order$driver6 = order.driver) === null || _order$driver6 === void 0 ? void 0 : _order$driver6.lastname, " ", order === null || order === void 0 ? void 0 : (_order$driver7 = order.driver) === null || _order$driver7 === void 0 ? void 0 : _order$driver7.second_lastname), (order === null || order === void 0 ? void 0 : (_order$driver8 = order.driver) === null || _order$driver8 === void 0 ? void 0 : _order$driver8.cellphone) && /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    onClick: function onClick() {
      var _order$driver9;

      return window.open("tel:".concat(order === null || order === void 0 ? void 0 : (_order$driver9 = order.driver) === null || _order$driver9 === void 0 ? void 0 : _order$driver9.cellphone));
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Telephone, null))), /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER', 'Driver'))) : /*#__PURE__*/_react.default.createElement(_styles2.InfoContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('NO_DRIVER', 'No driver'))))))), /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    width: "700px",
    open: isModalOpen,
    onClose: function onClose() {
      return setIsModalOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ReviewCustomer.ReviewCustomer, {
    order: order,
    customer: currentCustomer,
    onClose: function onClose() {
      return handleCustomerReviewed();
    }
  })));
};

exports.OrderContactInformation = OrderContactInformation;

var ContextAwareToggle = function ContextAwareToggle(_ref) {
  var children = _ref.children,
      eventKey = _ref.eventKey,
      callback = _ref.callback;
  var currentEventKey = (0, _react.useContext)(_reactBootstrap.AccordionContext);
  var decoratedOnClick = (0, _reactBootstrap.useAccordionToggle)(eventKey, function () {
    return callback && callback(eventKey);
  });
  var isCurrentEventKey = currentEventKey === eventKey;

  var handleButtonClick = function handleButtonClick() {
    decoratedOnClick();
  };

  return /*#__PURE__*/_react.default.createElement(_styles2.ToggleItemWrapper, {
    active: isCurrentEventKey,
    onClick: handleButtonClick
  }, children);
};