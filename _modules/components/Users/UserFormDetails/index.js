"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserFormDetailsUI = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponentsAdminExternal = require("ordering-components-admin-external");
var _reactHookForm = require("react-hook-form");
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _reactPhoneNumberInput = require("react-phone-number-input");
var _Shared = require("../../Shared");
var _utils = require("../../../utils");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _UserTypeSelector = require("../UserTypeSelector");
var _OccupationSelector = require("../OccupationSelector");
var _constants = require("../../../config/constants");
var _styles2 = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var UserFormDetailsUI = exports.UserFormDetailsUI = function UserFormDetailsUI(props) {
  var _validationFields$fie, _validationFields$fie2, _validationFields$fie5, _ref4, _formState$changes$ti, _formState$changes6, _formState$changes$dr, _formState$changes7, _formState$changes$bi, _formState$changes8, _formState$changes$le, _formState$changes9;
  var formState = props.formState,
    showField = props.showField,
    cleanFormState = props.cleanFormState,
    isRequiredField = props.isRequiredField,
    validationFields = props.validationFields,
    handleChangeInput = props.handleChangeInput,
    handleButtonUpdateClick = props.handleButtonUpdateClick,
    isCheckout = props.isCheckout,
    userData = props.userData,
    isCustomerMode = props.isCustomerMode,
    isDriversPage = props.isDriversPage,
    handleChangeSwtich = props.handleChangeSwtich,
    handleChangeUserType = props.handleChangeUserType,
    isProfessional = props.isProfessional,
    occupations = props.occupations,
    handleChangeOccupation = props.handleChangeOccupation,
    setCellphoneStartZero = props.setCellphoneStartZero;
  var formMethods = (0, _reactHookForm.useForm)();
  var _useLanguage = (0, _orderingComponentsAdminExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponentsAdminExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    isValidPhoneNumber = _useState2[0],
    setIsValidPhoneNumber = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    userPhoneNumber = _useState4[0],
    setUserPhoneNumber = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    timezonesOptions = _useState8[0],
    setTimezonesOptions = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    timezoneSearchValue = _useState10[0],
    setTimezoneSearchValue = _useState10[1];
  var _useCustomer = (0, _orderingComponentsAdminExternal.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    setUserCustomer = _useCustomer2[1].setUserCustomer;
  var emailInput = (0, _react.useRef)(null);
  var _useState11 = (0, _react.useState)(userData),
    _useState12 = _slicedToArray(_useState11, 2),
    user = _useState12[0],
    setUser = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    passwordSee = _useState14[0],
    setPasswordSee = _useState14[1];
  (0, _react.useEffect)(function () {
    setUser(userData);
  }, [userData]);
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    cleanFormState && cleanFormState({
      result: {
        error: false
      }
    });
  };
  var showInputPhoneNumber = (_validationFields$fie = validationFields === null || validationFields === void 0 || (_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.checkout) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.cellphone) === null || _validationFields$fie2 === void 0 ? void 0 : _validationFields$fie2.enabled) !== null && _validationFields$fie !== void 0 ? _validationFields$fie : false;
  var setUserCellPhone = function setUserCellPhone() {
    var isEdit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (user !== null && user !== void 0 && user.cellphone) {
      var _formState$changes, _formState$changes2;
      var phone = null;
      if (formState.result.error && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.cellphone && (_formState$changes2 = formState.changes) !== null && _formState$changes2 !== void 0 && _formState$changes2.country_phone_code) {
        var _formState$changes3, _formState$changes4;
        phone = "+".concat((_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.country_phone_code, " ").concat((_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.cellphone);
        setUserPhoneNumber(phone);
        return;
      }
      if (user !== null && user !== void 0 && user.country_phone_code) {
        phone = "+".concat(user === null || user === void 0 ? void 0 : user.country_phone_code, " ").concat(user === null || user === void 0 ? void 0 : user.cellphone);
      } else {
        phone = user === null || user === void 0 ? void 0 : user.cellphone;
      }
      setUserPhoneNumber(phone);
      return;
    }
    setUserPhoneNumber((user === null || user === void 0 ? void 0 : user.cellphone) || '');
  };
  var onSubmit = function onSubmit() {
    var _validationFields$fie3, _validationFields$fie4;
    var isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true;
    if (!userPhoneNumber && validationFields !== null && validationFields !== void 0 && (_validationFields$fie3 = validationFields.fields) !== null && _validationFields$fie3 !== void 0 && (_validationFields$fie3 = _validationFields$fie3.checkout) !== null && _validationFields$fie3 !== void 0 && (_validationFields$fie3 = _validationFields$fie3.cellphone) !== null && _validationFields$fie3 !== void 0 && _validationFields$fie3.enabled && validationFields !== null && validationFields !== void 0 && (_validationFields$fie4 = validationFields.fields) !== null && _validationFields$fie4 !== void 0 && (_validationFields$fie4 = _validationFields$fie4.checkout) !== null && _validationFields$fie4 !== void 0 && (_validationFields$fie4 = _validationFields$fie4.cellphone) !== null && _validationFields$fie4 !== void 0 && _validationFields$fie4.required) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone Number is required.')]
      });
      return;
    }
    if (!isPhoneNumberValid && userPhoneNumber) {
      if (user !== null && user !== void 0 && user.country_phone_code) {
        setAlertState({
          open: true,
          content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
        });
        return;
      }
      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid')]
      });
      return;
    }
    if (Object.keys(formState.changes).length > 0 && isPhoneNumberValid) {
      var changes = null;
      if (user !== null && user !== void 0 && user.cellphone && !userPhoneNumber) {
        changes = {
          country_phone_code: '',
          cellphone: ''
        };
      }
      if (isCustomerMode) {
        setUserCustomer(formState.result.result, true);
      }
      handleButtonUpdateClick(changes);
    }
  };
  var handleChangePhoneNumber = function handleChangePhoneNumber(number, isValid, rawNumber) {
    setUserPhoneNumber(number);
    var phoneNumberParser = null;
    var phoneNumber = {
      country_phone_code: {
        name: 'country_phone_code',
        value: ''
      },
      cellphone: {
        name: 'cellphone',
        value: ''
      }
    };
    if (isValid) {
      var _configs$validation_p, _configs$validation_p2;
      phoneNumberParser = (0, _libphonenumberJs.default)(number);
      if (!parseInt((_configs$validation_p = configs === null || configs === void 0 || (_configs$validation_p2 = configs.validation_phone_number_lib) === null || _configs$validation_p2 === void 0 ? void 0 : _configs$validation_p2.value) !== null && _configs$validation_p !== void 0 ? _configs$validation_p : 1, 10)) {
        var _phoneNumberParser, _formatPhoneNumber, _formatPhoneNumber$re;
        if ((_phoneNumberParser = phoneNumberParser) !== null && _phoneNumberParser !== void 0 && _phoneNumberParser.nationalNumber) phoneNumberParser.nationalNumber = (_formatPhoneNumber = (0, _reactPhoneNumberInput.formatPhoneNumber)(number)) === null || _formatPhoneNumber === void 0 || (_formatPhoneNumber$re = _formatPhoneNumber.replace) === null || _formatPhoneNumber$re === void 0 ? void 0 : _formatPhoneNumber$re.call(_formatPhoneNumber, /\s/g, '');
      }
    }
    if (phoneNumberParser) {
      var _phoneNumberParser2, _phoneNumberParser3;
      phoneNumber = {
        country_phone_code: {
          name: 'country_phone_code',
          value: (_phoneNumberParser2 = phoneNumberParser) === null || _phoneNumberParser2 === void 0 ? void 0 : _phoneNumberParser2.countryCallingCode
        },
        cellphone: {
          name: 'cellphone',
          value: (_phoneNumberParser3 = phoneNumberParser) === null || _phoneNumberParser3 === void 0 ? void 0 : _phoneNumberParser3.nationalNumber
        }
      };
    }
    setCellphoneStartZero && setCellphoneStartZero(rawNumber !== null && rawNumber !== void 0 && rawNumber.number && rawNumber !== null && rawNumber !== void 0 && rawNumber.countryCallingCode ? rawNumber === null || rawNumber === void 0 ? void 0 : rawNumber.number : null);
    handleChangeInput(phoneNumber, true);
  };
  var handleChangeInputEmail = function handleChangeInputEmail(e) {
    var _e$target$value, _e$target$value2, _e$target$value3;
    handleChangeInput({
      target: {
        name: 'email',
        value: (_e$target$value = e.target.value) === null || _e$target$value === void 0 ? void 0 : _e$target$value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
      }
    });
    formMethods.setValue('email', (_e$target$value2 = e.target.value) === null || _e$target$value2 === void 0 ? void 0 : _e$target$value2.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''));
    emailInput.current.value = (_e$target$value3 = e.target.value) === null || _e$target$value3 === void 0 ? void 0 : _e$target$value3.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '');
  };
  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      var content = Object.values(formMethods.errors).map(function (error) {
        return error.message;
      });
      if (!isValidPhoneNumber && userPhoneNumber) {
        content.push(t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid.'));
      }
      setAlertState({
        open: true,
        content: content
      });
    }
  }, [formMethods.errors]);
  (0, _react.useEffect)(function () {
    var _formState$result;
    if (!(formState !== null && formState !== void 0 && formState.loading) && formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;
      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      });
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.loading]);
  (0, _react.useEffect)(function () {
    if (user && !(formState !== null && formState !== void 0 && formState.loading)) {
      setUserCellPhone();
    }
  }, [user]);
  (0, _react.useEffect)(function () {
    if (!validationFields.loading && emailInput.current) {
      var _formState$result3, _formState$result4, _ref, _formState$changes$em, _formState$changes5;
      formMethods.setValue('email', formState !== null && formState !== void 0 && (_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.result ? formState === null || formState === void 0 || (_formState$result4 = formState.result) === null || _formState$result4 === void 0 || (_formState$result4 = _formState$result4.result) === null || _formState$result4 === void 0 ? void 0 : _formState$result4.email : (_ref = (_formState$changes$em = formState === null || formState === void 0 || (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.email) !== null && _formState$changes$em !== void 0 ? _formState$changes$em : user && (user === null || user === void 0 ? void 0 : user.email)) !== null && _ref !== void 0 ? _ref : '');
    }
  }, [validationFields, emailInput.current]);
  (0, _react.useEffect)(function () {
    formMethods.register('email', {
      required: isRequiredField('email') ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')) : null,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    });
  }, [formMethods]);
  (0, _react.useEffect)(function () {
    var _timezonesOptions = _constants.timezones.filter(function (timezone) {
      return timezone.toLocaleLowerCase().includes(timezoneSearchValue.toLocaleLowerCase());
    }).map(function (timezone) {
      return {
        value: timezone,
        content: timezone
      };
    });
    setTimezonesOptions(_timezonesOptions);
  }, [timezoneSearchValue]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.FormInput, {
    onSubmit: formMethods.handleSubmit(onSubmit),
    isCheckout: isCheckout
  }, !(validationFields !== null && validationFields !== void 0 && validationFields.loading) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (0, _utils.sortInputFields)({
    values: validationFields === null || validationFields === void 0 || (_validationFields$fie5 = validationFields.fields) === null || _validationFields$fie5 === void 0 ? void 0 : _validationFields$fie5.checkout
  }).map(function (field) {
    var _formState$result5, _formState$result6, _ref2, _formState$changes$fi, _formState$result7, _formState$result8, _ref3, _formState$changes$fi2;
    return showField && showField(field.code) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.id
    }, field.code === 'email' ? /*#__PURE__*/_react.default.createElement(_styles.Input, {
      key: field.id,
      type: field.type,
      name: field.code,
      className: "form",
      placeholder: t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name),
      defaultValue: formState !== null && formState !== void 0 && (_formState$result5 = formState.result) !== null && _formState$result5 !== void 0 && _formState$result5.result ? formState === null || formState === void 0 || (_formState$result6 = formState.result) === null || _formState$result6 === void 0 ? void 0 : _formState$result6.result[field.code] : (_ref2 = (_formState$changes$fi = formState === null || formState === void 0 ? void 0 : formState.changes[field.code]) !== null && _formState$changes$fi !== void 0 ? _formState$changes$fi : user && user[field.code]) !== null && _ref2 !== void 0 ? _ref2 : '',
      onChange: handleChangeInputEmail,
      ref: function ref(e) {
        emailInput.current = e;
      },
      autoComplete: "off"
    }) : /*#__PURE__*/_react.default.createElement(_styles.Input, {
      key: field.id,
      type: field.type,
      name: field.code,
      className: "form",
      placeholder: t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name),
      defaultValue: formState !== null && formState !== void 0 && (_formState$result7 = formState.result) !== null && _formState$result7 !== void 0 && _formState$result7.result ? formState === null || formState === void 0 || (_formState$result8 = formState.result) === null || _formState$result8 === void 0 ? void 0 : _formState$result8.result[field.code] : (_ref3 = (_formState$changes$fi2 = formState === null || formState === void 0 ? void 0 : formState.changes[field.code]) !== null && _formState$changes$fi2 !== void 0 ? _formState$changes$fi2 : user && user[field.code]) !== null && _ref3 !== void 0 ? _ref3 : '',
      onChange: handleChangeInput,
      ref: formMethods.register({
        required: isRequiredField(field.code) ? t("VALIDATION_ERROR_".concat(field.code.toUpperCase(), "_REQUIRED"), "".concat(field === null || field === void 0 ? void 0 : field.name, " is required")).replace('_attribute_', t(field === null || field === void 0 ? void 0 : field.name, field.code)) : null
      }),
      autoComplete: "off"
    }));
  }), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, {
    isTimezone: true
  }, /*#__PURE__*/_react.default.createElement(_styles.DefaultSelect, {
    placeholder: t('SELECT_TIMEZONE', 'Select a timezone'),
    defaultValue: (_ref4 = (_formState$changes$ti = formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.timezone) !== null && _formState$changes$ti !== void 0 ? _formState$changes$ti : user === null || user === void 0 ? void 0 : user.timezone) !== null && _ref4 !== void 0 ? _ref4 : '',
    options: timezonesOptions,
    onChange: function onChange(val) {
      return handleChangeSwtich('timezone', val);
    },
    optionInnerMaxHeight: "300px",
    isShowSearchBar: true,
    searchBarIsCustomLayout: true,
    searchBarIsNotLazyLoad: true,
    searchValue: timezoneSearchValue,
    handleChangeSearch: setTimezoneSearchValue
  })), isProfessional && (occupations === null || occupations === void 0 ? void 0 : occupations.length) > 0 && /*#__PURE__*/_react.default.createElement(_OccupationSelector.OccupationSelector, {
    occupationId: user === null || user === void 0 ? void 0 : user.occupation_id,
    occupations: occupations,
    handleChangeOccupation: handleChangeOccupation
  }), !!showInputPhoneNumber && /*#__PURE__*/_react.default.createElement(_Shared.InputPhoneNumber, {
    user: user,
    value: userPhoneNumber,
    setValue: handleChangePhoneNumber,
    handleIsValid: setIsValidPhoneNumber
  }), !isCheckout && /*#__PURE__*/_react.default.createElement(_styles2.WrapperPassword, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: !passwordSee ? 'password' : 'text',
    name: "password",
    className: "form",
    placeholder: t('FRONT_VISUALS_PASSWORD', 'Password'),
    onChange: handleChangeInput,
    ref: formMethods.register({
      required: isRequiredField('password') ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password')) : null,
      minLength: {
        value: 8,
        message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
      }
    })
  }), /*#__PURE__*/_react.default.createElement(_styles2.TogglePassword, {
    onClick: function onClick() {
      return setPasswordSee(!passwordSee);
    }
  }, !passwordSee ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Eye, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.EyeSlash, null))), isDriversPage && /*#__PURE__*/_react.default.createElement(_styles2.DriverZoneRestrictionWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, ('DRIVER_ZONE_RESTRICTION', 'Driver Zone Restriccion')), /*#__PURE__*/_react.default.createElement(_styles.Switch, {
    defaultChecked: (_formState$changes$dr = formState === null || formState === void 0 || (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.driver_zone_restriction) !== null && _formState$changes$dr !== void 0 ? _formState$changes$dr : user === null || user === void 0 ? void 0 : user.driver_zone_restriction,
    onChange: function onChange(val) {
      return handleChangeSwtich('driver_zone_restriction', val);
    }
  })), isProfessional && /*#__PURE__*/_react.default.createElement(_styles2.CalendarWrapper, null, /*#__PURE__*/_react.default.createElement(_Shared.RangeCalendar, {
    isLeft: true,
    isSingleDate: true,
    defaultValue: (_formState$changes$bi = formState === null || formState === void 0 || (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.birthdate) !== null && _formState$changes$bi !== void 0 ? _formState$changes$bi : user === null || user === void 0 ? void 0 : user.birthdate,
    handleChangeDate: function handleChangeDate(date) {
      return handleChangeSwtich('birthdate', date);
    }
  })), !isProfessional && /*#__PURE__*/_react.default.createElement(_styles2.WrapperUserTypeSelector, null, /*#__PURE__*/_react.default.createElement(_UserTypeSelector.UserTypeSelector, {
    isPrimary: true,
    defaultUserType: (_formState$changes$le = formState === null || formState === void 0 || (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.level) !== null && _formState$changes$le !== void 0 ? _formState$changes$le : user === null || user === void 0 ? void 0 : user.level,
    handleChangeUserType: handleChangeUserType
  })), /*#__PURE__*/_react.default.createElement(_styles2.ActionsForm, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    id: "form-btn",
    color: "primary",
    borderRadius: "5px",
    type: "submit",
    disabled: formState.loading || Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0
  }, formState.loading ? t('UPDATING', 'Updating...') : t('UPDATE', 'Update')))) : /*#__PURE__*/_react.default.createElement(_styles2.SkeletonForm, null, _toConsumableArray(Array(6)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      key: i
    });
  }))), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('PROFILE', 'Profile'),
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