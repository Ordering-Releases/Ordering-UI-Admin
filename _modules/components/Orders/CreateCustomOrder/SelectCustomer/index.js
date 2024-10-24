"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectCustomer = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _Users = require("../../../Users");
var _Delivery = require("../../../Delivery");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _CgSpinnerTwoAlt = _interopRequireDefault(require("@meronex/icons/cg/CgSpinnerTwoAlt"));
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _Shared = require("../../../Shared");
var _styles = require("../../../../styles");
var _utils = require("../../../../utils");
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
var SelectCustomer = exports.SelectCustomer = function SelectCustomer(props) {
  var _customersPhones$user, _customersPhones$user2, _configs$default_coun;
  var phone = props.phone,
    customersPhones = props.customersPhones,
    selectedUser = props.selectedUser,
    setSelectedUser = props.setSelectedUser,
    onChangeNumber = props.onChangeNumber,
    handleParentSidebarMove = props.handleParentSidebarMove,
    customerAddress = props.customerAddress;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsAdminExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useCustomer = (0, _orderingComponentsAdminExternal.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    _useCustomer2$ = _useCustomer2[1],
    setUserCustomer = _useCustomer2$.setUserCustomer,
    deleteUserCustomer = _useCustomer2$.deleteUserCustomer;
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    searchInputFocus = _useState2[0],
    setSearchInputFocus = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    showSearchbar = _useState4[0],
    setShowSearchbar = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    openSidebar = _useState6[0],
    setOpenSidebar = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openExtraAdddress = _useState8[0],
    setOpenExtraAddress = _useState8[1];
  var timeout = null;
  var onInputChange = function onInputChange(inputValue) {
    if (inputValue && inputValue.length > 10) {
      return;
    }
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      onChangeNumber(inputValue);
    }, 750);
  };
  var onSelectUser = function onSelectUser(user) {
    setUserCustomer(user, true);
    setSelectedUser(user);
    onChangeNumber('');
    setShowSearchbar(false);
  };
  var onRemoveCustomer = function onRemoveCustomer() {
    deleteUserCustomer(true);
    setSelectedUser(null);
    setShowSearchbar(true);
  };
  var handleOpenAddForm = function handleOpenAddForm() {
    setOpenSidebar('user_add_form');
    handleParentSidebarMove(500);
  };
  var handleCloseSidebar = function handleCloseSidebar() {
    setOpenSidebar(null);
    handleParentSidebarMove(0);
  };
  var onPhoneNumberPaste = function onPhoneNumberPaste(event) {
    event.preventDefault();
    var pastedValue = event.clipboardData.getData('text/plain');
    var trimmedValue = pastedValue.replace(/\D/g, '');
    document.execCommand('insertText', false, trimmedValue);
    onChangeNumber(trimmedValue);
  };
  var handleOpenAddressListSidebar = function handleOpenAddressListSidebar() {
    setOpenSidebar('address_list');
    handleParentSidebarMove(500);
  };
  (0, _react.useEffect)(function () {
    setOpenSidebar(null);
    handleParentSidebarMove(0);
  }, [customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.location]);
  (0, _react.useEffect)(function () {
    if (!(customerAddress !== null && customerAddress !== void 0 && customerAddress.address) && selectedUser) {
      handleOpenAddressListSidebar();
    }
  }, [customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.address, selectedUser]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.SectionContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('CUSTOMER', 'Customer')), /*#__PURE__*/_react.default.createElement("p", null, t('SEARCH_WITH_PHONE_FOR_CUSTOM_ORDER', 'Search with the phone the customer who will assign the custom order.')), /*#__PURE__*/_react.default.createElement(_styles2.SearchBarContainer, null, showSearchbar ? /*#__PURE__*/_react.default.createElement(_styles2.SearchBarWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('PHONE_NUMBER', 'Phone number'),
    onChange: function onChange(e) {
      return onInputChange(e.target.value);
    },
    defaultValue: phone,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key) || e.target.value.length >= 10) {
        e.preventDefault();
      }
    },
    onFocus: function onFocus() {
      return setSearchInputFocus(true);
    },
    onBlur: function onBlur() {
      setTimeout(function () {
        setSearchInputFocus(false);
      }, 300);
    },
    onPaste: function onPaste(event) {
      return onPhoneNumberPaste(event);
    }
  }), customersPhones.loading && /*#__PURE__*/_react.default.createElement("span", {
    className: "loading"
  }, /*#__PURE__*/_react.default.createElement(_CgSpinnerTwoAlt.default, null)), searchInputFocus && /*#__PURE__*/_react.default.createElement(_styles2.OptionsToSelectContainer, null, (customersPhones === null || customersPhones === void 0 || (_customersPhones$user = customersPhones.users) === null || _customersPhones$user === void 0 ? void 0 : _customersPhones$user.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, customersPhones === null || customersPhones === void 0 || (_customersPhones$user2 = customersPhones.users) === null || _customersPhones$user2 === void 0 ? void 0 : _customersPhones$user2.map(function (user) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SelectOption, {
      key: user.id,
      onClick: function onClick() {
        return onSelectUser(user);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, (user === null || user === void 0 ? void 0 : user.cellphone) || (user === null || user === void 0 ? void 0 : user.phone)), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Dot, null), /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, user !== null && user !== void 0 && user.photo ? /*#__PURE__*/_react.default.createElement("img", {
      src: optimizeImage(user === null || user === void 0 ? void 0 : user.photo, 'h_50,c_limit'),
      alt: ""
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement("span", {
      className: "name"
    }, user === null || user === void 0 ? void 0 : user.name, " ", user === null || user === void 0 ? void 0 : user.lastname));
  })) : /*#__PURE__*/_react.default.createElement("p", null, customersPhones.loading ? t('LOADING', 'Loading') : (phone === null || phone === void 0 ? void 0 : phone.length) > 6 ? /*#__PURE__*/_react.default.createElement("span", {
    className: "new",
    onClick: function onClick() {
      return handleOpenAddForm();
    }
  }, t('USERS_REGISTER', 'New user')) : t('TYPE_AT_LEAST_NUMBER_SUGGEST', 'Type at least 7 numbers for suggesstions')))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.SelectedUserWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SelectOption, {
    onClick: function onClick() {
      return setShowSearchbar(true);
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, (selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.cellphone) || (selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.phone)), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Dot, null), /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, selectedUser !== null && selectedUser !== void 0 && selectedUser.photo ? /*#__PURE__*/_react.default.createElement("img", {
    src: optimizeImage(selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.photo, 'h_50,c_limit'),
    alt: ""
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement("span", {
    className: "name"
  }, selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.name, " ", selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.lastname), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    circle: true,
    outline: true,
    color: "primary",
    type: "reset",
    className: "remove_option",
    onClick: function onClick() {
      return onRemoveCustomer();
    }
  }, /*#__PURE__*/_react.default.createElement(_MdClose.default, null))))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    disabled: openSidebar === 'user_add_form',
    onClick: function onClick() {
      return handleOpenAddForm();
    }
  }, t('USERS_REGISTER', 'New user'))), selectedUser && /*#__PURE__*/_react.default.createElement(_styles2.CustomerAddressWrapper, null, (customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.address) && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HouseDoor, null), /*#__PURE__*/_react.default.createElement("span", null, customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.address)), /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      return handleOpenAddressListSidebar();
    }
  }, customerAddress !== null && customerAddress !== void 0 && customerAddress.address ? t('CHANGE', 'Change') : t('ADD_NEW_ADDRESS', 'Add new address')))), openSidebar === 'user_add_form' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    sidebarId: "user_add_form",
    open: openSidebar === 'user_add_form',
    onClose: function onClose() {
      return handleCloseSidebar();
    }
  }, /*#__PURE__*/_react.default.createElement(_Users.UserAddForm, {
    isFromCustomOrder: true,
    hideUserTypeSelector: true,
    defaultPhoneNumber: ((selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.cellphone) || phone) && "+".concat((0, _utils.findExitingCountryPhoneCode)(configs === null || configs === void 0 || (_configs$default_coun = configs.default_country_code) === null || _configs$default_coun === void 0 || (_configs$default_coun = _configs$default_coun.value) === null || _configs$default_coun === void 0 ? void 0 : _configs$default_coun.toUpperCase()), " ").concat((selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.cellphone) || phone),
    handleSuccessAdd: onSelectUser,
    onClose: function onClose() {
      return handleCloseSidebar();
    }
  })), openSidebar === 'address_list' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: !openExtraAdddress,
    sidebarId: "address_list",
    defaultSideBarWidth: openExtraAdddress ? 1000 : 500,
    moveDistance: openExtraAdddress ? 500 : 0,
    open: openSidebar === 'address_list',
    onClose: function onClose() {
      return handleCloseSidebar();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.SavedPlaces, {
    openExtraAdddress: openExtraAdddress
  }, /*#__PURE__*/_react.default.createElement("h2", null, selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.name, " ", selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.lastname), /*#__PURE__*/_react.default.createElement("p", null, t('SELECT_CUSTOMER_ADDRESS', 'Select customer address')), /*#__PURE__*/_react.default.createElement(_styles2.AddressListWrapper, null, /*#__PURE__*/_react.default.createElement(_Delivery.AddressList, {
    isAutoOpenAddNewAddress: true,
    isSeletectedUserAddresses: true,
    userId: selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.id,
    addresses: selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.addresses,
    userState: {
      user: selectedUser
    },
    setExtraOpen: setOpenExtraAddress,
    handleSuccessUpdate: setSelectedUser
  })))));
};