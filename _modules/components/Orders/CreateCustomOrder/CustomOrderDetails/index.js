"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomOrderDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _SelectCustomer = require("../SelectCustomer");
var _OrderTypeSelector = require("../OrderTypeSelector");
var _SelectBusinesses = require("../SelectBusinesses");
var _Map = require("../Map");
var _SelectProducts = require("../SelectProducts");
var _Checkout = require("../Checkout");
var _Shared = require("../../../Shared");
var _styles = require("../../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CustomOrderDetailsUI = function CustomOrderDetailsUI(props) {
  var phone = props.phone,
    onChangeNumber = props.onChangeNumber,
    customersPhones = props.customersPhones,
    setCustomersPhones = props.setCustomersPhones,
    handleParentSidebarMove = props.handleParentSidebarMove,
    businessList = props.businessList,
    selectedUser = props.selectedUser,
    selectedBusiness = props.selectedBusiness,
    setSelectedUser = props.setSelectedUser,
    setSelectedBusiness = props.setSelectedBusiness,
    productList = props.productList,
    getProducts = props.getProducts,
    handeUpdateProductCart = props.handeUpdateProductCart,
    cart = props.cart,
    onClose = props.onClose,
    handleOpenCustomOrderDetail = props.handleOpenCustomOrderDetail,
    handlePlaceOrderByTotal = props.handlePlaceOrderByTotal,
    extraFields = props.extraFields,
    setExtraFields = props.setExtraFields,
    actionState = props.actionState,
    customerAddress = props.customerAddress;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useValidationFields = (0, _orderingComponentsAdminExternal.useValidationFields)(),
    _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
    validationFields = _useValidationFields2[0];
  var _useOrder = (0, _orderingComponentsAdminExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    changeAddress = _useOrder2[1].changeAddress;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isOrderByProducts = _useState4[0],
    setIsOrderByProducts = _useState4[1];
  var handleCloseAlert = function handleCloseAlert() {
    setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
      error: null
    }));
    setAlertState({
      open: false,
      content: []
    });
  };
  var handlePlaceOrder = function handlePlaceOrder() {
    var _validationFields$fie, _validationFields$fie2;
    var errMessage = [];
    if (!selectedBusiness) {
      errMessage.push(t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('BUSINESS', 'Business')));
    }
    if (!(extraFields !== null && extraFields !== void 0 && extraFields.total)) {
      errMessage.push(t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('TOTAL', 'Total')));
    }
    if (validationFields !== null && validationFields !== void 0 && (_validationFields$fie = validationFields.fields) !== null && _validationFields$fie !== void 0 && (_validationFields$fie = _validationFields$fie.checkout) !== null && _validationFields$fie !== void 0 && (_validationFields$fie = _validationFields$fie.comments) !== null && _validationFields$fie !== void 0 && _validationFields$fie.enabled && validationFields !== null && validationFields !== void 0 && (_validationFields$fie2 = validationFields.fields) !== null && _validationFields$fie2 !== void 0 && (_validationFields$fie2 = _validationFields$fie2.checkout) !== null && _validationFields$fie2 !== void 0 && (_validationFields$fie2 = _validationFields$fie2.comments) !== null && _validationFields$fie2 !== void 0 && _validationFields$fie2.required && !(extraFields !== null && extraFields !== void 0 && extraFields.comment)) {
      errMessage.push(t('VALIDATION_ERROR_REQUIRED', 'Name is required').replace('_attribute_', t('COMMENT', 'Comment')));
    }
    if (errMessage.length > 0) {
      setAlertState({
        open: true,
        content: errMessage
      });
      return;
    }
    handlePlaceOrderByTotal();
  };
  (0, _react.useEffect)(function () {
    if (!(customerAddress !== null && customerAddress !== void 0 && customerAddress.id)) return;
    changeAddress(customerAddress.id);
  }, [customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.id]);
  (0, _react.useEffect)(function () {
    if (customersPhones !== null && customersPhones !== void 0 && customersPhones.error) {
      setAlertState({
        open: true,
        content: [customersPhones === null || customersPhones === void 0 ? void 0 : customersPhones.error]
      });
    }
  }, [customersPhones === null || customersPhones === void 0 ? void 0 : customersPhones.error]);
  (0, _react.useEffect)(function () {
    if (actionState !== null && actionState !== void 0 && actionState.error) {
      setAlertState({
        open: true,
        content: actionState === null || actionState === void 0 ? void 0 : actionState.error
      });
    }
  }, [actionState]);
  (0, _react.useEffect)(function () {
    if (!isOrderByProducts) {
      setExtraFields({
        external_id: extraFields === null || extraFields === void 0 ? void 0 : extraFields.external_id
      });
    }
  }, [isOrderByProducts]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.DetailsContainer, {
    className: "custom-order-content"
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('CREATE_CUSTOM_ORDER', 'Create custom order')), /*#__PURE__*/_react.default.createElement(_SelectCustomer.SelectCustomer, {
    phone: phone,
    customersPhones: customersPhones,
    selectedUser: selectedUser,
    setSelectedUser: setSelectedUser,
    onChangeNumber: onChangeNumber,
    handleParentSidebarMove: handleParentSidebarMove,
    customerAddress: customerAddress
  }), (customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.location) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_OrderTypeSelector.OrderTypeSelector, null), /*#__PURE__*/_react.default.createElement(_SelectBusinesses.SelectBusinesses, {
    businessList: businessList,
    selectedBusiness: selectedBusiness,
    setSelectedBusiness: setSelectedBusiness
  }), /*#__PURE__*/_react.default.createElement(_Map.Map, {
    customer: selectedUser,
    customerLocation: customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.location,
    business: selectedBusiness
  }), /*#__PURE__*/_react.default.createElement(_styles2.ToggleOptions, null, /*#__PURE__*/_react.default.createElement(_styles2.RaidoButton, {
    onClick: function onClick() {
      return setIsOrderByProducts(true);
    }
  }, isOrderByProducts ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "active"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null), /*#__PURE__*/_react.default.createElement("span", null, t('ORDER_BY_PRODUCTS', 'Order by products'))), /*#__PURE__*/_react.default.createElement(_styles2.RaidoButton, {
    onClick: function onClick() {
      return setIsOrderByProducts(false);
    }
  }, isOrderByProducts ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Circle, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.RecordCircleFill, {
    className: "active"
  }), /*#__PURE__*/_react.default.createElement("span", null, t('ORDER_BY_TOTAL', 'Order by total')))), !isOrderByProducts && /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (extraFields === null || extraFields === void 0 ? void 0 : extraFields.total) || '',
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    onChange: function onChange(e) {
      return setExtraFields(_objectSpread(_objectSpread({}, extraFields), {}, {
        total: e.target.value
      }));
    },
    placeholder: t('TOTAL', 'Total')
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('EXTERNAL_ID', 'External id'), /*#__PURE__*/_react.default.createElement("span", null, t('OPTIONAL', 'Optional'))), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: (extraFields === null || extraFields === void 0 ? void 0 : extraFields.external_id) || '',
    onChange: function onChange(e) {
      return setExtraFields(_objectSpread(_objectSpread({}, extraFields), {}, {
        external_id: e.target.value
      }));
    },
    placeholder: t('EXTERNAL_ID', 'External id')
  })), !isOrderByProducts && /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('COMMENT', 'Comment')), /*#__PURE__*/_react.default.createElement(_styles.TextArea, {
    value: (extraFields === null || extraFields === void 0 ? void 0 : extraFields.comment) || '',
    onChange: function onChange(e) {
      return setExtraFields(_objectSpread(_objectSpread({}, extraFields), {}, {
        comment: e.target.value
      }));
    },
    placeholder: t('COMMENT', 'Comment')
  })), selectedBusiness && isOrderByProducts && /*#__PURE__*/_react.default.createElement(_SelectProducts.SelectProducts, {
    productList: productList,
    getProducts: getProducts,
    handeUpdateProductCart: handeUpdateProductCart,
    cart: cart,
    business: selectedBusiness
  }), cart && (cart === null || cart === void 0 ? void 0 : cart.products.length) > 0 && isOrderByProducts && /*#__PURE__*/_react.default.createElement(_Checkout.Checkout, {
    cartUuid: cart.uuid,
    onPlaceOrderClick: function onPlaceOrderClick(data, paymethod, cart) {
      (cart === null || cart === void 0 ? void 0 : cart.order_id) && handleOpenCustomOrderDetail(cart.order_id);
      onClose();
    },
    extraFields: extraFields
  }), !isOrderByProducts && /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: handlePlaceOrder,
    disabled: actionState === null || actionState === void 0 ? void 0 : actionState.loading
  }, t('PLACE_ORDER', 'Place Order')))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ERROR', 'Error'),
    open: alertState.open,
    content: alertState.content,
    onClose: handleCloseAlert,
    onAccept: handleCloseAlert
  })));
};
var CustomOrderDetails = function CustomOrderDetails(props) {
  var customOrderProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CustomOrderDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.CustomOrderDetails, customOrderProps);
};
exports.CustomOrderDetails = CustomOrderDetails;