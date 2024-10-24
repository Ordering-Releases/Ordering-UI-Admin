"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserFilterGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _styles = require("../../../styles");
var _Shared = require("../../Shared");
var _constants = require("../../../config/constants");
var _styles2 = require("./styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Orders = require("../../Orders");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var UserFilterGroupUI = function UserFilterGroupUI(props) {
  var _filterValues$ordersC, _filterValues$ordersC2;
  var filterValues = props.filterValues,
    handleChangeValue = props.handleChangeValue,
    handleChangeFilterValues = props.handleChangeFilterValues,
    handleResetFilterValues = props.handleResetFilterValues,
    isFilterModal = props.isFilterModal,
    onClose = props.onClose,
    loyaltyLevelState = props.loyaltyLevelState,
    handleChangeDateType = props.handleChangeDateType,
    handleChangeFromDate = props.handleChangeFromDate,
    handleChangeEndDate = props.handleChangeEndDate,
    isProfessionals = props.isProfessionals,
    isManagers = props.isManagers,
    isCustomers = props.isCustomers;
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    phoneCodeList = _useState2[0],
    setPhoneCodeList = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    loyaltyLevels = _useState4[0],
    setLoyaltyLevels = _useState4[1];
  var conditions = [{
    value: 'gt',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, '>')
  }, {
    value: 'eq',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, "=")
  }, {
    value: 'lt',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, '<')
  }, {
    value: 'ge',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, '>=')
  }, {
    value: 'le',
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, '<=')
  }];
  var enableOptions = [{
    value: true,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('YES', 'Yes'))
  }, {
    value: false,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('NO', 'No'))
  }];
  var userOptions = [{
    value: 0,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('ADMINISTRATOR', 'Administrator'))
  }, {
    value: 1,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('CITY_MANAGER', 'City manager'))
  }, {
    value: 2,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('BUSINESS_OWNER', 'Business owner'))
  }, {
    value: 3,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('USER', 'User'))
  }, {
    value: 9,
    content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, t('CALL_CENTER_AGENT', 'Call center agent'))
  }];
  var handleAcceptFilter = function handleAcceptFilter() {
    handleChangeFilterValues(_objectSpread({}, filterValues));
    onClose();
  };
  var handleClearFilter = function handleClearFilter() {
    handleResetFilterValues();
    handleChangeFilterValues({});
  };
  (0, _react.useEffect)(function () {
    _constants.countryList.splice(0, 1);
    var list = _constants.countryList.map(function (country) {
      return {
        value: country.dial_code.replace('+', ''),
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, "(", country.dial_code, ") ", country.name)
      };
    });
    setPhoneCodeList(list);
  }, [_constants.countryList]);
  (0, _react.useEffect)(function () {
    if (loyaltyLevelState !== null && loyaltyLevelState !== void 0 && loyaltyLevelState.loading) return;
    var levels = loyaltyLevelState === null || loyaltyLevelState === void 0 ? void 0 : loyaltyLevelState.levels.map(function (item) {
      return {
        value: item.id,
        content: /*#__PURE__*/_react.default.createElement(_styles2.Option, null, item.name)
      };
    });
    setLoyaltyLevels(levels);
  }, [loyaltyLevelState]);
  return /*#__PURE__*/_react.default.createElement(_Shared.Modal, {
    title: t('FILTER', 'Filter'),
    width: "80%",
    padding: "30px",
    open: isFilterModal,
    onClose: onClose
  }, /*#__PURE__*/_react.default.createElement(_styles2.Container, null, isCustomers && /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('ID', 'ID')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('ID', 'ID'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.id) || '',
    onChange: function onChange(e) {
      return handleChangeValue({
        id: e.target.value
      });
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('EXTERNAL_ID', 'External id')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('EXTERNAL_ID', 'External id'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.externalId) || '',
    onChange: function onChange(e) {
      return handleChangeValue({
        externalId: e.target.value
      });
    },
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('NAME', 'Name'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.name) || '',
    onChange: function onChange(e) {
      return handleChangeValue({
        name: e.target.value
      });
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('EMAIL', 'Email')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('EMAIL', 'Email'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.email) || '',
    onChange: function onChange(e) {
      return handleChangeValue({
        email: e.target.value
      });
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('LAST_NAME', 'Last name')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('LAST_NAME', 'Last name'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.lastname) || '',
    onChange: function onChange(e) {
      return handleChangeValue({
        lastname: e.target.value
      });
    }
  })), isProfessionals ? /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('SIGN_UP_DATE', 'Sign up date')), /*#__PURE__*/_react.default.createElement(_Orders.DateTypeSelector, {
    filterValues: filterValues,
    handleChangeDateType: handleChangeDateType,
    handleChangeFromDate: handleChangeFromDate,
    handleChangeEndDate: handleChangeEndDate
  })) : /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('AMOUNT_OF_ORDERS', 'Amount of orders')), /*#__PURE__*/_react.default.createElement(_styles2.RangeSelectWrapper, {
    className: "range"
  }, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_CONDITION', 'Select a condition'),
    defaultValue: filterValues === null || filterValues === void 0 || (_filterValues$ordersC = filterValues.ordersCount) === null || _filterValues$ordersC === void 0 ? void 0 : _filterValues$ordersC.condition,
    options: conditions,
    onChange: function onChange(condition) {
      return handleChangeValue({
        ordersCount: _objectSpread(_objectSpread({}, filterValues === null || filterValues === void 0 ? void 0 : filterValues.ordersCount), {}, {
          condition: condition
        })
      });
    },
    optionInnerMaxHeight: "300px"
  }), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('NUMBER', 'Number'),
    autoComplete: "off",
    value: (filterValues === null || filterValues === void 0 || (_filterValues$ordersC2 = filterValues.ordersCount) === null || _filterValues$ordersC2 === void 0 ? void 0 : _filterValues$ordersC2.value) || '',
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    onChange: function onChange(e) {
      return handleChangeValue({
        ordersCount: _objectSpread(_objectSpread({}, filterValues === null || filterValues === void 0 ? void 0 : filterValues.ordersCount), {}, {
          value: e.target.value
        })
      });
    }
  })))), !isCustomers && /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('COUNTRY_PHONE_CODE', 'Country phone code')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_OPTION', 'Select a option'),
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : filterValues.countryPhoneCode,
    options: phoneCodeList,
    onChange: function onChange(val) {
      return handleChangeValue({
        countryPhoneCode: val
      });
    },
    optionInnerMaxHeight: "300px",
    className: "full-select"
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('PHONE_NUMBER', 'Phone number')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "text",
    placeholder: t('PHONE_NUMBER', 'Phone number'),
    autoComplete: "off",
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    },
    value: (filterValues === null || filterValues === void 0 ? void 0 : filterValues.cellphone) || '',
    onChange: function onChange(e) {
      return handleChangeValue({
        cellphone: e.target.value
      });
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('PHONE_VERIFIED', 'Phone verified')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_OPTION', 'Select a option'),
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : filterValues.phoneVerified,
    options: enableOptions,
    onChange: function onChange(val) {
      return handleChangeValue({
        phoneVerified: val
      });
    },
    optionInnerMaxHeight: "300px",
    className: "full-select"
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('EMAIL_VERIFIED', 'Email verified')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_OPTION', 'Select a option'),
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : filterValues.emailVerified,
    options: enableOptions,
    onChange: function onChange(val) {
      return handleChangeValue({
        emailVerified: val
      });
    },
    optionInnerMaxHeight: "300px",
    className: "full-select"
  }))), !isProfessionals && !isCustomers && /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('USER_TYPE', 'User type')), /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_OPTION', 'Select a option'),
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : filterValues.userType,
    options: userOptions.filter(function (user) {
      return isManagers ? user.value !== 3 : true;
    }),
    onChange: function onChange(val) {
      return handleChangeValue({
        userType: val
      });
    },
    optionInnerMaxHeight: "300px",
    className: "full-select"
  })), /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('LOYALTY_LEVEL', 'Loyalty level')), loyaltyLevelState !== null && loyaltyLevelState !== void 0 && loyaltyLevelState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 54
  }) : /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_OPTION', 'Select a option'),
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : filterValues.loyaltyLevel,
    options: loyaltyLevels,
    onChange: function onChange(val) {
      return handleChangeValue({
        loyaltyLevel: val
      });
    },
    optionInnerMaxHeight: "300px",
    className: "full-select"
  }))), !isProfessionals && /*#__PURE__*/_react.default.createElement(_styles2.FormGroup, null, /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('SIGN_UP_DATE', 'Sign up date')), /*#__PURE__*/_react.default.createElement(_Orders.DateTypeSelector, {
    filterValues: filterValues,
    handleChangeDateType: handleChangeDateType,
    handleChangeFromDate: handleChangeFromDate,
    handleChangeEndDate: handleChangeEndDate
  })), isCustomers && /*#__PURE__*/_react.default.createElement(_styles2.FormControl, null, /*#__PURE__*/_react.default.createElement("label", null, t('LOYALTY_LEVEL', 'Loyalty level')), loyaltyLevelState !== null && loyaltyLevelState !== void 0 && loyaltyLevelState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 54
  }) : /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_OPTION', 'Select a option'),
    defaultValue: filterValues === null || filterValues === void 0 ? void 0 : filterValues.loyaltyLevel,
    options: loyaltyLevels,
    onChange: function onChange(val) {
      return handleChangeValue({
        loyaltyLevel: val
      });
    },
    optionInnerMaxHeight: "300px",
    className: "full-select"
  }))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonGroup, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleAcceptFilter();
    }
  }, t('ACCEPT', 'Accept')), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "secundaryDark",
    borderRadius: "8px",
    onClick: function onClick() {
      return handleClearFilter();
    }
  }, t('CLEAR', 'Clear')))));
};
var UserFilterGroup = exports.UserFilterGroup = function UserFilterGroup(props) {
  var userFilterGroupProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserFilterGroupUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdminExternal.UsersFilter, userFilterGroupProps);
};